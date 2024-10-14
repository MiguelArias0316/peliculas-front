import React from 'react'

export default function TablaGeneros({generos,seleccionarGeneroParaEditar}) {
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="row"></th>
        <th scope="col">Género</th>
        <th scope="col">Descripción</th>
        <th scope="col">Estado</th>
        <th scope="col">Fecha creación</th>
        <th scope="col">Acción</th>
      </tr>
    </thead>
    <tbody>
      {
        generos.map((genero, index) => {
          return (
            <tr key={genero._id}>
              <th scope="row">{index + 1}</th>
              <td>{genero.nombre}</td>
              <td>{genero.descripcion}</td>
              <td>{genero.estado ? 'Activo' : 'Inactivo'}</td>
              <td>{genero.fecha_creacion}</td>
              <td><button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#modalEditarGeneros" onClick={() => seleccionarGeneroParaEditar(genero)}>Editar</button></td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
  )
}