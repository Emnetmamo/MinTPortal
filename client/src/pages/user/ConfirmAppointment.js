import React from 'react';
import AppointmnetImg from '../../images/user/appoint.png';

const ConfirmAppointment = () => {
  return (
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
        <div className="mb-3">
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
        </div>
      </div>
    </div>
  );
};

export default ConfirmAppointment;