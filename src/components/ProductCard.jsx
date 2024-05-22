import { Link } from 'react-router-dom'
import { useCart } from 'resolvedev-cart'

export const ProductCard = ({item}) => {
    const { addToCart, removeFromCart, cart } = useCart()
    const { _id, imagenes, nombre, categorias, precio, descuento } = item
    const inCart = cart.some(prod => prod._id == item._id)

    return (
        <li className="producto" data-id={_id}>
            <article data-discount={descuento}>
                <Link to={`/producto/${_id}`} >
                    <span className='loader'></span>
                    <ul className='imagenes'>
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
                <span>{categorias[0]}</span>
                <div className='price'>
                    <del className="without-discount">$calcular</del>
                    <em>${precio}</em>
                </div>
                <div className='btn-carrito'>
                    <button className={inCart ? "in-cart" : null}
                        onClick={() => {
                            console.log(item)
                            inCart ? removeFromCart(item)
                                : addToCart(item)
                                }}>
                            { 
                                inCart 
                                    ? "Eliminar del carrito"
                                    :  "Añadir al carrito" 
                            }
                    </button>
                </div>
            </footer>
        </li>
    )
}