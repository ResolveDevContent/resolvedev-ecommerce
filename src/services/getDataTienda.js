import { URL } from '../utils/consts.js'

export const getDataTienda = async (model, setLoading) => {
    try {
        const response = await fetch(`${URL}/abm/${model}/listar`, {
            method: "GET"
        })
        const json = await response.json()
        
        return json
    } catch (err){
        throw new Error('Error al obtener los datos')
    } finally {
        setLoading(false)
    }
}