import { Link } from 'resolvedev-router'

export const ProductCard = () => {
    return (
        <li className="producto">
            <article>
                <Link to="/producto" >
                    <span className='loader'></span>
                    <ul className='imagenes'>
                        <li>
                            <img src="src/images/Lunes.png" alt="" />
                        </li>
                        <li>
                            <img src="" alt="" />
                        </li>
                    </ul>
                </Link>
            </article>
            <footer>
                <strong>Lunes a la mañana</strong>
                <span>Muy cansador</span>
                <div className='price'>
                    <del className="without-discount">$1.000.000</del>
                    <em>$2.000.000</em>
                </div>
                <div className='btn-carrito'>
                    <button>Agregar al carrito</button>
                </div>
            </footer>
        </li>
    )
}