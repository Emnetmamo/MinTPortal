import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import '../../images/assets/css/admin.css';
import logo from '../../images/Logo.jpg';

function AdminHeader() {
  return (
    <div className='header  shadow'>
      <nav className="navbar navbar-expand-xxs ">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
          <img src={logo} alt="Logo" style={{ borderRadius: '90%', width: '95px',height:"90px",marginLeft:"55px" }} />
          </Link>
          <div className="d-inline-flex  align-items-center">
            <div className=" me-2" ><BsFillPersonFill  className='user-icon'/></div>
            <Link to='/admin/news/add-news' className="me-3 user-name">Admin</Link>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default AdminHeader