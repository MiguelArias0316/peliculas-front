import React, { useEffect, useState } from 'react'
import { consultarProductoras, crearProductora } from '../../services/ProductoraService'
import ModalProductoras from './ModalProductoras'
import TablaProductoras from './TablaProductoras'

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
      await crearProductora(productora)
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
      descripcion: ''
    })
  }
  return (
    <div>
      <ModalProductoras
        productora={productora}
        handleChange={handleChange}
        guardarProductora={guardarProductora}
      />
      <h2>Productoras</h2>
      <button onClick={clearProductora} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear productora</button>
      <TablaProductoras
        productoras={productoras}
      />
    </div>
  )

}
