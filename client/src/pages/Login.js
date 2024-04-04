import React, { useState, useEffect } from 'react';
import login from '../images/login.png';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate();

  useEffect(function(){
    async function checkIfLoggedIn(){
      try {
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        await axios.get('http://localhost:5001/logout'); 
      } catch (error) {
        console.error('Logout failed:', error);
      }
      // if(document.cookie){
      //   if(document.cookie.split(';')[1].split('=')[1].replaceAll('"','') === "admin"){
      //     history('/admin');
      //   }
      //   else if(document.cookie.split(';')[1].split('=')[1].replaceAll('"','') === "admin2"){
      //     history('/admin2');
      //   }
      //   else if(document.cookie.split(';')[1].split('=')[1].replaceAll('"','') === "admin3"){
      //     history('/admin3');
      //   }
      //   else if(document.cookie.split(';')[1].split('=')[1].replaceAll('"','') === "user"){
      //     history('/user');
      //   }
      // }
    }
    checkIfLoggedIn();
  },[]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5001/authl/login', { email, password })
      .then((result) => {
        console.log(result.data);
        if(result.data.error==='User not found'){
          toast.error('User not found,please register', {
            position: toast.POSITION.TOP_CENTER, 
            autoClose: 6000,
          })
        }
        if(result.data.error==='Incorrect password'){
          toast.error('Incorrect password,please enter the correct password', {
            position: toast.POSITION.TOP_CENTER, 
            autoClose: 6000,
          })
        }
        if (result.data.message === 'ok') {
          if (result.data.role === 'admin') {
            document.cookie += 'email="'+email+'"';
            document.cookie = 'role="'+result.data.role+'"';
            history('/admin',  { state: { email: email, role: result.data.role } });
          } else if (result.data.role === 'admin2') {
            document.cookie += 'email="'+email+'"';
            document.cookie = 'role="'+result.data.role+'"';
            history('/admin2', { state: { email: email, role: result.data.role } });
          }
          else if (result.data.role === 'admin3') {
            document.cookie += 'email="'+email+'"';
            document.cookie = 'role="'+result.data.role+'"';
            history('/admin3', { state: { email: email, role: result.data.role } });
          } else {
            document.cookie += 'email="'+email+'"';
            document.cookie = 'role="'+result.data.role+'"';
            history('/user', { state: { email: email, role: result.data.role } });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <div className="container mt-5">
      <div className="text-right mt-3">
        <Link
          to="/"
          style={{
            marginBottom: '20px',
            backgroundColor: '#11676d',
            border: 'none',
            fontSize: '20px',
          }}
          className="btn btn-primary"
        >
          Back to Home
        </Link>
      </div>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={login}
            alt="Logo"
            className="img-fluid"
            style={{ height: '400px', width:'800px', marginBottom:"80px" }}
          />
        </div>
        <div className="col-xs-12 col-md-6">
          <h1 className="mb-4">Log in</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email :
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 password-input-container">
              <label htmlFor="password" className="form-label">
                Password :
              </label>
              <div className="input-group">
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
                  marginBottom: '90px',
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
          </form>
         
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;