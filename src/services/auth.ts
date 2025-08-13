const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID || '';
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || 'http://localhost:3000/callback';
const SCOPES = [
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-recently-played',
  'user-top-read',
  'user-library-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
].join(' ');

export const getAuthUrl = (): string => {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    show_dialog: 'true',
  });

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
};

export const getTokenFromUrl = (): string | null => {
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  const token = hashParams.get('access_token');
  
  if (token) {
    window.location.hash = '';
    localStorage.setItem('spotify_access_token', token);
    const expiresIn = hashParams.get('expires_in');
    if (expiresIn) {
      const expirationTime = Date.now() + parseInt(expiresIn) * 1000;
      localStorage.setItem('spotify_token_expiration', expirationTime.toString());
    }
  }
  
  return token;
};

export const getStoredToken = (): string | null => {
  const token = localStorage.getItem('spotify_access_token');
  const expiration = localStorage.getItem('spotify_token_expiration');
  
  if (!token || !expiration) {
    return null;
  }
  
  if (Date.now() > parseInt(expiration)) {
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_token_expiration');
    return null;
  }
  
  return token;
};

export const removeToken = (): void => {
  localStorage.removeItem('spotify_access_token');
  localStorage.removeItem('spotify_token_expiration');
};

export const isAuthenticated = (): boolean => {
  return getStoredToken() !== null;
};