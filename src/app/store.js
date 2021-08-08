import { configureStore } from '@reduxjs/toolkit';
import uiStateReducer from '../features/uiStateSlice';

export const store = configureStore({
  reducer: {
    uiState: uiStateReducer,
  },
});
