// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Resources from './pages/Resources';
import Collaborations from './pages/Collaborations';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';

const ConditionalNavbar = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  if (path === '/login' || path === '/register') {
    return null; // Render nothing for Login and Register pages
  }

  return <Navbar />;
}

const ConditionalFooter = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  if (path === '/login' || path === '/register') {
    return null; // Render nothing for Login and Register pages
  }

  return <Footer />;
}

const RoutesComponent = () => {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ConditionalFooter />
    </Router>
  );
}

export default RoutesComponent;
