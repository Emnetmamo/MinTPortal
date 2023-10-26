// BasicPersonalInfo.js
import React from 'react';
import { useState } from 'react';
import countryOptions from './countryOptions';
import { Link } from 'react-router-dom';
import {VscEyeClosed,VscEye} from 'react-icons/vsc'
import { Form, FormGroup } from 'react-bootstrap';

const BasicPersonalInfo = ({ nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="container mt-1">
       <div className="text-right mt-3">
        <Link style={{marginBottom: "20px", backgroundColor:"#11676d", border: "none", fontSize:"20px"}}
         to="/" className="btn btn-primary">Back to Home</Link>
      </div>
      <h1 className="text-center">Registration Form</h1>
      <div style={{marginTop:"20px"}}>
        <h5 style={{color:"red"}}><b>Note</b>: There are 3 sections to this registration</h5>
        <h6 style={{color:"red"}}>Fill out each section carefully</h6>
      </div>
      <div className="card">
        <div className="card-body">
          <h1 style={{ backgroundColor: "orange"}} className="card-title  text-white p-2 rounded">Basic Personal Information</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="owner" className="form-label">Project’s Owner*</label>
              <div className="d-flex">
                <input type="text" className="form-control me-2" id="firstName" name="firstName" placeholder="First Name" required />
                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" required />
              </div>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="password" className="form-label">Your Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="******" required  />
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
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="sample@gmail.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">Contact Number</label>
              <input type="tel" className="form-control" id="contactNumber" name="contactNumber" placeholder="(000)-000-000" required />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country" name="country" required>
                <option value="" disabled selected>Select a country</option>
                {countryOptions.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea className="form-control" id="address" name="address" required></textarea>
            </div>
            <button style={{ backgroundColor: "orange", color:"white"}} type="submit" className="btn ">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicPersonalInfo;
