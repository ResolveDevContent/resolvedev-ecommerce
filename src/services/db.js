export const getData = (model, setData) => {
    try {
        fetch(`http://localhost:3000/abm/${model}/listar`, {
            method: "GET"
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setData(json)
        })
        .catch(err => {
            console.log(err)
        })
    } catch (err){
        console.log(err)
    }
}

export const getOneData = (model, id, setData) => {
    try {
        fetch(`http://localhost:3000/abm/${model}/listar/${id}`, {
            method: "GET"
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setData(json)
        })
        .catch(err => {
            console.log(err)
        })
    } catch (err) {
        console.log(err)
    }
}