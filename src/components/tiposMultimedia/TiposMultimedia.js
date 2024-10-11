import React, { useEffect, useState } from 'react'
import { consultarTiposMultimedia, crearTipoMultimedia } from '../../services/TipoMultimediaService'
import ModalTiposMultimedia from './ModalTiposMultimedia'
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
        <ModalTiposMultimedia
          tipoMultimedia={tipoMultimedia}
          handleChange={handleChange}
          guardarTipoMultimedia={guardarTipoMultimedia}
        />
        <h2>Tipos Multimedia</h2>
        <button onClick={clearTipoMultimedia} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear tipo multimedia</button>
        <TablaTiposMultimedia
          tiposMultimedia={tiposMultimedia}
        />
      </div>
    )

}


