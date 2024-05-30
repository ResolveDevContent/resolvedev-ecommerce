import { fmtImporte } from "../utils/site";

export const getOneData = async (model, id, setLoading) => {
    try {
        const response = await fetch(`http://localhost:3000/abm/${model}/listar/${id}`, {
            method: "GET"
        })
        const json = await response.json()
        json.id = json._id;
        
        if(json.precio) {
            json.fmt_precio = fmtImporte(json.precio)
        }

        let price = 0
        let modifiedPrice = ''
        if(json.descuento > 0) {
            price = Number(json.precio) + Number((Number(json.precio) * (Number(json.descuento) / 100)).toFixed(2))
            modifiedPrice = fmtImporte(price)
            modifiedPrice = modifiedPrice
        }

        json.fmt_modified_price = modifiedPrice

        setLoading(false)
        return json
    } catch (err){
        throw new Error('Error al obtener los datos')
    }
}
