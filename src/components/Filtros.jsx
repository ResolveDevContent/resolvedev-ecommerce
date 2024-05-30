import '../css/Filtros.css'
import { useContext, useEffect, useState } from 'react'
import { Filters, Close } from '../icons/Icons'
import { FilterContext } from '../context/Filter'
import { useData } from '../hook/useData'
import { Loading } from './Loading'

export const Filtros = ({setSelectValue, results}) => {
    const [ filtros, setFiltros] = useState([])
    const { getDatos, loading } = useData()
    const [ filters, setFilters ] = useState({})
    const { setQuery } = useContext(FilterContext)

    const listarDatos = async () => {
        const datos = await getDatos('filtros')
        setFiltros(datos)
    }

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

    useEffect(() => {
        listarDatos()
    }, [])

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
                                {filtros && filtros.length > 0 ? (
                                    filtros.map((filtrosItem, i) => (
                                        <li key={filtrosItem._id}>
                                            <article className='aside-filtros-filter'>
                                                <input type="radio" name="radio-fitros" id={"filtro-" + filtrosItem._id}/>
                                                <label htmlFor={"filtro-" + filtrosItem._id}>{filtrosItem.nombre}</label>
                                                <div className='filter-accordeon'>
                                                    <ul>
                                                        {filtrosItem.opciones.map(opcion => (
                                                            <li key={opcion._id}>
                                                                <input type="checkbox" 
                                                                    name={filtrosItem.nombre.toLowerCase()}
                                                                    id={filtrosItem.nombre.toLowerCase() + "-" + opcion.nombre.toLowerCase()} 
                                                                    value={opcion.nombre.toLowerCase()}
                                                                    onChange={changeFilters}
                                                                />
                                                                <label htmlFor={filtrosItem.nombre.toLowerCase() + "-" + opcion.nombre.toLowerCase()} >
                                                                    {opcion.nombre}
                                                                </label>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </article>
                                        </li>
                                    ))
                                ) : null}
                                <li className='btn-carrito'>
                                    <button onClick={(e) => applyFilters(e)}>Aplicar filtros</button>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <span>
                            Mostrando {results} resultados
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
                            <option value="descuento">Descuento</option>
                            <option value="mayor">Mayor precio</option>
                            <option value="menor">Menor precio</option>
                        </select>
                    </li>
                </ul>
            </div>
        </section>
    )
}