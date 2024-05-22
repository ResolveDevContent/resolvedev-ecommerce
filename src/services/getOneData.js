export const getOneData = async (model, id) => {
    try {
        const response = await fetch(`http://localhost:3000/abm/${model}/listar/${id}`, {
            method: "GET"
        })
        const json = await response.json()
        json.forEach(elem => elem.id = elem._id);
        
        return json
    } catch (err){
        throw new Error('Error al obtener los datos')
    }
}
