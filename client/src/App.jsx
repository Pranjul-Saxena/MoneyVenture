// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
// Optional: Import a basic CSS file if you have one
// import './App.css';

function App() {
  return (
    <div>
    
      {/* You might replace this div with a Layout component later */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
        {/* Example for a 404 page */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;