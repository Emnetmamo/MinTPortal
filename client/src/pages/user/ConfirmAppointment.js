

// export default ConfirmAppointment;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logout from '../../components/Logout';
import AppointmnetImg from '../../images/user/appoint.png';
import { useAuthContext } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const ConfirmAppointment = () => {
  let email;
  const cookies = document.cookie;
  const navigate = useNavigate();

  if (cookies) {
    console.log(cookies)
      const emailCookie = cookies.split(';')[0];
      if (emailCookie) {
          const emailValue = emailCookie.split('=')[1];
          if (emailValue) {
              email = emailValue.replaceAll('"', '');
              // Now you can use the email variable safely
              console.log(email);
          } else {
              console.error("Email value is undefined");
          }
      } else {
          console.error("Email cookie is undefined");
      }
  } else {
      console.error("No cookies found");
  }
  const [appointments, setAppoint] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let i = 1;
  //console.log(email1);
  //const [isAuthenticated, setIsAuthenticated] = useState(null)
  //const {isAuthenticated, login} = useAuthContext()
    
  
  useEffect(
    function(){
      if(document.cookie){
        if(document.cookie.split(';')[1].split('=')[1] === '"user"'){
          
        }
        else{
          navigate('/login');
        }
      }
      else{
        navigate('/login'); 
      }
      axios.get('https://research-portal-server-9.onrender.com/admin/appointment/load-'+email)
      .then((result)=>{
        setAppoint(result.data);
        //console.log(result);
      })
      .catch(err=>console.log(err))
      setLoaded(true);
     
    }
  ,[email]);
  function displayAppoint(){
    const tableData = [];
    
    for (let j = 0; j < appointments.length; j++) {
      tableData.push(
          <tr>
            <td>{i++}</td>
            <td>{appointments[j].projectTitle}</td>
            <td>{new Date(appointments[j].appointmentDate).toLocaleString().split(',')[0]}</td>
            <td>{new Date(appointments[j].appointmentDate).toLocaleString().split(',')[1]}</td>
            <td>
              <div style={{display: 'flex', flexDirection: 'column'}}>
              <button name={appointments[j].projectId + "-Accepted"} onClick={
                function(e){
                updateStatus(e.target.name);
              }} 
                className='btn btn-primary'>Accept Appointment</button>
              <button name={appointments[j].projectId} style={{marginTop:"10px"}} onClick={
                function(e){
                rescheduleAppt(e.target.name);
              }} 
                className='btn btn-primary'>Reschedule Appointment</button></div>
              </td>
              <td id={appointments[j].projectId + "-Input"} style={{display:"none"}}>
              <textarea name="" id={appointments[j].projectId + "-Message"} cols="30" rows="3" 
              placeholder='Reason for rescheduling'></textarea>

              <button name={appointments[j].projectId + "-Reschedule"} id={appointments[j].projectId + "-Rejected"} 
              style={{marginTop:"10px"}} onClick={
                function(e){
                updateStatus(e.target.name);
              }} 
                className='btn btn-primary'>Submit</button>  
            </td>
          </tr>
      );
  }
  //console.log(tableData);
  return tableData;
}
async function updateStatus(id){
  console.log("Clicked!");
  const projectID = id.split('-')[0];
  const text = document.getElementById(projectID+"-Message");
  const message = {message:text.value};
  // axios.get('https://research-portal-server-9.onrender.com/admin/appointment/setStatus-'+id)
  await axios.post('https://research-portal-server-9.onrender.com/admin/appointment/setStatus-'+id, message)
  .then(result=>console.log(result))
  .catch(err=>console.log(err));
  window.location.reload(false);
}
function rescheduleAppt(id){
  const row = document.getElementById(id+"-Input");
  row.style.display = "inline";
}
  return (
    cookies? 
    <div>
    {(loaded && appointments.length > 0) && (
    <div className="card shadow p-3 mb-5 bg-white rounded">
      <img
       src={AppointmnetImg} 
       alt="Appointment" 
       className="img-fluid mb-2"
       style={{width:"350px", height:"200px", marginLeft:"210px"}}
       />
      <div className="card-body">
      <p 
        style={{backgroundColor:"orange",color:"white", textAlign:"center", padding:"3px", borderRadius:"2px"}} 
        className="card-text">
          An admin has sent you an appointment date for the in person project proposal:
      </p>
      <table className='table'>
      <thead className="table-success" style={{color: '#11676d'}}>
          <tr>
          <th>No.</th>
          <th>Project Title</th>
          <th>Date (mm/dd/yyyy)</th>
          <th>Time</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loaded && displayAppoint()}
        </tbody>
      </table>
        
        {/* <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="text" className="form-control" id="date" placeholder="dd/mm/yy" />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time</label>
          <input type="text" className="form-control" id="time" placeholder="00:00 AM" />
        </div>
        <div className="d-flex justify-content-between">
          <button style={{backgroundColor:"orange", color:"white"}} className="btn ">Accept</button>
          <button  style={{backgroundColor:"orange", color:"white"}} className="btn ">Reject</button>
        </div> */}
      </div>
    </div>)}
    {(loaded && appointments.length === 0) && (
      <div className="card shadow p-3 mb-5 bg-white rounded">
      <img
       src={AppointmnetImg} 
       alt="Appointment" 
       className="img-fluid mb-2"
       style={{width:"350px", height:"200px", marginLeft:"210px"}}
       />
      <div className="card-body">
      <p 
        style={{backgroundColor:"orange",color:"white", textAlign:"center", padding:"3px", borderRadius:"2px"}} 
        className="card-text">
          An admin has not sent you an appointment date for your project since your project is still being reviewed.
      </p>
      </div>
    </div>
    )}
    </div> : <Logout/>
  );
};

export default ConfirmAppointment;