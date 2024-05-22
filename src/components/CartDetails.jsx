
export const CartDetails = ({datos, children}) => {
    console.log(datos);

    return (
        <div className='cart-details'>
            <header>
                <strong>Cart</strong>
            </header>
            <ul>
                <li>
                    <span>Producto</span>
                    <em>Subtotal</em>
                </li>
                {datos.products.map((prod) => (
                    <li key={prod._id}>
                        <span>{prod.nombre}</span>
                        <em>$ {prod.precio}</em>
                    </li>
                ))}
                <li>
                    <span>{datos.pay ? datos.pay : "Pago"}</span>
                    <em>1 pago</em>
                </li>
                <li>
                    <span>Envio</span>
                    <em>{datos.shipping} $500.000</em>
                </li>
                <li>
                    <span>Subtotal</span>
                    <em>$2.500.000</em>
                </li>
            </ul>
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
                <div className='btn-carrito'>
                    {children}
                </div>
            </footer>
        </div>
    )
}