import React from 'react';
import './Library.css';
import Song from './Song';

const Library = ({ canciones }) => {
  return (
    <section className="library">
      <h2>Mi Biblioteca Personal</h2>
      <div className="songs-container">
        {canciones.length > 0 ? (
          canciones.map(cancion => (
            <Song 
              key={cancion.id}
              titulo={cancion.titulo}
              artista={cancion.artista}
              album={cancion.album}
              duracion={cancion.duracion}
              showAddButton={false}
            />
          ))
        ) : (
          <p className="empty-library">Tu biblioteca está vacía. ¡Agrega algunas canciones!</p>
        )}
      </div>
    </section>
  );
};

export default Library;