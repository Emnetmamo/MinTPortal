import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewFeedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/footer');
        console.log('Feedback Data:', response.data); // Check if data is logged correctly
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>

<div className="">
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-xs-12 col-md-3 post-links-container mt-5"
            style={{ overflow: "hidden" }}
          >
            <ul class="list-group text-center fs-5 display-6">
              <br />
              <li
                class="list-group-item"
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link
                  className="links"
                  to="/admin/appointments/add-appointment"
                >
                  Set Appointment Date{" "}
                </Link>
              </li>
              <br />
              <li
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link className="links" to="/admin/user-status/add-user-status">
                  Update User Status
                </Link>
              </li>
              <br />
              <li
                class="list-group-item active"
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link
                  className="links"
                  to="/admin/viewFeedback/view-feedback"
                >
                View feedback
                </Link>
              </li>
              <li
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                  marginTop: "20px"
                }}
              >
                <Link
                  className="links"
                  to="/admin/viewReports"
                >
                View Reports
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-2"></div>
          <div className="col-xs-12 col-md-7 mb-5">
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
      </div>
    </div>








  
    </div>
  );
};

export default ViewFeedback;
