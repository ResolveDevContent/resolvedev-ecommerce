import '../css/Categorias.css'
import { useRef } from 'react'
import { Arrows } from './Arrows';

export const Categorias = () => {
    const scrollable = useRef();

    return (
        <section className="categorias">
            <header>
                <h2>Categorias</h2> 
                <p>Descubrí todas nuestras categorias</p>
            </header>
            <div className='carousel'>
                <Arrows scrollable={scrollable}/>
                <ul ref={scrollable}>
                    <li className="categorias-item">
                        <figure>
                            <img src="https://images.unsplash.com/photo-1594239505347-51a2879be69a?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <figcaption>
                                <strong>Categoria</strong>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="categorias-item">
                        <figure>
                            <img src="https://images.unsplash.com/photo-1594239505347-51a2879be69a?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <figcaption>
                                <strong>Categoria</strong>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="categorias-item">
                        <figure>
                            <img src="https://images.unsplash.com/photo-1594239505347-51a2879be69a?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <figcaption>
                                <strong>Categoria</strong>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="categorias-item">
                        <figure>
                            <img src="https://images.unsplash.com/photo-1594239505347-51a2879be69a?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <figcaption>
                                <strong>Categoria</strong>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>
    )
}