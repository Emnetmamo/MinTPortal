import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import FileBase from 'react-file-base64'
import { ToastContainer, toast } from 'react-toastify';
import {setAppointment} from '../../actions/appointment'
import '../../images/assets/css/admin.css';
import Dropzone from '../../components/AdminComponents/Dropzone';


axios.defaults.withCredentials=true;

function Post_News() {
  
   const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    content: '',
    sender_email: '',
    sender_password: '',
    attendee_email: ''

  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
    //  const emailResponse = await axios.post('http://localhost:5001/admin/appointments/add-appointment');
      dispatch(setAppointment(formData));
    
  };

  const clear = () => {

  }

  return (
    <div className= " mt-5 pt-5">
      
      <div className='container  '>
        <div className="row" >
          <div className="col-xs-12 col-md-3 post-links-container  " style={{ overflow: 'hidden' }}>
          <ul class="list-group text-center fs-5 display-6">
              <br />
              <li class="list-group-item post-links  " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/news/add-news">
                  Post News{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links  active" style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/appointments/add-appointment"
                >
                  Set Appointment Date{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links "style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/user-status/add-user-status">
                  Update User Status
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/calls/add-call">
                  Post Calls
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/publications/add-publication"
                >
                  Post Publications
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links   " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/accepted-projects/add-accepted-project"
                >
                  Post Accepted Projects
                </Link>
              </li>
            </ul>
            {/* ... Navigation links ... */}
          </div>
          <div className="col-xs-12 col-md-2"></div>        
          
          <div className="col-xs-12 col-md-7 mb-5" > 
          <form method="post" action="/admin/appointments/add-appointment" onSubmit={handleSubmit} >
                <br/><br/>
                <h1>Post an Appointment</h1>
                <div class="form-group ">
                    <label className='form-label'>Date:</label>
                    <input type="date" name="date" class="form-control " placeholder="Date" value={formData.date} onChange={handleChange} required/>                  
                </div>
                <div class="form-group">
                    <label className='form-label'>Time:</label>
                    <input  type="time" name="time" className="form-control " placeholder="Time" value={formData.time} onChange={handleChange} required/>
                </div>
                <div class="form-group">
                    <label className='form-label'>Location:</label>
                    <input  type="text" name="location" className="form-control " placeholder="Location" value={formData.location} onChange={handleChange} required/>
                </div>
                <div class="form-group">
                  <label for="">Description</label>
                  <textarea name="content" class="form-control" id="ta" cols="63" rows="10" placeholder="Description" value={formData.content} onChange={handleChange} required></textarea>
                </div>

                <div class="form-group">
                    <label className='form-label'>Sender or Admin Email:</label>
                    <input  type="email" name="sender_email" className="form-control form-input" placeholder='Email' value={formData.sender_email} onChange={handleChange} required/>
                </div>

                <div class="form-group">
                    <label className='form-label'>Sender or Admin Password:</label>
                    <input  type="password" name="sender_password" className="form-control form-input" placeholder='Password' value={formData.sender_password} onChange={handleChange} required/>
                </div>
             
                <div class="form-group">
                    <label className='form-label'>Attendee's Email:</label>
                    <input  type="email" name="attendee_email" className="form-control form-input" placeholder='Email' value={formData.attendee_email} onChange={handleChange} required/>
                </div>
                <div class="form-group">
                    <button type="submit" className=" form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
                </div>
            </form>                                                           
              <ToastContainer/>                    
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Post_News;
