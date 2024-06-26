import '../css/Footer.css'
import { ArrowRight, WhatsApp } from '../icons/Icons'
import ResolveDev from '../images/resolvedevverde.png'

export const Footer = () => {
    return (
        <>
            <section id='floating-footer'>
                <ul>
                    <li>
                        <a href="#">
                            <span>Escribinos por Whatsapp</span>
                            <WhatsApp />
                        </a>
                    </li>
                </ul>
            </section>
            <footer className="footer">
                <section>
                    <aside className="footer-brand">
                        <img src={ResolveDev} alt="Logo" />
                        <span>
                            Resolve Dev. Desarrollo web, innovacíon, soluciones tecnológicas.    
                        </span>
                    </aside>
                    <div className="footer-links">
                        <em>Links</em>
                        <ul>
                            <li>
                                <a href="#inicio">Inicio</a>
                            </li>
                            <li>
                                <a href="#servicios">Servicios</a>
                            </li>
                            <li>
                                <a href="#sobre-nosotros">Sobre Nosotros</a>
                            </li>
                            <li>
                                <a href="#preguntas">Preguntas</a>
                            </li>
                            <li>
                                <a href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <em>Redes sociales</em>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/resolvedev/" target="_blank">
                                    <img src="./images/instagram.png" alt="Instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <em>Newsletter</em>
                        <ul className='newsletter'>
                            <li>
                                <input type="text" placeholder="Ingresá tu email" />
                                <a href="#" target="_blank">
                                    <ArrowRight />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="copyright">
                    <span>© ResolveDev</span>
                </div>
            </footer>
        </>
    )
}