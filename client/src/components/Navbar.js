import React from 'react';
import  {useState}  from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.jpg';
import { AiTwotoneHome } from "react-icons/ai";
import "../App.css";
import Announcements from '../pages/Announcements';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand mr-auto" to="/">
         
          <img src={Logo} alt="Logo" style={{ maxWidth: '120px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <div className="navbar-nav mx-auto">
            <Link  className={`nav-link fs-5 fw-bold d-flex align-items-center ${window.location.pathname === '/' ? 'active' : ''}`} to="/" onClick={closeMenu} style={{ color: '#11676d' }}> <AiTwotoneHome/>Home</Link>
            <Link className={`nav-link fs-5 fw-bold ${window.location.pathname === '/announcements' ? 'active' : ''}`} to="/announcements" onClick={closeMenu} style={{ color: '#11676d' }}>Announcements</Link>
            <div className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <Link
                className={`nav-link dropdown-toggle fs-5 fw-bold `}
                to="#"
                id="resourcesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
                style={{ color: '#11676d' }}
              >
                Resources
              </Link>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="resourcesDropdown">
                <Link className="dropdown-item " to="/resources/acceptedProjects" onClick={closeDropdown} style={{ color: '#11676d' }}>Accepted Projects</Link>
                <Link className="dropdown-item" to="/resources/publications" onClick={closeDropdown} style={{ color: '#11676d' }}>Publications</Link>
              </div>
            </div>
            <Link className={`nav-link fs-5 fw-bold ${window.location.pathname === '/institutes' ? 'active' : ''}`} to="/institutes" onClick={closeMenu} style={{ color: '#11676d' }}>Institutes</Link>
            <Link className={`nav-link fs-5 fw-bold ${window.location.pathname === '/collaborations' ? 'active' : ''}`} to="/collaborations" onClick={closeMenu} style={{ color: '#11676d' }}>Collaborations</Link>
            <Link className={`nav-link fs-5 fw-bold ${window.location.pathname === '/aboutus' ? 'active' : ''}`}  to="/aboutus" onClick={closeMenu} style={{ color: '#11676d' }}>About Us</Link>
            <Link className={`nav-link fs-5 fw-bold ${window.location.pathname === '/news' ? 'active' : ''}`} to="/news" onClick={closeMenu} style={{ color: '#11676d' }}>News</Link>
          </div>
          <div className="navbar-nav ml-auto">
              <Link className="nav-link d-none d-lg-inline fs-4 fw-bold" to="/login" style={{ color: '#11676d' }}>Login</Link>
              <Link className="nav-link d-none d-lg-inline fs-4 fw-bold" to="/register" style={{ color: '#11676d' }}>Register</Link>
            </div>
            <div className="navbar-nav ml-auto d-inline d-lg-none">
              <Link className="nav-link" to="/login" style={{ color: '#11676d' }}>Login</Link>
              <Link className="nav-link" to="/register" style={{ color: '#11676d' }}>Register</Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
