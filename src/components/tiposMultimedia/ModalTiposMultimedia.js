import React from 'react'

export default function ModalTiposMultimedia({handleChange,tipoMultimedia,guardarTipoMultimedia}) {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo tipo multimedia</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Tipo multimedia</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                    name='nombre'
                                    onChange={handleChange}
                                    value={tipoMultimedia.nombre}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">Descripción:</label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    name='descripcion'
                                    onChange={handleChange}
                                    value={tipoMultimedia.descripcion}
                                >
                                </textarea>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" onClick={guardarTipoMultimedia} className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
