

export const CartFeatures = ({titulo, id, children}) => {
    return (
        <article className="cart-features">
            <label htmlFor={id}>
                {titulo}
            </label>
            <input type="checkbox" name="cart-features" id={id}/>
            <div className="accordeon">
                {children}
            </div>
        </article>
    )
}