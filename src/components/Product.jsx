import '../css/Product.css'
import { Plus, Minus, Share } from '../icons/Icons'
import Prod from '../images/prod.jpg'
import Img from '../images/otherimg.png'
import Img2 from '../images/otherimg2.png'
import { Promociones } from './Promociones'
import { Features } from './Features'
import { useState, useEffect } from 'react' 
import { useCart } from 'resolvedev-cart'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const [ image, setImage ] = useState(Prod)
    const { addToCart, removeFromCart, updateQuantity } = useCart()
    const { id } = useParams();

    const changeImg = (e, img) => {
        e.preventDefault()

        setImage(img)
    }

    useEffect(() => {
        scrollTo(0,0)
        console.log(id)
    }, [])


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
                                <img src={Img} alt="" onClick={(e) => changeImg(e, Img)}/>
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
                                <button onClick={() => updateQuantity("", -1, true)}>
                                    <Minus />
                                </button>
                                <input type="number" 
                                    onChange={e => updateQuantity("", e.target.value, false)} 
                                    value="" defaultValue=""/>
                                <button onClick={() => updateQuantity("", 1, true)}>
                                    <Plus />  
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className='btn-carrito'>
                                <button onClick={() => {
                                    false ? removeFromCart("")
                                        : addToCart("")
                                        }}>
                                    { 
                                        false 
                                            ? "Eliminar del carrito"
                                            :  "Añadir al carrito" 
                                    }
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
            {/* <Promociones titulo={"Productos Relacionados"}/> */}
            <Features />
        </>
    )
}