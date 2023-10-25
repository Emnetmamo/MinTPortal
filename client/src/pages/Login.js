// src/components/pages/Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (using email and password states)
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
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" placeholder='Enter Your Password' className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button style={{marginBottom: "20px", marginLeft:'400px', backgroundColor:"orange", border: "none", fontSize:"20px"}} type="submit" className="btn btn-primary">Login</button>
          </form>
          {/* <div className="mt-3">
            <span>or</span>
            <button className="btn btn-primary mt-2">Register</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
