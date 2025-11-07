import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import SearchBar from './components/SearchBar';
import SongDetail from './components/SongDetail';
import useAudioDbApi from './hooks/useAudioDbApi';

const HomePage = () => {
  const [searchArtist, setSearchArtist] = useState(null);
  const [bibliotecaPersonal, setBibliotecaPersonal] = useState([]);
  const { data, loading, error, refetch } = useAudioDbApi(searchArtist);

  useEffect(() => {
    console.log('La aplicación Biblioteca Musical se ha cargado correctamente');
  }, []);

  useEffect(() => {
    if (bibliotecaPersonal.length > 0) {
      console.log(`La biblioteca se ha actualizado. Ahora tiene ${bibliotecaPersonal.length} canciones.`);
      console.log('Canciones en la biblioteca:', bibliotecaPersonal.map(c => c.titulo));
    }
  }, [bibliotecaPersonal]);

  const handleSearch = (artistName) => {
    setSearchArtist(artistName);
  };

  const agregarABiblioteca = (album) => {
    const yaExiste = bibliotecaPersonal.some(c => c.id === album.id);
    
    if (!yaExiste) {
      setBibliotecaPersonal(prevBiblioteca => [...prevBiblioteca, album]);
      console.log(`Álbum "${album.titulo}" agregado a la biblioteca`);
    } else {
      console.log(`El álbum "${album.titulo}" ya está en tu biblioteca`);
    }
  };

  const albums = data && data.album ? data.album.map(album => ({
    id: album.idAlbum,
    titulo: album.strAlbum,
    artista: album.strArtist,
    album: album.strAlbum,
    year: album.intYearReleased,
    image: album.strAlbumThumb
  })) : [];

  return (
    <>
      <Header />
      <main className="main-content">
        <SearchBar onSearch={handleSearch} loading={loading} />
        <SearchResults 
          canciones={albums}
          loading={loading}
          error={error}
          onAddToLibrary={agregarABiblioteca}
          onRetry={refetch}
        />
        <Library 
          canciones={bibliotecaPersonal}
        />
      </main>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
