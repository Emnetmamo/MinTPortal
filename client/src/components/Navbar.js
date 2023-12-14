import React from 'react';
import  {useState}  from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.jpg';
import { AiTwotoneHome } from "react-icons/ai";
import "../App.css";
// import Announcements from '../pages/Announcements';

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
    <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand mr-auto" href="/">
         
          <img src={Logo} alt="Logo" style={{ borderRadius: '90%', width: '95px',height:"90px",marginLeft:"55px" }} />
        </a>
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
        <div className="navbar-nav mx-auto" style={{marginTop:"50px"}}>
  <a className={`nav-link d-flex align-items-center ${window.location.pathname === '/' ? 'active' : ''}`} href="/" onClick={closeMenu} style={{marginRight: '10px', color: 'white'}}> <AiTwotoneHome/>Home</a>
  <a className={`nav-link ${window.location.pathname === '/announcements' ? 'active' : ''}`} href="/announcements" onClick={closeMenu} style={{marginRight: '10px', color: 'white'}}>Announcements</a>
  <div className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
    <a
      className={`nav-link dropdown-toggle`}
      href="#"
      id="resourcesDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded={isDropdownOpen}
      onClick={toggleDropdown}
      style={{color:"white"}}
    >
      Resources
    </a>
    <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="resourcesDropdown">
      <a className="dropdown-item" href="/resources/accepted-projects" onClick={closeDropdown}>Accepted Projects</a>
      <a className="dropdown-item" href="/resources/publications" onClick={closeDropdown}>Publications</a>
    </div>
  </div>
  <a className={`nav-link ${window.location.pathname === '/institutes' ? 'active' : ''}`} href="/institutes" onClick={closeMenu} style={{marginRight: '10px', color: 'white'}}>Institutes</a>
  <a className={`nav-link ${window.location.pathname === '/collaborations' ? 'active' : ''}`} href="/collaborations" onClick={closeMenu} style={{marginRight: '10px', color: 'white'}}>Collaborations</a>
  <a className={`nav-link ${window.location.pathname === '/aboutus' ? 'active' : ''}`} href="/aboutus" onClick={closeMenu} style={{marginRight: '10px', color: 'white'}}>About Us</a>
  <a className={`nav-link ${window.location.pathname === '/news' ? 'active' : ''}`} href="/news" onClick={closeMenu} style={{marginRight: '10px', color: 'white'}}>News</a>
  <a className={`nav-link ${window.location.pathname === '/graph' ? 'active' : ''}`} href="/graph" onClick={closeMenu} style={{marginRight: '10px', color: 'white'}}>GraphAnalysis</a>
</div>

          <div className="navbar-nav ml-auto" >
              <Link className="nav-link d-none d-lg-inline btn " to="/login" 
              style={{backgroundColor: "white", color:"#11676d", border: "solid", borderWidth:"0.5px" , marginRight:'5px', borderRadius:"10px", fontSize: '16px' }} 
              >Login</Link>


              <Link className="nav-link d-none d-lg-inline btn " to="/register" 
              style={{backgroundColor: "white", color:"#11676d", border: "solid",  borderWidth:"0.5px" , borderRadius:"10px" , fontSize: '16px'}} 
              >Register</Link>
            </div>

          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
