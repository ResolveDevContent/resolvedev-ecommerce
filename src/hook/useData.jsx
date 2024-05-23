import { useState } from "react"
import { getData } from "../services/getData"
import { getOneData } from "../services/getOneData"

export function useData() {
    const [data, setData] = useState({})
    const [dataByCategoria, setDataByCategoria] = useState({})
    const [oneData, setOneData] = useState({})

    const getDatos = async (model) => {
        const doc = await getData(model)
        
        return doc
    }
    
    const getDatosByCategoria = async (model, categoria, subcategoria) => {
        const doc = await getData(model)
        const categorias = await getData("categorias")
        
        if(!categoria && doc.length == 0) { return; }

        if(categoria && !subcategoria) {
            const prodCategoria = categorias.find((cat) => cat.nombre.toLowerCase() == categoria)
            const docsByCategoria = doc.filter((row) => row.categorias == prodCategoria._id);
    
            if(docsByCategoria.length == 0) { return; }
            setDataByCategoria(docsByCategoria)
            
            return;
        }

        // const prodCategoria = categorias.find((cat) => cat.nombre.toLowerCase() == categoria)
        // const docsByCategoria = doc.filter((row) => row.categorias == prodCategoria._id);

        // if(docsByCategoria.length == 0) { return; }
        // setDataByCategoria(docsByCategoria)
    }

    const getOneDato = async (model, id) => {
        const doc = await getOneData(model, id)
        setOneData(doc)
    }

    return { data, dataByCategoria, oneData, getDatos, getDatosByCategoria, getOneDato }
} 