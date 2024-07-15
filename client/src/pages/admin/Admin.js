import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.js';
import Logout from '../../components/Logout.js';

function Admin() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(function(){
    if(document.cookie){
      if(document.cookie.split(';')[1].split('=')[1] === '"admin"'){
        console.log("Admin");
      }
      else{
        console.log("Not Admin")
        navigate('/login');
      }
    }
    else{
      navigate('/login'); 
    }
  });

  // useEffect(() => {
  //   axios.defaults.withCredentials = true;
  //   axios.get('http://localhost:5001/admind/dashboard') // Update the route path here
  //     .then((result) => {
  //       console.log(result)
  //       if (result.data.message === 'ok') {
  //         setMessage('Welcome to the admin dashboard.');
          
  //       } else {
  //         window.location.reload(true);
  //         window.location.href = '/login';
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       window.location.href = '/login'; // Handle errors by redirecting to the login page
  //     });
  //     const checkAuthentication = async () => {
  //       try {
  //         const response = await axios.get('http://localhost:5001/check-auth-status');
          
  //         const isAuthenticated = response.data.isAuthenticated;
  //         console.log(isAuthenticated)    
  //         setIsAuthenticated(isAuthenticated)
        
  
        
  //       } catch (error) {
  //         console.error('Error checking authentication status:', error);
  //         return false;
  //       }
  //     };
      
  //     // Example usage
  //      checkAuthentication();
  // }, []);

  return (
    document.cookie?
    <div>
     
      
          <div className="col-xs-12 col-md-2"></div>
          <div className="col-xs-12 col-md-7 mb-5"  style={{ height: "400px" }}>
            <br />
            <h1 style={{color:"orange"}}>MinT Grant Admin Home</h1>
            <h3>Welcome to the admin dashboard.</h3> <br /> <br />
          </div>
        </div> : <Logout/>
    
  );
}

export default Admin;
