import React, { useEffect, useState } from 'react'
import { consultarTiposMultimedia, crearTipoMultimedia } from '../../services/TipoMultimediaService'
import ModalCrearTiposMultimedia from './ModalCrearTiposMultimedia'
import TablaTiposMultimedia from './TablaTiposMultimedia'

export default function TiposMultimedia() {

    const [tiposMultimedia, setTiposMultimedia] = useState([])
    const [tipoMultimedia, setTipoMultimedia] = useState({
      nombre: '',
      descripcion: '',
    })
    useEffect(() => {
      listarTiposMultimedia()
    }, [])

    const listarTiposMultimedia = async () => {
      try {
        const { data } = await consultarTiposMultimedia()
        setTiposMultimedia(data)
      } catch (e) {
        console.log(e)
      }
    
    }
    const guardarTipoMultimedia = async () => {
      try {
        await crearTipoMultimedia(tipoMultimedia)
        clearTipoMultimedia()
        listarTiposMultimedia()
      } catch (e) {
        console.log(e)
      }
    
    }
    const handleChange = (e) => {
      setTipoMultimedia({
        ...tipoMultimedia,
        [e.target.name]: e.target.value
      })
    }
    
    const clearTipoMultimedia = () => {
      setTipoMultimedia({
        ...tipoMultimedia,
        nombre: '',
        descripcion: ''
      })
    }

    return (
      <div>
        <ModalCrearTiposMultimedia
          tipoMultimedia={tipoMultimedia}
          handleChange={handleChange}
          guardarTipoMultimedia={guardarTipoMultimedia}
        />
        <h3 class="text-center">Tipos Multimedia</h3>
        <TablaTiposMultimedia
          tiposMultimedia={tiposMultimedia}
        />
        <button onClick={clearTipoMultimedia} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear tipo multimedia</button>
      </div>
    )

}


