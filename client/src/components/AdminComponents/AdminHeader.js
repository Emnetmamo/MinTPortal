import React, {useState, useEffect} from "react";
import axios from 'axios'
import { AppBar, Typography, Toolbar, Avatar, Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import '../../images/assets/css/admin.css';
import logo from '../../images/Logo.jpg';

function AdminHeader() {

  const [isAuthenticated, setIsAuthenticated] = useState(null) ;
  const [userName, setUserName] = useState('')
  useEffect(() => {
      const checkAuthentication = async () => {
          try {
            const response = await axios.get('https://research-portal-server-9.onrender.com/check-auth-status');
            const response2 = await axios.get('https://research-portal-server-9.onrender.com/auth1/protect');
            const isAuthenticated = response.data.isAuthenticated;
            const userName = response2.data.name
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

      
  }
  , []);
  
  
  function isLoggedIn() {
      // Check if a user identifier exists in session storage
      //return sessionStorage.getItem('user') !== null;
    console.log(isAuthenticated)
    return isAuthenticated;
    

  }
  
  // Function to perform logout
 
  function logout() {
      axios.get('https://research-portal-server-9.onrender.com/logout')
      // Clear the user identifier from session storage
     // sessionStorage.removeItem('user');
      // Redirect to the login page or perform other logout actions
      window.location.href = '/login'; // Adjust the URL accordingly
  }
  
  // Example usage:
  if (isLoggedIn()) {
     
      console.log('User is logged in');
  } else {
      console.log(isAuthenticated)
      console.log('User is not logged in');
  }
  

  return (
    <div className='header  shadow'>
      <nav className="navbar navbar-expand-xxs ">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
          <img src={logo} alt="Logo" style={{ borderRadius: '90%', width: '95px',height:"90px",marginLeft:"55px" }} />
          </Link>
          <div className="d-inline-flex  align-items-center">
            {/* <div className=" me-2" ><BsFillPersonFill  className='user-icon'/></div>
            <Link to='/admin/news/add-news' className="me-3 user-name">Admin</Link> */}
            {isAuthenticated ? (
                        <Stack direction="row" gap="16px" alignItems="center">
                            {/* {user?.result.imageUrl && (
                                 <Avatar  alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            )} */}
                            {/* {user.result.name && */}
                             
                              <>
                              <Typography  variant="h6">{userName}</Typography>
                              <Button variant="contained"  color="secondary" onClick={logout}>Logout</Button>
                              </>                                 
                            
                        </Stack>
                    ): (
                        <Button component={Link} to="/login" variant="contained" color="primary">Sign In</Button>
                   )}
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default AdminHeader