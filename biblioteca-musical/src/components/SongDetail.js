import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { audioDbApi } from '../utils/apiUtils';
import './SongDetail.css';

const SongDetail = () => {
  const { id } = useParams();
  const { data, loading, error, refetch } = useFetch(
    id ? audioDbApi.getAlbumDetails(id) : null
  );

  if (loading) {
    return (
      <div className="song-detail-container">
        <div className="loading-message">
          <p>Cargando detalles del álbum...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="song-detail-container">
        <div className="error-message">
          <p>Hubo un problema al cargar los detalles. Intenta nuevamente.</p>
          <button onClick={refetch} className="retry-button">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  if (!data || !data.album || data.album.length === 0) {
    return (
      <div className="song-detail-container">
        <div className="no-data-message">
          <p>No se encontraron detalles para este álbum.</p>
          <Link to="/" className="back-link">
            Volver a la búsqueda
          </Link>
        </div>
      </div>
    );
  }

  const album = data.album[0];

  return (
    <div className="song-detail-container">
      <div className="song-detail-header">
        <Link to="/" className="back-link">
          ← Volver a los resultados
        </Link>
      </div>
      
      <div className="song-detail-content">
        <div className="album-image">
          {album.strAlbumThumb && (
            <img 
              src={album.strAlbumThumb} 
              alt={album.strAlbum}
              className="album-cover"
            />
          )}
        </div>
        
        <div className="album-info">
          <h1 className="album-title">{album.strAlbum}</h1>
          <h2 className="artist-name">{album.strArtist}</h2>
          
          <div className="album-details">
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
          </div>
          
          {album.strDescriptionEN && (
            <div className="album-description">
              <h3>Descripción</h3>
              <p>{album.strDescriptionEN}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetail;