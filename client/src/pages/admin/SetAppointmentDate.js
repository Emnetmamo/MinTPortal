import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import axios from 'axios';
import AdminHeader from '../../components/AdminComponents/AdminHeader';
import Sidebar from './Sidebar.js';


function SetAppointmentDate() {
  let i = 1;
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
  const location = useLocation();
  const {email} = location.state;
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
    
    for (let j = (projects.length-1); j > -1; j--) {
      tableData.push(
          <tr>
            <td>{i++}</td>
            <td>{projects[j].projectId}</td>
            <td>{projects[j].projectTitle}</td>
            <td>{new Date(projects[j].appointmentDate).toLocaleString()}</td>
            <td>{projects[j].status}</td>
            <td><h6 style={{height:"50px",overflowY:"scroll"}}>{projects[j].message}</h6></td>
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
  .then((result)=>{
    console.log(result);
    if(result.data==="Already set"){
      window.alert("This date and time have already been set for another project. Choose a different date and time.")
    }
  })
  .catch(err=>console.log(err));
  window.location.reload(false);
}
return (
  <div className="">
    
    <div className='container mt-5'>
      
        <div className="row">
          <div className="col-xs-12 col-md-3 post-links-container mt-5" style={{overflow: 'hidden'}}>
          <Sidebar/>
        </div>
        <div className="col-xs-12 col-md-1"></div>
        <div className="col-xs-12 col-md-7 mb-5">
          {/* <form method="post" action="/admin/appointments/add-appointment">
              <br/><br/>
              <h1>Post an Appointment</h1>
              <div class="form-group ">
                  <label className='form-label'>Date:</label>
                  <input type="date" name="date" class="form-control " placeholder="Date"/>                  
              </div>
              <div class="form-group">
                  <label className='form-label'>Time:</label>
                  <input  type="time" name="time" className="form-control " placeholder="Time"/>
              </div>
              <div class="form-group">
            <label className='form-label'>Location:</label>
                    <input  type="text" name="location" className="form-control " placeholder="Location"/>
                </div>
                <div class="form-group">
                  <label for="">Description</label>
                  <textarea name="content" class="form-control" id="ta" cols="63" rows="10" placeholder="Description"></textarea>
                </div>
             
                <div class="form-group">
                    <label className='form-label'>Attendees Email:</label>
                    <input  type="email" name="email" className="form-control form-input"/>
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
                    <th>Appointment Date (mm/dd/yyyy)</th>
                    <th>Status</th>
                    <th>Message from User</th>
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
  </div>
   
  )
}

export default SetAppointmentDate