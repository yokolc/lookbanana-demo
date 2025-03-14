
import React from 'react';
import{ BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';
import AboutPage from './pages/AboutPage.jsx';


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

  );
}

export default App;
