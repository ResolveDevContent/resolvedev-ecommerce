import '../css/Banner.css'
import Home from '../images/home.jpg'
import { Link } from 'react-router-dom'

export const Banner = () => {
    return (
        <section className="banners">
            <ul>
                <li>
                    <figure>
                        <img src={Home} alt="logo" /> 
                        <figcaption>
                            <article className="home-text">
                                <span>Novedades</span>
                                <div>
                                    <em>Descubrí nuestras nuevas colecciones</em>
                                    <p>
                                    Estamos emocionados de presentarte nuestras nuevas colecciones, diseñadas con pasión y dedicación para ofrecerte lo mejor en muebleria. Este año, hemos llevado nuestra creatividad a nuevos horizontes, fusionando tendencias contemporáneas con un toque de elegancia clásica.
                                    </p>
                                </div>
                                <footer>
                                    <button>
                                        <Link to={'/listado'}>
                                            Compra ahora
                                        </Link>    
                                    </button>
                                </footer>
                            </article>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
    )
}