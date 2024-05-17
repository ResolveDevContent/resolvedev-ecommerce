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
                                <li>
                                    <article className='aside-filtros-filter'>
                                        <input type="radio" name="radio-fitros" id="filtro-1"/>
                                        <label htmlFor="filtro-1">Filtro 1</label>
                                        <div className='filter-accordeon'>
                                            <ul>
                                                <li>
                                                    <input type="checkbox" name='filtro-1' id='filtro-1-a'/>
                                                    <label htmlFor='filtro-1-a'>
                                                        A
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" name='filtro-1' id='filtro-1-b'/>
                                                    <label htmlFor='filtro-1-b'>
                                                        B
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" name='filtro-1' id='filtro-1-c'/>
                                                    <label htmlFor='filtro-1-c'>
                                                        C
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className='aside-filtros-filter'>
                                        <input type="radio" name="radio-fitros" id="filtro-2"/>
                                        <label htmlFor="filtro-2">Filtro 2</label>
                                        <div className='filter-accordeon'>
                                            <ul>
                                                <li>
                                                    <input type="checkbox" name='filtro-2' id='filtro-2-d'/>
                                                    <label htmlFor='filtro-2-d'>
                                                        D
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" name='filtro-2' id='filtro-2-e'/>
                                                    <label htmlFor='filtro-2-e'>
                                                        E
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" name='filtro-2' id='filtro-2-f'/>
                                                    <label htmlFor='filtro-2-f'>
                                                        F
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
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