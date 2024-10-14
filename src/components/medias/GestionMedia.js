import ModalCrearMedias from './ModalCrearMedias'
import ModalEditarMedias from './ModalEditarMedias'
import TablaMedias from './TablaMedias'


export default function GestionMedia({clearMedia,seleccionarMediaParaEditar,guardarMedia,handleChange,tiposMultimedia,productorasActivos, generosActivos,directoresActivos,media, medias, obtenerNombreGenero, obtenerNombreDirector, obtenerNombreProductora, obtenerNombreTipoMultimedia }) {
  return (
      <div>
        <ModalCrearMedias
          media={media}
          generosActivos={generosActivos}
          directoresActivos={directoresActivos}
          productorasActivos={productorasActivos}
          tiposMultimedia={tiposMultimedia}
          handleChange={handleChange}
          guardarMedia={guardarMedia}
        />
        <ModalEditarMedias
          media={media}
          handleChange={handleChange}
          guardarMedia={guardarMedia}
          generosActivos={generosActivos}
          directoresActivos={directoresActivos}
          productorasActivos={productorasActivos}
          tiposMultimedia={tiposMultimedia}
        />
        <h3 class="text-center">Medias</h3>
      <TablaMedias
        medias={medias}
        obtenerNombreGenero={obtenerNombreGenero}
        obtenerNombreDirector={obtenerNombreDirector}
        obtenerNombreProductora={obtenerNombreProductora}
        obtenerNombreTipoMultimedia={obtenerNombreTipoMultimedia}
        seleccionarMediaParaEditar={seleccionarMediaParaEditar}
      />
        <button onClick={clearMedia} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalCrearMedias">Crear Media</button>
      </div>
  )
}
