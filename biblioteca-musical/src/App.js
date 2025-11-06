import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';

const App = () => {
  // Datos ficticios para resultados de búsqueda
  const cancionesBusqueda = [
    {
      id: 1,
      titulo: "Bohemian Rhapsody",
      artista: "Queen",
      album: "A Night at the Opera",
      duracion: "5:55"
    },
    {
      id: 2,
      titulo: "Hotel California",
      artista: "Eagles",
      album: "Hotel California",
      duracion: "6:30"
    },
    {
      id: 3,
      titulo: "Imagine",
      artista: "John Lennon",
      album: "Imagine",
      duracion: "3:07"
    },
    {
      id: 4,
      titulo: "Billie Jean",
      artista: "Michael Jackson",
      album: "Thriller",
      duracion: "4:54"
    },
    {
      id: 5,
      titulo: "Stairway to Heaven",
      artista: "Led Zeppelin",
      album: "Led Zeppelin IV",
      duracion: "8:02"
    },
    {
      id: 6,
      titulo: "Sweet Child O' Mine",
      artista: "Guns N' Roses",
      album: "Appetite for Destruction",
      duracion: "5:03"
    }
  ];

  // Estados usando useState
  const [resultadosBusqueda] = useState(cancionesBusqueda);
  const [bibliotecaPersonal, setBibliotecaPersonal] = useState([]);

  // useEffect para imprimir mensajes cuando se actualice la biblioteca
  useEffect(() => {
    console.log('La aplicación Biblioteca Musical se ha cargado correctamente');
  }, []);

  useEffect(() => {
    if (bibliotecaPersonal.length > 0) {
      console.log(`La biblioteca se ha actualizado. Ahora tiene ${bibliotecaPersonal.length} canciones.`);
      console.log('Canciones en la biblioteca:', bibliotecaPersonal.map(c => c.titulo));
    }
  }, [bibliotecaPersonal]);

  // Función para agregar canciones a la biblioteca
  const agregarABiblioteca = (cancion) => {
    // Verificar si la canción ya está en la biblioteca
    const yaExiste = bibliotecaPersonal.some(c => c.id === cancion.id);
    
    if (!yaExiste) {
      setBibliotecaPersonal(prevBiblioteca => [...prevBiblioteca, cancion]);
      console.log(`Canción "${cancion.titulo}" agregada a la biblioteca`);
    } else {
      console.log(`La canción "${cancion.titulo}" ya está en tu biblioteca`);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <SearchResults 
          canciones={resultadosBusqueda}
          onAddToLibrary={agregarABiblioteca}
        />
        <Library 
          canciones={bibliotecaPersonal}
        />
      </main>
    </div>
  );
};

export default App;
