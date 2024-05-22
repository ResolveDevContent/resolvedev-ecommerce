import '../css/Product.css'
import { Plus, Minus, Share } from '../icons/Icons'
import Prod from '../images/prod.jpg'
import { Promociones } from './Promociones'
import { Features } from './Features'
import { useState, useEffect } from 'react' 
import { useCart } from 'resolvedev-cart'
import { useParams } from 'react-router-dom'
import { useData } from '../hook/useData'
// import { getOneData } from '../services/db'

export const Product = () => {
    const [ image, setImage ] = useState(Prod)
    // const [ data, setData ] = useState({})
    const { getOneData } = useData()

    const { addToCart, removeFromCart, updateQuantity, cart } = useCart()
    const { id } = useParams();
    const inCart = cart.some(prod => prod._id == data._id)

    const changeImg = (e, img) => {
        e.preventDefault()

        setImage(img)
    }

    useEffect(() => {
        scrollTo(0,0)
        
        getOneData("productos", id, setData)
    }, [])


    return data ? (
        <>
            <header className="product-header filtros">
                <span>Home <span style={{color: "black"}}>&gt;</span> Tienda<span style={{color: "black"}}> /</span><span className='nombre-product'>{data.nombre}</span></span>
            </header>
            <section className="product-page">
                <aside className="product-images">
                    {data.imagenes && data.imagenes.length > 0 ? (
                        <>
                            <figure>
                                    <img src={data?.imagenes[0]} alt="" />

                            </figure>
                            <ul>
                                {data.imagenes.map((img, idx) => (
                                    <li key={idx}>
                                        <figure>
                                            <img src={img} alt="" onClick={(e) => changeImg(e, img)} />
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </aside>
                <article className="product-details">
                    <header>
                        <strong>{data.nombre}</strong>
                        <del>$1.000.000</del>
                        <em>$ {data.precio}</em>
                        <div className="caracteristicas">
                            {data.caracteristicas && data.caracteristicas.length > 0 ? (
                                <ul>
                                    <li>
                                        Categoria: {data.categorias}
                                    </li>
                                    {data.caracteristicas.map((carac, idx) => (
                                        <li key={idx}>
                                            {carac}
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    </header>
                    <ul className='product-actions'>
                        <li>
                            {/* <div className='input'>
                                <button onClick={() => updateQuantity(data, -1, true)}>
                                    <Minus />
                                </button>
                                <input type="number" 
                                    onChange={e => updateQuantity(data, e.target.value, false)} 
                                    value="" defaultValue=""/>
                                <button onClick={() => updateQuantity(data, 1, true)}>
                                    <Plus />  
                                </button>
                            </div> */}
                        </li>
                        <li>
                            <div className='btn-carrito'>
                                <button className={inCart ? "in-cart" : null} 
                                    onClick={() => {    
                                        inCart ? removeFromCart(data)
                                            : addToCart(data)
                                            }}>
                                        { 
                                            inCart 
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
                    {data.descripcion}
                </p>
            </div>
            {/* <Promociones titulo={"Productos Relacionados"}/> */}
            <Features />
        </>
    ) : null
}