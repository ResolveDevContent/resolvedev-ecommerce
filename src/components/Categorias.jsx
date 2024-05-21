import '../css/Categorias.css'
import { useRef } from 'react'
import { Arrows } from './Arrows'
import { Link } from 'react-router-dom'
import Cat from '../images/cat.jpg'

export const Categorias = () => {
    const scrollable = useRef();

    return (
        <section className="categorias">
            <header>
                <h2>Categorias</h2> 
                <p>Descubrí todas nuestras categorias</p>
            </header>
            <div className='carousel'>
                <Arrows scrollable={scrollable}/>
                <ul ref={scrollable}>
                    <li className="carousel-item">
                        <Link to="/tienda">
                            <figure>
                                <img src={Cat} alt="" />
                                <figcaption>
                                    <strong>Interior</strong>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="carousel-item">
                        <Link to="/tienda">
                            <figure>
                                <img src={Cat} alt="" />
                                <figcaption>
                                    <strong>Interior</strong>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="carousel-item">
                        <Link to="/tienda">
                            <figure>
                                <img src={Cat} alt="" />
                                <figcaption>
                                    <strong>Interior</strong>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="carousel-item">
                        <Link to="/tienda">
                            <figure>
                                <img src={Cat} alt="" />
                                <figcaption>
                                    <strong>Interior</strong>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}