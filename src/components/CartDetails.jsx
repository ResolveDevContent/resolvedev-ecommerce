
export const CartDetails = () => {
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
                <li>
                    <span>Nombre x 1</span>
                    <em>$2.000.000</em>
                </li>
                <li>
                    <span>Efectivo</span>
                    <em>1 pago</em>
                </li>
                <li>
                    <span>Envio</span>
                    <em>$500.000 - A domicilio</em>
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
                    <a href="#">Pagar</a>
                </div>
            </footer>
        </div>
    )
}