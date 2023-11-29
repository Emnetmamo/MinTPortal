import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import FileBase from 'react-file-base64'
import { ToastContainer, toast } from 'react-toastify';
import {setAppointment} from '../../actions/appointment'
import '../../images/assets/css/admin.css';


axios.defaults.withCredentials=true;

function SetAppointmentDate() {
  let i = 1;
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
  useEffect(
    function(){
      axios.get('http://localhost:5001/admin/appointment/getAll')
      .then((result)=>{
        setProjects(result.data);
        //console.log(result);
      })
      .catch(err=>console.log(err))
      setLoaded(true);
    }
  ,[]);
  function displayProjects(){
    const tableData = [];
    
    for (let j = 0; j < projects.length; j++) {
      tableData.push(
          <tr>
            <td>{i++}</td>
            <td>{projects[j].projectId}</td>
            <td>{projects[j].projectTitle}</td>
            <td>{projects[j].appointmentDate}</td>
            <td>{projects[j].status}</td>
            <td><input type="datetime-local" name={projects[j].projectId} id={projects[j].projectId} /></td>
            <td>
              <button name={projects[j].projectId + "-" + projects[j].status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], e.target.name.split('-')[1]);
              }} 
                className='btn btn-primary'>Set Appointment</button>
            </td>
          </tr>
      );
  }
  //console.log(tableData);
  return tableData;
}
function updateStatus(id){
  console.log("Clicked!")
  const dateInput = document.getElementById(id);
  const newDate = new Date(dateInput.value).toISOString();
  console.log(newDate);
  axios.get('http://localhost:5001/admin/appointment/setAppointment_'+id+"_"+newDate)
  .then(result=>console.log(result))
  .catch(err=>console.log(err));
  window.location.reload(false);
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
                  to="/admin/appointments/add-appointment1"
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
              <br />
              <li class="list-group-item post-links   " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/institutes/post-to-institutes"
                >
                  Post To Institutes
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/collaboration/post-to-collaboration"
                >
                  Post To Collaborations
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
            </ul>
            {/* ... Navigation links ... */}
          </div>
          <div className="col-xs-12 col-md-2"></div>        
          
          <div className="col-xs-12 col-md-7 mb-5" > 
          <form method="post" action="/admin/appointments/add-appointment1" onSubmit={handleSubmit} >
              
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
            </form> */}
            <table className="table">
                <thead className="table-success" style={{color: '#11676d'}}>  
                  <tr>
                    <th>No.</th>
                    <th>User Id</th>
                    <th>Project Title</th>
                    <th>Appointment Date</th>
                    <th>Status</th>
                    <th>New Appointment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loaded && displayProjects()}
                </tbody>  
              </table>
          </div>
      </div>
      
    </div>
  );
}

export default SetAppointmentDate;
