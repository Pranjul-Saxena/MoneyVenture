// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import TermsModal from './components/TermsModal';
import ScrollToTop from './components/ScrollToTop';
// Optional: Import a basic CSS file if you have one
// import './App.css';

function App() {
  return (
    <HelmetProvider>
    <ScrollToTop />
      <TermsModal />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;