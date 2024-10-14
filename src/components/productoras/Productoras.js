import React, { useEffect, useState } from 'react'
import { consultarProductoras, crearProductora, editarProductoraPorId } from '../../services/ProductoraService'
import ModalCrearProductoras from './ModalCrearProductoras'
import TablaProductoras from './TablaProductoras'
import ModalEditarProductoras from './ModalEditarProductoras'

export default function Productoras() {

  const [productoras, setProductoras] = useState([])
  const [productora, setProductora] = useState({
    nombre: '',
    slogan: '',
    descripcion: ''
  })

  useEffect(() => {
    listarProductoras()
  }, [])

  const listarProductoras = async () => {
    try {
      const { data } = await consultarProductoras()
      setProductoras(data)
    } catch (e) {
      console.log(e)
    }
  }

  const guardarProductora = async () => {
    try {
      if(productora._id){
        await editarProductoraPorId(productora,productora._id)
      }else{
        await crearProductora(productora)
      }
      listarProductoras()
      clearProductora()
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (e) => {
    setProductora({
      ...productora,
      [e.target.name]: e.target.value
    })
  }
  const clearProductora = () => {
    setProductora({
      ...productora,
      nombre: '',
      slogan: '',
      descripcion: '',
      estado:''
    })
  }
  const seleccionarProductoraParaEditar = (productora) =>{
    setProductora(productora);
  }
  return (
    <div>
      <ModalCrearProductoras
        productora={productora}
        handleChange={handleChange}
        guardarProductora={guardarProductora}
      />
      <ModalEditarProductoras
      productora={productora}
      handleChange={handleChange}
      guardarProductora={guardarProductora}
      />
      <h3 class="text-center">Productoras</h3>
      <TablaProductoras
        productoras={productoras}
        seleccionarProductoraParaEditar={seleccionarProductoraParaEditar}
      />
      <button onClick={clearProductora} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear productora</button>
    </div>
  )

}
