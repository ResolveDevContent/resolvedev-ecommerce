import { Listado } from "../components/Listado.jsx"
import { Categorias } from "../components/Categorias.jsx"
import { Banner } from "../components/Banner.jsx"

export const Home = () => {
    return (
        <>
            <Banner />
            <Categorias />
            <Listado isInHome={true} />
        </>
    )
}