import '../css/Paginator.css'

export const Paginator = ({currentPage, setCurrentPage, nPages}) => {

    const next = () => {
        if(currentPage !== nPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prev = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <footer className="paginator">
            <ul>
                <li>
                    <div className='btn-carrito'>
                        <button onClick={prev} className={currentPage == 1 ? "disabled" : ""}>Anterior</button>
                    </div>
                </li>
                <li>
                    <span>{currentPage + " de " + nPages}</span>
                </li>
                <li>
                    <div className='btn-carrito'>
                        <button onClick={next} className={currentPage == nPages ? "disabled" : ""}>Siguiente</button>
                    </div>
                </li>
            </ul>
        </footer>
    )
}