import React from 'react'

export default function TablaProductoras({productoras}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="row"></th>
                    <th scope="col">Prodcutora</th>
                    <th scope="col">Slogan</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Fecha creación</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                {
                    productoras.map((productora, index) => {
                        return (
                            <tr key={productora._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{productora.nombre}</td>
                                <td>{productora.slogan}</td>
                                <td>{productora.descripcion}</td>
                                <td>{productora.estado ? 'Activo' : 'Inactivo'}</td>
                                <td>{productora.fecha_creacion}</td>
                                <td><button type="button" className="btn btn-dark">Editar</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
