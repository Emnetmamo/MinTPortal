import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useNavigate}  from "react-router-dom";
import "../../images/assets/css/admin.css";
import AdminHeader from "../../components/AdminComponents/AdminHeader";
import axios from "axios";
import Sidebar from './Sidebar.js';
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { ToastContainer, toast } from 'react-toastify';
import TableContainer from '@mui/material/TableContainer';
import countryOptions from "../../components/registrationComponents/countryOptions.js";
import Dropzone from "../../components/AdminComponents/Dropzone";
import Logout from "../../components/Logout.js";

function AddAdmin() {
    const [fName, SetFname] = useState("");
    const [LName, SetLname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [sex, SetSex] = useState("Male");
    const [email, SetEmail] = useState("");
    const [phone, SetPhone] = useState("");
    const [country, SetCountry] = useState("");
    const [address, SetAddress] = useState("");
    const [adminType, setAdminType] = useState("");
    const [fieldType, setField] = useState("");
    const [isAdmin2, setIsAdmin2] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const navigate = useNavigate();
    useEffect(function(){
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
    },[]);
    
    // useEffect(
    //   function(){
       
    //     const checkAuthentication = async () => {
    //       try {
    //         const response = await axios.get('https://research-portal-server-9.onrender.com/check-auth-status');
            
    //         const isAuthenticated = response.data.isAuthenticated;
    //         console.log(isAuthenticated)    
    //         setIsAuthenticated(isAuthenticated)
          
    
          
    //       } catch (error) {
    //         console.error('Error checking authentication status:', error);
    //         return false;
    //       }
    //     };
        
    //     // Example usage
    //      checkAuthentication();
    //   }
    // ,[]);
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
          .post("https://research-portal-server-9.onrender.com/auth/register2", {
            fName,
            LName,
            password,
            email,
            phone,
            country,
            address,
            sex,
            adminType,
            fieldType
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
              toast.success('Admin Added!', {
                position: toast.POSITION.TOP_CENTER, // Centered at the top
                autoClose: 4000,
              });
              
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
    document.cookie ?
    <div style = {{marginLeft: '0'}}>
   
         <div style = {{marginLeft: '0'}}>
            <h1>Add Admin</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="owner" className="form-label">
                Admin's Full Name*
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
                    SetFname(e.target.value);
                  }}
                />

                <input
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
            <label htmlFor="sex" className="form-label">
                Sex*
              </label>
            <select
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
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
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
                <label htmlFor="type">Type of Admin:</label>
                <select
                  id="type"
                  name="type"
                  className="form-control"
                  value={adminType}
                  onChange={(e) => {
                    setAdminType(e.target.value);
                    if(e.target.value === "admin2"){
                      setIsAdmin2(true);
                    } 
                  }}
                >
                  <option >Select Admin Type</option>
                  <option value="admin">MinT Grant Admin (Part of Techincal Committee)</option>
                  <option value="admin2">Technical Committee Admin (External Party)</option>
                  <option value="admin3">MinT General Admin (Manages website)</option>
                  </select>
              </div>
              {isAdmin2 && <div className="mb-3">
              <label htmlFor="fieldType" className="form-label" style={{fontSize: "25px"}}>
                Field*
              </label>
              <select
              style={{fontSize: "22px"}}
                className="form-select"
                id="fieldType"
                name="fieldType"
                value={fieldType}
                onChange={(e) => setField(e.target.value)}
                required
              >
                <option value="" style={{fontSize: "22px"}}>Select a category</option>
           <option value="Agriculture">Agriculture</option>
          <option value="Industry">Industry</option>
          <option value="Health">Health</option>
          <option value="Construction">Construction</option>
          <option value="Mines and Water">Mines and Water</option>
          <option value="Information Communication">Information Communication</option>
          <option value="Energy">Energy </option>
          <option value="Enviroment and Protection">Environment and Protection </option>
          <option value="Other related Sectors">Other related Sectors</option>
              </select>
            </div> }
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              <input
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
                Address
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={address}                
                onChange={(e) => {
                  SetAddress(e.target.value);
                }}
                required
              ></textarea>
            </div>
            <button
              style={{width: '100%', backgroundColor: "orange", color: "white", float: "right" }}
              type="submit"
              className="btn "
            >
              Add Admin
            </button>
          </form>
          </div>
     
      <ToastContainer/>
    </div> : <Logout/>
  );
}

export default AddAdmin;