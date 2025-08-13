import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import playerSlice from './slices/playerSlice';
import playlistSlice from './slices/playlistSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    player: playerSlice,
    playlist: playlistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;