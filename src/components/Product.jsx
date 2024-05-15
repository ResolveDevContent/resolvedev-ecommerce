import '../css/Product.css'

export const Product = () => {
    return (
        <section className="product-page">
            <aside className="product-images">
                <ul>
                    <li>
                        <img src="#" alt="" />
                    </li>
                </ul>
            </aside>
            <article className="product-details">
                <header>
                    <strong>Titulo</strong>
                    <em>Precio descuento</em>
                    <em>Precio</em>
                </header>
                <div className="caracteristicas">
                    <ul>
                        <li>
                            Categoria: Remeras
                        </li>
                        <li>
                            Subcategoria: 100% Algodon, 100% Lino, Mangas cortas
                        </li>
                    </ul>
                </div>
                <ul>
                    <li>
                        <div>
                            <button>

                            </button>
                            <input type="number" />
                            <button>
                                
                            </button>
                        </div>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </article>
            <div className="product-description">

            </div>
        </section>
    )
}