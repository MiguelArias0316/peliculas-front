import React from 'react'

export default function TablaTiposMultimedia({tiposMultimedia}) {
  return (
    <table className="table">
    <thead>
        <tr>
            <th scope="row"></th>
            <th scope="col">Tipo</th>
            <th scope="col">Descripción</th>
            <th scope="col">Fecha creación</th>
        </tr>
    </thead>
    <tbody>
        {
            tiposMultimedia.map((tipoMultimedia, index) => {
                return (
                    <tr key={tipoMultimedia._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{tipoMultimedia.nombre}</td>
                        <td>{tipoMultimedia.descripcion}</td>
                        <td>{tipoMultimedia.fecha_creacion}</td>
                    </tr>
                )
            })
        }
    </tbody>
</table>
  )
}
