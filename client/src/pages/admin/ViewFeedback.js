// import React, { useState, useEffect } from 'react';
// import { Card } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Sidebar from './Sidebar.js';

// const ViewFeedback = () => {
//   const [feedbackData, setFeedbackData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://research-portal-server-9.onrender.com/footer');
//         console.log('Feedback Data:', response.data); // Check if data is logged correctly
//         setFeedbackData(response.data);
//       } catch (error) {
//         console.error('Error fetching feedback data:', error);
//       }
//     };
  
//     fetchData();
//   }, []);
  

//   return (



//           <div >
//           {feedbackData
//               .slice() // Create a shallow copy of the array
//               .reverse() // Reverse the array
//               .map((feedback) => (
//                 <Card key={feedback.createdAt} className="mb-3" style={{ background: "#F4EFEF" }}>
//                   <Card.Body>
//                     <Card.Subtitle className="mb-2 text-muted">{new Date(feedback.createdAt).toLocaleString()}</Card.Subtitle>
//                     <Card.Title style={{ fontSize: "24px" }}>{feedback.fullName}</Card.Title>
//                     <Card.Subtitle className="mb-2" style={{ color: "blue" }}>{feedback.email}</Card.Subtitle>
//                     <Card.Text style={{ color: "black", fontWeight: "normal" }} className="mb-2">{feedback.message}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               ))}
//           </div>
      

//   );
// };

// export default ViewFeedback;
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import Logout from '../../components/Logout.js';
import { useNavigate } from 'react-router-dom';

const ViewFeedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  useEffect(() => {
    if(document.cookie){
      if(document.cookie.split(';')[1].split('=')[1] === '"admin"'){
        
      }
      else{
        navigate('/login');
      }
    }
    else{
      navigate('/login'); 
    }
    const fetchData = async () => {
      try {
        const response = await axios.get('https://research-portal-server-9.onrender.com/footer');
        console.log('Feedback Data:', response.data); // Check if data is logged correctly
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };
  
    fetchData();
    // const checkAuthentication = async () => {
    //   try {
    //     const response = await axios.get('https://research-portal-server-9.onrender.com/check-auth-status');
        
    //     const isAuthenticated = response.data.isAuthenticated;
    //     console.log(isAuthenticated)    
    //     setIsAuthenticated(isAuthenticated)
      

      
    //   } catch (error) {
    //     console.error('Error checking authentication status:', error);
    //     return false;
    //   }
    // };
    
    // // Example usage
    //  checkAuthentication();
  }, []);
  

  return (
    document.cookie ?
    <div>

<div className="">
          <h1>Feedbacks from User</h1>
          <div >

          {feedbackData
              .slice() // Create a shallow copy of the array
              .reverse() // Reverse the array
              .map((feedback) => (
                <Card key={feedback.createdAt} className="mb-3" style={{ background: "#F4EFEF" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{new Date(feedback.createdAt).toLocaleString()}</Card.Subtitle>
                    <Card.Title style={{ fontSize: "24px" }}>{feedback.fullName}</Card.Title>
                    <Card.Subtitle className="mb-2" style={{ color: "blue" }}>{feedback.email}</Card.Subtitle>
                    <Card.Text style={{ color: "black", fontWeight: "normal" }} className="mb-2">{feedback.message}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      </div>: <Logout/>

  );
};

export default ViewFeedback;
