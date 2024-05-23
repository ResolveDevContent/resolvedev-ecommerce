import '../css/Login.css'
import { Link } from 'react-router-dom'
import { useRef, useEffect, useState, useContext } from 'react'
import { Google, Facebook } from '../icons/Icons'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/Auth'
import { LoginAuth, RegisterAuth } from '../hook/useAuth' 

export const Login = () => {
    const [dataLogin, setDataLogin] = useState({})
    const [error, setError] = useState('')
    
    const navigate = useNavigate()
    const { auth, setAuth } = useContext(AuthContext)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setDataLogin({
            ...dataLogin,
            [name]: value,
        })
    }

    const handleSubmit = (e, type) => {
        e.preventDefault()

        if(Object.values(dataLogin).length <= 1) {
            setError("Complete todos los datos")
            setTimeout(() => {
                setError('')
            },3000)
            return;
        }

        if(type === "login") {
            LoginAuth(dataLogin, setAuth, setError)
            setTimeout(() => {
                setError('')
            },6000)
            return;
        }

        RegisterAuth(dataLogin, setAuth, setError)
        
        setTimeout(() => {
            setError('')
        },6000)

    }

    const container = useRef()

    const handleCreate = () => {
        container.current.classList.remove("right-active")
    }
    
    const handleLogin = () => {
        container.current.classList.add("right-active")
    }

    useEffect(() => {
        if(auth) {
            navigate("/")
        }
    }, [auth])

    return (
        <section id="login">
            <div className='container' ref={container}>
                <div className="registerForm">
                    <form>
                        <h1>Register</h1>
                        <div className='socials'>
                            <Link>
                                <Google />
                            </Link>
                            <Link>
                                <Facebook />
                            </Link>
                        </div>
                        <span>Please complete all fields below</span>
                        <div className="input">
                            <label>Name</label>
                            <input type="text" placeholder="Abc"
                                name="name" onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <label>Email</label>
                            <input type="email" placeholder="abc@email.com"
                                name="email" onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <label>Password</label>
                            <input type="password" placeholder="***"
                                name="password" onChange={handleChange}
                            />
                        </div>
                        <button onClick={(e) => handleSubmit(e, "register")}>Create</button>
                    </form>
                </div>
                <div className="loginForm">
                    <form>
                        <h1>Login</h1>
                        <div className='socials'>
                            <Link>
                                <Google />
                            </Link>
                            <Link>
                                <Facebook />
                            </Link>
                        </div>
                        <span>Please complete all fields below</span>
                        <div className="input">
                            <label>Email</label>
                            <input type="email" placeholder="abc@email.com"
                                name="email" onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <label>Password</label>
                            <input type="password" placeholder="***"
                                name="password" onChange={handleChange}
                            />
                        </div>
                        <Link>Did you forget your password? 
                            <br/>
                            <span style={{color: "#B88E2F", fontWeight: "600"}}> Click here</span>
                        </Link>
                        <button onClick={(e) => handleSubmit(e, "login")}>Login</button>
                    </form>
                </div>
                <div className='overlay-container'>
                    <div className='overlay'>
                        <div className='overlay-left'>
                            <em>Create you new account</em>
                            <p>Create your account to enjoy the entire experience on this website!</p>
                            <button onClick={handleCreate}>Create account</button>
                        </div>
                        <div className='overlay-right'>
                            <em>Nice to see you again</em>
                            <p>Please log in to stay up to date on all the new things.</p>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}