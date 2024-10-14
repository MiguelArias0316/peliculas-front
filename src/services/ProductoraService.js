import { axiosConfig} from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
}

const crearProductora = (productora) => {
    const data = {
        nombre: productora.nombre,
        slogan: productora.slogan,
        descripcion: productora.descripcion
    }
    return axiosConfig.post('/productoras', data,{
        headers: headers
    })
}

const consultarProductoras = () => {
    return axiosConfig.get('/productoras',{
        headers:headers
    })
}

const editarProductoraPorId = (productora,id) =>{
    const data = {
        nombre: productora.nombre,
        slogan: productora.slogan,
        descripcion: productora.descripcion,
        estado: productora.estado
    }
    return axiosConfig.put(`/productoras/${id}`, data,{
        headers:headers
    })
}

export {
    crearProductora,
    consultarProductoras,
    editarProductoraPorId
}