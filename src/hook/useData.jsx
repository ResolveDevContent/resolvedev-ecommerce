import { getData } from "../services/getData"
import { getOneData } from "../services/getOneData"

export function useData() {
    const getDatos = async (model) => {
        const doc = await getData(model)
        return doc
    }
    
    const getDatosByCategoria = async (categoria) => {
        if(!categoria) return
        
        const categorias = await getData("categorias")
        if(!categorias || categorias.length == 0) return
        
        const prodCategoria = categorias.find((cat) => cat.nombre.toLowerCase() == categoria)
        if(!prodCategoria) return
            
        return prodCategoria
    }

    const getOneDato = async (model, id) => {
        const doc = await getOneData(model, id)
        return doc
    }

    return { getDatos, getDatosByCategoria, getOneDato }
} 