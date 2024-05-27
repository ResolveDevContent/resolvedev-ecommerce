import { fmtImporte } from "../utils/site";

export const CartDetails = ({datos, children}) => {
    console.log(datos, children);
    if(!datos || !children) return

    let subTotal = 0
    datos.products.map(row => {
        subTotal += Number(row.precio) * Number(row.quantity)
    })

    subTotal = datos.shipping ? subTotal + Number(datos.shipping.split(":")[1]) : subTotal

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
                        <span>Pago</span>
                        <em>{datos.pay ? datos.pay : "-"}</em>
                    </li>
                    <li>
                        <span>Envio</span>
                        <em>{datos.shipping ? datos.shipping.split(":")[0] + " " + "$ " + fmtImporte(Number(datos.shipping.split(":")[1])) : "-"}</em>
                    </li>
                    <li>
                        <span>Subtotal</span>
                        <em>${fmtImporte(subTotal)}</em>
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
                                <em>${fmtImporte(subTotal)}</em>
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