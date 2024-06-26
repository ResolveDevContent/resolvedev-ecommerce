import '../css/Product.css'
import { Plus, Minus, Share, Send } from '../icons/Icons'
import Prod from '../images/prod.jpg'
import { Promociones } from './Promociones'
import { Features } from './Features'
import { useState, useEffect, useRef } from 'react' 
import { useCart } from 'resolvedev-cart'
import { useParams } from 'react-router-dom'
import { useData } from '../hook/useData'
import { EmptyState } from '../components/EmptyState'
import { Loading } from './Loading'

export const Product = () => {
    const [ mainImage, setMainImage ] = useState("")
    const [ data, setData ] = useState({})
    const [ inputState, setInputState ] = useState(data.piezas || 1)
    const [ relacionados, setRelacionados ] = useState([])
    
    const { getDatos, getOneDato, getDataRelacionados, loading } = useData()
    const input = useRef()
    const { id } = useParams();
    const { addToCart, removeFromCart, cart } = useCart()
    
    const listarDato = async () => {
        const dato = await getOneDato('productos', id)
        const listRelacionados = await getDataRelacionados('productos', dato.categorias)
        const filtros = await getDatos('filtros')

        dato.filtros.forEach((row) => {
            row.fmt_opciones = []
        })

        dato.filtros.forEach((row) => {
            const filtro = filtros.find((filter) => filter._id === row.filtro)
            const opciones = filtro.opciones.filter((filter) => { return row.opciones.filter((opt) => filter._id === opt._id)})
            
            row.fmt_filtro = filtro.nombre;

            if(opciones.length > 0) {
                opciones.forEach((opt) => {
                    row.fmt_opciones.push(opt.nombre)
                })
            }
        })

        setMainImage(dato.imagenes[0])
        setData(dato)

        const newRelacionados = listRelacionados.filter(item => item._id != dato._id)

        setRelacionados(newRelacionados)
    }

    let inCart = false

    console.log(data,relacionados)
    
    if(data) {
        inCart = cart.some(prod => prod._id == data.id)
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
        data.quantity = inputState

        inCart ? removeFromCart(data)
               : addToCart(data)                                    
    }

    const handleSubmit = e => {
        const form = e.target
        const formData = new FormData(form)

        console.log(formData)
    }

    const handleMouseOver = (img) => {
        console.log("mouseover", img)
        if(img) {
            setMainImage(img)
        }
    }

    useEffect(() => {
        scrollTo(0,0)
        
        listarDato()
    }, [])


    return loading ? (
        <Loading />
    ) : data ? (
        <>
            <header className="product-header filtros">
                <span>Home <span style={{color: "black"}}>&gt;</span> Tienda<span style={{color: "black"}}> /</span><span className='nombre-product'>{data.nombre}</span></span>
            </header>
            <section className="product-page">
                <aside className="product-images">
                    {data.imagenes && data.imagenes.length > 0 ? (
                        <>
                            <figure>
                                <span className='loader'></span>
                                <img src={mainImage} alt="" />
                            </figure>
                            <ul>
                                {data.imagenes.map((img, idx) => (
                                    <li key={idx} onMouseOver={() => handleMouseOver(img)}>
                                        <figure>
                                            <span className='loader'></span>
                                            <img src={img} alt=""/>
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
                        <del>{data.fmt_modified_price}</del>
                        <em>{data.fmt_precio}</em>
                        <div className="caracteristicas">
                            {data.caracteristicas && data.caracteristicas.length > 0 ? (
                                <>
                                    <span>Caracter&iacute;sticas:</span>
                                    <ul>
                                        {data.caracteristicas.map((carac, idx) => (
                                            <li key={idx}>
                                                {carac.nombre}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : null}
                        </div>
                    </header>
                    <ul className='product-actions'>
                        {
                            data.carito && data.stock > 0 
                                ? <>
                                    <li>
                                        <div className='input'>
                                            <button onClick={() => handleClick(Number(data.piezas) * -1)}>
                                                <Minus />
                                            </button>
                                            <input type="number"
                                                value={inputState} ref={input}
                                                onChange={e => handleChange(e.target.value)}
                                                />
                                            <button onClick={() => handleClick(Number(data.piezas))}>
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
                                </>
                                : null
                        }
                        {
                            !data.carito || data.stock == 0 
                                ? <li>
                                    <div className='btn-carrito'>
                                        <button popovertarget="consulta-popover">Consultar</button>
                                    </div>
                                </li>
                                : null
                        }
                        <li>
                            <button className='btn-share'>
                                <Share />
                            </button>
                        </li>
                    </ul>   
                </article>
            </section>
            <div className='ficha-tecnica'>
                <em>Ficha t&eacute;cnica</em>
                {data.filtros && data.filtros.length > 0 ?
                    <ul>
                        {data.filtros.map(item => {
                            return (
                                <li key={item._id}>
                                    <em>{item.fmt_filtro}</em>
                                    <ul>
                                        {item.fmt_opciones.map((row, idx) => {
                                            return(
                                                <li key={idx}>
                                                    <span>{row}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                    : <EmptyState texto="No hay detalles" />
                }
            </div>
            <div className="product-description">
                <strong>Descripci&oacute;n</strong>
                <p>
                    {data.descripcion}
                </p>
            </div>
            {relacionados.length > 0 ? 
                <Promociones titulo={"Productos Relacionados"} list={relacionados}/>
                : null
            }
            <Features />
            <div className='consulta' popover="true" id="consulta-popover">
                <em>Consultar</em>
                <form>
                    <ul>
                        <li>
                            <div className='input'>
                                <label>Nombre</label>
                                <input type="text" placeholder='Nombre' name='nombre'/>
                            </div>    
                        </li>
                        <li>
                            <div className='input'>
                                <label>Email</label>
                                <input type="text" placeholder='abc@email.com' name='email'/>
                            </div>    
                        </li>
                        <li>
                            <div className='input'>
                                <label>Mensaje</label>
                                <textarea placeholder='¡Hola!, quisiera saber...' name='mensaje'/>
                            </div>    
                        </li>
                    </ul>
                    <input type="hidden" name='producto' value={data._id}/>
                    <div className='btn-carrito'>
                        <button onClick={handleSubmit}>
                            Enviar
                            <Send />
                        </button>
                    </div>
                </form>
            </div>
        </> 
    ) : null
}