import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useNavigate}  from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "../../images/assets/css/admin.css";
import AdminHeader from "../../components/AdminComponents/AdminHeader";
import axios from "axios";
import Sidebar from './Sidebar.js';
import Dropzone from "../../components/AdminComponents/Dropzone";
import Logout from "../../components/Logout.js";

function PostCalls() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [field, setField] = useState('');
  const [callType, setCallType] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [Award, setAward] = useState('');                      
  const [instructions, setInstructions] = useState('');
  const [guideline, setGuideline] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  
  const navigate=useNavigate();
  // useEffect (() => {const checkAuthentication = async () => {
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
  // }, [])
 
  useEffect(function(){
    if(document.cookie){
      if(document.cookie.split(';')[1].split('=')[1] === '"admin3"'){
        
      }
      else{
        navigate('/login');
      }
    }
    else{
      navigate('/login'); 
    }
  }
    ,[]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    field: '',
    callType: '',
    startDate: '',
    endDate: '',
    Award: '',
    instructions: '',
    guideline: '',

  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   axios
  //     .post("https://research-portal-server-9.onrender.com/announcements/addCall", {
  //       title,
  //       description,
  //       field,
  //       callType,
  //       startDate,
  //       endDate,
  //       Award,
  //       instructions,
  //       guideline,
  //     })
  //     .then((result) =>{
  //       console.log(result)
  //       navigate('/admin')
  //     })
  //     .catch((err) => console.log(err));
  //   console.log({
  //     title,
  //     description,
  //     field,
  //     callType,
  //     startDate,
  //     endDate,
  //     Award,
  //     instructions,
  //     guideline,
  //   });
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();

    // dispatch(setNews(formData));
    
    const data = new FormData();

    
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('field', formData.field);
    data.append('callType', formData.callType);    
    data.append('startDate', formData.startDate);
    data.append('endDate', formData.endDate);
    data.append('Award', formData.Award);
    data.append('instructions', formData.instructions);
    data.append('guideline', formData.guideline);

    try {
      const response = axios.post("https://research-portal-server-9.onrender.com/announcements/addCall", data);
      console.log(response.data);
        alert('Do you want to submit')
        toast.info('Call form submitted successfully!');
        // await  window.location.reload()
    } catch (errors) {
      console.error('Error:', errors.message);
      toast.error('An error occurred while submitting news form.');
    }
    
  
};

  return (
    document.cookie  ?
    <div className="">          
           
            <form onSubmit={handleSubmit}>
       
              <h1>Post a Call</h1>             
              <div className="form-group">
                <label htmlFor="title">Announcement Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Announcement Description:</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  rows="5"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="field">Field of Study:</label>
                <select
                  id="field"
                  name="field"
                  className="form-control"
                  value={formData.field}
                  onChange={handleChange}
                  required
                >
                  <option >Select Field of Study</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Environment-Energy">Environment and Energy</option>
                  <option value="Health">Health</option>
                  <option value="Industry">Industry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="callType">Type of Call:</label>
                <select
                  id="callType"
                  name="callType"
                  className="form-control"
                  value={formData.callType}
                  onChange={handleChange}
                  required
                >
                  <option >Select Type of Call</option>
                  <option value="National">National</option>
                  <option value="Foreign">Foreign</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="startDate">Application Kickoff Date:</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="form-control"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="endDate">Application Deadline Date:</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  className="form-control"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="Award">Award:</label>
                <textarea
                  id="Award"
                  name="Award"
                  className="form-control"
                  rows="5"
                  placeholder="Award"
                  value={formData.Award}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="instructions">Submission Instructions:</label>
                <textarea
                  id="instructions"
                  name="instructions"
                  className="form-control"
                  rows="5"
                  placeholder="Submission Instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="guideline">Upload Guideline:</label>
                <textarea
                  id="guideline"
                  name="guideline"
                  className="form-control"
                  rows="5"
                  placeholder="Upload Guideline"
                  value={formData.guideline}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="form-control my-3 fs-5 btn btn-warning fw-bold"
                >
                  Submit
                </button>
              </div>
            </form>
            <ToastContainer/>   
          </div> : <Logout/>
   
  );
}

export default PostCalls;
