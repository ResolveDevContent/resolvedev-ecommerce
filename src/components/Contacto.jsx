import { Breadcumb } from "./Breadcumb"
import { Filtros } from "./Filtros"
import Tienda from '../images/tienda.png'

export const Contacto = () => {
    return (
        <>
            <Breadcumb titulo={"Contacto"} imagen={Tienda} breadcumb={"Home > Contacto"}/>
            <Filtros />
            <section id="contacto">
                <header>
                    <h1>Get in touch with us</h1>
                    <p>
                        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </header>
                <article>
                    <div>
                        <ul>
                            <li>
                                <i></i>
                                <div>
                                    <em>Adress</em>
                                    <span>236 5th SE Avenue, New York NY10000, United States</span>
                                </div>
                            </li>
                            <li>
                                <i></i>
                                <div>
                                    <em>Phone</em>
                                    <span>
                                        Mobile: +(84) 546-6789
                                        <br/>
                                        Hotline: +(84) 456-6789
                                    </span>
                                </div>
                            </li>
                            <li>
                                <i></i>
                                <div>
                                    <em>Working time</em>
                                    <span>
                                        Monday-Friday: 9:00 - 22:00
                                        <br/>
                                        Saturday-Sunday: 9:00 - 21:00
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <form>
                        <ul>
                            <li>
                                <label htmlFor="">Your name</label>
                                <input type="text" />
                            </li>
                            <li>
                                <label htmlFor="">Your email</label>
                                <input type="text" />
                            </li>
                            <li>
                                <label htmlFor="">Subject</label>
                                <input type="text" />
                            </li>
                            <li>
                                <label htmlFor="">Message</label>
                                <textarea></textarea>
                            </li>
                            <li>
                                <button>Submit</button>
                            </li>
                        </ul>
                    </form>
                </article>
            </section>       
        </>
    )
}