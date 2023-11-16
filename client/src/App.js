// src/App.js
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {getNews} from './actions/news'
import './App.css';
import RoutesComponent from './Routes';


function App() {
 
  return (
    <div className="App">
    
      <RoutesComponent />
      
    </div>
  );
}

export default App;