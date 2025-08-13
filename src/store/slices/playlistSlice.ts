import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Playlist {
  id: string;
  name: string;
  description: string;
  image: string;
  owner: string;
  tracks: any[];
}

interface PlaylistState {
  playlists: Playlist[];
  currentPlaylist: Playlist | null;
  featuredPlaylists: Playlist[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PlaylistState = {
  playlists: [],
  currentPlaylist: null,
  featuredPlaylists: [],
  isLoading: false,
  error: null,
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylists: (state, action: PayloadAction<Playlist[]>) => {
      state.playlists = action.payload;
    },
    setCurrentPlaylist: (state, action: PayloadAction<Playlist>) => {
      state.currentPlaylist = action.payload;
    },
    setFeaturedPlaylists: (state, action: PayloadAction<Playlist[]>) => {
      state.featuredPlaylists = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addPlaylist: (state, action: PayloadAction<Playlist>) => {
      state.playlists.push(action.payload);
    },
    removePlaylist: (state, action: PayloadAction<string>) => {
      state.playlists = state.playlists.filter(playlist => playlist.id !== action.payload);
    },
  },
});

export const {
  setPlaylists,
  setCurrentPlaylist,
  setFeaturedPlaylists,
  setLoading,
  setError,
  addPlaylist,
  removePlaylist,
} = playlistSlice.actions;

export default playlistSlice.reducer;