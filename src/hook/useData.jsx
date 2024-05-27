import { getData } from "../services/getData"
import { getDatosRelacionados } from "../services/getDatosRelacionados"
import { getOneData } from "../services/getOneData"
import { getUser, updateUser } from "../services/getUser"

export function useData() {
    const getDatos = async (model) => {
        const doc = await getData(model)
        if (!doc) return null

        return doc
    }

    const getDataRelacionados = async (model, categoria) => {
        console.log(categoria)
        const doc = await getDatosRelacionados(model, categoria)
        console.log(doc)
        if (!doc) return null

        return doc
    }
    
    const getDatosByCategoria = async (categoria) => {
        if(!categoria) return ('Categoria does not exist')

        const categorias = await getData("categorias")
        if(!categorias || categorias.length == 0) return null
        
        const prodCategoria = categorias.find((cat) => cat.nombre.toLowerCase() == categoria)
        if(!prodCategoria) return null
            
        return prodCategoria
    }

    const getFiltros = async (filtros, opciones) => {
        if(filtros.length == 0) return ('Filtros does not exist')

        const dbFiltros = await getData("filtros")
        if(!dbFiltros || dbFiltros.length == 0) return null
        
        const filters = []

        for(const filtro of filtros) {
            const prodFiltros = dbFiltros.find((filter) => filter.nombre.toLowerCase() == filtro)
            if(!prodFiltros) return null

            const filtroOpciones = []
            for(const opcion of opciones) {
                const filtroOpcion = prodFiltros.opciones.find((opt) => opt.nombre.toLowerCase() == opcion)
                if(!filtroOpcion) return null

                filtroOpciones.push(filtroOpcion._id)
            }

            filters.push({filtro: prodFiltros._id, opciones: filtroOpciones})
        }
        
        return filters
    }

    const getOneDato = async (model, id) => {
        const doc = await getOneData(model, id)
        if (!doc) return null

        return doc
    }

    const getProfile = async () => {
        const doc = await getUser()
        if (!doc) return null
        
        return doc
    }
    
    const updateProfile = async (id, body) => {
        const doc = await updateUser(id, body)
        if (!doc) return null
    
        return doc
    }

    return { getDatos, getDataRelacionados, getDatosByCategoria, getOneDato, getProfile, updateProfile, getFiltros }
} 