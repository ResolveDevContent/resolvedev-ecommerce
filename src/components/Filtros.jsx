import '../css/Filtros.css'
import { Filters } from '../icons/Icons'

export const Filtros = () => {
    return (
        <section className="filtros">
            <div className="filter">
                <ul>
                    <li>
                        <button>
                            <Filters />  
                            Filtros
                        </button>
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