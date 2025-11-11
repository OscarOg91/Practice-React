import React from 'react';
import { 
  LibraryContainer, 
  LibraryTitle, 
  LibrarySongsContainer, 
  EmptyLibraryMessage,
  LibraryStats,
  LibraryStatsText
} from './styles';
import Song from '../Song';

const Library = ({ canciones }) => {
  return (
    <LibraryContainer>
      <LibraryTitle>Mi Biblioteca Personal</LibraryTitle>
      
      {canciones.length > 0 && (
        <LibraryStats>
          <LibraryStatsText>
            Tienes <strong>{canciones.length}</strong> álbum{canciones.length !== 1 ? 'es' : ''} en tu biblioteca
          </LibraryStatsText>
        </LibraryStats>
      )}
      
      <LibrarySongsContainer>
        {canciones.length > 0 ? (
          canciones.map(cancion => (
            <Song 
              key={cancion.id}
              cancionId={cancion.id}
              titulo={cancion.titulo}
              artista={cancion.artista}
              album={cancion.album}
              year={cancion.year}
              image={cancion.image}
              showAddButton={false}
            />
          ))
        ) : (
          <EmptyLibraryMessage>
            Tu biblioteca está vacía. ¡Agrega algunos álbumes desde los resultados de búsqueda!
          </EmptyLibraryMessage>
        )}
      </LibrarySongsContainer>
    </LibraryContainer>
  );
};

export default Library;