import { useState } from "react"
import { getData } from "../services/getData"
import { getOneData } from "../services/getOneData"

export function useData() {
    const [data, setData] = useState({})
    const [oneData, setOneData] = useState({})

    const getDatos = async (model) => {
        const doc = await getData(model)
        setData(doc)
    }
    
    const getOneDato = async (model, id) => {
        const doc = await getOneData(model, id)
        setOneData(doc)
    }

    return { data, oneData, getDatos, getOneDato }
} 