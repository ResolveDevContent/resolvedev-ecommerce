import '../css/Navbar.css'
import { User, Search, Favorite, Cart, Menu, Close, Home, Group, Shop, Contact, Send } from '../icons/Icons'
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useData } from '../hook/useData'
import { useEffect, useState } from 'react'

export const Navbar = () => {
    const [ data, setData ] = useState([])
    const { getDatos } = useData()
    const navigate = useNavigate()

    const listarDatos = async () => {
        const datos = await getDatos('categorias')
        setData(datos)
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)

        navigate(`/tienda?search=${formData.get("search")}`)
        form.reset()
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
                            <li className='navbar-categorias'>
                                <label>
                                    Categorias
                                    {data && data.length > 0 ? 
                                        <>
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
                                        </> : null
                                    }
                                </label>
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
                                <form onSubmit={(e) => handleSubmitSearch(e)}>
                                    <div className='input'>
                                            <label htmlFor="search">
                                                <Close />
                                            </label>
                                            <input type="text" placeholder='Buscar...' name='search' id='search'/>
                                            <button type='submit'>
                                                <Send />
                                            </button>
                                    </div>
                                </form>
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