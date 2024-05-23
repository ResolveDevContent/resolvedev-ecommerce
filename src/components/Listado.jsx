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
    const [ data, setData] = useState([])

    const { categoria, subcategoria } = useParams()
    const { dataByCategoria, getDatos, getDatosByCategoria } = useData()
    const { query } = useContext(FilterContext)

    const listarDatos = async () => {
        const datos = await getDatos('productos')
        setData(datos)

        if(categoria) {
            getDatosByCategoria('productos', categoria)
        }
        // if(categoria && subcategoria) {
        //     getDatosByCategoria('productos', categoria, subcategoria)
        // }
    }

    useEffect(() => {
        listarDatos()
    }, [categoria])
    
    const indexFin = currentPage * productsQty
    const indexIni = indexFin - productsQty
    
    const nProducts = dataByCategoria.length > 0 ? dataByCategoria.slice(indexIni, indexFin) : data.slice(indexIni, indexFin)
    const nPages = dataByCategoria.length > 0 ? Math.ceil(dataByCategoria.length / productsQty) : Math.ceil(data.length / productsQty)

    console.log('QUERY', query)

    return (
        <>
            {!isInHome ? (
                <>
                    <Breadcumb titulo={"Tienda"} breadcumb={"Home > Tienda"}/>
                    <Filtros/>
                </>
            ) : null}
            <section id="listado">
                {(isInHome && data.length > 0) || !isInHome ?
                    data.length > 0 ?
                        dataByCategoria.length > 0 ? 
                        <ul>
                            {dataByCategoria.map(item => (
                                <ProductCard key={item._id} item={item} />
                            ))}
                        </ul> 
                        : !isInHome ? <ul>
                            {nProducts.map(item => (
                                <ProductCard key={item._id} item={item} />
                            ))}
                         </ul> : <ul>
                            {data.map(item => (
                                <ProductCard key={item._id} item={item} />
                            ))}
                         </ul>
                    : <EmptyState texto={"No hay productos disponibles"} />
                : null}
            </section>
            {data.length > 0 ? 
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