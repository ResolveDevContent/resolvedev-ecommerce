import '../css/Cart.css'
import { Breadcumb } from "../components/Breadcumb"
import { CartDetails } from '../components/CartDetails'
import { CartProducts } from '../components/CartProducts'
import { CartFeatures } from '../components/CartFeatures'
import { useEffect, useState } from 'react'
import { EmptyState } from '../components/EmptyState'
import { useCart } from 'resolvedev-cart'
import { Link } from 'react-router-dom'
import { useData } from '../hook/useData'

export const Cart = () => {
    const { cart } = useCart()
    const { getDatos } = useData()
    const [ data, setData ] = useState({
        products: cart
    })
    const [ envios, setEnvios ] = useState([ ])

    const listarDatos = async () => {
        const datos = await getDatos('envios')

        setEnvios(datos)
    }

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
        listarDatos()
        setData({
            ...data,
            products: cart
        })
    }, [cart])

    let shipping = {}
    if(data.shipping) {
        shipping = envios.find(row => row.titulo == data.shipping.split('-')[0])
    }

    console.log(data, envios, shipping)

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
                                {data.pay 
                                    ? <div className='payMethod'>
                                        {data.pay == "efectivo" 
                                            ? <span>
                                                Pago en sucursal en Av. los papa. Horario lunes a viernes de 8 a 12 y de 16.00 a 20.00
                                            </span>
                                            : <div className='btn-carrito'>
                                                <Link>Mercado Pago</Link>
                                            </div>
                                        }
                                    </div>
                                    : null
                                }
                            </CartFeatures>
                            <CartFeatures titulo={"Formas de envío"} id={"shipping"}>
                                <ul>
                                    {envios.map((row, idx) => (
                                        <li key={idx}>
                                            <input type="radio" name="shipping" id={`shipping-${row.titulo}`} value={`${row.titulo}-${row.precio}`} onChange={handleChange}/>
                                            <label htmlFor={`shipping-${row.titulo}`}>{row.titulo}</label>
                                        </li>
                                    ))}
                                </ul>
                                {shipping
                                    ? <div className='payMethod'>
                                        {shipping.informacion == "Formulario" 
                                            ? <ul>
                                                <li>
                                                    <div className='input'>
                                                        <label>Calle</label>
                                                        <input type="text" placeholder='Calle' name='calle' />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='input'>
                                                        <label>Numero</label>
                                                        <input type="text" placeholder='Numero' name='numero' />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='input'>
                                                        <label>Departamento</label>
                                                        <input type="text" placeholder='Depto. (opcional)' name='departamento' />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='input'>
                                                        <label>Codigo postal</label>
                                                        <input type="text" placeholder='Codigo postal' name='codigo_postal'/>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='input'>
                                                        <label>Telefono</label>
                                                        <input type="text" placeholder='Telefono' name='telefono' />
                                                    </div>
                                                </li>
                                            </ul>
                                            : <span>{shipping.informacion}</span>
                                        }
                                    </div>
                                    : null
                                }
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