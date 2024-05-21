import Resolve from "../images/resolvedevverde.png"

export const Page404 = () => {
    return (
        <section id="notFound">
            <h1>Error 404</h1>
            <p>Esta página no existe</p>
            <img src={Resolve} alt=""/>
        </section>
    )
}