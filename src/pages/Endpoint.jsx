import '../css/Endpoint.css'
import '../css/Cart.css'
import { CartProducts } from '../components/CartProducts'
import { CartDetails } from '../components/CartDetails'
import { CartFeatures } from '../components/CartFeatures'

export const Endpoint = () => {
    const products = {
        columns: ["Producto", "Precio", "Cantidad", "Subtotal"],
        rows: ["Nombre", "$2.000.000", "1", "$2.000.000"]
    }

    return (
        <section className='endpoint'>
            <article>
                <CartProducts products={products}/>
                <CartFeatures titulo={"Forma de pago"} id={"pago"} checked={true}>
                    <header>
                        Metodo de pago: Transferencia
                    </header>
                    <ul>
                        <li>
                            <span>CUIT: <strong>2044005493</strong></span>
                        </li>
                        <li>
                            <span>Nombre y apellido: <strong>Pehuen Perez</strong></span>
                        </li>
                        <li>
                            <span>Banco: <strong>Macro</strong></span>
                        </li>
                        <li>
                            <span>CBU: <strong>0412040141404012</strong></span>
                        </li>
                    </ul>
                </CartFeatures>
                <CartFeatures titulo={"Información de contacto"} id={"info"} checked={true}>
                    <ul className='info-contacto'>
                        <li>
                            <div className='input'>
                                <label>Nombre y apellido</label>
                                <input type="text" placeholder='Nombre'/>
                            </div>
                        </li>
                        <li>
                            <div className='input'>
                                <label>Domicilio</label>
                                <input type="text" placeholder='Domicilio'/>
                            </div>
                        </li>
                        <li>
                            <div className='input'>
                                <label>Celular</label>
                                <input type="text" placeholder='Número de teléfono'/>
                            </div>
                        </li>
                        <li>
                            <div className='input'>
                                <label>Ciudad</label>
                                <input type="text" placeholder='Buenos Aires'/>
                            </div>
                        </li>
                        <li>
                            <div className='input'>
                                <label>Codigo postal</label>
                                <input type="text" placeholder='XXXX'/>
                            </div>
                        </li>
                        <li>
                            <div className='input'>
                                <label>Email</label>
                                <input type="email" placeholder='Email'/>
                            </div>
                        </li>
                    </ul>
                </CartFeatures>
                <CartFeatures titulo={"Seguimiento"} id={"seguimiento"} checked={true}>
                    <ul className='seguimiento'>
                        <li>
                            <strong>- Pago pendiente.</strong>
                        </li>
                    </ul>
                </CartFeatures>
            </article>
            <aside>
                <CartDetails />
            </aside>
        </section>
    )
}