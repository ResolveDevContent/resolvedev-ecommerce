import './prod.css'
import '../css/Filtros.css'

import { ProductCard } from './ProductCard'
import { Link } from 'react-router-dom'
import { Features } from './Features'
import { Breadcumb } from "./Breadcumb.jsx"
import { Paginator } from "./Paginator.jsx"
import { Filtros } from "./Filtros.jsx"
import { useContext, useEffect } from 'react'
import { useData } from '../hook/useData'
import { EmptyState } from './EmptyState.jsx'
import { FilterContext } from '../context/Filter.jsx'

export const Listado = ({isInHome}) => {
    const { data, getDatos } = useData()
    const { query } = useContext(FilterContext)

    const listarDatos = () => {
        getDatos('productos')
    }

    useEffect(() => {
        listarDatos()
    }, [])

    console.log('QUERY', query)

    return (
        <>
            {!isInHome ? (
                <>
                    <Breadcumb titulo={"Tienda"} breadcumb={"Home > Tienda"}/>
                    <Filtros/>
                </>
            ) : null}
            {(isInHome && data.length > 0) || !isInHome ?
                data.length > 0 ? 
                    <section id="listado">
                        <ul>
                            {data.map(item => (
                                <ProductCard key={item._id} item={item} />
                            ))}
                        </ul>
                    </section>
                    :  <EmptyState texto={"No hay productos disponibles"} />
                : null
            }
            {data.length > 0 ? 
                !isInHome ? (
                    <Paginator />
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