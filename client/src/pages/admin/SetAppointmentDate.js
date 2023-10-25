import React from 'react'
import '../../images/assets/css/admin.css';
import AdminHeader from '../../components/AdminComponents/AdminHeader';


function SetAppointmentDate() {
  return (
    <div className="">
      <AdminHeader />
      <div className='container mt-5'>
        <br/><br/><br/>
        <div class="row">
          <div class="col-xs-12 col-md-3 post-links-container mt-5">
              <ul class="list-group">
                <br/>
                <li class="list-group-item post-links "><a className='links' 
                href="/admin/news/add-news">Post News</a></li>
                <br/>
                <li class="list-group-item post-links "><a className='links'
                href="/admin/appointments/add-appointment">Set Appointment Date</a></li>
                <br/>
                <li class="list-group-item post-links "><a className='links' 
                href="/admin/user-status/add-user-status">Update User Status</a></li>
                <br/>
                <li class="list-group-item post-links "><a className='links' 
                href="/admin/calls/add-call">Post Calls</a></li>
                <br/>
                <li class="list-group-item post-links "><a className='links' 
                href="/admin/Publications/add-publication">Post Publications</a></li>
                <br/>
                <li class="list-group-item post-links "><a className='links' 
                href="/admin/accepted-projects/add-accepted-project">Post Accepted Projects</a></li>
                <br/>
              </ul>
          </div>
          <div class="col-xs-12 col-md-2"></div>
          <div class="col-xs-12 col-md-7 mb-5">
            <form method="post" action="/admin/appointments/add-appointment">
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
            </form>
          </div>
      </div>
    </div>
  </div>
   
  )
}

export default SetAppointmentDate