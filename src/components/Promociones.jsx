import '../css/Product.css'
import { useRef } from 'react'
import { Arrows } from './Arrows';
import { ProductCard } from './ProductCard';

export const Promociones = ({titulo}) => {
    const scrollable = useRef();

    return (
        <section className="categorias">
            <header>
                <h2>{titulo}</h2> 
            </header>
            <div className='carousel'>
                <Arrows scrollable={scrollable}/>
                <ul ref={scrollable}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ul>
            </div>
        </section>
    )
}