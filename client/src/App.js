// src/App.js

import React from 'react';
import './App.css';
import RoutesComponent from './Routes';
import AdminRoutesComponent from './pages/admin/adminRoutes'

function App() {
  return (
    <div className="App">
      <AdminRoutesComponent/>
      <RoutesComponent />
      
    </div>
  );
}

export default App;