import { Link } from "react-router-dom"
import { Home } from "../icons/Icons"

export const EmptyState = ({texto, btn = '', path}) => {
    return (
        <div className="empty-state">
            <div>
                <Home />
                <span>{texto}</span>
                {btn ? 
                    <div className="btn-carrito">
                        <Link to={path}>
                            {btn}
                        </Link>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}