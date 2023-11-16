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
            <img className=' logo' src= {logo} alt='logo' />
          </Link>
          <div className="d-inline-flex  align-items-center">
            <div className=" me-2" ><BsFillPersonFill  className='login-user-icon'/></div>
            <Link to='/user' className="me-3 login-user-name">User</Link>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default UserHeader;