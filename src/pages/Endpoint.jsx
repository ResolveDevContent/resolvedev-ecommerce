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
            </article>
            <aside>
                <CartDetails />
            </aside>
        </section>
    )
}