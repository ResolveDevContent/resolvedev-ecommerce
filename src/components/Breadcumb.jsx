import '../css/Breadcumb.css'

export const Breadcumb = ({titulo, imagen, breadcumb}) => {

    return (
        <section className="breadcumbs">
            <ul>
                <li>
                    <figure>
                        <img src={imagen} alt={titulo + " - " + "imagen"} /> 
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