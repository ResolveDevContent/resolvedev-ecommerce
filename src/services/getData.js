import { fmtImporte } from "../utils/site";

export const getData = async (model) => {
    try {
        const response = await fetch(`http://localhost:3000/abm/${model}/listar`, {
            method: "GET"
        })
        const json = await response.json()
        json.forEach(elem => { 
            elem.id = elem._id;
            
            if(elem.precio) {
                elem.fmt_precio = fmtImporte(elem.precio)
            }
        });

        return json
    } catch (err){
        throw new Error('Error al obtener los datos')
    }
}