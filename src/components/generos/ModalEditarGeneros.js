import React from 'react'

export default function ModalEditarGeneros({genero,handleChange,guardarGenero}) {
  return (
    <div className="modal fade" id="modalEditarGeneros" tabindex="-1" aria-labelledby="modalEditarGenerosLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="modalEditarGenerosLabel">Editar Género</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label for="recipient-name" className="col-form-label">Género:</label>
              <input 
              type="text" 
              className="form-control" 
              id="recipient-name"
              name='nombre'
              onChange={handleChange}
              value={genero.nombre}
              />
            </div>
            <div className="mb-3">
              <label for="message-text" className="col-form-label">Descripción:</label>
              <textarea 
              className="form-control" 
              id="message-text"
              name='descripcion'
              onChange={handleChange}
              value={genero.descripcion}
              >
              </textarea>
            <div className="mb-3">
              <label for="recipient-name" className="col-form-label">Estado:</label>
              <input 
              type="text" 
              className="form-control" 
              id="recipient-name"
              name='estado'
              onChange={handleChange}
              value={genero.estado}
              />
            </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" onClick={guardarGenero} className="btn btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  </div>
  )
}
