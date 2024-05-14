import '../css/Navbar.css'
import { User, Search, Favorite, Cart, Menu } from '../icons/Icons'

export const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <div className='logo'>
                        <a href="#">Logo</a>
                    </div>
                    <ul className='navbar-items'>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Tienda</a>
                        </li>
                        <li>
                            <a href="#">Nosotros</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                    <div className='buttons'>
                        <ul>
                            <li>
                                <User />
                            </li>
                            <li>
                                <Search />
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

                <div class="navbar-responsive">
                        <label for="menu">
                            <Menu />
                        </label>
                        <input type="checkbox" name="menu-responsive" id="menu" />
                        <article class="popup">
                            <label class="background" for="menu"></label>
                            <ul>
                                <li class="menu-close">
                                    <em>Men&uacute;</em>
                                    <label for="menu">
                                        <i class="icon close"></i>
                                    </label>
                                </li>
                                <li>
                                    <a href="#inicio">
                                        <i class="icon home"></i>
                                        <span>Inicio</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#sobre-nosotros">
                                        <i class="icon about-us"></i>
                                        <span>Sobre nosotros</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#servicios">
                                        <i class="icon service"></i>
                                        <span>Servicios</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#preguntas">
                                        <i class="icon message"></i>
                                        <span>Preguntas</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#contacto">
                                        <i class="icon mail"></i>
                                        <span>Contacto</span>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    </div>
            </nav>
        </header>
    )
}