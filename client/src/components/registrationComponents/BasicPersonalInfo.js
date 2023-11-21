import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import countryOptions from "./countryOptions";
import { Link } from "react-router-dom";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { Form } from "react-bootstrap";
import axios from "axios";

const BasicPersonalInfo = ({ nextStep }) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, SetCountry] = useState("");
  const [address, setAddress] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;

    if (password !== confirmPassword) {
      toast.error('Password confirmation error', {
        autoClose: 5000,
        className: 'custom-toast'
      });
    } else if (password.length < 6) {
      toast.error('Password length must be at least 6 characters', {
        autoClose: 5000,
        className: 'custom-toast'
      });
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!.])[A-Za-z\d@#$%^&*!.]{8,}/.test(password)) {
      toast.error('Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number', {
        autoClose: 5000,
        className: 'custom-toast'
      });
    } else {
      axios.post("http://localhost:5001/auth/register", {
        fName,
        lName,
        password,
        email,
        phone,
        country,
        address,
      })
        .then((response) => {
          console.log(response.data);
          if (response.data === "UserExist") {
            toast.info('Account Already Exists. Please Log In.', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 6000,
            });
          } else if (response.data === 'Userregistered') {
            toast.success('Good work! Proceeding to the next step', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 4000,
            });
            nextStep();
          } else {
            toast.error('Server error. Please try again', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 6000,
            });
          }
        })
        .catch((error) => {
          console.log("Error from registration", error);
        });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container">
      <div className="text-right mt-3">
        <Link
          style={{
            marginBottom: "20px",
            backgroundColor: "#11676d",
            border: "none",
            fontSize: "20px",
          }}
          to="/"
          className="btn btn-primary"
        >
          Back to Home
        </Link>
      </div>
      <h1 className="text-center">Registration Form</h1>
      <div style={{ marginTop: "20px" }}>
        <h5 style={{ color: "red" }}>
          <b>Note</b>: There are 3 sections to this registration
        </h5>
        <h6 style={{ color: "red" }}>Fill out each section carefully</h6>
      </div>
      <div className="card">
        <div className="card-body">
          <h1
            style={{ backgroundColor: "orange" }}
            className="card-title  text-white p-2 rounded"
          >
            Basic Personal Information
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="owner" className="form-label">
                Project’s Owner*
              </label>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={fName}
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                />

                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={lName}
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password*
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
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

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password*
              </label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                />
                <div className="password-toggle-container">
                  <button
                    className="btn btn-outline-secondary password-toggle-button"
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <VscEyeClosed /> : <VscEye />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address*
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number*
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select
            className="form-select"
            id="country"
            name="country"
            value={country}
            onChange={(e) => {
              SetCountry(e.target.value);
            }}
            required
          >
            <option value="" disabled selected>
              Select a country
            </option>
            {countryOptions.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address*
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                rows="3"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></textarea>
            </div>
            <button
            style={{ backgroundColor: "orange", color: "white", float: "right" }}
             type="submit"
              className="btn"
          >
           Next
           </button>

          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BasicPersonalInfo;