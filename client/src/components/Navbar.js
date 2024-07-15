import React from 'react';
import  {useState, useEffect}  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/Logo.jpg';
import { AiTwotoneHome } from "react-icons/ai";
import axios from 'axios';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn} from '@fortawesome/free-solid-svg-icons';
// import Announcements from '../pages/Announcements';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(document.cookie);
  const [isLoggedOut, setLoggedOut] = useState(document.cookie === "");
  const navigate = useNavigate();
  console.log("LoggedOut is " + isLoggedOut);
  console.log(document.cookie);

  useEffect(
    function(){
      setLoggedOut(document.cookie === "")
    }
    ,[document.cookie]);
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
  const logout = async () => {
    try {
      //await axios.get('https://research-portal-server-9.onrender.com/logout');
      //login(false)
      //console.log(isAuthenticated)
      
      document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      // Redirect to the login page after logout
      navigate('/login');
      //window.location.href = '/login'; 
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  function goToDashboard(){
    const currentRole = document.cookie.split(';')[1].split('=')[1].replaceAll('"', '');
    if(currentRole === "user"){
      navigate('/user');
    }
    else if(currentRole === "admin"){
      navigate('/admin');
    }
    else if(currentRole === "admin2"){
      navigate('/admin2');
    }
    else if(currentRole === "admin3"){
      navigate('/admin3');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top" style={{width:"100%"}}>
      <div className="nav-show container-fluid">
        <a className="navbar-brand mr-auto" href="/">
         
        <img src={Logo} alt="Logo" style={{ borderRadius: '90%', width: '120px',height:"95px",marginLeft:"-5px" }} />
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
             <a className={`nav-link d-flex align-items-center ${window.location.pathname === '/' ? 'active' : ''}`} href="/" onClick={closeMenu} style={{marginRight: '10px', color: 'gray'}}> <AiTwotoneHome style={{marginRight:"7px"}}/>Home</a>
             <a className={`nav-link ${window.location.pathname === '/announcements' ? 'active' : ''}`} href="/announcements" onClick={closeMenu} style={{marginRight: '10px', color: 'gray'}}> 
             <span className="blink-container" >
             <FontAwesomeIcon icon={faBullhorn} style={{marginRight:"5px"}} className="blink-icon"/>
             <span className="blink-text">Announcements</span>
             </span>
             </a>
        <div className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
      <a
      className={`nav-link dropdown-toggle`}
      href="# "
      id="resourcesDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded={isDropdownOpen}
      onClick={toggleDropdown}
      style={{color:"gray"}}
    >
      Resources
    </a>
    <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="resourcesDropdown">
      <a className="dropdown-item" href="/resources/history" onClick={closeDropdown}>History</a>
      <a className="dropdown-item" href="/resources/accepted-projects" onClick={closeDropdown}>Accepted Projects</a>
      <a className="dropdown-item" href="/resources/publications" onClick={closeDropdown}>Publications</a>
    </div>
  </div>
  <a className={`nav-link ${window.location.pathname === '/institutes' ? 'active' : ''}`} href="/institutes" onClick={closeMenu} style={{marginRight: '10px', color: 'gray'}}>Institutes</a>
  <a className={`nav-link ${window.location.pathname === '/collaborations' ? 'active' : ''}`} href="/collaborations" onClick={closeMenu} style={{marginRight: '10px', color: 'gray'}}>Collaborations</a>
  <a className={`nav-link ${window.location.pathname === '/aboutus' ? 'active' : ''}`} href="/aboutus" onClick={closeMenu} style={{marginRight: '10px', color: 'gray'}}>About Us</a>
  <a className={`nav-link ${window.location.pathname === '/contactus' ? 'active' : ''}`} href="/contactus" onClick={closeMenu} style={{marginRight: '10px', color: 'gray'}}>Contact Us</a>
  <a className={`nav-link ${window.location.pathname === '/news' ? 'active' : ''}`} href="/news" onClick={closeMenu} style={{marginRight: '10px', color: 'gray'}}>News</a>
  <a className={`nav-link ${window.location.pathname === '/graph' ? 'active' : ''}`} href="/graph" onClick={closeMenu} style={{marginRight: '10px', color: 'gray'}}>Reports</a>
</div>
{isLoggedOut &&
  <div>
          <div className="navbar-nav ml-auto" >
              <Link className="nav-link d-none d-lg-inline btn " to="/login" 
               style={{backgroundColor: "white", color:"#11676d",  marginRight:'5px', borderRadius:"10px", fontSize: '16px' }}
              >Login</Link>


            <Link className="nav-link d-none d-lg-inline reg"  to="/auth/register" 
              style={{background: "white", color:"#11676d",   borderRadius:"10px" , fontSize: '16px'}} 
              >Register</Link>
            </div>
            <div className="navbar-nav ml-auto d-inline d-lg-none" >
              <Link className="nav-link btn" to="/login" 
               style={{backgroundColor: "white", color:"#11676d",  marginRight:'5px', borderRadius:"10px", fontSize: '16px' }}
              >Login</Link>


            <Link className="nav-link btn"  to="/auth/register" 
              style={{background: "white", color:"#11676d",   borderRadius:"10px" , fontSize: '16px'}} 
              >Register</Link>
            </div>
            </div>
            }
{!isLoggedOut &&
          <div>
          <div className="navbar-nav ml-auto" >
              <button className="nav-link d-none d-lg-inline btn " onClick={goToDashboard}
              style={{backgroundColor: "white", color:"#11676d", border: "solid", borderWidth:"0.5px" , marginRight:'5px', borderRadius:"10px", fontSize: '16px' }} 
              >Back to Dashboard</button>


              <button className="nav-link d-none d-lg-inline btn " onClick={logout}
              style={{backgroundColor: "white", color:"#11676d", border: "solid",  borderWidth:"0.5px" , borderRadius:"10px" , fontSize: '16px'}} 
              >Logout</button>
            </div>
            <div className="navbar-nav ml-auto d-inline d-lg-none" >
              <button className="nav-link btn " onClick={goToDashboard}
              style={{backgroundColor: "white", color:"#11676d", border: "solid", borderWidth:"0.5px" , marginRight:'5px', borderRadius:"10px", fontSize: '16px' }} 
              >Back to Dashboard</button>


              <button className="nav-link btn " onClick={logout}
              style={{backgroundColor: "white", color:"#11676d", border: "solid",  borderWidth:"0.5px" , borderRadius:"10px" , fontSize: '16px'}} 
              >Logout</button>
            </div>
            </div>
            }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;