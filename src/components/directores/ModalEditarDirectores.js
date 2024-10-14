import React from 'react'

export default function ModalEditarDirectores({director, handleChange, guardarDirector}) {
  return (
    <div className="modal fade" id="modalEditarDirectores" tabindex="-1" aria-labelledby="modalEditarDirectoresLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="modalEditarDirectoresLabel">Nuevo Director</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Nombre del director:</label>
            <input 
            type="text" 
            className="form-control" 
            id="recipient-name"
            name='nombre'
            onChange={handleChange}
            value={director.nombre}
            />
          </div>
          <div className="mb-3">
              <label for="recipient-name" className="col-form-label">Estado:</label>
              <input 
              type="text" 
              className="form-control" 
              id="recipient-name"
              name='estado'
              onChange={handleChange}
              value={director.estado}
              />
            </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" onClick={guardarDirector} className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
  )
}
