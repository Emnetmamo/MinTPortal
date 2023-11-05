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
        <div className="navbar-nav mx-auto" style={{marginTop:"50px"}}>
  <Link className={`nav-link d-flex align-items-center ${window.location.pathname === '/' ? 'active' : ''}`} to="/" onClick={closeMenu} style={{marginRight: '10px'}}> <AiTwotoneHome/>Home</Link>
  <Link className={`nav-link ${window.location.pathname === '/announcements' ? 'active' : ''}`} to="/announcements" onClick={closeMenu} style={{marginRight: '10px'}}>Announcements</Link>
  <div className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
    <Link
      className={`nav-link dropdown-toggle`}
      to="#"
      id="resourcesDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded={isDropdownOpen}
      onClick={toggleDropdown}
    >
      Resources
    </Link>
    <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="resourcesDropdown">
      <Link className="dropdown-item" to="/resources/accepted-projects" onClick={closeDropdown}>Accepted Projects</Link>
      <Link className="dropdown-item" to="/resources/publications" onClick={closeDropdown}>Publications</Link>
    </div>
  </div>
  <Link className={`nav-link ${window.location.pathname === '/institutes' ? 'active' : ''}`} to="/institutes" onClick={closeMenu} style={{marginRight: '10px'}}>Institutes</Link>
  <Link className={`nav-link ${window.location.pathname === '/collaborations' ? 'active' : ''}`} to="/collaborations" onClick={closeMenu} style={{marginRight: '10px'}}>Collaborations</Link>
  <Link className={`nav-link ${window.location.pathname === '/aboutus' ? 'active' : ''}`} to="/aboutus" onClick={closeMenu} style={{marginRight: '10px'}}>About Us</Link>
  <Link className={`nav-link ${window.location.pathname === '/news' ? 'active' : ''}`} to="/news" onClick={closeMenu} style={{marginRight: '10px'}}>News</Link>
</div>

          <div className="navbar-nav ml-auto" >
              <Link className="nav-link d-none d-lg-inline btn " to="/login" 
              style={{backgroundColor: "white", color:"#11676d", border: "solid", borderWidth:"0.5px" , marginRight:'5px', borderRadius:"10px", fontSize: '16px' }} 
              >Login</Link>


              <Link className="nav-link d-none d-lg-inline btn " to="/register" 
              style={{backgroundColor: "white", color:"#11676d", border: "solid",  borderWidth:"0.5px" , borderRadius:"10px" , fontSize: '16px'}} 
              >Register</Link>
            </div>

            <div className="navbar-nav ml-auto d-inline d-lg-none">
              <Link className="nav-link btn" to="/login" >Login</Link>
              <Link className="nav-link btn" to="/register" >Register</Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
