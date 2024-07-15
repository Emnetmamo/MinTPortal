// import React, { useState, useEffect } from 'react';
// import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import {jwtDecode} from 'jwt-decode';

// import memories from '../../images/memories.png';
// import * as actionType from '../../constants/actionTypes';
// import useStyles from './styles';

// const Navbar = () => {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const history = useNavigate();
//   const classes = useStyles();

//   const logout = () => {
//     dispatch({ type: actionType.LOGOUT });

//     history.push('/auth');

//     setUser(null);
//   };

//   useEffect(() => {
//     const token = user?.token;

//     if (token) {
//       const decodedToken = jwtDecode(token);

//       if (decodedToken.exp * 1000 < new Date().getTime()) logout();
//     }

//     setUser(JSON.parse(localStorage.getItem('profile')));
//   }, [location]);

//   return (
//     <AppBar className={classes.appBar} position="static" color="inherit">
//       <div className={classes.brandContainer}>
//         <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
//         <img className={classes.image} src={memories} alt="icon" height="60" />
//       </div>
//       <Toolbar className={classes.toolbar}>
//         {user?.result ? (
//           <div className={classes.profile}>
//             <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
//             <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
//             <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
//           </div>
//         ) : (
//           <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
import React, {useState, useEffect} from "react";
import axios from 'axios'
import '../../../images/assets/css/admin.css';
import { BsFillPersonFill } from "react-icons/bs";
import { AppBar, Typography, Toolbar, Avatar, Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import { useAuthContext } from "../../../AuthContext";

import { Link,useNavigate, useLocation, useNavigateocation, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import {jwtDecode} from 'jwt-decode';

//import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

 const Navbar = () => {
    //const {isAuthenticated, login} = useAuthContext()
    
    const location = useLocation();
    const navigate =useNavigate();
    const classes = useStyles();
   
    const [userName, setUserName] = useState('')
    // useEffect(() => {
    //     const checkAuthentication = async () => {
    //       try {
    //        // const response = await axios.get('https://research-portal-server-9.onrender.com/check-auth-status');
    //         const role = document.cookie.split(';')[1].split('=')[1].replaceAll('"','');
    //         let response2 = "";
    //         //response2 = await axios.get('https://research-portal-server-9.onrender.com/userd/dashboard');
    //         if(role === "admin"){
    //           response2 = await axios.get('https://research-portal-server-9.onrender.com/admind/dashboard')
    //           // if(path.startsWith('/admin2') || path.startsWith('/admin3')){
    //           //   navigate('/admin');
    //           // }
    //         }
    //         else if(role === "admin2"){
    //           response2 = await axios.get('https://research-portal-server-9.onrender.com/admind2/dashboard')
    //           // if(!path.startsWith('/admin2')){
    //           //   navigate('/admin2');
    //           // }
    //         }
    //         else if(role === "admin3"){
    //           response2 = await axios.get('https://research-portal-server-9.onrender.com/admind3/dashboard')
    //           // if(!path.startsWith('/admin3')){
    //           //   navigate('/admin3');
    //           // }
    //         }
    //         else if(role === "user"){
    //           response2 = await axios.get('https://research-portal-server-9.onrender.com/userd/dashboard')
    //           // if(!path.startsWith('/admin3')){
    //           //   navigate('/admin3');
    //           // }
    //         }
    //         // const isAuthenticated = response.data.isAuthenticated;
    //         const userName = response2.data.decoded.name

    //         console.log(userName)
         
    //         setUserName(userName)
    //       } catch (error) {
    //         console.error('Error checking authentication status:', error);
    //         return false;
    //       }
    //     };
      
    //     // Example usage
    //     checkAuthentication();
    //   }, []);
      
    
    // function isLoggedIn() {
    //     // Check if a user identifier exists in session storage
    //     //return sessionStorage.getItem('user') !== null;
    //   console.log(isAuthenticated)
    //   return isAuthenticated;
      

    // }

    
    // Function to perform logout
   
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
    
    // Example usage:
    // if (isLoggedIn()) {
       
    //     console.log('Admin is logged in');
    // } else {
    //     console.log(isAuthenticated)
    //     console.log('Admin is not logged in');
    // }
    
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // const dispatch = useDispatch();

    // const history = useNavigate();
    

    // const logout = () => {
    //     dispatch({ type: actionType.LOGOUT });
    //     setUser(null);
    //     window.location.href = '/auth';    
    // };

  


    return (
    
      <AppBar
      style={{
          backgroundColor: "#FFFFFF", 
          color: "#000000", 
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
      }}
      elevation={0} // No elevation
      className={classes.appBar}
  >
      <Toolbar>
          <Stack
              style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
              }}
          >
              {document.cookie ? (
                  <Stack direction="row" gap="16px" alignItems="center">
                      <Typography variant="h6">Hi, {document.cookie.split(';')[2].split('=')[1]}</Typography>
                      <Button variant="contained" color="warning" onClick={logout}>Logout</Button>
                  </Stack>
              ) : (
                  <Button component={Link} to="/login" variant="contained" color="warning">Sign In</Button>
              )}
          </Stack>
      </Toolbar>
  </AppBar>
  
    );
};

export default Navbar;