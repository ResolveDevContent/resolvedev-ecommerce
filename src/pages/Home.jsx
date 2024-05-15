import { Banner } from '../components/Banner'
import { Categorias } from '../components/Categorias'
import { Listado } from "../components/Listado"

export const Home = () => {
    return (
        <>
            <Banner />
            <Categorias />
            <Listado isInHome={true} />
        </>
    )
}