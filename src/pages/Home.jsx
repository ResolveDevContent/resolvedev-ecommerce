import { Listado } from "../components/Listado.jsx"
import { Categorias } from "../components/Categorias.jsx"
import { Banner } from "../components/Banner.jsx"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export const Home = () => {

    const location = useLocation()

    useEffect(() => {
      scrollTo(0,0)
    }, [location])
  

    return (
        <>
            <Banner />
            <Categorias />
            <Listado isInHome={true} />
        </>
    )
}