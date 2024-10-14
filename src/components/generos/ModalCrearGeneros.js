import React from 'react'

export default function ModalCrearGeneros({genero,handleChange, guardarGenero}) {
  return (
      <div className="modal fade" id="modalCrearGeneros" tabindex="-1" aria-labelledby="modalCrearGenerosLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="modalCrearGenerosLabel">Nuevo Género</h1>
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
