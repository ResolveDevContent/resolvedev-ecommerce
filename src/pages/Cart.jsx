import '../css/Cart.css'
import { Breadcumb } from "../components/Breadcumb"
import { CartDetails } from '../components/CartDetails'
import { CartProducts } from '../components/CartProducts'
import { CartFeatures } from '../components/CartFeatures'

export const Cart = () => {
    return (
        <>
            <Breadcumb titulo={"Tienda"} breadcumb={"Home > Carrito"}/>
            <section className="cart">
                <article>
                    <CartProducts />
                    <CartFeatures titulo={"Formas de pago"} id={"pay"}>
                        <ul>
                            <li>
                                <input type="radio" name="pay" id="pay-efectivo" />
                                <label htmlFor="pay-efectivo">Efectivo</label>
                            </li>
                            <li>
                                <input type="radio" name="pay" id="pay-mp" />
                                <label htmlFor="pay-mp">Mercado Pago</label>
                            </li>
                        </ul>
                    </CartFeatures>
                    <CartFeatures titulo={"Formas de envío"} id={"shipping"}>
                        <ul>
                            <li>
                                <input type="radio" name="shipping" id="shipping-sucursal" />
                                <label htmlFor="shipping-sucursal">A sucursal</label>
                            </li>
                            <li>
                                <input type="radio" name="shipping" id="shipping-domicilio" />
                                <label htmlFor="shipping-domicilio">A domicilio</label>
                            </li>
                            <li>
                                <input type="radio" name="shipping" id="shipping-local" />
                                <label htmlFor="shipping-local">Retirar en local</label>
                            </li>
                        </ul>
                    </CartFeatures>
                    <CartFeatures titulo={"Información de contacto"} id={"info"}>
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
        </>
    )
}