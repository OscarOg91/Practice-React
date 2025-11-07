import React from 'react';
import './SearchResults.css';
import Song from './Song';

const SearchResults = ({ canciones, loading, error, onAddToLibrary, onRetry }) => {
  if (loading) {
    return (
      <section className="search-results">
        <h2>Resultados de búsqueda</h2>
        <div className="loading-container">
          <p className="loading-message">Cargando...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="search-results">
        <h2>Resultados de búsqueda</h2>
        <div className="error-container">
          <p className="error-message">Hubo un problema al cargar los datos. Intenta nuevamente.</p>
          {onRetry && (
            <button onClick={onRetry} className="retry-button">
              Reintentar
            </button>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="search-results">
      <h2>Resultados de búsqueda</h2>
      <div className="songs-container">
        {canciones && canciones.length > 0 ? (
          canciones.map(cancion => (
            <Song 
              key={cancion.id}
              cancionId={cancion.id}
              titulo={cancion.titulo}
              artista={cancion.artista}
              album={cancion.album}
              year={cancion.year}
              image={cancion.image}
              showAddButton={true}
              onAddToLibrary={onAddToLibrary}
            />
          ))
        ) : (
          <p className="no-results">
            {canciones === null 
              ? "Busca álbumes por nombre de artista para ver los resultados" 
              : "No se encontraron resultados"}
          </p>
        )}
      </div>
    </section>
  );
};

export default SearchResults;