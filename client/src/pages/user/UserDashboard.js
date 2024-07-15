// import React, { useState, useEffect, useNavigate } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios'
// import ConfirmAppointment from './ConfirmAppointment';
// import CheckStatus from './CheckStatus';
// import UploadReport from './UploadReport';
// import FeedbackReport from './FeedbackReport';
// import '../../App.css';
// import { Link } from 'react-router-dom'

// const UserDashboard = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [message, setMessage] = useState('');
//   const location = useLocation();

//   const {email} = location.state;
//   //console.log(email);
//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   useEffect(() => {

//     axios.defaults.withCredentials = true;
//     axios.get('https://research-portal-server-9.onrender.com/userd/dashboard') // Update the route path here
//       .then((result) => {
//         console.log(result)
//         if (result.data.message === 'ok') {
//           setMessage('Welcome to the user dashboard.');
//         } else {
//           window.location.href = '/login'; 
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         window.location.href = '/login';  // Handle errors by redirecting to the login page
//       });
//   }, []);

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col text-right"> {/* Adjust the alignment */}
//         <Link
//           to="/"
//           style={{
//             marginBottom: '20px',
//             marginTop:'8px',
//             backgroundColor: '#11676d',
//             border: 'none',
//             fontSize: '20px',
//           }}
//           className="btn btn-primary"
//         >
//           Back to Home
//         </Link>
//         </div>
//       </div>
//       <div className="row">
   
//         <div className="col-md-3 left-sidebar" style={{padding:"10px"}}>
//           <button
//             className="btn btn-link w-100 text-center mb-2"
//             style={{textDecoration: 'none', backgroundColor: selectedOption === 'confirmAppointment' ? '#11676d' : 'white', color: selectedOption === 'confirmAppointment' ? 'white' : 'black' }}
//             onClick={() => handleOptionClick('confirmAppointment')}
//           >
//             Confirm Appointment Date
//           </button>
//           <button
//             href="#"
//             className="btn btn-link w-100 text-center mb-2"
//             style={{textDecoration: 'none', backgroundColor: selectedOption === 'checkStatus' ? '#11676d' : 'white', color: selectedOption === 'checkStatus' ? 'white' : 'black' }}
//             onClick={() => handleOptionClick('checkStatus')}
//           >
//             Check Your Status
//           </button>
//           <button
//             href="#"
//             className="btn btn-link w-100 text-center mb-2"
//             style={{textDecoration: 'none', backgroundColor: selectedOption === 'uploadReport' ? '#11676d' : 'white', color: selectedOption === 'uploadReport' ? 'white' : 'black' }}
//             onClick={() => handleOptionClick('uploadReport')}
//           >
//             Upload Files
//           </button>
//           <button
//             href="#"
//             className="btn btn-link w-100 text-center mb-2"
//             style={{textDecoration: 'none', backgroundColor: selectedOption === 'feedbackReport' ? '#11676d' : 'white', color: selectedOption === 'feedbackReport' ? 'white' : 'black' }}
//             onClick={() => handleOptionClick('feedbackReport')}
//           >
//             View Feedback on Report
//           </button>
//         </div>
//         <div className="col-md-9">
//           {selectedOption === 'confirmAppointment' && <ConfirmAppointment  />}
//           {selectedOption === 'checkStatus' && <CheckStatus />}
//           {selectedOption === 'uploadReport' && <UploadReport />}
//           {selectedOption === 'feedbackReport' && <FeedbackReport />}
//           {(selectedOption !== 'confirmAppointment' && selectedOption !== 'checkStatus' 
//           && selectedOption !== 'uploadReport' && selectedOption !== 'feedbackReport') && 
//           <div style={{marginLeft:"10%", marginBottom:"50%"}}>
//             <h1 style={{color:"#11676d"}}>User Home</h1>
//             <h3>{`${message} Here you can:`}
//               <ul>
//                 <br/>
//                 <li>View your project proposal's status</li>
//                 <li>Check and change your proposal presentation date</li>
//                 <li>Upload your progress report if your project is accepted</li>
//               </ul>
//             </h3>
//           </div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../AuthContext';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmAppointment from './ConfirmAppointment';
import CheckStatus from './CheckStatus';
import UploadReport from './UploadReport';
import FeedbackReport from './FeedbackReport';
import SetProjectStatus from './SetProjectStatus';
import '../../App.css';
import { Link } from 'react-router-dom'
import axios  from 'axios';
import {toast, ToastContainer} from 'react-toastify';

import Logout from '../../components/Logout'

const UserDashboard = () => {

// UserDashboard.js


  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();
  //const {email} = location.state;
  const { user } = useAuthContext();
  console.log(user)

 
  const navigate = useNavigate();
  //const [isAuthenticated, setIsAuthenticated] = useState(undefined)
  //const {isAuthenticated, login} = useAuthContext()
  //console.log(email);

  useEffect(
    function(){
      if(document.cookie){
        if(document.cookie.split(';')[1].split('=')[1] === '"user"'){
          
        }
        else{
          navigate('/login');
        }
      }
      else{
        navigate('/login'); 
      }
    },[]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  return (
  document.cookie?
    <div className="container mt-5">      
      <div className="col-md-9">
        <div style={{marginLeft:"10%", marginBottom:"50%"}}>
          <h1 style={{color:"#2b2b2b"}}>User Home</h1>
          <h3>Welcome to the user dashboard. Here you can:
            <ul>
              <br/>
              <li>View your project proposal's status</li>
              <li>Check and change your proposal presentation date</li>
              <li>Upload your progress report if your project is accepted</li>
            </ul>
          </h3>
        </div>
        <ToastContainer/>
      </div>    
  </div> : <Logout/>
  );
};

export default UserDashboard;