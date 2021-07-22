import React, { useEffect, useState  } from 'react';
import logo from './logo.svg';
import { MenuPagesList } from './features/MenuPagesList/MenuPagesList';
import {TopBar} from './features/topbar/TopBar'
import './App.css';
import { useSelector } from 'react-redux';
import {selectUiState} from './features/uiStateSlice';
import TableElements from './features/TaskElement/TableElement';


function App() {
  const uiState = useSelector(selectUiState);
  const [currentMenu, setCurrentMenu] = useState(uiState.currentMenu)


  useEffect(()=>{
    setCurrentMenu(uiState.currentMenu);
  },[uiState])

  return (
    <div className="App">
        <TopBar/>
        <MenuPagesList />
        <TableElements />
    </div>
  );
}

export default App;
