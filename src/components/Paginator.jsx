import '../css/Paginator.css'

export const Paginator = () => {
    return (
        <footer className="paginator">
            <ul>
                <li>
                    <div className='btn-carrito'>
                        <button>Anterior</button>
                    </div>
                </li>
                <li>
                    <span>1 de 11</span>
                </li>
                <li>
                    <div className='btn-carrito'>
                        <button>Siguiente</button>
                    </div>
                </li>
            </ul>
        </footer>
    )
}