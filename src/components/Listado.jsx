import './prod.css'
import '../css/Filtros.css'

import { ProductCard } from './ProductCard'
import { Link, useParams } from 'react-router-dom'
import { Features } from './Features'
import { Breadcumb } from "./Breadcumb.jsx"
import { Paginator } from "./Paginator.jsx"
import { Filtros } from "./Filtros.jsx"
import { useContext, useEffect, useState } from 'react'
import { useData } from '../hook/useData'
import { EmptyState } from './EmptyState.jsx'
import { FilterContext } from '../context/Filter.jsx'

export const Listado = ({isInHome}) => {
    const [ productsQty, setProductsQty ] = useState(20)
    const [ currentPage, setCurrentPage] = useState(1)
    const [ products, setProducts] = useState([])
    const [ selectValue, setSelectValue ] = useState("")
    
    const { categoria } = useParams()
    const { getDatos, getDatosByCategoria, getFiltros } = useData()
    const { query } = useContext(FilterContext)

    const listarDatos = async () => {
        const datos = await getDatos('productos')
        
        return datos
    }

    const getCategoria = async () => {
        const datos = await getDatosByCategoria(categoria)

        if(!datos || datos.length == 0) { return; }

        return datos
    }

    const getDataFiltros = async (filtros, opciones) => {
        const datos = await getFiltros(filtros, opciones)

        if(!datos || datos.length == 0) { return; }

        return datos
    }

    const filters = async () => {
        // TIENDA SIN FILTROS ---------------------------------------

        const productos = await listarDatos()

        const datos_categoria = await getCategoria()
        
        if(!categoria && !query && !selectValue) {
            console.log("hola", categoria, productos)
            setProducts(productos)
            return
        }
                
        if(isInHome) { return }
        
        // SELECT --------------------------------------------------

        if(selectValue) {
            console.log("select")
            setProducts(filterBySelect(productos))
            return
        }

        // CATEGORIAS ----------------------------------------------

        if(categoria && !datos_categoria && !query) {
            const empty = []
            setProducts(empty)
            console.log("entra", products)
            return
        }

        const newProducts = productos.filter(row => row.categorias == datos_categoria._id)
        setProducts(newProducts)

        // QUERY ---------------------------------------------------

        if(!query) return (console.log("ENTRE ACAC=????"))
            
        if(!categoria && query) {
            setProducts(productos)
        }

        const newQuery = query.split('~')
        const newList = []
        const filtros = []
        newQuery.forEach(row => newList.push(row.split('-')))

        newList.forEach((row) => {
            filtros.push(row[0])
        })

        newList.forEach((row) => {
            row.shift()
        })

        const dbFiltros = await getDataFiltros(filtros, newList)
        console.log(dbFiltros)

        // console.log(newQuery, newList, filtros)
    }

    const filterBySelect = (productos) => {
        if(!selectValue) { return }

        if(selectValue == "mayor") {
            const filterProducts = productos.sort((a ,b) => b.precio - a.precio)
            console.log(filterProducts)
            return filterProducts
        }

        if(selectValue == "menor") {
            const filterProducts = productos.sort((a ,b) => a.precio - b.precio)
            console.log(filterProducts)
            return filterProducts
        }

        if(selectValue == "nombre") {
            const filterProducts = productos.sort((a ,b) => a.nombre.localeCompare(b.nombre))

            return filterProducts
        }

    }

    useEffect(() => {
        filters()
    }, [categoria, query, selectValue])

    const indexFin = currentPage * productsQty
    const indexIni = indexFin - productsQty

    const nProducts = products.length > 0 ? products.slice(indexIni, indexFin) : []
    const nPages = products.length > 0 ? Math.ceil(products.length / productsQty) : 0

    return (
        <>
            {!isInHome ? (
                <>
                    <Breadcumb titulo={"Tienda"} breadcumb={"Home > Tienda"}/>
                    <Filtros setSelectValue={setSelectValue}/>
                </>
            ) : null}
            <section id="listado">
                {(isInHome && nProducts.length > 0) || !isInHome ? 
                    nProducts.length > 0 ?
                        <ul>
                            {nProducts.map(item => (
                                <ProductCard key={item._id} item={item} />
                            ))}
                        </ul>
                        : <EmptyState texto={"No hay productos disponibles"} />
                    : null
                }
            </section>
            {nProducts.length > 0 ? 
                !isInHome ? (
                    <Paginator setCurrentPage={setCurrentPage} currentPage={currentPage} nPages={nPages}/>
                ) : (
                    <footer className='paginator'>
                        <div className='btn-carrito'>
                            <Link to="/tienda">Ver más</Link>
                        </div>
                    </footer>
                ) : null
            }
            <Features />
        </>
    )
}