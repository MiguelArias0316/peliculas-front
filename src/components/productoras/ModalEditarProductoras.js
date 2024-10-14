import React from 'react'

export default function ModalEditarProductoras({productora,handleChange,guardarProductora}) {
  return (
    <div className="modal fade" id="modalEditarProductoras" tabindex="-1" aria-labelledby="modalEditarProductorasLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="modalEditarProductorasLabel">Nueva Productora</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label for="recipient-name" className="col-form-label">Nombre de la productora:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            name='nombre'
                            onChange={handleChange}
                            value={productora.nombre}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="recipient-name" className="col-form-label">Slogan:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            name='slogan'
                            onChange={handleChange}
                            value={productora.slogan}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="message-text" className="col-form-label">Descripción:</label>
                        <textarea
                            className="form-control"
                            id="message-text"
                            name='descripcion'
                            onChange={handleChange}
                            value={productora.descripcion}
                        >
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label for="recipient-name" className="col-form-label">Estado:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            name='estado'
                            onChange={handleChange}
                            value={productora.estado}
                        />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" onClick={guardarProductora} className="btn btn-primary">Guardar</button>
            </div>
        </div>
    </div>
</div>
  )
}
