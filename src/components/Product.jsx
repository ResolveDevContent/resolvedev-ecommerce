import '../css/Product.css'
import { Plus, Minus, Share } from '../icons/Icons'
import Img from '../images/img.png'
import { ProductsRelated } from './ProductsRelated'

export const Product = () => {
    return (
        <>
            <section className="product-page">
                <aside className="product-images">
                    <figure>
                        <img src={Img} alt="" />
                    </figure>
                    <ul>
                    <li>
                        <figure>
                            <img src={Img} alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={Img} alt="" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={Img} alt="" />
                        </figure>
                    </li>
                    </ul>
                </aside>
                <article className="product-details">
                    <header>
                        <strong>Titulo</strong>
                        <del>$1.000.000</del>
                        <em>$ 3.000.000</em>
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
                    </header>
                    <ul className='product-actions'>
                        <li>
                            <div className='input'>
                                <button>
                                    <Minus />
                                </button>
                                <input type="number"/>
                                <button>
                                    <Plus />   
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className='btn-carrito'>
                                <button>
                                    Añadir al carrito
                                </button>
                            </div>
                        </li>
                        <li>
                            <button className='btn-share'>
                                <Share />
                            </button>
                        </li>
                    </ul>
                </article>
            </section>
            <div className="product-description">
                <strong>Descripci&oacute;n</strong>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Assumenda, facere dolorum eligendi voluptatem ex similique placeat qui. 
                    Amet ipsam quas deserunt, nam aperiam excepturi, omnis dolores aliquid reprehenderit, pariatur rerum!
                </p>
            </div>
            <ProductsRelated titulo={"Productos Relacionados"}/>
        </>
    )
}