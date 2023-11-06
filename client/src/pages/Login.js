// src/components/pages/Login.js
import React, { useState } from 'react';
import Logo from '../images/Logo.jpg';
import {VscEyeClosed,VscEye} from 'react-icons/vsc'
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom'; // Updated import
 // Import the AdminRoutes component
import { Form, FormGroup } from 'react-bootstrap';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const [role, setRole] = useState(''); // Add role state
  const history = useNavigate(); // Initialize useHistory

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (using email and password states)
    
    // Check the selected role and navigate accordingly
    if (role === 'admin') {
      history('/admin');
      window.location.reload(); // Redirect to admin page
    } else if (role === 'user') {
      history('/user'); // Redirect to user page
    {
      e.preventDefault();
      axios.post('http://localhost:5001/authl/login', {  email, password })
        .then((result) => {
          console.log(result.data);
          if(result.data.message==='ok'){
            if(result.data.role==='admin'){
              history('/admin/news/add-news');
            }
            else{
              history('/')
            }
          }
         
        })
        .catch((error) => {
          console.log(error);
        });
    }

  
    
  
  }


  return (
    <div className="container mt-5">
      <div className="text-right mt-3">
        <Link to="/" style={{marginBottom: "20px", backgroundColor:"#11676d", border: "none", fontSize:"20px"}}
         className="btn btn-primary">Back to Home</Link>
      </div>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-4 text-center">
          <img src={Logo} alt="Logo" className="img-fluid" style={{ maxHeight: '200px' }} />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4 ">Log in</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email"  placeholder='Enter Your Email' className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" placeholder='Enter Your Password' className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div> */}
     <div className='mb-3'>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
       button= {showPassword ? <VscEyeClosed/>:<VscEye/> }
        />
      </Form.Group>
    </div>
            <button style={{marginBottom: "90px", marginLeft:'563px', backgroundColor:"orange", border: "none", fontSize:"20px"}} type="submit" className="btn btn-primary">Login</button>
          </form>
          {/* <div className="mt-3">
            <span>or</span>
            <button className="btn btn-primary mt-2">Register</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}}

export default Login;
