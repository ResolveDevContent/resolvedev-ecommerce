import { URL } from '../utils/consts.js'

export const getDataTienda = async (setLoading) => {
    try {
        const response = await fetch(`${URL}/abm/tienda/listar`, {
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