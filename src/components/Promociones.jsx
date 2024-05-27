import '../css/Product.css'
import { useRef } from 'react'
import { Arrows } from './Arrows';
import { ProductCard } from './ProductCard';

export const Promociones = ({titulo, list}) => {
    const scrollable = useRef();

    return (
        <section className="categorias">
            <header>
                <h2>{titulo}</h2> 
            </header>
            <div className='carousel'>
                <Arrows scrollable={scrollable}/>
                <ul ref={scrollable}>
                    {list.map(item => {
                        return(
                            <ProductCard key={item._id} item={item}/>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}