import '../css/Navbar.css'
import { User, Search, Favorite, Cart, Menu, Close, Home, Group, Shop, Contact } from '../icons/Icons'
import { NavLink } from './NavLink'
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
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tienda">Tienda</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros">Nosotros</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto">Contacto</NavLink>
                        </li>
                    </ul>
                    <div className='buttons'>
                        <ul>
                            <li className='search'>
                                <label htmlFor="search">
                                    <Search />
                                </label>
                                <input type="checkbox" id='search' name='search-input'/>
                                <div className='input'>
                                    <input type="text" placeholder='Buscar...'/>
                                    <label htmlFor="search">
                                        <Close />
                                    </label>
                                </div>
                            </li>
                            <li>
                                <Link to={'/usuario'}>
                                    <User />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/favorito'}>
                                    <Favorite />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/carrito'}>
                                    <Cart />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ul>

                <div className="navbar-responsive">
                    <label htmlFor="menu">
                        <Menu />
                    </label>
                    <input type="checkbox" name="menu-responsive" id="menu" />
                    <article className="popup">
                        <label className="background" htmlFor="menu"></label>
                        <ul>
                            <li className="menu-close">
                                <em>Men&uacute;</em>
                                <label htmlFor="menu">
                                    <Close />
                                </label>
                            </li>
                            <li>
                                <Home />
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <Shop />
                                <NavLink to="/tienda">Tienda</NavLink>
                            </li>
                            <li>
                                <Group />
                                <NavLink to="/nosotros">Nosotros</NavLink>
                            </li>
                            <li>
                                <Contact />
                                <NavLink to="/contacto">Contacto</NavLink>
                            </li>
                        </ul>
                    </article>
                </div>
            </nav>
        </header>
    )
}