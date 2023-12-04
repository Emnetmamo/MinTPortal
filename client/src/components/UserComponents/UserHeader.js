import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import '../../images/assets/css/admin.css';
import logo from '../../images/Logo.jpg';

function UserHeader() {
  return (
    <div className='header  shadow'>
      <nav className="navbar navbar-expand-xxs ">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
          <img src={logo} alt="Logo" style={{ borderRadius: '90%', width: '95px',height:"90px",marginLeft:"55px" }} />
          </Link>
          <div className="d-inline-flex  align-items-center">
            <div className=" me-2" ><BsFillPersonFill  className='login-user-icon'/></div>
            <Link to='/user' onClick={function(e){e.preventDefault(); window.location.reload(false);}} className="me-3 login-user-name">User</Link>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default UserHeader;