import { Breadcumb } from "../components/Breadcumb"
import Tienda from '../images/tienda.png'
import { Location, Phone, Clock } from "../icons/Icons"
import '../css/contacto.css'

export const Contacto = () => {
    return (
        <>
            <Breadcumb titulo={"Contacto"} imagen={Tienda} breadcumb={"Home > Contacto"}/>
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
                            <li className="item">
                                <Location />
                                <div>
                                    <em>Adress</em>
                                    <span>236 5th SE Avenue, New York NY10000, United States</span>
                                </div>
                            </li>
                            <li className="item">
                                <Phone />
                                <div>
                                    <em>Phone</em>
                                    <span>
                                        Mobile: +(84) 546-6789
                                        <br/>
                                        Hotline: +(84) 456-6789
                                    </span>
                                </div>
                            </li>
                            <li className="item">
                                <Clock />
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
                        <ul className="ul-form">
                            <li>
                                <div className="input">
                                    <label>Your name</label>
                                    <input type="text" placeholder="Abc"/>
                                </div>
                            </li>
                            <li>
                                <div className="input">
                                    <label>Your email</label>
                                    <input type="text" placeholder="Abc@def.com"/>
                                </div>
                            </li>
                            <li>
                                <div className="input">
                                    <label>Subject</label>
                                    <input type="text" placeholder="This is an optional"/>
                                </div>
                            </li>
                            <li>
                                <div className="input">
                                    <label>Message</label>
                                    <textarea placeholder="Hi! i’d like to ask about"></textarea>
                                </div>
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