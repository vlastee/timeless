import React from 'react';
import logo from './logo.svg';
import { Dashboard } from './features/dashboard/Dashboard';
import {TopBar} from './features/topbar/TopBar'
import './App.css';

function App() {
  return (
    <div className="App">
        <TopBar/>
        <Dashboard />
    </div>
  );
}

export default App;
