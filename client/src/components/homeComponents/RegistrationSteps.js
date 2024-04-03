// src/components/homeComponents/RegistrationSteps.js

import React from 'react';
import { Link } from 'react-router-dom';
// import RegisterImage from '../../images/home/register2.jpeg';
import RegImage from "../../images/Register/register4.jpg";

const RegistrationSteps = () => {
  const stepStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '20px',
  };

  return (
    <div className="container shadow p-4 mb-5 bg-white rounded">
      <div className="row">
        <div className="col-md-6">
          <h2 style={{ marginLeft: "30px", fontWeight: "bold" }}>How to Register</h2>
          <img
            src={RegImage}
            alt="Registration Steps"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-6">
          <div style={{stepStyle, marginTop: "50px"}}>
            <h4>Step 1</h4>
            <p style={{ color: '#555' }}>
              Provide your basic personal information
            </p>
          </div>
          <div style={stepStyle}>
            <h4>Step 2</h4>
            <p style={{ color: '#555' }}>
              Layout your project in detail
            </p>
          </div>
          <div style={stepStyle}>
            <h4>Step 3</h4>
            <p style={{ color: '#555' }}>
              Fill out the Ethical Evaluation provided
            </p>
          </div>
          <div className="text-end">
            <a href="/announcements" className="btn btn-link" style={{ color: '#777' }}>
              Go to the announcement page to find the calls and registration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSteps;
