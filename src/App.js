import React, { useEffect, useState  } from 'react';
import logo from './logo.svg';
import { MenuPagesList } from './features/MenuPagesList/MenuPagesList';
import {TopBar} from './features/topbar/TopBar'
import './App.css';
import { useSelector } from 'react-redux';
import {selectUiState} from './features/uiStateSlice';
import TableElements from './features/TaskElement/TableElement';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useStyles } from './features/Theme/Theme';




function App() {
  const uiState = useSelector(selectUiState);
  const [currentMenu, setCurrentMenu] = useState(uiState.currentMenu)
  const classes = useStyles();

  


  useEffect(()=>{
    setCurrentMenu(uiState.currentMenu);
  },[uiState])

  return (
    <div className="App">
        
        <MenuPagesList />
        <div className={uiState.showMenu?classes.content:classes.contentShift}>
          <TopBar/>
          <TableElements />
        </div>
    </div>
  );
}

export default App;
