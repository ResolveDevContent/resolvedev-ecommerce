import '../css/Categorias.css'
import { useEffect, useRef, useState } from 'react'
import { Arrows } from './Arrows'
import { Link } from 'react-router-dom'
import Cat from '../images/cat.jpg'
import { useData } from '../hook/useData'
import { Loading } from '../components/Loading'

export const Categorias = () => {
    const [data, setData] = useState([])
    const scrollable = useRef();
    const { getDatos, loading } = useData()

    const listarDatos = async () => {
        const datos = await getDatos('categorias')
        setData(datos)
    }

    useEffect(() => {
        listarDatos()
    }, [])

    return loading ? (
        <Loading />
    ) : (
        <>
            {data && data.length > 0 ? 
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
                                    <Link to={`/tienda/${cat.nombre.toLowerCase()}`}>
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
                : null
            }
        </>
    )
}