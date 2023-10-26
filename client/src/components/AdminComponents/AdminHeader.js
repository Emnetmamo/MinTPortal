import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import '../../images/assets/css/admin.css';
import logo from '../../images/Logo.jpg';

function AdminHeader() {
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-xxs ">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <img className='ms-4 logo' src= {logo} alt='logo' />
          </Link>
          <div className="d-inline-flex  align-items-center">
            <div className=" me-2" ><BsFillPersonFill  className='user-icon'/></div>
            <Link to='/admin/news/add-news' className="me-3 user-name">Admin</Link>
          </div>
        </div>
      </nav>
      <hr/>
    </div>
  );
}

export default AdminHeader