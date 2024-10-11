import { axiosConfig } from "../config/axiosConfig";

    const headers ={
        'Content-Type':'application/json'
    } 

const crearTipoMultimedia = (tipoMultimedia) => {
        const data = {
            nombre: tipoMultimedia.nombre,
            descripcion: tipoMultimedia.descripcion
        }
        return axiosConfig.post('/tiposMultimedia', data,{
            headers : headers
        })
}
const consultarTiposMultimedia = () =>{
        return axiosConfig.get('/tiposMultimedia',{
            headers : headers
        })
}
const editarTipoMultimediaPorId = (tipoMultimedia, id) => {

        const data = {
            nombre: tipoMultimedia.nombre,
            descripcion: tipoMultimedia.descripcion
        }
        return axiosConfig.put('/tiposMultimedia' + id, data,{
            headers : headers
        })
}

export {
    crearTipoMultimedia,
    consultarTiposMultimedia,
    editarTipoMultimediaPorId
}