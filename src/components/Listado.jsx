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
    
    const { categoria } = useParams()
    const { getDatos, getDatosByCategoria } = useData()
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

    const filters = async () => {
        // TIENDA SIN FILTROS ---------------------------------------

        const productos = await listarDatos()

        if(isInHome) { return }
        
        const datos_categoria = await getCategoria()

        if(!categoria && !query) {
            console.log("hola", categoria, productos)
            setProducts(productos)
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
        newQuery.forEach(row => newList.push(row.split('-')))
        newList.forEach(row => row.shift())

        console.log(newQuery, newList)
    }

    useEffect(() => {
        filters()
    }, [categoria, query])

    const indexFin = currentPage * productsQty
    const indexIni = indexFin - productsQty

    const nProducts = products.length > 0 ? products.slice(indexIni, indexFin) : []
    const nPages = products.length > 0 ? Math.ceil(products.length / productsQty) : 0

    return (
        <>
            {!isInHome ? (
                <>
                    <Breadcumb titulo={"Tienda"} breadcumb={"Home > Tienda"}/>
                    <Filtros/>
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