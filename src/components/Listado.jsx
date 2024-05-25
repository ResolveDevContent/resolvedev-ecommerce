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
    const [ editedProducts, setEditedProducts] = useState([])
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
            setEditedProducts(productos)
            return
        }
                
        if(isInHome) return
        
        // SELECT --------------------------------------------------

        if(selectValue) {
            console.log("select")
            setEditedProducts(filterBySelect(productos))
            return
        }

        // CATEGORIAS ----------------------------------------------

        if(categoria && !datos_categoria && !query) {
            const empty = []
            setEditedProducts(empty)
            console.log("entra", products)
            return
        }

        const newProducts = productos.filter(row => row.categorias == datos_categoria._id)
        setEditedProducts(newProducts)

        // QUERY ---------------------------------------------------

        if(!query) return (console.log("ENTRE ACAC=????"))
            
        if(!categoria && query) {
            setEditedProducts(productos)
        }

        const newQuery = query.split('~')
        const filtros = []
        const opciones = []

        let split = []
        newQuery.forEach(row => {
            filtros.push(row.split('-')[0])
            split.push(row.split("-"))
        })

        split.forEach(row => {
            row.shift()
        })

        split.forEach(row => {
            row.forEach(doc => {
                opciones.push(doc)
            })
        })

        const dbFiltros = await getDataFiltros(filtros, opciones)

        if(dbFiltros && dbFiltros.length > 0) {
            let flag;

            for(const filters of dbFiltros) {  
                const prodFilters = products.filter((producto) => {
                    producto.filtros.forEach((filtro) => {
                        if(filtro.filtro == filters.filtro) {
                            flag = true

                            filters.opciones.forEach((opt) => {
                                if (!filtro.opciones.includes(opt)) {
                                    flag = false
                                    return false
                                }
                            })
                        }
                    })
                    return flag
                })
                setEditedProducts(prodFilters)
            }
        }
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

    const nProducts = editedProducts.length > 0 ? editedProducts.slice(indexIni, indexFin) : []
    const nPages = editedProducts.length > 0 ? Math.ceil(editedProducts.length / productsQty) : 0

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