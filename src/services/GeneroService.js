import { axiosConfig } from "../config/axiosConfig";

    const headers ={
        'Content-Type':'application/json'
    } 

const crearGenero = (genero) => {
        const data = {
            nombre: genero.nombre,
            descripcion: genero.descripcion
        }
        return axiosConfig.post('/generos', data,{
            headers : headers
        })
}
const consultarGeneros = () =>{
        return axiosConfig.get('/generos',{
            headers : headers
        })
}
const editarGeneroPorId = (genero, id) => {

        const data = {
            nombre: genero.nombre,
            descripcion: genero.descripcion,
            estado: genero.estado
        }
        return axiosConfig.put(`/generos/${id}`, data, {
            headers : headers
        })
}

export {
    crearGenero,
    consultarGeneros,
    editarGeneroPorId
}