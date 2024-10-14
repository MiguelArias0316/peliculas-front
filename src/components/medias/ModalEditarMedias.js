import React from 'react'

export default function ModalEditarMedias({ handleChange, media, guardarMedia, generosActivos= [], directoresActivos= [], productorasActivos= [], tiposMultimedia=[]}) {
    return (
        <div className="modal fade" id="modalEditarMedias" tabindex="-1" aria-labelledby="modalEditarMediasLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalEditarMediasLabel">Nuevo Media</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Estado:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                    name='estado'
                                    onChange={handleChange}
                                    value={media.estado}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Serial:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                    name='serial'
                                    onChange={handleChange}
                                    value={media.serial}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">Titulo:</label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    name='titulo'
                                    onChange={handleChange}
                                    value={media.titulo}
                                >
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">Sinopsis:</label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    name='sinopsis'
                                    onChange={handleChange}
                                    value={media.sinopsis}
                                >
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">Url:</label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    name='url'
                                    onChange={handleChange}
                                    value={media.url}
                                >
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">Imagen portada:</label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    name='imagen'
                                    onChange={handleChange}
                                    value={media.imagen}
                                >
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">Fecha de estreno</label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    name='fecha_estreno'
                                    onChange={handleChange}
                                    value={media.fecha_estreno}
                                >
                                </textarea>
                            </div>
                            <select name="genero" value={media.genero || ""} onChange={handleChange} className="form-select">
                                <option selected disabled>Género:</option>
                                {generosActivos.map((genero) => (
                                    <option key={genero._id} value={genero._id}>
                                        {genero.nombre}
                                    </option>
                                ))}
                            </select>

                            <select name="director" value={media.director} onChange={handleChange} className="form-select">
                                <option selected disabled>Director:</option>
                                {directoresActivos.map((director) => (
                                    <option key={director._id} value={director._id}>
                                        {director.nombre}
                                    </option>
                                ))}
                            </select>

                            <select name="productora" value={media.productora} onChange={handleChange} className="form-select">
                                <option selected disabled>Productora:</option>
                                {productorasActivos.map((productora) => (
                                    <option key={productora._id} value={productora._id}>
                                        {productora.nombre}
                                    </option>
                                ))}
                            </select>

                            <select name="tipoMultimedia" value={media.tipoMultimedia} onChange={handleChange} className="form-select">
                                <option selected disabled>Tipo Multimedia:</option>
                                {tiposMultimedia.map((tipoMultimedia) => (
                                    <option key={tipoMultimedia._id} value={tipoMultimedia._id}>
                                        {tipoMultimedia.nombre}
                                    </option>
                                ))}
                            </select>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" onClick={guardarMedia} className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
