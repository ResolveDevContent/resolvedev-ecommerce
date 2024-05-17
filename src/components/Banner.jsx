import '../css/Banner.css'
import Home from '../images/home.jpg'
import { Link } from 'resolvedev-router'

export const Banner = () => {
    return (
        <section className="banners">
            <ul>
                <li>
                    <figure>
                        <img src={Home} alt="logo" /> 
                        <figcaption>
                            <article className="home-text">
                                <span>New Arrival</span>
                                <div>
                                    <em>Discover Our New Collection</em>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                                    </p>
                                </div>
                                <footer>
                                    <button>
                                        <Link to={'/listado'}>
                                            Buy now
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