import { Home } from "../icons/Icons"

export const EmptyState = ({texto}) => {
    return (
        <div className="empty-state">
            <div>
                <Home />
                <span>{texto}</span>
            </div>
        </div>
    )
}