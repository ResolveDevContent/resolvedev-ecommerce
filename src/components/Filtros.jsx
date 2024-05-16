import '../css/Filtros.css'
import { Filters, Close } from '../icons/Icons'

export const Filtros = () => {
    return (
        <section className="filtros">
            <div className="filter">
                <ul>
                    <li className='filtros-container'>
                        <label htmlFor='filtros'>
                            <Filters />  
                            Filtros
                        </label>
                        <input type="checkbox" id='filtros' name='inpt-filtros' />
                        <div className='aside-filtros'>
                            <label htmlFor="filtros">
                                <Close />
                            </label>
                            <ul>
                                <li>Filtro 1</li>
                                <li>Filtro 2</li>
                                <li>Filtro 3</li>
                                <li>Filtro 4</li>
                                <li>Filtro 5</li>
                                <li>Filtro 6</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <span>
                            Mostrando 250 productos
                        </span>
                    </li>
                </ul>
            </div>
            <div className="sort">
                <ul>
                    <li>
                        <label htmlFor="sort">Ordenar por</label>
                        <select name="sort" id="sort-products">
                            <option value="">Por defecto</option>
                            <option value="">Más vendido</option>
                            <option value="">Mayor precio</option>
                            <option value="">Menor precio</option>
                        </select>
                    </li>
                </ul>
            </div>
        </section>
    )
}