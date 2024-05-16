import { Exit } from '../icons/Icons'
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
                                    <strong>Domicilio</strong>
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
                                </div>
                                <div>
                                    <strong>Datos personales</strong>
                                    <ul>
                                        <li>
                                            <div className='input'>
                                                <label>Contraseña</label>
                                                <input type="password" placeholder='***'/>
                                            </div>    
                                        </li>    
                                    </ul>    
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
                                    <img src={Img} alt="" />
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