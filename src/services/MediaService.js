import { axiosConfig } from "../config/axiosConfig"

    const headers ={
        'Content-Type':'application/json'
    } 

const crearMedia = (media) => {
        const data = {
            serial:media.serial,
            titulo:media.titulo,
            sinopsis:media.sinopsis,
            url:media.url,
            imagen:media.imagen,
            fecha_estreno:media.fecha_estreno,
            genero:media.genero,
            director:media.director,
            productora:media.productora,
            tipoMultimedia:media.tipoMultimedia,
        }
        return axiosConfig.post('/media', data,{
            headers : headers
        })
}
const consultarMedia = () =>{
        return axiosConfig.get('/media',{
            headers : headers
        })
}
const editarMediaPorId = (media, id) => {

        const data = {
            estado:media.estado,
            serial:media.serial,
            titulo:media.titulo,
            sinopsis:media.sinopsis,
            url:media.url,
            imagen:media.imagen,
            fecha_estreno:media.fecha_estreno,
            genero:media.genero,
            director:media.director,
            productora:media.productora,
            tipoMultimedia:media.tipoMultimedia,
        }
        return axiosConfig.put(`/media/${id}`, data, {
            headers : headers
        })
}

export {
    crearMedia,
    consultarMedia,
    editarMediaPorId
}
