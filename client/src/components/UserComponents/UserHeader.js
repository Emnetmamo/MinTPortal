import React, {useState, useEffect} from "react";
import axios from 'axios'
import { AppBar, Typography, Toolbar, Avatar, Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import '../../images/assets/css/admin.css';
import logo from '../../images/Logo.jpg';

function UserHeader() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(null) ;
  const [userName, setUserName] = useState('')
  useEffect(() => {
      const checkAuthentication = async () => {
          try {
            const response = await axios.get('http://localhost:5001/check-auth-status');
            const response2 = await axios.get('http://localhost:5001/userd/dashboard');
            console.log(response2)
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

      
  }
  , []);
  
  
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
          {isAuthenticated ? (
                        <Stack direction="row" gap="16px" alignItems="center">
                            {/* {user?.result.imageUrl && (
                                 <Avatar  alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            )} */}
                            {/* {user.result.name && */}
                             
                              <>
                              <Typography  variant="h6" sx= {{color: 'white'}}> <div className=" me-2" ><BsFillPersonFill  className='login-user-icon'/>{` Hi, ${userName}`}</div></Typography>
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

export default UserHeader;