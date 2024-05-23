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
    const [ data, setData ] = useState([])
    const [ dataCategoria, setDataCategoria ] = useState([])
    const [ products, setProducts] = useState([])
    
    const { categoria } = useParams()
    const { getDatos, getDatosByCategoria } = useData()
    const { query } = useContext(FilterContext)

    const listarDatos = async () => {
        const datos = await getDatos('productos')
        setData(datos)
        setProducts(datos)
    }

    const getCategoria = async () => {
        const datos = await getDatosByCategoria(categoria)
        setDataCategoria(datos)
    }

    useEffect(() => {
        listarDatos()
    }, [])

    useEffect(() => {
        console.log(categoria)
        if(!categoria) {
            setProducts(data)
            return
        }

        getCategoria()
        if(categoria && !dataCategoria) {
            const empty = []            
            setProducts(empty)
            return
        }

        const newProducts = data.filter(row => row.categorias == dataCategoria._id)
        setProducts(newProducts)
    }, [categoria])

    useEffect(() => {
        if(!query) return
        
        const newQuery = query.split('~')
        const newList = []
        newQuery.forEach(row => newList.push(row.split('-')))
        newList.forEach(row => row.shift())
    }, [query])
    
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