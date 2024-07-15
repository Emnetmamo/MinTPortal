// import React, { useState } from 'react';
// import Logo from '../images/Logo.jpg';
// import { VscEyeClosed, VscEye } from 'react-icons/vsc';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const history = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios
//       .post('https://research-portal-server-9.onrender.com/authl/login', { email, password })
//       .then((result) => {
//         console.log(result.data);
//         if (result.data.message === 'ok') {
//           if (result.data.role === 'admin') {
//             history('/admin');
//           } else if (result.data.role === 'admin2') {
//             history('/admin2', { state: { email: email } });
//           }
//           else if (result.data.role === 'admin3') {
//             history('/admin3', { state: { email: email } });
//           } else {
//             history('/user', { state: { email: email } });
//           }
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
  

//   return (
//     <div className="container mt-5">
//       <div className="text-right mt-3">
//         <Link
//           to="/"
//           style={{
//             marginBottom: '20px',
//             backgroundColor: '#11676d',
//             border: 'none',
//             fontSize: '20px',
//           }}
//           className="btn btn-primary"
//         >
//           Back to Home
//         </Link>
//       </div>
//       <div className="row justify-content-between align-items-center">
//         <div className="col-md-4 text-center">
//          <a href='/'>
          
//           <img
//             src={Logo}
//             alt="Logo"
//             className="img-fluid"
//             style={{ maxHeight: '200px' }}
//           />
//           </a>
//         </div>
//         <div className="col-xs-12 col-md-6">
//           <h1 className="mb-4">Log in</h1>
//           <form onSubmit={handleLogin}>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter Your Email"
//                 className="form-control"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-3 password-input-container">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <div className="input-group">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Password you entered when you registered"
//                   className="form-control"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <div className="password-toggle-container">
//                   <button
//                     className="btn btn-outline-secondary password-toggle-button"
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? <VscEyeClosed /> : <VscEye />}
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex justify-content-end">
//               <button
//                 style={{
//                   marginBottom: '90px',
//                   marginLeft: '5px',
//                   backgroundColor: 'orange',
//                   border: 'none',
//                   fontSize: '20px',
//                 }}
//                 type="submit"
//                 className="btn btn-primary"
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from 'react';
import Logo from '../images/login.png';
import MinT from '../images/Logo.jpg'
import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import {useAuthContext} from '../AuthContext'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const history = useNavigate();
  const {userName, login }  = useAuthContext()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(
    function(){
      function logout(){
        console.log("Cookie when page loaded: " + document.cookie);
        document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        const temporary = document.cookie;
        if(temporary != ""){
          window.location.reload(false);
        }
      }
      logout();
      console.log("Cookie after loading: " + document.cookie);
    }

    ,[])
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('https://research-portal-server-9.onrender.com/authl/login', { email, password })
      .then((result) => {

        console.log(result.data);
       
        if(result.data.error==='User not found'){
          toast.error('User not found,please register', {
            position: toast.POSITION.TOP_CENTER, 
            autoClose: 2000,
          })
        }
        if(result.data.error==='Incorrect password'){
          toast.error('Incorrect password,please enter the correct password', {
            position: toast.POSITION.TOP_CENTER, 
            autoClose: 2000,
          })
        }
        if (result.data.message === 'ok') {
          
        
          if (result.data.role === 'admin') {
            document.cookie += 'email="'+email+'"';
            document.cookie = 'role="'+result.data.role+'"';
            document.cookie = 'name="'+result.data.name+'"';
            history('/admin',  { state: { email: email, role: result.data.role } });
          } else if (result.data.role === 'admin2') {
            document.cookie += 'email="'+email+'"';
            document.cookie = 'role="'+result.data.role+'"';
            document.cookie = 'name="'+result.data.name+'"';
            history('/admin2', { state: { email: email, role: result.data.role } });
          }
          else if (result.data.role === 'admin3') {
            document.cookie += 'email="'+email+'"';
            document.cookie = 'role="'+result.data.role+'"';
            document.cookie = 'name="'+result.data.name+'"';
            history('/admin3', { state: { email: email, role: result.data.role } });
          } else {
            document.cookie += 'email="'+email+'"';
            document.cookie = 'role="'+result.data.role+'"';
            document.cookie = 'name="'+result.data.name+'"';
            history('/user', { state: { email: email, role: result.data.role } });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
      // const checkAuthentication = async () => {
      //   try {
      //     //const response = await axios.get('https://research-portal-server-9.onrender.com/check-auth-status');
          
      //     const isAuthenticated = response.data.isAuthenticated;
      //     console.log(isAuthenticated)    
      //     setIsAuthenticated(isAuthenticated)
        
  
        
      //   } catch (error) {
      //     console.error('Error checking authentication status:', error);
      //     return false;
      //   }
      // };
      
      // // Example usage
      //  checkAuthentication();
  };
  

  return (
    <div className="container ">
      <div className="text-right">
        <button
          style={{
            marginBottom: '0px',
            backgroundColor: '#11676d',
            border: 'none',
            fontSize: '20px',
          }}
          className="btn btn-primary"
          onClick={function(){
            console.log("Cookie before logout: " + document.cookie);
            document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            document.cookie = 'role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            console.log("Cookie after logout: " + document.cookie);
            history('/');
          }}
        >
          Back to Home
        </button>
      </div>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6 text-center">
          <Link to= '/'>
          <img
            src={Logo}
            alt="Logo"
            className="img-fluid"
            style={{ height: '400px', width:'100%', marginBottom:"80px" }}
          />
          </Link>
        </div>
        <div className="col-xs-12 col-md-6">
  <div className="logo-container">
  <img
            src={MinT}
            alt="Logo"
            className="img-fluid"
            style={{ height: '280px', width:'500PX', marginBottom:"0px" }}
          />
    
  </div>
  <h1 className="mb-3" style={{fontSize: '24px', marginLeft: '114px'}}>Login to your account</h1>
  <form onSubmit={handleLogin} style={{marginLeft: '34px', marginRight: '104px'}}>
    <div className="mb-3">
      <div className="input-group">
        <div className="icon-container">
          <PersonIcon style={{marginRight: '10px'}}/>
        </div>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
    <div className="mb-3 password-input-container">
      <div className="input-group">
        <div className="icon-container">
          <LockIcon style={{marginRight: '10px'}}/>
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password you entered when you registered"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="password-toggle-container">
          <button
            className="btn btn-outline-secondary password-toggle-button"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <VscEyeClosed /> : <VscEye />}
          </button>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-end">
      <button
        style={{
          marginBottom: '10px',
          marginLeft: '5px',
          backgroundColor: 'gray',
          border: 'none',
          fontSize: '20px',
        }}
        type="submit"
        className="btn btn-primary"
      >
        Login
      </button>
    </div>
    <div className="d-flex justify-content-end"  >
    <button
        style={{
          backgroundColor: 'lightgray',
          border: 'none' ,  
          fontSize: '16px'     }}
      
        className="btn "
      >
    <Link to='/forget' style={{ textAlign: 'center', textDecoration: 'none', color: 'black'}}>Forgot Password ?</Link>
    </button>
    </div>
    <br />  
  </form>
  <ToastContainer />
</div>
      </div>
      
    </div>
  );
};

export default Login;