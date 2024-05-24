import { getData } from "../services/getData"
import { getOneData } from "../services/getOneData"
import { getUser, updateUser } from "../services/getUser"

export function useData() {
    const getDatos = async (model) => {
        const doc = await getData(model)
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

    const getOneDato = async (model, id) => {
        const doc = await getOneData(model, id)
        return doc
    }

    const getProfile = async () => {
        const doc = await getUser()
        
        return doc
    }
    
    const updateProfile = async (id, body) => {
        const doc = await updateUser(id, body)
    
        return doc
    }

    return { getDatos, getDatosByCategoria, getOneDato, getProfile, updateProfile }
} 