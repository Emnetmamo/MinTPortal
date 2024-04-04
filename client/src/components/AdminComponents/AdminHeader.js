import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
// import { AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core';
//import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';
//import { BsFillPersonFill } from "react-icons/bs";
import '../../images/assets/css/admin.css';
import logo from '../../images/Logo.jpg';
import { BsFillPersonFill } from "react-icons/bs";

function AdminHeader() {

  const location = useLocation();
  const navigate = useNavigate();
  if(!document.cookie){
    navigate('/');
  }
  const email = document.cookie.split(';')[0].split('=')[1].replaceAll('"','');
  const role = document.cookie.split(';')[1].split('=')[1].replaceAll('"','');
  console.log(email);
  const [isAuthenticated, setIsAuthenticated] = useState(null) ;
  const [userName, setUserName] = useState('');
  const path = window.location.pathname;
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        let response = null;
        // axios.get('http://localhost:5001/check-auth-status')
        // .then(result=> {response = result; console.log(result);})
        // .catch(err=>console.log(err));

        let response2 = null;
        if(role === "admin"){
          axios.get('http://localhost:5001/admind/dashboard')
          .then(result=> {response2 = result; console.log(result);})
          .catch(err=>console.log(err));
          if(path.startsWith('/admin2') || path.startsWith('/admin3')){
            navigate('/admin');
          }
        }
        else if(role === "admin2"){
          axios.get('http://localhost:5001/admind2/dashboard')
          .then(result=> {response2 = result; console.log(result);})
          .catch(err=>console.log(err));
          if(!path.startsWith('/admin2')){
            navigate('/admin2');
          }
        }
        else if(role === "admin3"){
          axios.get('http://localhost:5001/admind3/dashboard')
          .then(result=> {response2 = result; console.log(result);})
          .catch(err=>console.log(err));
          if(!path.startsWith('/admin3')){
            navigate('/admin3');
          }
        }

        axios.post('http://localhost:5001/getName', {email:email})
        .then(result=> {response = result; setUserName(result.data.name); console.log(result);})
        .catch(err=>console.log(err));
        
        //const isAuthenticated = response.data.isAuthenticated;
        // const userName1 = response.data.name
        console.log(userName);
        //console.log(isAuthenticated)
        //setIsAuthenticated(isAuthenticated)
        // setUserName(userName1)

      
      } catch (error) {
        console.error('Error checking authentication status:', error);
        return false;
      }
     }
      
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
  // if (isLoggedIn()) {
     
  //     console.log('User is logged in');
  // } else {
  //     console.log(isAuthenticated)
  //     console.log('User is not logged in');
  // }


  return (
//     <div className='header  shadow'>
//       <nav className="navbar navbar-expand-xxs ">
//         <div className="container-fluid">
//           <Link className="navbar-brand " to="/">
//           <img src={logo} alt="Logo" style={{ borderRadius: '90%', width: '95px',height:"90px",marginLeft:"55px" }} />
//           </Link>
//           <div className="d-inline-flex  align-items-center">

//             <div className=" me-2" ><BsFillPersonFill  className='user-icon'/></div>
//             <Link to='/admin/news/add-news' className="me-3 user-name">Admin</Link>
//           </div>
          
//         </div>
//       </nav>
      
//     </div>
//   );
// }
<div className='header  shadow'>
<nav className="navbar navbar-expand-xxs ">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/">
    <img src={logo} alt="Logo" style={{ borderRadius: '90%', width: '95px',height:"90px",marginLeft:"55px" }} />
    </Link>
    <div className="d-inline-flex  align-items-center">
                  <div style={{alignItems:"center"}}>
                      {/* {user?.result.imageUrl && (
                           <Avatar  alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                      )} */}
                      {/* {user.result.name && */}
                       
                        <div>
                        <div className=" me-2" ><BsFillPersonFill  className='user-icon' style={{marginRight:"20px"}}/>
                        <h3 style= {{color: 'green', display:"inline", marginRight:"20px"}} >Hi, {userName}</h3>
                        <button className="btn btn-warning" style= {{color: 'white', fontWeight:"bold"}} onClick={logout}>Logout</button>
                        </div>
                        </div>                                 
                      
                  </div>
    </div>
  </div>
</nav>

</div>
);
}

export default AdminHeader