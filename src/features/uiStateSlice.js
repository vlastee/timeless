import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const initialState = {
  showMenu: false,
  currentMenu: 'Dashboard',
  availableMenus: [
    {name:'Dashboard', icon:<EventNoteIcon/>},
    {name:'Projects', icon:<AssignmentIcon/>},
    {name:'My Tasks', icon:<AssignmentIndIcon/>},
  ],
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
