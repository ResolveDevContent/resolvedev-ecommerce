import { Plus, Minus, Trash } from "../icons/Icons"
import Img from '../images/img.png'

export const CartProducts = () => {
    return (
        <div className="table">
        <ul className='row columns'>
            <li></li>
            <li>
                <span>Producto</span>
            </li> 
            <li>
                <span>Precio</span>
            </li> 
            <li>
                <span>Cantidad</span>
            </li> 
            <li>
                <span>Subtotal</span>
            </li> 
            <li></li>
        </ul>
        <ul className='row'>
            <li className='product-img'>
                <img src={Img} alt='product-img' />
            </li>
            <li>
                <span>Producto</span>
            </li>
            <li>
                <span>$2.000.000</span>
            </li>
            <li>
                <div className='input'>
                    <button>
                        <Minus />
                    </button>
                    <input type="number"/>
                    <button>
                        <Plus />   
                    </button>
                </div>
            </li>
            <li>
                <span>$2.000.000</span>
            </li>
            <li>
                <a href="#">
                    <Trash />
                </a>
            </li>
        </ul>
    </div>
    )
}