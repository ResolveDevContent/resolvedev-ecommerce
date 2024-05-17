import { Link } from 'resolvedev-router'

export const Login = () => {
    return (
        <section id="Login">
            <div>
                <form className="loginForm">
                    <h1>Register</h1>
                    <div>
                        <Link>Google</Link>
                        <Link>Facebook</Link>
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
            <div>
                <form className="registerLogin">
                    <h1>Login</h1>
                    <div>
                        <Link>Google</Link>
                        <Link>Facebook</Link>
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
                    <Link>Did you forget your password? Click here</Link>
                    <button>Login</button>
                </form>
            </div>
            <div>
                <div className="Container">
                    <div>
                        <h1>Create you new account</h1>
                        <p>Create your account to enjoy the entire experience on this website!</p>
                        <button>Create account</button>
                    </div>
                    <div>
                        <h1>Nice to see you again</h1>
                        <p>Please log in to stay up to date on all the new things.</p>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </section>
    )
}