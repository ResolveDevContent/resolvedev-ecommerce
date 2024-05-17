import { Link } from 'resolvedev-router'
import Prod from '../images/prod.jpg'

export const ProductCard = () => {
    return (
        <li className="producto">
            <article>
                <Link to="/producto" >
                    <span className='loader'></span>
                    <ul className='imagenes'>
                        <li>
                            <img src={Prod} alt="" />
                        </li>
                        <li>
                            <img src="" alt="" />
                        </li>
                    </ul>
                </Link>
            </article>
            <footer>
                <strong>Sillon individual cuerina</strong>
                <span>Cuero</span>
                <div className='price'>
                    <del className="without-discount">$630.000</del>
                    <em>$500.000</em>
                </div>
                <div className='btn-carrito'>
                    <button>Agregar al carrito</button>
                </div>
            </footer>
        </li>
    )
}