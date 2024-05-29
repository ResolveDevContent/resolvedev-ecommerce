import { Link } from 'react-router-dom'
import { useCart } from 'resolvedev-cart'
import { Arrows } from './Arrows'
import { useRef } from 'react'

export const ProductCard = ({item}) => {
    const { addToCart, removeFromCart, cart } = useCart()
    const { _id, imagenes, nombre, caracteristicas, fmt_modified_price, fmt_precio, descuento, carrito } = item
    const inCart = cart.some(prod => prod._id == item._id)
    const scrollable = useRef();

    return (
        <li className="producto" data-id={_id}>
            <article data-discount={descuento}>
                <Link to={`/producto/${_id}`} >
                    <Arrows scrollable={scrollable}/>
                    <span className='loader'></span>
                    <ul ref={scrollable} className='imagenes'>
                        {imagenes.map((img, idx) => (
                            <li key={idx}>
                                <img src={img} alt="" />
                            </li>
                        ))}
                    </ul>
                </Link>
            </article>
            <footer>
                <strong>{nombre}</strong>
                <span>{caracteristicas[0]}</span>
                <div className='price'>
                    <del>{fmt_modified_price}</del>
                    <em>${fmt_precio}</em>
                </div>
                <div className='btn-carrito'>
                    <button className={inCart ? "in-cart" : null}
                        onClick={() => {
                            carrito 
                                ? inCart 
                                    ? removeFromCart(item)
                                    : addToCart(item)
                                : console.log("consultar") 
                                }}>
                            {carrito 
                                ? inCart 
                                    ? "Eliminar del carrito"
                                    :  "Añadir al carrito"
                                : "Consultar"
                            }
                    </button>
                </div>
            </footer>
        </li>
    )
}