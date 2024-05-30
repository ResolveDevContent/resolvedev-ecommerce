import '../css/Banner.css'
import Home from '../images/home.jpg'
import { Link } from 'react-router-dom'
import { useData } from '../hook/useData'
import { useEffect, useState } from 'react'
import { Loading } from './Loading'

export const Banner = () => {
    const [ banners, setBanners ] = useState([])
    const { loading, getDatosTienda } = useData()

    const dataTienda = async () => {
        const datos = await getDatosTienda("banners")
        console.log(datos, loading)
        setBanners(datos[0])
    }

    useEffect(() => {
        dataTienda()
    }, [])

    return loading ? (
        <Loading />
    ) : banners ? (
        <section className="banners">
            <ul>
                <li>
                    <figure>
                        <img src={Home} alt="logo" /> 
                        <figcaption>
                            <article className="home-text">
                                <span>{banners.subtitulo}</span>
                                <div>
                                    <em>{banners.titulo}</em>
                                    <p>
                                        {banners.descripcion}
                                    </p>
                                </div>
                                <footer>
                                    <button>
                                        <Link to={'/listado'}>
                                            {banners.textoBoton}
                                        </Link>    
                                    </button>
                                </footer>
                            </article>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
    ) : null
}