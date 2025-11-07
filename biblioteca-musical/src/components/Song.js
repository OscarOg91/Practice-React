import React from 'react';
import { Link } from 'react-router-dom';
import './Song.css';

const Song = ({ titulo, artista, album, year, image, onAddToLibrary, showAddButton = false, cancionId }) => {
  return (
    <div className="song">
      <div className="song-image">
        {image && (
          <img src={image} alt={album} className="album-thumbnail" />
        )}
      </div>
      <div className="song-info">
        <Link to={`/song/${cancionId}`} className="song-title-link">
          <h3 className="song-title">{titulo}</h3>
        </Link>
        <p className="song-artist">{artista}</p>
        {year && <p className="song-year">{year}</p>}
      </div>
      {showAddButton && (
        <div className="song-actions">
          <button 
            className="add-to-library-btn"
            onClick={() => onAddToLibrary({ id: cancionId, titulo, artista, album, year, image })}
          >
            Agregar a mi biblioteca
          </button>
          <Link to={`/song/${cancionId}`} className="details-btn">
            Ver detalles
          </Link>
        </div>
      )}
    </div>
  );
};

export default Song;