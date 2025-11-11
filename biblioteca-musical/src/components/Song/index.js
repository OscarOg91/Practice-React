import React, { useState } from 'react';
import {
  SongContainer,
  SongImageContainer,
  AlbumThumbnail,
  SongInfo,
  SongTitleLink,
  SongTitle,
  SongArtist,
  SongYear,
  SongActions,
  AddToLibraryButton,
  DetailsButton
} from './styles';

const Song = ({ titulo, artista, album, year, image, onAddToLibrary, showAddButton = false, cancionId }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToLibrary = () => {
    onAddToLibrary({ id: cancionId, titulo, artista, album, year, image });
    setIsAdded(true);
    // Reset the button state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <SongContainer>
      <SongImageContainer>
        {image && (
          <AlbumThumbnail src={image} alt={album} />
        )}
      </SongImageContainer>
      <SongInfo>
        <SongTitleLink to={`/song/${cancionId}`}>
          <SongTitle>{titulo}</SongTitle>
        </SongTitleLink>
        <SongArtist>{artista}</SongArtist>
        {year && <SongYear>{year}</SongYear>}
      </SongInfo>
      {showAddButton && (
        <SongActions>
          <AddToLibraryButton 
            added={isAdded}
            onClick={handleAddToLibrary}
          >
            {isAdded ? '✓ Agregado' : 'Agregar a mi biblioteca'}
          </AddToLibraryButton>
          <DetailsButton to={`/song/${cancionId}`}>
            Ver detalles
          </DetailsButton>
        </SongActions>
      )}
    </SongContainer>
  );
};

export default Song;