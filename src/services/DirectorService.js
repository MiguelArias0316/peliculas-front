import { axiosConfig } from "../config/axiosConfig"

const headers = {
    'Content-Type':'application/json'
}
const crearDirector = (director) => {
    const data = {
        nombre: director.nombre,
    }
    return axiosConfig.post('/directores', data,{
        headers : headers
    })
}

const consultarDirectores = () => {
    return axiosConfig.get('/directores',{
        headers : headers
    })
}

const editarDirectorporId = (director, id) => {
    const data = {
        nombre: director.nombre
    }
    return axiosConfig.put('/directores' + id, data,{
        headers : headers
    })
}

export {
    crearDirector,
    consultarDirectores,
    editarDirectorporId
}