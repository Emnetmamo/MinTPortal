import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import countryOptions from "./countryOptions";
import { Link } from "react-router-dom";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { Form, FormGroup } from "react-bootstrap";
import axios from "axios";
const BasicPersonalInfo = ({ nextStep}) => {
  const [fName, SetFname] = useState("");
  const [LName, SetLname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [sex, SetSex] = useState("Male");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [country, SetCountry] = useState("");
  const [address, SetAdress] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials=true
  
    if (password !== confirmPassword) {
      toast.error('Password confirmation error',{
        autoClose: 5000,
       className: 'custom-toast'
      });
    }
    if (password.length < 6) {
      toast.error('Password length must be above ',{
        autoClose: 5000,
      className: 'custom-toast'
      });
    }
    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!.])[A-Za-z\d@#$%^&*!.]{8,}/.test(password)) {
      toast.error('Password must contain at least one uppercase, one lowercase, one special character, and one number',{
        autoClose: 5000,
      className: 'custom-toast'
      });
    }
  
    if (password === confirmPassword && password.length >= 8 && /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!.])[A-Za-z\d@#$%^&*!.]{8,}/.test(password)) {
      axios
        .post("http://localhost:5001/auth/register", {
          fName,
          LName,
          password,
          email,
          phone,
          country,
          address,
          sex
        })
        .then((response) => {
          console.log(response.data);
          if(response.data==="UserExist"){
            toast.info('Account Already Exists. Please Log In.', {
              position: toast.POSITION.TOP_CENTER, // Centered at the top
              autoClose: 6000,
            });
          }
          if(response.data==='Userregistered'){
            toast.success('Good work go to next step', {
              position: toast.POSITION.TOP_CENTER, // Centered at the top
              autoClose: 4000,
            });
            
          nextStep();
          }
          else{
            toast.error('server error please try again', {
              position: toast.POSITION.TOP_CENTER, // Centered at the top
              autoClose: 6000,
            });
          }
        })
        .catch((error) => {
          console.log("error from registration", error);
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
    <div className="container" style={{width:"60%", marginBottom: "30px"}}>
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
        <h3 style={{ color: "red" }}>
          <b>Note</b>: There are 3 sections to this registration
        </h3>
        <h3 style={{ color: "red" }}>Fill out each section carefully</h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h2
            style={{ backgroundColor: "gray", textAlign: "center" }}
            className="card-title  text-white p-2 rounded"
          >
            Basic Personal Information
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="owner" className="form-label" style={{fontSize: "25px"}}>
                Project’s Owner*
              </label>
              <div className="d-flex">
                <input
                style={{fontSize: "22px"}}
                  type="text"
                  className="form-control me-2"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={fName}
                  onChange={(e) => {
                    SetFname(e.target.value);
                  }}
                />

                <input
                style={{fontSize: "22px"}}
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={LName}
                  onChange={(e) => {
                    SetLname(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
            <label htmlFor="sex" className="form-label" style={{fontSize: "25px"}}>
                Sex*
              </label>
            <select
            style={{fontSize: "22px"}}
                className="form-select"
                id="sex"
                name="sex"
                value={sex}
                onChange={(e) => SetSex(e.target.value)}
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="password" className="form-label">Your Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="******" required  />
            </div> */}
          <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{fontSize: "25px"}}>
                Email*
              </label>
              <input
              style={{fontSize: "22px"}}
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="sample@gmail.com"
                value={email}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
                required
              />
            </div>
           <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{fontSize: "25px"}}>
                Password*
              </label>
              <div className="input-group">
                <input
                style={{fontSize: "22px"}}
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
              <label htmlFor="confirmPassword" className="form-label" style={{fontSize: "25px"}}>
                Confirm Password*
              </label>
              <div className="input-group">
                <input
                style={{fontSize: "22px"}}
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
              <label htmlFor="contactNumber" className="form-label" style={{fontSize: "25px"}}>
                Contact Number
              </label>
              <input
              style={{fontSize: "22px"}}
                type="tel"
                className="form-control"
                id="contactNumber"
                name="contactNumber"
                placeholder="(000)-000-000"
                value={phone}
                onChange={(e) => {
                  SetPhone(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label" style={{fontSize: "25px"}}>
                Country
              </label>
              <select
              style={{fontSize: "22px"}}
                className="form-select"
                id="country"
                name="country"
                value={country}
                onChange={(e) => {
                  SetCountry(e.target.value);
                }}
                required
              >
                <option value="" disabled selected style={{fontSize: "25px"}}>
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
              <label htmlFor="address" className="form-label" style={{fontSize: "25px"}}>
                Address
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={address}                
                onChange={(e) => {
                  SetAdress(e.target.value);
                }}
                required
              ></textarea>
            </div>
            <button
              style={{ backgroundColor: "gray", color: "white", float: "right" }}
              type="submit"
              className="btn "
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
