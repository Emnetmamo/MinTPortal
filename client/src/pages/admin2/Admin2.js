import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.js';
import '../../images/assets/css/admin.css';
import Sider from '../../components/Layout/Sidebar.js';
import Logout from '../../components/Logout.js';

function Admin2() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(function(){
    if(document.cookie){
      if(document.cookie.split(';')[1].split('=')[1] === '"admin2"'){
        
      }
      else{
        navigate('/login');
      }
    }
    else{
      navigate('/login'); 
    }
  }
    ,[]);
  // const {email} = location.state;
  // console.log(email);

  // useEffect(() => {

  //   axios.defaults.withCredentials = true;
  //   axios.get('http://localhost:5001/admind2/dashboard') // Update the route path here
  //     .then((result) => {
  //       console.log(result)
  //       if (result.data.message === 'ok') {
  //         setMessage('Welcome to the admin dashboard.');
  //       } else {
          
  //        navigate('/login')
          
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
        
  //      navigate('/login') // Handle errors by redirecting to the login page
        
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
    document.cookie ?
    <div>
      <div className="container mt-5" >
        <div className="row">
        <div
            className="col-xs-0 col-md-0 "
            style={{ overflow: "hidden" }}
          >
         {/* {isSidebarVisible && <Sidebar email={email}/>} */}
          </div>
          
          <div  style={{ height: "400px" }}>
            <br />
            <h1 style={{color:"orange"}}>Technical Committee Admin Home</h1>
            <h3>{message}</h3> <br /> <br />
          </div>
        </div>
       
      </div>
    </div> : <Logout/>
  );
}

export default Admin2;
