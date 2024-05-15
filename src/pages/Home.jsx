import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'
import { Categorias } from '../components/Categorias'

export const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Categorias />
        </>
    )
}