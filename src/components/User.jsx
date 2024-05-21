import '../css/User.css'
import { Exit } from '../icons/Icons'
import Prod  from '../images/prod.jpg'
import UserImg  from '../images/user.png'
import { Link } from 'react-router-dom'
import { CartFeatures } from './CartFeatures'
import { useEffect } from 'react'

export const User = () => {
    useEffect(() => {
        scrollTo(0,0)
    }, [])

    return (
        <section id="user">
            <aside>
                <header>
                    <img src={UserImg} alt="" />
                    <div>
                        <em>Nombre Usuario</em>
                        <button>
                            <Exit />
                        </button>
                    </div>
                </header>
                <div>
                    <ul>
                        <li>
                            <label htmlFor="datos">Usuario</label>
                        </li>
                        <li>
                            <label htmlFor="pedidos">Pedidos</label>
                        </li>
                    </ul>
                </div>
            </aside>
            <article>
                <ul>
                    <li>
                        <input type="radio" name="usuario" id="datos" defaultChecked={true}/>
                        <section className='datos-personales'>
                            <form>
                                <div>
                                    <CartFeatures titulo={"Domicilio"} id={"domicilio"} checked={true}>
                                        <ul>
                                            <li>
                                                <div className='input'>
                                                    <label>Pais</label>
                                                    <input type="text" placeholder='Argentina'/>
                                                </div>    
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Provincia</label>
                                                    <input type="text" placeholder='Buenos Aires'/>
                                                </div> 
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Ciudad</label>
                                                    <input type="text" placeholder='Caballito'/>
                                                </div>    
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Codigo Postal</label>
                                                    <input type="text" placeholder='1234'/>
                                                </div>    
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Calle</label>
                                                    <input type="text" placeholder='Alberdi'/>
                                                </div>    
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Numero</label>
                                                    <input type="number" placeholder='536'/>
                                                </div>    
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Depto.</label>
                                                    <input type="text" placeholder='Numero 3b'/>
                                                </div>    
                                            </li>
                                        </ul>
                                    </CartFeatures>
                                </div>
                                <div>
                                    <CartFeatures titulo={"Datos Personales"} id={"datos"} checked={false}>
                                        <ul>
                                            <li>
                                                <div className='input'>
                                                    <label>Email</label>
                                                    <input type="email" placeholder='Abc@email.com'/>
                                                </div>    
                                            </li>  
                                            <li>
                                                <div className='input'>
                                                    <label>Contraseña</label>
                                                    <input type="password" placeholder='***'/>
                                                </div>    
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Telefono</label>
                                                    <input type="number" placeholder='123456'/>
                                                </div>    
                                            </li>  
                                            <li>
                                                <div className='input'>
                                                    <label>Caracteristica</label>
                                                    <input type="number" placeholder='1223'/>
                                                </div>    
                                            </li>        
                                        </ul>    
                                    </CartFeatures>
                                </div>
                            </form>
                        </section>    
                    </li>
                    <li>
                        <input type="radio" name="usuario" id="pedidos" defaultChecked={false}/>
                        <section className='pedidos'>
                            <header>
                                <ul>
                                    <li>Producto</li>
                                    <li>C&oacute;d. Pedido</li>
                                    <li>Total</li>
                                    <li>Ver m&aacute;s</li>
                                </ul>
                            </header>
                            <ul>
                                <li>
                                    <img src={Prod} alt="" />
                                    <span>124356789</span>
                                    <em>$1.200.500</em>
                                    <div className='btn-carrito'>
                                        <Link to={'/endpoint'}>Ver</Link>
                                    </div>
                                </li>
                                <li>
                                    <img src={Prod} alt="" />
                                    <span>124356789</span>
                                    <em>$1.200.500</em>
                                    <div className='btn-carrito'>
                                        <Link to={'/endpoint'}>Ver</Link>
                                    </div>
                                </li>
                            </ul>
                        </section>    
                    </li>
                </ul>
            </article>
        </section>
    )
}