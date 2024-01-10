import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmnetImg from '../../images/user/appoint.png';

const ConfirmAppointment = ({email}) => {
  const email1 = email;
  const [appointments, setAppoint] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let i = 1;
  //console.log(email1);
  useEffect(
    function(){
      axios.get('http://localhost:5001/admin/appointment/load-'+email1)
      .then((result)=>{
        setAppoint(result.data);
        //console.log(result);
      })
      .catch(err=>console.log(err))
      setLoaded(true);
    }
  ,[email1]);
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
              <button name={appointments[j].projectId + "-Accepted"} onClick={
                function(e){
                updateStatus(e.target.name);
              }} 
                className='btn btn-primary'>Accept Appointment</button>
              <button name={appointments[j].projectId} style={{marginTop:"10px"}} onClick={
                function(e){
                rescheduleAppt(e.target.name);
              }} 
                className='btn btn-primary'>Reschedule Appointment</button>
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
function updateStatus(id){
  console.log("Clicked!");
  const projectID = id.split('-')[0];
  const text = document.getElementById(projectID+"-Message");
  const message = {message:text.value};
  // axios.get('http://localhost:5001/admin/appointment/setStatus-'+id)
  axios.post('http://localhost:5001/admin/appointment/setStatus-'+id, message)
  .then(result=>console.log(result))
  .catch(err=>console.log(err));
  window.location.reload(false);
}
function rescheduleAppt(id){
  const row = document.getElementById(id+"-Input");
  row.style.display = "inline";
}
  return (
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
    </div>
  );
};

export default ConfirmAppointment;