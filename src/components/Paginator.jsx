import '../css/Paginator.css'

export const Paginator = () => {
    return (
        <footer className="paginator">
            <ul>
                <li>
                    <button>Anterior</button>
                </li>
                <li>
                    <span>1 de 11</span>
                </li>
                <li>
                    <button>Siguiente</button>
                </li>
            </ul>
        </footer>
    )
}