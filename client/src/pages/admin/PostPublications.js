import React from 'react'
import { Link } from 'react-router-dom'
import '../../images/assets/css/admin.css'
import AdminHeader from '../../components/AdminComponents/AdminHeader'
import Dropzone from '../../components/AdminComponents/Dropzone'

function PostPublications() {
  return (
    <div className="">
      <AdminHeader />
      <div className='container mt-5'>
        <br/><br/><br/>
        <div class="row">
          <div className="col-xs-12 col-md-3 post-links-container-user-status mt-5" style={{overflow: 'hidden'}}>
                <ul className="list-group" >
                  <br/>
                  <li className="list-group-item post-links "><Link rel="preload" as="document" className='links' 
                  to="/admin/news/add-news">Post News</Link></li>
                  <br/>
                  <li className="list-group-item post-links "><Link className='links'
                  to="/admin/appointments/add-appointment">Set Appointment Date</Link></li>
                  <br/>
                  <li className="list-group-item  post-links "><Link className='links' 
                  to="/admin/user-status/add-user-status">Update User Status</Link></li>
                  <br/>
                  <li className="list-group-item post-links "><Link className='links' 
                  to="/admin/calls/add-call">Post Calls</Link></li>
                  <br/>
                  <li className="list-group-item active post-links "><Link className='links' 
                  to="/admin/publications/add-publication">Post Publications</Link></li>
                  <br/>
                  <li className="list-group-item post-links "><Link className='links' 
                  to="/admin/accepted-projects/add-accepted-project">Post Accepted Projects</Link></li>
                  <br/>
                </ul>
            </div>
          <div class="col-xs-12 col-md-2"></div>
          <div class="col-xs-12 col-md-7 mb-5">
            <form method="post" action="/admin/news/add-news">
                <br/><br/>
                <h1>Post a Publication</h1>
                <div class="form-group ">
                    <label className='form-label'>Project Title:</label>
                    <input type="text" name="title" class="form-control " placeholder="Title"/>                  
                </div>
                <div class="form-group">
                  <label for="">Announcement Description:</label>
                  <textarea name="description" class="form-control" id="ta" cols="63" rows="10" placeholder="Description"></textarea>
                </div>
                <div class="form-group">
                  <label className='form-label'>Field of Study:</label>
                  <form>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="fieldofstudy"   id="agri" value="agriculture"    />                     
                      <label className="form-check-label" htmlFor="agri">Agriculture</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="fieldofstudy"   id="envnenergy" value="envnenergy"    />                     
                      <label className="form-check-label" htmlFor="envnenergy">Environment and Energy</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="fieldofstudy"   id="health" value="health"    />                     
                      <label className="form-check-label" htmlFor="health">Health</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="fieldofstudy"   id="industrial" value="industrial"    />                     
                      <label className="form-check-label" htmlFor="industrial">Industrial</label>
                    </div>                  
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="fieldofstudy"   id="technology" value="technology"    />                     
                      <label className="form-check-label" htmlFor="technology">Technology</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="fieldofstudy"   id="other" value="other"    />                     
                      <label className="form-check-label" htmlFor="other">Other</label>
                    </div>
                  </form>
                </div>
                <div class="form-group">
                    <label className='form-label'>Competition Start Date:</label>
                    <input  type="date" name="date" className="form-control form-input"/>
                </div>
                <div class="form-group">
                    <label className='form-label'>Competition End Date:</label>
                    <input  type="date" name="date" className="form-control form-input"/>
                </div>
                <div class="form-group">
                    <label className='form-label'>Application Deadline Date:</label>
                    <input  type="date" name="date" className="form-control form-input"/>
                </div>
                <div class="form-group">
                    <label className='form-label'>Application Deadline Time:</label>
                    <input  type="time" name="date" className="form-control form-input"/>
                </div>              
                <div class="form-group">
                  <label for="">Prizes:</label>
                  <textarea name="description" class="form-control" id="ta" cols="63" rows="10" placeholder="Description"></textarea>
                </div>
                <div class="form-group">
                  <label for="">Submission Instructions:</label>
                  <textarea name="description" class="form-control" id="ta" cols="63" rows="10" placeholder="Description"></textarea>
                </div>
                <div class="form-group">
                  <label for="">Upload Guideline :</label>
                  <textarea name="description" class="form-control" id="ta" cols="63" rows="10" placeholder="Description"></textarea>
                </div>
                <div class="form-group ">
                    <label className='form-label'>Admin Phone Number:</label>
                    <input type="number" name="title" class="form-control " placeholder="Title"/>                  
                </div>
                <div class="form-group ">
                    <label className='form-label'>Admin Email:</label>
                    <input type="email" name="title" class="form-control " placeholder="Title"/>                  
                </div>
                <br/>                
                <div class="form-group">
                    <button type="submit" className=" form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
                </div>
            </form>
            <Dropzone/>            
          </div>
      </div>
    </div>
  </div>
   
  )
}

export default PostPublications