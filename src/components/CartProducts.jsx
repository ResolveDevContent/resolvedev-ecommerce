import { Plus, Minus, Trash } from "../icons/Icons"
import Prod from '../images/prod.jpg'
import { fmtImporte } from "../utils/site";
import { useCart } from 'resolvedev-cart'

export const CartProducts = ({products}) => {
    const { updateQuantity, removeFromCart } = useCart()

    if(!products || products.length == 0) {
      console.log("qwd")  
      return
    }
    
    const columns = Object.keys(products[0]).slice(1,3);
        
    const rows = products.map((data, idx) => {
        return {datos: Object.values(data).slice(1,3), id: idx}
    })

    console.log(products, columns, rows)

    return (
        <div className="table">
            <ul className='row columns'>
                <li></li>
                {columns.map((product, index) => (
                    <li key={index}>
                        <span>{product}</span>
                    </li> 
                ))}
                <li>
                    <span>Cantidad</span>
                </li>
                <li>
                    <span>Subtotal</span>
                </li>
            </ul>
            {rows.map((row, index) => (
                <>
                
                    <ul className='row' key={index}>
                        <li className='product-img'>
                            <img src={Prod} alt='product-img' />
                        </li>
                        {row.datos.map((product, idx) => (
                            <li key={idx}>
                                {row.datos[idx] == products[row.id].precio ? <em>$ {fmtImporte(product)}</em> : <span>{product}</span>}
                            </li> 
                        ))}
                        <li>
                            <div className='input'>
                                <button onClick={(e) => { updateQuantity(products[row.id], Number(products[row.id].piezas * -1), true)} }>
                                    <Minus />
                                </button>
                                <input type="number" defaultValue={products[row.id].quantity} value={products[row.id].quantity}
                                    onChange={(e) => { updateQuantity(products[row.id], e.target.value, false)} }
                                />
                                <button onClick={(e) => { updateQuantity(products[row.id], Number(products[row.id].piezas), true)} }>
                                    <Plus />   
                                </button>
                            </div>
                        </li>
                        <li>
                            <span>$ {fmtImporte(products[row.id].precio * products[row.id].quantity)}</span>
                        </li>
                    </ul>
                    <div className="btn-carrito">
                        <a href="#" onClick={(e) => { removeFromCart(products[row.id]) }}>
                            <Trash />
                        </a>
                    </div>
                </>
            ))}
        </div>
    )
}