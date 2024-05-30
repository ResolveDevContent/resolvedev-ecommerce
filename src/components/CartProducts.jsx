import { Plus, Minus, Trash } from "../icons/Icons"
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
            {products.map((row) => (
                <>
                    <ul className='row' key={row._id}>
                        <li className='product-img'>
                            <span className='loader'></span>
                            <img src={row?.imagenes[0]} alt='' />
                        </li>
                        <li>
                            <em>{row.nombre}</em>
                        </li>
                        <li>
                            <em>{fmtImporte(row.precio)}</em>
                        </li>
                        <li>
                            <div className='input'>
                                <button onClick={(e) => {updateQuantity(row.id, Number(row.piezas * -1), true)} }>
                                    <Minus />
                                </button>
                                <input type="number" defaultValue={row.quantity} value={row.quantity}
                                    onChange={(e) => { updateQuantity(row.id, e.target.value, false)} }
                                />
                                <button onClick={(e) => { updateQuantity(row.id, Number(row.piezas), true)} }>
                                    <Plus />   
                                </button>
                            </div>
                        </li>
                        <li>
                            <span>{fmtImporte(row.precio * row.quantity)}</span>
                        </li>
                    </ul>
                    <div className="btn-carrito">
                        <a href="#" onClick={(e) => { 
                            e.preventDefault()
                            removeFromCart(row.id) 
                            }}>
                            <Trash />
                        </a>
                    </div>
                </>
            ))}
        </div>
    )
}