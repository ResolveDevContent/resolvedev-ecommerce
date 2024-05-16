import './prod.css'
import { Breadcumb } from './Breadcumb'
import { Filtros } from './Filtros'
import { Paginator } from './Paginator'
import { ProductCard } from './ProductCard'

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
                        <Link to="/tienda" className="btn-carrito">Ver más</Link>
                    </div>
                </footer>
            )}
        </>
    )
}