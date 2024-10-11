import React, { useEffect, useState } from 'react'
import { consultarDirectores, crearDirector } from '../../services/DirectorService'
import ModalDirectores from './ModalDirectores'
import TablaDirectores from './TablaDirectores'

export default function Directores() {

  const [directores, setDirectores] = useState([])
  const [director, setDirector] = useState({
    nombre: '',
    descripcion: ''
  })
  useEffect(() => {
    listarDirectores()
  }, [])

  const listarDirectores = async () => {
    try {
      const { data } = await consultarDirectores()
      setDirectores(data)
    } catch (e) {
      console.log(e)
    }
  }
  const guardarDirector = async () =>{
    try{
      await crearDirector(director)
      listarDirectores()
      clearDirector()
    }catch(e){
      console.log(e)
    }
  }

  const handleChange = (e) =>{
    setDirector({
      ...director,
      [e.target.name] : e.target.value
    })
  }

  const clearDirector = () =>{
    setDirector({
      ...director,
      nombre: ''
    })
  }

  return (
    <div>
      <ModalDirectores
      director={director}
      handleChange={handleChange}
      guardarDirector={guardarDirector}
      />
      <h2>Directores</h2>
      <button onClick={clearDirector} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear director</button>
      <TablaDirectores
        directores={directores}
      />
    </div>
  )
}
