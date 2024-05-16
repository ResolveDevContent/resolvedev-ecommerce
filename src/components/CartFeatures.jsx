import { ArrowRight } from '../icons/Icons'

export const CartFeatures = ({titulo, id, checked, children}) => {
    return (
        <article className="cart-features">
            <input type="checkbox" name="cart-features" id={id} defaultChecked={checked}/>
            <label htmlFor={id}>
                <ArrowRight/>
                {titulo}
            </label>
            <div className="accordeon">
                {children}
            </div>
        </article>
    )
}