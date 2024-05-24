import { FilterContext } from '../context/Filter'
import '../css/Filtros.css'

import { Filters, Close } from '../icons/Icons'
import { useContext, useState } from 'react'

export const Filtros = ({setSelectValue}) => {
    const [ filters, setFilters ] = useState({})
    const { setQuery } = useContext(FilterContext)

    const handleChange = (e) => {
        setSelectValue(e.target.value)
        console.log(e.target.value)
    }

    const changeFilters = (e) => {
        const { name, value } = e.target;
        let arr = [];

        if(e.target.checked) {
            if(!filters.hasOwnProperty(name)) {
                arr.push(value);
            } else {
                arr = arr.concat(filters[name]);
                arr.push(value)
            }
        } else {
            arr = arr.concat(filters[name]);
            let idx = arr.findIndex((item) => item == value)
            
            if(idx == -1) {
                return;
            }

            arr.splice(idx, 1)
        }

        setFilters({
            ...filters,
            [name]: arr,
        })
    }

    const applyFilters = (e) => {
        e.preventDefault()

        let queryFilter = filters;

        queryFilter = Object.keys(queryFilter).reduce(function(_, key) {
            _.push(key + '-' + queryFilter[key].join('-'));
            return _;
        }, [ ]);

        queryFilter = queryFilter.join('~');

        const url = new URL(location.href);
        url.searchParams.set('query', queryFilter);

        history.replaceState({ }, null, url.toString());
        window.dispatchEvent(new Event('replacestate'));

        setQuery(queryFilter)
    }

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
                                        <input type="radio" name="radio-fitros" id="filtro-color"/>
                                        <label htmlFor="filtro-color">Color</label>
                                        <div className='filter-accordeon'>
                                            <ul>
                                                <li>
                                                    <input type="checkbox" 
                                                        name='color' 
                                                        id='color-marron' 
                                                        value='marron'
                                                        onChange={changeFilters}
                                                    />
                                                    <label htmlFor='color-marron'>
                                                        Marron
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" 
                                                        name='color' 
                                                        id='color-rojo' 
                                                        value='rojo'
                                                        onChange={changeFilters}
                                                    />
                                                    <label htmlFor='color-rojo'>
                                                        Rojo
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" 
                                                        name='color' 
                                                        id='color-beige' 
                                                        value='beige'
                                                        onChange={changeFilters}
                                                    />
                                                    <label htmlFor='color-beige'>
                                                        Beige
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className='aside-filtros-filter'>
                                        <input type="radio" name="radio-fitros" id="filtro-tipo"/>
                                        <label htmlFor="filtro-tipo">Tipo</label>
                                        <div className='filter-accordeon'>
                                            <ul>
                                                <li>
                                                    <input type="checkbox" 
                                                        name='tipo' 
                                                        id='tipo-deco' 
                                                        value='deco'
                                                        onChange={changeFilters}
                                                    />
                                                    <label htmlFor='tipo-deco'>
                                                        Deco
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" 
                                                        name='tipo' 
                                                        id='tipo-lana'
                                                        value='lana'
                                                        onChange={changeFilters}
                                                    />
                                                    <label htmlFor='tipo-lana'>
                                                        Lana
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" 
                                                        name='tipo' 
                                                        id='tipo-tejido'
                                                        value='tejido'
                                                        onChange={changeFilters}
                                                    />
                                                    <label htmlFor='tipo-tejido'>
                                                        Tejido
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                                <li className='btn-carrito'>
                                    <button onClick={(e) => applyFilters(e)}>Aplicar filtros</button>
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
                        <select name="sort" id="sort" onChange={handleChange}>
                            <option value="">Por defecto</option>
                            <option value="nombre">Nombre</option>
                            <option value="mayor">Mayor precio</option>
                            <option value="menor">Menor precio</option>
                        </select>
                    </li>
                </ul>
            </div>
        </section>
    )
}