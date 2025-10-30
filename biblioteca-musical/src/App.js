import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Song from './components/Song';

class App extends Component {
  componentDidMount() {
    console.log('La aplicación Biblioteca Musical se ha cargado correctamente');
  }

  render() {
    const canciones = [
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
      }
    ];

    return (
      <div className="App">
        <Header />
        <main className="song-list">
          <h2>Canciones en tu biblioteca</h2>
          {canciones.map(cancion => (
            <Song 
              key={cancion.id}
              titulo={cancion.titulo}
              artista={cancion.artista}
              album={cancion.album}
              duracion={cancion.duracion}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
