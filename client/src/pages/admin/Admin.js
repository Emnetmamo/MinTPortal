import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:5001/admind/dashboard') // Update the route path here
      .then((result) => {
        console.log(result)
        if (result.data === 'ok') {
          setMessage('Welcome to the admin dashboard.');
        } else {
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error);
        navigate('/login'); // Handle errors by redirecting to the login page
      });
  }, []);

  return (
    <div>
      <div className="container mt-5" >
        <div className="row">
          <div
            className="col-xs-12 col-md-3 post-links-container mt-2"
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
                class="list-group-item "
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
          <div className="col-xs-12 col-md-7 mb-5"  style={{ height: "400px" }}>
            <br />
            <h1 style={{color:"orange"}}>Admin Home</h1>
            <h3>{message}</h3> <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
