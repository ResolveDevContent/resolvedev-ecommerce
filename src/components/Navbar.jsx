import '../css/Navbar.css'

export const Navbar = () => {
    return (
        <header>
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
                            <a href="#">Login</a>
                        </li>
                        <li>
                            <a href="#">Buscar</a>
                        </li>
                        <li>
                            <a href="#">Favoritos</a>
                        </li>
                        <li>
                            <a href="#">Cart</a>
                        </li>
                    </ul>
                </div>
            </ul>
        </header>
    )
}