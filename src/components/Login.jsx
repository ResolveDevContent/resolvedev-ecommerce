import '../css/Login.css'
import { Link } from 'resolvedev-router'
import { useRef } from 'react'

export const Login = () => {

    const container = useRef()

    const handleCreate = () => {
        container.current.classList.remove("right-active")
    }

    const handleLogin = () => {
        container.current.classList.add("right-active")
    }

    return (
        <section id="login">
            <div className='container' ref={container}>
                <div className="registerForm">
                    <form>
                        <h1>Register</h1>
                        <div className='socials'>
                            <Link>G</Link>
                            <Link>F</Link>
                        </div>
                        <span>Please complete all fields below</span>
                        <div className="input">
                            <label>Name</label>
                            <input type="text" placeholder="Abc"/>
                        </div>
                        <div className="input">
                            <label>Email</label>
                            <input type="email" placeholder="abc@email.com"/>
                        </div>
                        <div className="input">
                            <label>Password</label>
                            <input type="password" placeholder="***"/>
                        </div>
                        <button>Create</button>
                    </form>
                </div>
                <div className="loginForm">
                    <form>
                        <h1>Login</h1>
                        <div className='socials'>
                            <Link>G</Link>
                            <Link>F</Link>
                        </div>
                        <span>Please complete all fields below</span>
                        <div className="input">
                            <label>Email</label>
                            <input type="email" placeholder="abc@email.com"/>
                        </div>
                        <div className="input">
                            <label>Password</label>
                            <input type="password" placeholder="***"/>
                        </div>
                        <Link>Did you forget your password? 
                            <br/>
                            <span style={{color: "#B88E2F", fontWeight: "600"}}> Click here</span>
                        </Link>
                        <button>Login</button>
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