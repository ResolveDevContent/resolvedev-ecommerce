import { Plus, Minus, Trash } from "../icons/Icons"
import Prod from '../images/prod.jpg'

export const CartProducts = ({products}) => {
    return (
        <div className="table">
            <ul className='row columns'>
                <li></li>
                {products.columns.map((product, index) => (
                    <li key={index}>
                        <span>{product}</span>
                    </li> 
                ))}
                <li></li>
            </ul>
            <ul className='row'>
                <li className='product-img'>
                    <img src={Prod} alt='product-img' />
                </li>
                {products.rows.map((product, index) => (
                    index == 2 ? (
                        <li key={index}>
                            <div className='input'>
                                <button>
                                    <Minus />
                                </button>
                                <input type="number" defaultValue={product}/>
                                <button>
                                    <Plus />   
                                </button>
                            </div>
                    </li>
                    ) : (
                        <li key={index}>
                            <span>{product}</span>
                        </li> 
                    )
                ))}
                <li>
                    <a href="#">
                        <Trash />
                    </a>
                </li>
            </ul>
        </div>
    )
}