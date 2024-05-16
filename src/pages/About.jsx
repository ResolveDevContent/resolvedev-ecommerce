import '../css/About.css'
import { Breadcumb } from '../components/Breadcumb'

export const About = () => {
    return (
        <>
            <Breadcumb titulo={"Sobre nosotros"} breadcumb={"Home > Nosotros"}/>
            <section className="about">
                <aside>
                    <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nosotros-img" />
                </aside>
                <article>
                    <header>
                        <strong>Nombre</strong>
                        <span>Sobre nosotros</span>
                    </header>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Autem doloremque aut reiciendis explicabo in atque distinctio 
                        fugit nobis, dolor, nemo minus illum magni sapiente saepe obcaecati 
                        laboriosam beatae aperiam accusamus.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Autem doloremque aut reiciendis explicabo in atque distinctio 
                        fugit nobis, dolor, nemo minus illum magni sapiente saepe obcaecati 
                        laboriosam beatae aperiam accusamus.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Autem doloremque aut reiciendis explicabo in atque distinctio 
                        fugit nobis, dolor, nemo minus illum magni sapiente saepe obcaecati 
                        laboriosam beatae aperiam accusamus.
                    </p>
                </article>
            </section>
        </>
    )
}