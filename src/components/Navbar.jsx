import '../css/Navbar.css'
import { User, Search, Favorite, Cart, Menu, Close, Home, Group, Shop, Contact, Send } from '../icons/Icons'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useData } from '../hook/useData'
import { useEffect } from 'react'

export const Navbar = () => {
    const { data, getDatos } = useData()

    const listarDatos = () => {
        getDatos('categorias')
        console.log(data)
    }

    useEffect(() => {
        listarDatos()
    }, [])

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
                        {data && data.length > 0 ? (
                            <li className='navbar-categorias'>
                                <label>
                                    Categorias
                                    <input type="checkbox" name="categorias" id="categorias" />
                                    <ul>
                                        {data.map((cat) => (
                                            <li key={cat._id} className='navbar-subcategorias'>
                                                <Link to={`/tienda/${cat.nombre.toLowerCase()}`}>
                                                    {cat.nombre}
                                                </Link>
                                                <ul>
                                                    {cat.subcategorias.map((subcat, idx) => (
                                                        <li key={idx}>
                                                            <Link to={`/tienda/${subcat.toLowerCase()}`}>
                                                                {subcat}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </label>
                            </li>
                        ) : null}
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
                                    <label htmlFor="search">
                                        <Close />
                                    </label>
                                    <input type="text" placeholder='Buscar...'/>
                                    <button>
                                        <Send />
                                    </button>
                                </div>
                            </li>
                            <li>
                                <Link to='/usuario'>
                                    <User />
                                </Link>
                            </li>
                            <li>
                                <Link to='/favorito'>
                                    <Favorite />
                                </Link>
                            </li>
                            <li>
                                <Link to='/carrito'>
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
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Shop />
                                <Link to="/tienda">Tienda</Link>
                            </li>
                            <li>
                                <Group />
                                <Link to="/nosotros">Nosotros</Link>
                            </li>
                            <li>
                                <Contact />
                                <Link to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </article>
                </div>
            </nav>
        </header>
    )
}