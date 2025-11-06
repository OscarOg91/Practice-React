import React from 'react';
import './SearchResults.css';
import Song from './Song';

const SearchResults = ({ canciones, onAddToLibrary }) => {
  return (
    <section className="search-results">
      <h2>Resultados de búsqueda</h2>
      <div className="songs-container">
        {canciones.length > 0 ? (
          canciones.map(cancion => (
            <Song 
              key={cancion.id}
              cancionId={cancion.id}
              titulo={cancion.titulo}
              artista={cancion.artista}
              album={cancion.album}
              duracion={cancion.duracion}
              showAddButton={true}
              onAddToLibrary={onAddToLibrary}
            />
          ))
        ) : (
          <p className="no-results">No se encontraron resultados</p>
        )}
      </div>
    </section>
  );
};

export default SearchResults;