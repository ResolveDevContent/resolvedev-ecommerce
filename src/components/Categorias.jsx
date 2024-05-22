import '../css/Categorias.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Arrows } from './Arrows'
import { Link } from 'react-router-dom'
import Cat from '../images/cat.jpg'
import { getData } from '../services/db'

export const Categorias = () => {
    const scrollable = useRef();
    const [ data, setData ] = useState([])

    const listarDatos = useCallback(() => {
        getData('categorias', setData)

        // if(!data || data.length == 0) {
        //     console.log('e', data)
        // }
    },[])

    useEffect(() => {
        listarDatos()
    }, [listarDatos])

    return (
        <section className="categorias">
            <header>
                <h2>Categorias</h2> 
                <p>Descubrí todas nuestras categorias</p>
            </header>
            <div className='carousel'>
                <Arrows scrollable={scrollable}/>
                <ul ref={scrollable}>
                    {data.map(cat => (
                        <li key={cat._id} className="carousel-item">
                            <Link to="/tienda">
                                <figure>
                                    <img src={cat.imagen} alt="" />
                                    <figcaption>
                                        <strong>{cat.nombre}</strong>
                                    </figcaption>
                                </figure>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}