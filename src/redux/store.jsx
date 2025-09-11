import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice';
import uiReducer from '../features/ui/uiSlice';
import shortsReducer from '../features/shorts/shortsSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    shorts: shortsReducer, 
    ui: uiReducer,
  },
});
