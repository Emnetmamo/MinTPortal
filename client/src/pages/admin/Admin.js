import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.js';

function Admin() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  let email = "";
  if(!document.cookie){
    navigate('/');
  }
  try{
    email = document.cookie.split(';')[0].split('=')[1].replaceAll('"','');
    console.log(email);
  }
  catch(err){
    navigate('/')
  }

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:5001/admind/dashboard') // Update the route path here
      .then((result) => {
        console.log(result)
        if (result.data === 'ok') {
          setMessage('Welcome to the admin dashboard.');
        } else {
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error);
        navigate('/login'); // Handle errors by redirecting to the login page
      });
  }, []);

  return (
    <div>
      <div className="container mt-5" >
        <div className="row">
          <div
            className="col-xs-12 col-md-3 post-links-container mt-2"
            style={{ overflow: "hidden" }}
          >
            <Sidebar email={email} />
          </div>
          <div className="col-xs-12 col-md-2"></div>
          <div className="col-xs-12 col-md-7 mb-5"  style={{ height: "400px" }}>
            <br />
            <h1 style={{color:"orange"}}>MinT Grant Admin Home</h1>
            <h3>{message}</h3> <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
