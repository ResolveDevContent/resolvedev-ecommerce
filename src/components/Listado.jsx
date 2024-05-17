import './prod.css'

import { ProductCard } from './ProductCard'
import { Link } from 'resolvedev-router'
import { Features } from './Features'
import { Breadcumb } from "./Breadcumb.jsx"
import { Filtros } from "./Filtros.jsx"
import { Paginator } from "./Paginator.jsx"

export const Listado = ({isInHome}) => {
    return (
        <>
            {!isInHome ? (
                <>
                    <Breadcumb titulo={"Tienda"} breadcumb={"Home > Tienda"}/>
                    <Filtros />
                </>
            ) : null}
            <section id="listado">
                <ul>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ul>
            </section>
            {!isInHome ? (
                <Paginator />
            ) : (
                <footer className='paginator'>
                    <div className='btn-carrito'>
                        <Link to="/tienda">Ver más</Link>
                    </div>
                </footer>
            )}
            <Features />
        </>
    )
}