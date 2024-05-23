import '../css/Cart.css'
import { Breadcumb } from "../components/Breadcumb"
import { CartDetails } from '../components/CartDetails'
import { CartProducts } from '../components/CartProducts'
import { CartFeatures } from '../components/CartFeatures'
import { useEffect, useState } from 'react'
import { EmptyState } from '../components/EmptyState'
import { useCart } from 'resolvedev-cart'

export const Cart = () => {
    const { cart } = useCart()
    const [ data, setData ] = useState({
        products: cart
    })

    const handleChange = e => {
        const { value, name } = e.target

        setData({
            ...data,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    useEffect(() => {
        setData({
            ...data,
            products: cart
        })
    }, [cart])

    return (
        <>
            <Breadcumb titulo={"Carrito"} breadcumb={"Home > Carrito"}/>
            <section className="cart">
                {cart && cart.length > 0 ? 
                    <>
                        <article>
                            <CartProducts products={cart}/>
                            <CartFeatures titulo={"Formas de pago"} id={"pay"}>
                                <ul>
                                    <li>
                                        <input type="radio" name="pay" id="pay-efectivo" value="efectivo" onChange={handleChange}/>
                                        <label htmlFor="pay-efectivo">Efectivo</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="pay" id="pay-mp" value="mercadopago" onChange={handleChange}/>
                                        <label htmlFor="pay-mp">Mercado Pago</label>
                                    </li>
                                </ul>
                            </CartFeatures>
                            <CartFeatures titulo={"Formas de envío"} id={"shipping"}>
                                <ul>
                                    <li>
                                        <input type="radio" name="shipping" id="shipping-sucursal" value="sucursal:1000" onChange={handleChange}/>
                                        <label htmlFor="shipping-sucursal">A sucursal</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="shipping" id="shipping-domicilio" value="domicilio:2000" onChange={handleChange}/>
                                        <label htmlFor="shipping-domicilio">A domicilio</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="shipping" id="shipping-local" value="local:0" onChange={handleChange}/>
                                        <label htmlFor="shipping-local">Retirar en local</label>
                                    </li>
                                </ul>
                            </CartFeatures>
                            <CartFeatures titulo={"Información de contacto"} id={"info"}>
                                <ul className='info-contacto'>
                                    <li>
                                        <div className='input'>
                                            <label>Nombre y apellido</label>
                                            <input type="text" placeholder='Nombre' name='nombre_apellido' onChange={handleChange}/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='input'>
                                            <label>Domicilio</label>
                                            <input type="text" placeholder='Domicilio' name='domicilio' onChange={handleChange}/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='input'>
                                            <label>Celular</label>
                                            <input type="text" placeholder='Número de teléfono' name='telefono' onChange={handleChange}/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='input'>
                                            <label>Ciudad</label>
                                            <input type="text" placeholder='Buenos Aires' name='ciudad' onChange={handleChange}/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='input'>
                                            <label>Codigo postal</label>
                                            <input type="text" placeholder='XXXX' name='cp' onChange={handleChange}/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='input'>
                                            <label>Email</label>
                                            <input type="email" placeholder='Email' name='email' onChange={handleChange}/>
                                        </div>
                                    </li>
                                </ul>
                            </CartFeatures>
                        </article>
                        <aside>
                            <CartDetails datos={data}>
                                <a className="disabled" href="#" onClick={(e) => handleSubmit(e)}>Pagar</a>
                            </CartDetails>
                        </aside>    
                    </>
                    : <EmptyState texto={"No hay productos agregados al carrito"} 
                        btn='Explorar productos' 
                        path='/tienda'/>
                }
            </section>
        </>
    )
}