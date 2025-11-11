import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { audioDbApi } from '../../utils/apiUtils';
import {
  SongDetailContainer,
  SongDetailHeader,
  BackLink,
  SongDetailContent,
  AlbumImageContainer,
  AlbumCover,
  AlbumInfo,
  AlbumTitle,
  ArtistName,
  AlbumDetails,
  AlbumDescription,
  LoadingContainer,
  ErrorContainer,
  RetryButton
} from './styles';

const SongDetail = () => {
  const { id } = useParams();
  const { data, loading, error, refetch } = useFetch(
    id ? audioDbApi.getAlbumDetails(id) : null
  );

  if (loading) {
    return (
      <SongDetailContainer>
        <LoadingContainer>
          <p>Cargando detalles del álbum...</p>
        </LoadingContainer>
      </SongDetailContainer>
    );
  }

  if (error) {
    return (
      <SongDetailContainer>
        <ErrorContainer>
          <p>Hubo un problema al cargar los detalles. Intenta nuevamente.</p>
          <RetryButton onClick={refetch}>
            Reintentar
          </RetryButton>
        </ErrorContainer>
      </SongDetailContainer>
    );
  }

  if (!data || !data.album || data.album.length === 0) {
    return (
      <SongDetailContainer>
        <ErrorContainer>
          <p>No se encontraron detalles para este álbum.</p>
          <BackLink to="/">
            Volver a la búsqueda
          </BackLink>
        </ErrorContainer>
      </SongDetailContainer>
    );
  }

  const album = data.album[0];

  return (
    <SongDetailContainer>
      <SongDetailHeader>
        <BackLink to="/">
          ← Volver a los resultados
        </BackLink>
      </SongDetailHeader>
      
      <SongDetailContent>
        <AlbumImageContainer>
          {album.strAlbumThumb && (
            <AlbumCover 
              src={album.strAlbumThumb} 
              alt={album.strAlbum}
            />
          )}
        </AlbumImageContainer>
        
        <AlbumInfo>
          <AlbumTitle>{album.strAlbum}</AlbumTitle>
          <ArtistName>{album.strArtist}</ArtistName>
          
          <AlbumDetails>
            {album.intYearReleased && (
              <p><strong>Año de lanzamiento:</strong> {album.intYearReleased}</p>
            )}
            {album.strGenre && (
              <p><strong>Género:</strong> {album.strGenre}</p>
            )}
            {album.strLabel && (
              <p><strong>Discográfica:</strong> {album.strLabel}</p>
            )}
            {album.strReleaseFormat && (
              <p><strong>Formato:</strong> {album.strReleaseFormat}</p>
            )}
          </AlbumDetails>
          
          {album.strDescriptionEN && (
            <AlbumDescription>
              <h3>Descripción</h3>
              <p>{album.strDescriptionEN}</p>
            </AlbumDescription>
          )}
        </AlbumInfo>
      </SongDetailContent>
    </SongDetailContainer>
  );
};

export default SongDetail;