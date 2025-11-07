# Musical Library API

A React-based musical library application that integrates with The Audio DB API to search for albums and manage a personal music collection.

## Features

- 🔍 **Search Albums** - Search for albums by artist name
- 🎵 **Album Details** - View detailed information about albums
- 📚 **Personal Library** - Add albums to your personal collection
- 🖼️ **Album Artwork** - Display album covers and thumbnails
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🔗 **Navigation** - React Router for seamless page transitions

## Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **The Audio DB API** - Music database API
- **CSS3** - Styling and responsive design
- **CORS Proxy System** - Multiple fallback proxies for API access

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/musical-library-api.git
cd musical-library-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Search for Albums**: Enter an artist name in the search bar
2. **View Results**: Browse through the album results with covers and details
3. **Add to Library**: Click "Agregar a mi biblioteca" to save albums
4. **View Details**: Click on album titles or "Ver detalles" for more information
5. **Navigate**: Use the back button to return to search results

## Recommended Artists to Search

- Coldplay
- Queen
- Oasis
- The Beatles
- Adele
- U2
- Pink Floyd

## API Integration

This project uses The Audio DB API with a fallback CORS proxy system to handle cross-origin requests:

- **Primary**: allorigins.win
- **Secondary**: corsproxy.io  
- **Fallback**: cors-anywhere.herokuapp.com

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.js        # App header
│   ├── SearchBar.js     # Search input component
│   ├── SearchResults.js # Results display
│   ├── Song.js          # Individual album component
│   ├── SongDetail.js    # Album detail page
│   └── Library.js       # Personal library
├── hooks/               # Custom React hooks
│   ├── useFetch.js      # Generic fetch hook
│   └── useAudioDbApi.js # Audio DB specific hook
├── utils/              # Utility functions
│   └── apiUtils.js     # API and CORS proxy utilities
└── App.js              # Main app component
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- [The Audio DB](https://www.theaudiodb.com/) for providing the music database API
- [Create React App](https://create-react-app.dev/) for the project setup
- CORS proxy services for enabling API access