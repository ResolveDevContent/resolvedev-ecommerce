import { Plus, Minus, Trash } from "../icons/Icons"
import Prod from '../images/prod.jpg'

export const CartProducts = ({products}) => {

    const columns = Object.keys(products[0]).slice(1,4);
        
    const rows = products.map((data) => {
        return Object.values(data).slice(1,4)
    })

    console.log(columns, rows)

    return (
        <div className="table">
            <ul className='row columns'>
                <li></li>
                {columns.map((product, index) => (
                    <li key={index}>
                        <span>{product}</span>
                    </li> 
                ))}
                <li>Cantidad</li>
                <li></li>
            </ul>
            <ul className='row'>
                <li className='product-img'>
                    <img src={Prod} alt='product-img' />
                </li>
                {rows[0].map((product, index) => (
                    <li key={index}>
                        <span>{product}</span>
                    </li> 
                ))}
                <li>
                    <div className='input'>
                        <button>
                            <Minus />
                        </button>
                        <input type="number" defaultValue={1}/>
                        <button>
                            <Plus />   
                        </button>
                    </div>
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