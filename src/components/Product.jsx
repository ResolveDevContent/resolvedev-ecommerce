import '../css/Product.css'
import { Plus, Minus, Share } from '../icons/Icons'
import Prod from '../images/prod.jpg'
import { Promociones } from './Promociones'
import { Features } from './Features'
import { useState, useEffect, useRef } from 'react' 
import { useCart } from 'resolvedev-cart'
import { useParams } from 'react-router-dom'
import { useData } from '../hook/useData'
import { EmptyState } from '../components/EmptyState'
import { getData } from '../services/getData'
import { Loading } from './Loading'

export const Product = () => {
    const [ image, setImage ] = useState(Prod)
    const [ inputState, setInputState ] = useState(0)
    const [ data, setData ] = useState({})
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

        setData(dato)

        const newRelacionados = listRelacionados.filter(item => item._id != dato._id)

        setRelacionados(newRelacionados)
    }

    let inCart = false

    console.log(data,relacionados)
    
    if(data) {
        inCart = cart.some(prod => prod._id == data.id)
    }

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
        data.quantity = inputState

        inCart ? removeFromCart(data)
               : addToCart(data)                                    
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
                                <img src={data?.imagenes[0]} alt="" />
                            </figure>
                            <ul>
                                {data.imagenes.map((img, idx) => (
                                    <li key={idx}>
                                        <figure>
                                            <span className='loader'></span>
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
                        <del>{data.fmt_modified_price}</del>
                        <em>$ {data.fmt_precio}</em>
                        <div className="caracteristicas">
                            {data.caracteristicas && data.caracteristicas.length > 0 ? (
                                <>
                                    <span>Caracter&iacute;sticas:</span>
                                    <ul>
                                        {data.caracteristicas.map((carac, idx) => (
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
                                <button onClick={() => handleClick(-data.piezas)}>
                                    <Minus />
                                </button>
                                <input type="number" defaultValue={data.piezas} 
                                    value={inputState} ref={input}
                                    onChange={e => handleChange(e.target.value)}
                                    />
                                <button onClick={() => handleClick(data.piezas)}>
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
        </> 
    ) : null
}