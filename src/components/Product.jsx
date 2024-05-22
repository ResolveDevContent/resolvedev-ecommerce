import '../css/Product.css'
import { Plus, Minus, Share } from '../icons/Icons'
import Prod from '../images/prod.jpg'
import { Promociones } from './Promociones'
import { Features } from './Features'
import { useState, useEffect, useRef } from 'react' 
import { useCart } from 'resolvedev-cart'
import { useParams } from 'react-router-dom'
import { useData } from '../hook/useData'

export const Product = () => {
    const [ image, setImage ] = useState(Prod)
    const { oneData, getOneDato } = useData()
    const [ inputState, setInputState ] = useState(0)
    
    const input = useRef()
    const { id } = useParams();

    const { addToCart, removeFromCart, cart } = useCart()

    const inCart = cart.some(prod => prod._id == oneData.id)

    const changeImg = (e, img) => {
        e.preventDefault()

        setImage(img)
    }

    const handleClick = (value) => {
        if(Number(input.current.value) + Number(value) < 1) return
        setInputState(Number(input.current.value) + Number(value))
    }

    const handleChange = value => {
        if(Number(value) < 1) return
        setInputState(Number(value))
    }

    const handleChangeCarrito = () => {
        oneData.quantity = inputState

        inCart ? removeFromCart(oneData)
               : addToCart(oneData)                                    
    }

    useEffect(() => {
        scrollTo(0,0)
        
        getOneDato("productos", id)
        console.log(oneData)
    }, [])


    return oneData ? (
        <>
            <header className="product-header filtros">
                <span>Home <span style={{color: "black"}}>&gt;</span> Tienda<span style={{color: "black"}}> /</span><span className='nombre-product'>{oneData.nombre}</span></span>
            </header>
            <section className="product-page">
                <aside className="product-images">
                    {oneData.imagenes && oneData.imagenes.length > 0 ? (
                        <>
                            <figure>
                                    <img src={oneData?.imagenes[0]} alt="" />

                            </figure>
                            <ul>
                                {oneData.imagenes.map((img, idx) => (
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
                        <strong>{oneData.nombre}</strong>
                        <del>$1.000.000</del>
                        <em>$ {oneData.precio}</em>
                        <div className="caracteristicas">
                            {oneData.caracteristicas && oneData.caracteristicas.length > 0 ? (
                                <>
                                    <span>Caracter&iacute;sticas:</span>
                                    <ul>
                                        {oneData.caracteristicas.map((carac, idx) => (
                                            <li key={idx}>
                                                {carac}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : null}
                        </div>
                    </header>
                    <ul className='product-actions'>
                        <li>
                            <div className='input'>
                                <button onClick={() => handleClick(-oneData.piezas)}>
                                    <Minus />
                                </button>
                                <input type="number" defaultValue={oneData.piezas} 
                                    value={inputState} ref={input}
                                    onChange={e => handleChange(e.target.value)}
                                    />
                                <button onClick={() => handleClick(oneData.piezas)}>
                                    <Plus />  
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className='btn-carrito'>
                                <button className={inCart ? "in-cart" : null} 
                                    onClick={handleChangeCarrito}>
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
                    {oneData.descripcion}
                </p>
            </div>
            {/* <Promociones titulo={"Productos Relacionados"}/> */}
            <Features />
        </>
    ) : null
}