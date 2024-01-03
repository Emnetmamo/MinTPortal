import React, { useState } from 'react';
import Logo from '../images/Logo.jpg';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5001/authl/login', { email, password })
      .then((result) => {
        console.log(result.data);
        if (result.data.message === 'ok') {
          if (result.data.role === 'admin') {
            history('/admin');
          } else if (result.data.role === 'admin2') {
            history('/admin2', { state: { email: email } });
          }
          else if (result.data.role === 'admin3') {
            history('/admin3', { state: { email: email } });
          } else {
            history('/user', { state: { email: email } });
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
        <div className="col-md-4 text-center">
          <img
            src={Logo}
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: '200px' }}
          />
        </div>
        <div className="col-xs-12 col-md-6">
          <h1 className="mb-4">Log in</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
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
                Password
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
                  backgroundColor: 'orange',
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
    </div>
  );
};

export default Login;