import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import uiStateReducer from '../features/uiStateSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    uiState: uiStateReducer,
  },
});
