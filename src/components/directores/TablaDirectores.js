import React from 'react'

export default function TablaDirectores({directores, seleccionarDirectorParaEditar}) {
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="row"></th>
        <th scope="col">Director</th>
        <th scope="col">Estado</th>
        <th scope="col">Fecha creación</th>
        <th scope="col">Acción</th>
      </tr>
    </thead>
    <tbody>
      {
        directores.map((director, index) => {
          return (
            <tr key={director._id}>
              <th scope="row">{index + 1}</th>
              <td>{director.nombre}</td>
              <td>{director.estado ? 'Activo' : 'Inactivo'}</td>
              <td>{director.fecha_creacion}</td>
              <td><button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#modalEditarDirectores" onClick={() => seleccionarDirectorParaEditar(director)}>Editar</button></td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
  )
}

