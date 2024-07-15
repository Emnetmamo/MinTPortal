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

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import {jwtDecode} from 'jwt-decode';

//import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

 const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();
    const [isAuthenticated, setIsAuthenticated] = useState(null) ;
    const [userName, setUserName] = useState('')
    useEffect(() => {
        const checkAuthentication = async () => {
          try {
            const response = await axios.get('http://localhost:5001/check-auth-status');
            const response2 = await axios.get('http://localhost:5001/admind3/dashboard');
            const isAuthenticated = response.data.isAuthenticated;
            const userName = response2.data.decoded.name
            console.log(isAuthenticated)
            setIsAuthenticated(isAuthenticated)
            setUserName(userName)
          } catch (error) {
            console.error('Error checking authentication status:', error);
            return false;
          }
        };
      
        // Example usage
        checkAuthentication();
      }, []);
      
    
    function isLoggedIn() {
        // Check if a user identifier exists in session storage
        //return sessionStorage.getItem('user') !== null;
      console.log(isAuthenticated)
      return isAuthenticated;
      

    }
    
    // Function to perform logout
   
    const logout = async () => {
      try {
        await axios.get('http://localhost:5001/logout');
        setIsAuthenticated(false);
        navigate('/login')
        //window.location.href = '/login'; 
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };
    
    // Example usage:
    if (isLoggedIn()) {
       
        console.log('Admin is logged in');
    } else {
        console.log(isAuthenticated)
        console.log('Admin is not logged in');
    }
    
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
            style= {{backgroundColor: "#11676d",  color: "#FF8F00"}}
           
            elevation={0}
            className= {classes.appBar}
            
           
            
        >
            <Toolbar>
                <Stack
                    style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}
                >
                    {isAuthenticated ? (
                        <Stack direction="row" gap="16px" alignItems="center">
                            {/* {user?.result.imageUrl && (
                                 <Avatar  alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            )} */}
                            {/* {user.result.name && */}
                             
                              <>
                              <p  variant="h6"> <div className=" me-2" ><BsFillPersonFill  className='login-user-icon'/>{` Hi, ${userName}`}</div></p>
                              <Button variant="contained"  color="secondary" onClick={logout}>Logout</Button>
                              </>                                 
                            
                        </Stack>
                    ): (
                        <Button component={Link} to="/login" variant="contained" color="primary">Sign In</Button>
                   )}
                </Stack>
            </Toolbar>
        </AppBar>
           
    );
};

export default Navbar;