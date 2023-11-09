import React, { useState } from 'react';
import ConfirmAppointment from './ConfirmAppointment';
import CheckStatus from './CheckStatus';
import '../../App.css';

const UserDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3 left-sidebar">
          <a
            href="#"
            className="btn btn-link w-100 text-center mb-2"
            style={{textDecoration: 'none', backgroundColor: selectedOption === 'confirmAppointment' ? '#11676d' : 'white', color: selectedOption === 'confirmAppointment' ? 'white' : 'black' }}
            onClick={() => handleOptionClick('confirmAppointment')}
          >
            Confirm Appointment Date
          </a>
          <a
            href="#"
            className="btn btn-link w-100 text-center"
            style={{textDecoration: 'none', backgroundColor: selectedOption === 'checkStatus' ? '#11676d' : 'white', color: selectedOption === 'checkStatus' ? 'white' : 'black' }}
            onClick={() => handleOptionClick('checkStatus')}
          >
            Check Your Status
          </a>
        </div>
        <div className="col-md-9">
          {selectedOption === 'confirmAppointment' && <ConfirmAppointment />}
          {selectedOption === 'checkStatus' && <CheckStatus />}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
