import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMenu: false,
  currentMenu: 'Dashboard',
  availableMenus: ['Dashboard', 'Projects', 'My Tasks'],
  status: 'idle',
};



export const uiStateSlice = createSlice({
  name: 'uiState',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setShowMenuState: (state, action) => {
      state.showMenu = action.payload;
    },
    setCurrentMenuState: (state, action) => {
      state.currentMenu = action.payload;
    },
  },
});

export const { setShowMenuState, setCurrentMenuState } = uiStateSlice.actions;

export const selectUiState = (state) => state.uiState;


export default uiStateSlice.reducer;
