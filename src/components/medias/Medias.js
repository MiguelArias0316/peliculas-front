import React from 'react';

export default function Medias({ mediasActivos=[], obtenerNombreGenero, obtenerNombreDirector, obtenerNombreProductora, obtenerNombreTipoMultimedia }) {
  if (!mediasActivos || mediasActivos.length === 0) {
    return <p>No hay medios disponibles.</p>;
  }
  return (
    <div className="row">
      {mediasActivos.map((media) => (
        <div className="col-md-4" key={media._id}>
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={media.imagen}
              className="card-img-top"
              alt={media.titulo}
            />
            <div className="card-body">
              <h5 className="card-title">{media.titulo}</h5>
              <p className="card-text">{media.sinopsis}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Fecha de estreno: {media.fecha_estreno}</li>
              <li className="list-group-item">Género: {obtenerNombreGenero(media.genero)}</li>
              <li className="list-group-item">Director: {obtenerNombreDirector(media.director)}</li>
              <li className="list-group-item">Productora: {obtenerNombreProductora(media.productora)}</li>
              <li className="list-group-item">Tipo: {obtenerNombreTipoMultimedia(media.tipoMultimedia)}</li>
            </ul>
            <div className="card-body">
              <a href={media.url} className="card-link" target="_blank" rel="noopener noreferrer">
                Ver película
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}