import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
    return (
      <div className='App'>
        <Header />
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<div>About Page</div>} />
        </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }

export default App;