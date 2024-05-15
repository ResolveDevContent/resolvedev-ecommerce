import '../css/Breadcumb.css'
import Tienda from '../images/tienda.png'

export const Breadcumb = ({titulo, breadcumb}) => {

    return (
        <section className="breadcumbs">
            <ul>
                <li>
                    <figure>
                        <img src={Tienda} alt={titulo + " - " + "imagen"} /> 
                        <figcaption>
                            <article>
                                <strong>{titulo}</strong>
                                <span>{breadcumb}</span>
                            </article>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
    )
}