import './prod.css'
import { Link } from 'resolvedev-router'

export const Listado = () => {
    return (
        <section id="listado">
            <ul>
                <li className="producto">
                    <Link to="producto" >
                        <article>
                            <span className='loader'></span>
                            <ul>
                                <li>
                                    <img src="src/images/Lunes.png" alt="" />
                                </li>
                            </ul>
                        </article>
                    </Link>
                    <footer>
                        <strong>Lunes a la mañana</strong>
                        <span>Muy cansador</span>
                        <div className='price'>
                            <span className="without-discount">$1.000.000</span>
                            <em>$2.000.000</em>
                        </div>
                        <div className='btn-carrito'>
                            <button>Agregar al carrito</button>
                        </div>
                    </footer>
                </li>
                <li className="producto">
                    <Link to="producto" >
                        <article>
                            <span className='loader'></span>
                            <ul>
                                <li>
                                    <img src="src/images/Lunes.png" alt="" />
                                </li>
                            </ul>
                        </article>
                    </Link>
                    <footer>
                        <strong>Lunes a la mañana</strong>
                        <span>Muy cansador</span>
                        <div className='price'>
                            <span className="without-discount">$1.000.000</span>
                            <em>$2.000.000</em>
                        </div>
                        <div className='btn-carrito'>
                            <button>Agregar al carrito</button>
                        </div>
                    </footer>
                </li>
                <li className="producto">
                    <Link to="producto" >
                        <article>
                            <span className='loader'></span>
                            <ul>
                                <li>
                                    <img src="src/images/Lunes.png" alt="" />
                                </li>
                            </ul>
                        </article>
                    </Link>
                    <footer>
                        <strong>Lunes a la mañana</strong>
                        <span>Muy cansador</span>
                        <div className='price'>
                            <span className="without-discount">$1.000.000</span>
                            <em>$2.000.000</em>
                        </div>
                        <div className='btn-carrito'>
                            <button>Agregar al carrito</button>
                        </div>
                    </footer>
                </li>
                <li className="producto">
                    <Link to="producto" >
                        <article>
                            <span className='loader'></span>
                            <ul>
                                <li>
                                    <img src="src/images/Lunes.png" alt="" />
                                </li>
                            </ul>
                        </article>
                    </Link>
                    <footer>
                        <strong>Lunes a la mañana</strong>
                        <span>Muy cansador</span>
                        <div className='price'>
                            <span className="without-discount">$1.000.000</span>
                            <em>$2.000.000</em>
                        </div>
                        <div className='btn-carrito'>
                            <button>Agregar al carrito</button>
                        </div>
                    </footer>
                </li>
            </ul>
        </section>
    )
}