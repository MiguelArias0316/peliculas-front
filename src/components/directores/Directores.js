import React, { useEffect, useState } from 'react'
import { consultarDirectores, crearDirector, editarDirectorporId } from '../../services/DirectorService'
import ModalCrearDirectores from './ModalCrearDirectores'
import TablaDirectores from './TablaDirectores'
import ModalEditarDirectores from './ModalEditarDirectores'

export default function Directores() {

  const [directores, setDirectores] = useState([])
  const [director, setDirector] = useState({
    nombre: '',
  })
  useEffect(() => {
    listarDirectores()
  }, [])

  const listarDirectores = async () => {
    try {
      const {data} = await consultarDirectores()
      setDirectores(data)
    } catch (e) {
      console.log(e)
    }
  }
  const guardarDirector = async () =>{
    try{
      if(director._id){
        await editarDirectorporId(director,director._id)
      }else{
        await crearDirector(director)
      }
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
      nombre: '',
      estado:''
    })
  }
  const seleccionarDirectorParaEditar = (director) => {
    setDirector(director);
  };

  return (
    <div>
      <ModalCrearDirectores
      director={director}
      handleChange={handleChange}
      guardarDirector={guardarDirector}
      />
      <ModalEditarDirectores
      director={director}
      handleChange={handleChange}
      guardarDirector={guardarDirector}
      />
      <h3 class="text-center">Directores</h3>
      <TablaDirectores
        directores={directores}
        seleccionarDirectorParaEditar={seleccionarDirectorParaEditar}
      />
      <button onClick={clearDirector} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear director</button>
    </div>
  )
}
