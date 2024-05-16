import { Phone } from '../icons/Icons'
import Img  from '../images/Lunes.png'
import UserImg  from '../images/user.png'
import { Link } from 'resolvedev-router'
import '../css/User.css'

export const User = () => {
    return (
        <section id="user">
            <aside>
                <header>
                    <img src={UserImg} alt="" />
                    <em>Nombre Usuario</em>
                    <button>
                        <Phone />
                    </button>
                </header>
                <div>
                    <ul>
                        <li>
                            <label htmlFor="profile">Usuario</label>
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
                        <input type="radio" name="pedidos" id="pedidos" defaultChecked={true}/>
                        <section className='datos-personales'>
                            <form>
                                <div>
                                    <strong>Domicilio</strong>
                                    <ul>
                                        <li>
                                            <div className='input'>
                                                <label>Pais</label>
                                                <input type="text" />
                                            </div>    
                                        </li>
                                        <li>
                                            <div className='input'>
                                                <label>Provincia</label>
                                                <input type="text" />
                                            </div> 
                                        </li>
                                        <li>
                                            <div className='input'>
                                                <label>Ciudad</label>
                                                <input type="text" />
                                            </div>    
                                        </li>
                                        <li>
                                            <div className='input'>
                                                <label>Codigo Postal</label>
                                                <input type="text" />
                                            </div>    
                                        </li>
                                        <li>
                                            <div className='input'>
                                                <label>Calle</label>
                                                <input type="text" />
                                            </div>    
                                        </li>
                                        <li>
                                            <div className='input'>
                                                <label>Numero</label>
                                                <input type="number" />
                                            </div>    
                                        </li>
                                        <li>
                                            <div className='input'>
                                                <label>Depto.</label>
                                                <input type="text" />
                                            </div>    
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <strong>Datos personales</strong>
                                    <ul>
                                        <li>
                                            <div className='input'>
                                                <label>Contraseña</label>
                                                <input type="password" />
                                            </div>    
                                        </li>    
                                    </ul>    
                                </div>
                            </form>
                        </section>    
                    </li>
                    <li>
                        <input type="radio" name="pedidos" id="pedidos" defaultChecked={false}/>
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
                                    <img src={Img} alt="" />
                                    <div className='datos-pedido'>
                                        <span>124356789</span>
                                        <em>$1.200.500</em>
                                        <div className='btn-carrito'>
                                            <Link to={'pedido/id'}>Ver pedido</Link>
                                        </div>
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