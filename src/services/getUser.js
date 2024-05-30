import Cookies from 'js-cookie'
import { URL } from '../utils/consts.js'

export const getUser = async () => {
    const token = Cookies.get("token-tienda");
    console.log(token)

    try {
        const response = await fetch(`${URL}/auth/tienda/perfil`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        const json = await response.json()

        return json.message
    } catch (err){
        throw new Error('Error al obtener los datos')
    }
}

export const updateUser = async (id, body) => {
    const token = Cookies.get("token-tienda")
    
    try {
        const response = await fetch(`${URL}/auth/tienda/perfil/modificar/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(body)
        })

        const json = await response.json()

        return json.message
    } catch (err) {
        throw new Error("Error")
    }
}




