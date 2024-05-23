import { fmtImporte } from "../utils/site";

export const CartDetails = ({datos, children}) => {
    console.log(datos, children);

    if(!datos || !children) return

    return (
        <div className='cart-details'>
            <header>
                <strong>Cart</strong>
            </header>
            <article>
                <ul>
                    <li>
                        <span>Producto</span>
                        <em>Subtotal</em>
                    </li>
                    {datos.products.map((prod) => (
                        <li key={prod._id}>
                            <span>{prod.nombre}<strong>{" x" + prod.quantity}</strong></span>
                            <em>$ {fmtImporte(prod.precio * prod.quantity)}</em>
                        </li>
                    ))}
                    <li>
                        <span>{datos.pay ? datos.pay : "Pago"}</span>
                        <em>1 pago</em>
                    </li>
                    <li>
                        <span>Envio</span>
                        <em>{datos.shipping ? datos.shipping.split(":")[0] + " " + "$ " + fmtImporte(datos.shipping.split(":")[1]) : "$500"}</em>
                    </li>
                    <li>
                        <span>Subtotal</span>
                        <em>$2.500.000</em>
                    </li>
                </ul>
                <div>
                    <div className="input">
                        <input type="text" placeholder="CUPON DE DESCUENTO"/>
                        <label>CUPON DE DESCUENTO</label>
                    </div>
                    <footer>
                        <ul>
                            <li>
                                <span>Total</span>
                                <em>$1.950.000</em>
                            </li>
                        </ul>
                        <div className='btn-carrito disabled'>
                            {children}
                        </div>
                    </footer>
                </div>
            </article>
        </div>
    )
}