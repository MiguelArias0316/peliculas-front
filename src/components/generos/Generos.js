import React, { useEffect, useState } from 'react'
import { consultarGeneros, crearGenero, editarGeneroPorId } from '../../services/GeneroService'
import ModalCrearGeneros from './ModalCrearGeneros'
import TablaGeneros from './TablaGeneros'
import ModalEditarGeneros from './ModalEditarGeneros'

export default function Generos() {

  const [generos, setGeneros] = useState([])
  const [genero, setGenero] = useState({
    nombre: '',
    descripcion: ''
  })
  useEffect(() => {
    listarGeneros()
  }, [])

  const listarGeneros = async () => {
    try {
      const { data } = await consultarGeneros()
      setGeneros(data)
    } catch (e) {
      console.log(e)
    }

  }
  const guardarGenero = async () => {
    try {
      if(genero._id){
        await editarGeneroPorId(genero, genero._id)
      }else{
        await crearGenero(genero)

      }
      listarGeneros()
      clearGenero()
    } catch (e) {
      console.log(e)
    }

  }
  const handleChange = (e) => {
    setGenero({
      ...genero,
      [e.target.name]: e.target.value
    })
  }

  const clearGenero = () => {
    setGenero({
      ...genero,
      nombre: '',
      descripcion: '',
      estado: ''
    })
  }
  const seleccionarGeneroParaEditar = (genero) => {
    setGenero(genero);
  };
  return (
      <div>
        <ModalCrearGeneros
          genero={genero}
          handleChange={handleChange}
          guardarGenero={guardarGenero}
        />
        <ModalEditarGeneros
          genero={genero}
          handleChange={handleChange}
          guardarGenero={guardarGenero}
        />
        <h3 class="text-center">Géneros</h3>
      <TablaGeneros
        generos={generos}
        seleccionarGeneroParaEditar={seleccionarGeneroParaEditar}
      />
        <button onClick={clearGenero} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalCrearGeneros">Crear género</button>
      </div>
  )
}
