import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import '../../images/assets/css/admin.css';
import logo from '../../images/Logo.jpg';

function AdminHeader() {
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-xxs ">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <img className='ms-4 logo' src= {logo} alt='logo' />
          </a>
          <div className="d-inline-flex  align-items-center">
            <div className=" me-2" ><BsFillPersonFill  className='user-icon'/></div>
            <span className="me-3 user-name">Admin</span>
          </div>
        </div>
      </nav>
      <hr/>
    </div>
  );
}

export default AdminHeader