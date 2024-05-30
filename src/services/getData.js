import { fmtImporte } from "../utils/site";

export const getData = async (model, setLoading) => {
    try {
        const response = await fetch(`http://localhost:3000/abm/${model}/listar`, {
            method: "GET"
        })
        const json = await response.json()
        json.forEach(elem => { 
            elem.id = elem._id;
            
            let price = 0
            let modifiedPrice = ''
            if(elem.descuento > 0) {
                price = Number(elem.precio) + Number((Number(elem.precio) * (Number(elem.descuento) / 100)).toFixed(2))
                modifiedPrice = fmtImporte(price)
            }

            elem.fmt_modified_price = modifiedPrice

            if(elem.precio) {
                elem.fmt_precio = fmtImporte(elem.precio)
            }

        });

        return json
    } catch (err){
        throw new Error('Error al obtener los datos')
    } finally {
        setLoading(false)
    }

}