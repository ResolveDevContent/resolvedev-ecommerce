import '../css/Navbar.css'
import { User, Search, Favorite, Cart, Menu, Close } from '../icons/Icons'
import { Link } from 'resolvedev-router'

export const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <div className='logo'>
                        <Link to="/">Logo</Link>
                    </div>
                    <ul className='navbar-items'>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/tienda">Tienda</Link>
                        </li>
                        <li>
                            <Link to="/nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    <div className='buttons'>
                        <ul>
                            <li>
                                <Search />
                            </li>
                            <li>
                                <User />
                            </li>
                            <li>
                                <Favorite />
                            </li>
                            <li>
                                <Cart />
                            </li>
                        </ul>
                    </div>
                </ul>

                {/* <div className="navbar-responsive">
                    <label for="menu">
                        <Menu />
                    </label>
                    <input type="checkbox" name="menu-responsive" id="menu" />
                    <article className="popup">
                        <label className="background" for="menu"></label>
                        <ul>
                            <li className="menu-close">
                                <em>Men&uacute;</em>
                                <label for="menu">
                                    <Close />
                                </label>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Inicio</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Tienda</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Nosotros</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Contacto</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Contacto</span>
                                </a>
                            </li>
                        </ul>
                    </article>
                </div> */}
            </nav>
        </header>
    )
}