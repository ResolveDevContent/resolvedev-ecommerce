import { Link } from 'react-router-dom'
import { useCart } from 'resolvedev-cart'

export const ProductCard = ({images, nombre, categorias, precio, descuento}) => {
    const { addToCart, removeFromCart } = useCart()

    console.log(images, nombre, categorias, precio, descuento)

    return (
        <li className="producto">
            <article data-discount={descuento}>
                <Link to="/producto" >
                    <span className='loader'></span>
                    <ul className='imagenes'>
                        {images.map(img => (
                            <li>
                                <img src={img} alt="" />
                            </li>
                        ))}
                    </ul>
                </Link>
            </article>
            <footer>
                <strong>{nombre}</strong>
                <span>{categorias[0]}</span>
                <div className='price'>
                    <del className="without-discount">$calcular</del>
                    <em>${precio}</em>
                </div>
                <div className='btn-carrito'>
                    <button 
                        onClick={() => {
                            false ? removeFromCart(item)
                                : addToCart(item)
                                }}>
                            { 
                                false 
                                    ? "Eliminar del carrito"
                                    :  "Añadir al carrito" 
                            }
                    </button>
                </div>
            </footer>
        </li>
    )
}