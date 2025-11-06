import React from 'react';
import './Song.css';

const Song = ({ titulo, artista, album, duracion, onAddToLibrary, showAddButton = false, cancionId }) => {
  return (
    <div className="song">
      <div className="song-info">
        <h3 className="song-title">{titulo}</h3>
        <p className="song-artist">{artista}</p>
        <p className="song-album">{album}</p>
      </div>
      <div className="song-duration">
        <span>{duracion}</span>
      </div>
      {showAddButton && (
        <div className="song-actions">
          <button 
            className="add-to-library-btn"
            onClick={() => onAddToLibrary({ id: cancionId, titulo, artista, album, duracion })}
          >
            Agregar a mi biblioteca
          </button>
        </div>
      )}
    </div>
  );
};

export default Song;