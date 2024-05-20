import '../css/Product.css'
import { Plus, Minus, Share } from '../icons/Icons'
import Prod from '../images/prod.jpg'
import Img from '../images/otherimg.png'
import Img2 from '../images/otherimg2.png'
import { Promociones } from './Promociones'
import { Features } from './Features'
import { useState } from 'react'

export const Product = () => {
    const [ quantity, setQuantity ] = useState(1)
    const [ image, setImage ] = useState(Prod)

    const addQuantity = (e, num) => {
        e.preventDefault()

        let suma = quantity + num;

        if(suma <= 0) {
            return;
        }

        setQuantity(suma);
    }

    const changeImg = (e, img) => {
        e.preventDefault()

        setImage(img)
    }

    return (
        <>
            <header className="product-header filtros">
                <span>Home <span style={{color: "black"}}>&gt;</span> Tienda <span style={{color: "black", marginLeft: ".5em"}}>/ Nombre Producto</span></span>
            </header>
            <section className="product-page">
                <aside className="product-images">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <ul>
                        <li>
                            <figure>
                                <img src={Img} alt="" onClick={(e) => changeImg(e, Img)} />
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={Prod} alt="" onClick={(e) => changeImg(e, Prod)}/>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={Img2} alt="" onClick={(e) => changeImg(e, Img2)}/>
                            </figure>
                        </li>
                    </ul>
                </aside>
                <article className="product-details">
                    <header>
                        <strong>Nombre Producto</strong>
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
                                <button onClick={(e) => addQuantity(e, -1)}>
                                    <Minus />
                                </button>
                                <input type="number" defaultValue={quantity} value={quantity} name='quantity' id='quantity'/>
                                <button onClick={(e) => addQuantity(e, 1)}>
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
            <Promociones titulo={"Productos Relacionados"}/>
            <Features />
        </>
    )
}