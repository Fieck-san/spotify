import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  image: string;
  duration: string;
}

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  isShuffled: boolean;
  repeatMode: number; // 0: off, 1: all, 2: one
  queue: Track[];
  currentIndex: number;
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  volume: 70,
  progress: 0,
  isShuffled: false,
  repeatMode: 0,
  queue: [],
  currentIndex: 0,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    toggleShuffle: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setRepeatMode: (state, action: PayloadAction<number>) => {
      state.repeatMode = action.payload;
    },
    setQueue: (state, action: PayloadAction<Track[]>) => {
      state.queue = action.payload;
    },
    nextTrack: (state) => {
      if (state.currentIndex < state.queue.length - 1) {
        state.currentIndex += 1;
        state.currentTrack = state.queue[state.currentIndex];
      }
    },
    previousTrack: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        state.currentTrack = state.queue[state.currentIndex];
      }
    },
  },
});

export const {
  setCurrentTrack,
  togglePlayPause,
  setPlaying,
  setVolume,
  setProgress,
  toggleShuffle,
  setRepeatMode,
  setQueue,
  nextTrack,
  previousTrack,
} = playerSlice.actions;

export default playerSlice.reducer;