const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
  'https://cors-anywhere.herokuapp.com/'
];

const AUDIO_DB_BASE = 'https://theaudiodb.com/api/v1/json/2/';

const buildProxyUrl = (endpoint, proxyIndex = 0) => {
  return `${CORS_PROXIES[proxyIndex]}${encodeURIComponent(endpoint)}`;
};

export const audioDbApi = {
  searchAlbums: (artistName, proxyIndex = 0) => {
    const encodedArtist = encodeURIComponent(artistName);
    const endpoint = `${AUDIO_DB_BASE}searchalbum.php?s=${encodedArtist}`;
    return buildProxyUrl(endpoint, proxyIndex);
  },
  
  getAlbumDetails: (albumId, proxyIndex = 0) => {
    const endpoint = `${AUDIO_DB_BASE}album.php?m=${albumId}`;
    return buildProxyUrl(endpoint, proxyIndex);
  }
};

export const testDirectApi = (artistName) => {
  const encodedArtist = encodeURIComponent(artistName);
  return `${AUDIO_DB_BASE}searchalbum.php?s=${encodedArtist}`;
};

export const fetchWithFallback = async (artistName) => {
  for (let i = 0; i < CORS_PROXIES.length; i++) {
    try {
      console.log(`Trying proxy ${i + 1}/${CORS_PROXIES.length}: ${CORS_PROXIES[i]}`);
      const url = audioDbApi.searchAlbums(artistName, i);
      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        console.log(`Success with proxy ${i + 1}!`);
        return { data, proxyUsed: i };
      }
    } catch (error) {
      console.log(`Proxy ${i + 1} failed:`, error.message);
      if (i === CORS_PROXIES.length - 1) {
        throw new Error('All CORS proxies failed');
      }
    }
  }
};