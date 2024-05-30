import { Listado } from "../components/Listado.jsx"
import { Categorias } from "../components/Categorias.jsx"
import { Banner } from "../components/Banner.jsx"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { useData } from "../hook/useData.jsx"
import { Promociones } from "../components/Promociones.jsx"

export const Home = () => {
    const [ data, setData ] = useState([])
    const [ tienda, setTienda ] = useState([])
    const [ consulta, setConsulta ] = useState([])
    const { getDatos, getDatosTienda } = useData()
    const location = useLocation()

    const dataTienda = async () => {
        let datos = await getDatosTienda("tienda")
        datos = datos[0]
        console.log(datos)
        if(datos.promociones && !datos.titulo) datos.titulo = "Promociones"
        setTienda(datos)
    }

    const listarDatos = async () => {
        const datos = await getDatos('productos')
        const filterData = datos.filter(row => row.descuento > 0 && row.carrito)
        setData(filterData)

        const dataConsulta = datos.filter(row => !row.carrito)
        setConsulta(dataConsulta)
    }

    useEffect(() => {
      scrollTo(0,0)

      dataTienda()
      listarDatos()
    }, [location])

    console.log(tienda, consulta)

    return (
        <>
            <Banner />
            {tienda.promociones && data.length > 0 
                ? <Promociones titulo={tienda.titulo} list={data}/>
                : null
            }
            {consulta.length > 0 
                ? <Promociones titulo={"Prodcutos de consulta"} list={consulta}/>
                : null
            }
            <Categorias />
            <Listado isInHome={true} />
        </>
    )
}