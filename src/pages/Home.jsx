import { Listado } from "../components/Listado.jsx"
import { Categorias } from "../components/Categorias.jsx"
import { Banner } from "../components/Banner.jsx"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { useData } from "../hook/useData.jsx"
import { Promociones } from "../components/Promociones.jsx"

export const Home = () => {
    const [ data, setData ] = useState([])
    const { getDatos } = useData()
    const location = useLocation()

    const listarDatos = async () => {
        const datos = await getDatos('productos')
        const filterData = datos.filter(row => row.descuento > 0)

        setData(filterData)
    }

    useEffect(() => {
      scrollTo(0,0)

      listarDatos()
    }, [location])
  

    return (
        <>
            <Banner />
            {data.length > 0 
                ? <Promociones titulo={"Ofertas"} list={data}/>
                : null
            }
            <Categorias />
            <Listado isInHome={true} />
        </>
    )
}