import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ConfirmAppointment from './ConfirmAppointment';
import CheckStatus from './CheckStatus';
import '../../App.css';
import { Link } from 'react-router-dom'

const UserDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();
  const {email} = location.state;
  //console.log(email);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-right"> {/* Adjust the alignment */}
        <Link
          to="/"
          style={{
            marginBottom: '20px',
            marginTop:'8px',
            backgroundColor: '#11676d',
            border: 'none',
            fontSize: '20px',
          }}
          className="btn btn-primary"
        >
          Back to Home
        </Link>
        </div>
      </div>
      <div className="row">
   
        <div className="col-md-3 left-sidebar">
          <button
            className="btn btn-link w-100 text-center mb-2"
            style={{textDecoration: 'none', backgroundColor: selectedOption === 'confirmAppointment' ? '#11676d' : 'white', color: selectedOption === 'confirmAppointment' ? 'white' : 'black' }}
            onClick={() => handleOptionClick('confirmAppointment')}
          >
            Confirm Appointment Date
          </button>
          <button
            href="#"
            className="btn btn-link w-100 text-center"
            style={{textDecoration: 'none', backgroundColor: selectedOption === 'checkStatus' ? '#11676d' : 'white', color: selectedOption === 'checkStatus' ? 'white' : 'black' }}
            onClick={() => handleOptionClick('checkStatus')}
          >
            Check Your Status
          </button>
        </div>
        <div className="col-md-9">
          {selectedOption === 'confirmAppointment' && <ConfirmAppointment email={email} />}
          {selectedOption === 'checkStatus' && <CheckStatus email={email}/>}
          {(selectedOption !== 'confirmAppointment' && selectedOption !== 'checkStatus') && 
          <div style={{marginLeft:"10%", marginBottom:"50%"}}>
            <h1 style={{color:"#11676d"}}>User Home</h1>
            <h3>Welcome to the user dashboard. Here you can:
              <ul>
                <br/>
                <li>View your project proposal's status</li>
                <li>Check and change your proposal presentation date</li>
              </ul>
            </h3>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
