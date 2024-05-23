import '../css/User.css'
import { Exit } from '../icons/Icons'
import Prod  from '../images/prod.jpg'
import UserImg  from '../images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import { CartFeatures } from './CartFeatures'
import { useEffect, useState, useContext } from 'react'
import { LogoutAuth } from '../hook/useAuth'
import AuthContext from '../context/Auth'
import { useData } from '../hook/useData'

export const User = () => {
    const [profile, setProfile] = useState({})
    const [dataProfile, setDataProfile] = useState({})
    const [error, setError] = useState('')
 
    const { auth, setAuth } = useContext(AuthContext)
    const { getProfile, updateProfile } = useData()
    const navigate = useNavigate()
    
    const listarProfile = async () => {
        const dataProfile = await getProfile()
        setProfile(dataProfile)
    }

    const update = async (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)

        const domicilio = {
            pais: formData.get("pais"),
            direccion: formData.get("direccion"),
            provincia: formData.get("provincia"),
            localidad: formData.get("localidad"),
            codigo_postal: formData.get("codigo_postal")
        }

        formData.append("domicilio", domicilio)
        
        formData.delete("pais")
        formData.delete("direccion")
        formData.delete("provincia")
        formData.delete("localidad")
        formData.delete("codigo_postal")

        const succes = await updateProfile(profile.id, formData);
        console.log(succes)
    }

    const handleLogout = (e) => {
        e.preventDefault()

        LogoutAuth(setAuth, setError)

        setTimeout(() => {
            setError('')
        },6000)
    }

    useEffect(() => {
        if(!auth) {
            navigate("/login")
        }

        scrollTo(0,0)
        listarProfile()
        console.log(profile)
    }, [auth])

    return (
        <section id="user">
            <aside>
                <header>
                    <img src={UserImg} alt="" />
                    <div>
                        <em>Nombre Usuario</em>
                        <button onClick={handleLogout}>
                            <Exit />
                        </button>
                    </div>
                </header>
                <div>
                    <ul>
                        <li>
                            <label htmlFor="datos" className='active'>Usuario</label>
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
                            <form onSubmit={update}>
                                <div>
                                    <CartFeatures titulo={"Datos Personales"} id={"datos-personales"} checked={true}>
                                        <ul>
                                            <li>
                                                <div className='input'>
                                                    <label>Nombre</label>
                                                    <input type="text" placeholder='Nombre y apellido' defaultValue={profile.name}/>
                                                </div>    
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Email</label>
                                                    <input type="email" placeholder='Abc@email.com' defaultValue={profile.email}/>
                                                </div>    
                                            </li>  
                                            <li>
                                                <div className='input'>
                                                    <label>Telefono</label>
                                                    <input type="number" placeholder='1234123456'/>
                                                </div>    
                                            </li>        
                                        </ul>    
                                    </CartFeatures>
                                </div>
                                <div className='datos-domicilio'>
                                    <CartFeatures titulo={"Domicilio"} id={"domicilio"} >
                                        <ul>
                                            <li>
                                                <div className='input'>
                                                    <label>Pais</label>
                                                    <input type="text" placeholder='Argentina' 
                                                        name='pais'
                                                        defaultValue={profile && profile.domicilio ? profile.domicilio.pais : ""}
                                                    />
                                                </div>    
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Provincia</label>
                                                    <input type="text" placeholder='Buenos Aires' 
                                                        name='provincia'
                                                        defaultValue={profile && profile.domicilio ? profile.domicilio.provincia : ""}
                                                    />
                                                </div> 
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Ciudad</label>
                                                    <input type="text" placeholder='Caballito'
                                                        name='localidad'
                                                        defaultValue={profile && profile.domicilio ? profile.domicilio.localidad : ""}
                                                    />
                                                </div>    
                                            </li>
                                            <li> 
                                                <div className='input'>
                                                    <label>Codigo Postal</label>
                                                    <input type="text" placeholder='1234' 
                                                        name='codigo_postal'
                                                        defaultValue={profile && profile.domicilio ? profile.domicilio.codigo_postal : ""}
                                                    />
                                                </div>    
                                            </li>
                                            <li>
                                                <div className='input'>
                                                    <label>Calle</label>
                                                    <input type="text" placeholder='Alberdi' 
                                                        name='direccion'
                                                        defaultValue={profile && profile.domicilio ? profile.domicilio.direccion : ""}
                                                    />
                                                </div>    
                                            </li>
                                        </ul>
                                        <footer>
                                            <div className='btn-carrito'>
                                                <button type='submit'>Actualizar</button>
                                            </div>   
                                        </footer>
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
                                    <li>Estado</li>
                                    <li>Total</li>
                                    <li>Ver m&aacute;s</li>
                                </ul>
                            </header>
                            <ul>
                                <li>
                                    <img src={Prod} alt="" />
                                    <span>Pendiente de pago</span>
                                    <em>$1.200.500,00</em>
                                    <div className='btn-carrito'>
                                        <Link to={'/endpoint'}>Ver</Link>
                                    </div>
                                </li>
                                <li>
                                    <img src={Prod} alt="" />
                                    <span style={{backgroundColor: "#0000ff50"}}>Envio</span>
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