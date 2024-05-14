import '../css/Navbar.css'
import { User, Search, Favorite, Cart } from '../icons/Icons'

export const Navbar = () => {
    return (
        <header className='navbar'>
            <ul>
                <div className='logo'>
                    <a href="#">Logo</a>
                </div>
                <ul>
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
        </header>
    )
}