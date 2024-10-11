import React, { useEffect, useState } from 'react'
import { consultarGeneros, crearGenero } from '../../services/GeneroService'
import ModalGeneros from './ModalGeneros'
import TablaGeneros from './TablaGeneros'

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
      await crearGenero(genero)
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
      descripcion: ''
    })
  }
  return (
      <div>
        <ModalGeneros
          genero={genero}
          handleChange={handleChange}
          guardarGenero={guardarGenero}
        />
        <h2>Géneros</h2>
        <button onClick={clearGenero} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear género</button>
      <TablaGeneros
        generos={generos}
      />
      </div>
  )
}
