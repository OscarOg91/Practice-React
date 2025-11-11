import React from 'react';
import { 
  SearchResultsContainer, 
  SearchResultsTitle, 
  LoadingContainer, 
  LoadingMessage,
  ErrorContainer,
  ErrorMessage,
  RetryButton,
  SongsContainer,
  NoResultsMessage
} from './styles';
import Song from '../Song';

const SearchResults = ({ canciones, loading, error, onAddToLibrary, onRetry }) => {
  if (loading) {
    return (
      <SearchResultsContainer>
        <SearchResultsTitle>Resultados de búsqueda</SearchResultsTitle>
        <LoadingContainer>
          <LoadingMessage>Cargando</LoadingMessage>
        </LoadingContainer>
      </SearchResultsContainer>
    );
  }

  if (error) {
    return (
      <SearchResultsContainer>
        <SearchResultsTitle>Resultados de búsqueda</SearchResultsTitle>
        <ErrorContainer>
          <ErrorMessage>Hubo un problema al cargar los datos. Intenta nuevamente.</ErrorMessage>
          {onRetry && (
            <RetryButton onClick={onRetry}>
              Reintentar
            </RetryButton>
          )}
        </ErrorContainer>
      </SearchResultsContainer>
    );
  }

  return (
    <SearchResultsContainer>
      <SearchResultsTitle>Resultados de búsqueda</SearchResultsTitle>
      <SongsContainer>
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
          <NoResultsMessage>
            {canciones === null 
              ? "Busca álbumes por nombre de artista para ver los resultados" 
              : "No se encontraron resultados"}
          </NoResultsMessage>
        )}
      </SongsContainer>
    </SearchResultsContainer>
  );
};

export default SearchResults;