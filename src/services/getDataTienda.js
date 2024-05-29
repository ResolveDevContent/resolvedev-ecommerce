export const getDataTienda = async (setLoading) => {
    try {
        const response = await fetch(`http://localhost:3000/abm/tienda/listar`, {
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