import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      {/* Define routes using Routes */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
