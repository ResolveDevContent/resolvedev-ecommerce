import { Link } from 'react-router-dom'
import { useCart } from 'resolvedev-cart'
import { fmtImporte } from '../utils/site'

export const ProductCard = ({item}) => {
    const { addToCart, removeFromCart, cart } = useCart()
    const { _id, imagenes, nombre, caracteristicas, precio, fmt_precio, descuento } = item
    const inCart = cart.some(prod => prod._id == item._id)

    let modifiedPrice = 0
    let fmt_modified_price = ''
    if(descuento > 0) {
        modifiedPrice = Number(precio) + Number((Number(precio) * (Number(descuento) / 100)).toFixed(2))
        fmt_modified_price = fmtImporte(modifiedPrice)
        fmt_modified_price = '$ ' + fmt_modified_price
    }

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
                <span>{caracteristicas[0]}</span>
                <div className='price'>
                    <del>{fmt_modified_price}</del>
                    <em>${fmt_precio}</em>
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