import '../css/Banner.css'

export const Banner = () => {
    return (
        <section className="banners">
            <ul>
                <li>
                    <figure>
                        <img src="https://images.unsplash.com/photo-1533673662755-98c661c601a1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" /> 
                        {/* <figcaption>
                            <article>
                                <div className="home-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                </div>
                                <footer>
                                    <a href="#servicios">¡Comencemos!</a>
                                </footer>
                            </article>
                        </figcaption> */}
                    </figure>
                </li>
            </ul>
        </section>
    )
}