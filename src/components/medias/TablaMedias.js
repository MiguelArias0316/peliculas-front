import React from 'react'

export default function TablaMedias({medias,obtenerNombreGenero,obtenerNombreDirector,obtenerNombreProductora,obtenerNombreTipoMultimedia,seleccionarMediaParaEditar,}) {
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="row"></th>
        <th scope="col">Titulo</th>
        <th scope="col">Sinopsis</th>
        <th scope="col">Estado</th>
        <th scope="col">Fecha de estreno</th>
        <th scope="col">Genero</th>
        <th scope="col">Director</th>
        <th scope="col">Productora</th>
        <th scope="col">Tipo Media</th>
        <th scope="col">Acción</th>
      </tr>
    </thead>
    <tbody>
      {
        medias.map((media, index) => {
          return (
            <tr key={media._id}>
              <th scope="row">{index + 1}</th>
              <td>{media.titulo}</td>
              <td>{media.sinopsis}</td>
              <td>{media.estado ? 'Activo' : 'Inactivo'}</td>
              <td>{media.fecha_estreno}</td>
              <td>{obtenerNombreGenero(media.genero)}</td>
              <td>{obtenerNombreDirector(media.director)}</td>
              <td>{obtenerNombreProductora(media.productora)}</td>
              <td>{obtenerNombreTipoMultimedia(media.tipoMultimedia)}</td>
              <td><button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#modalEditarMedias" onClick={() => seleccionarMediaParaEditar(media)}>Editar</button></td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
  )
}
