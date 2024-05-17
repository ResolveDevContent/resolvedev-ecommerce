import { lazy } from 'react'

const Listado = lazy(() => { import("../components/Listado")})
const Categorias = lazy(() => { import("../components/Categorias")})
const Banner = lazy(() => { import("../components/Banner")})

export const Home = () => {
    return (
        <>
            <Banner />
            <Categorias />
            <Listado isInHome={true} />
        </>
    )
}