import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmAppointment from './ConfirmAppointment';
import CheckStatus from './CheckStatus';
import UploadReport from './UploadReport';
import FeedbackReport from './FeedbackReport';
import SetProjectStatus from './SetProjectStatus';
import '../../App.css';
import { Link } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify';

const UserDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  if(!document.cookie){
    navigate('/');
  }
  const email = document.cookie.split(';')[0].split('=')[1].replaceAll('"','');
  //const {email} = location.state;
  //console.log(email);
  useEffect(function(){
    function checkIfUser(){
      if(document.cookie){
        if(document.cookie.split(';')[1].split('=')[1] === '"user"'){
          
        }
        else{
          navigate('/');
        }
      }
      else{
        navigate('/'); 
      }
    }
    checkIfUser();
  },[]);
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
   
        <div className="col-md-3 left-sidebar" style={{padding:"10px"}}>
          <button
            className="btn btn-link w-100 text-center mb-2"
            style={{textDecoration: 'none', backgroundColor: selectedOption === 'confirmAppointment' ? '#11676d' : 'white', color: selectedOption === 'confirmAppointment' ? 'white' : 'black' }}
            onClick={() => handleOptionClick('confirmAppointment')}
          >
            Confirm Appointment Date
          </button>
          <button
            href="#"
            className="btn btn-link w-100 text-center mb-2"
            style={{textDecoration: 'none', backgroundColor: selectedOption === 'checkStatus' ? '#11676d' : 'white', color: selectedOption === 'checkStatus' ? 'white' : 'black' }}
            onClick={() => handleOptionClick('checkStatus')}
          >
            Check Your Status
          </button>
          <button
            href="#"
            className="btn btn-link w-100 text-center mb-2"
            style={{textDecoration: 'none', backgroundColor: selectedOption === 'uploadReport' ? '#11676d' : 'white', color: selectedOption === 'uploadReport' ? 'white' : 'black' }}
            onClick={() => handleOptionClick('uploadReport')}
          >
            Upload Files
          </button>
          <button
            href="#"
            className="btn btn-link w-100 text-center mb-2"
            style={{textDecoration: 'none', backgroundColor: selectedOption === 'feedbackReport' ? '#11676d' : 'white', color: selectedOption === 'feedbackReport' ? 'white' : 'black' }}
            onClick={() => handleOptionClick('feedbackReport')}
          >
            View Feedback on Report
          </button>
          <button
            href="#"
            className="btn btn-link w-100 text-center mb-2"
            style={{textDecoration: 'none', backgroundColor: selectedOption === 'setProjectStatus' ? '#11676d' : 'white', color: selectedOption === 'setProjectStatus' ? 'white' : 'black' }}
            onClick={() => handleOptionClick('setProjectStatus')}
          >
            Set Project Status
          </button>
        </div>
        <div className="col-md-9">
          {selectedOption === 'confirmAppointment' && <ConfirmAppointment email={email} />}
          {selectedOption === 'checkStatus' && <CheckStatus email={email}/>}
          {selectedOption === 'uploadReport' && <UploadReport email={email}/>}
          {selectedOption === 'feedbackReport' && <FeedbackReport email={email}/>}
          {selectedOption === 'setProjectStatus' && <SetProjectStatus email={email}/>}
          {(selectedOption !== 'confirmAppointment' && selectedOption !== 'checkStatus' 
          && selectedOption !== 'uploadReport' && selectedOption !== 'feedbackReport' && selectedOption !== 'setProjectStatus') 
          && <div style={{marginLeft:"10%", marginBottom:"50%"}}>
            <h1 style={{color:"#11676d"}}>User Home</h1>
            <h3>Welcome to the user dashboard. Here you can:
              <ul>
                <br/>
                <li>View your project proposal's status</li>
                <li>Check and change your proposal presentation date</li>
                <li>Upload your progress report if your project is accepted</li>
              </ul>
            </h3>
          </div>}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default UserDashboard;
