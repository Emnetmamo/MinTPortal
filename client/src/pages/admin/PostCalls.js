import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../images/assets/css/admin.css'
import AdminHeader from '../../components/AdminComponents/AdminHeader'
import axios from 'axios'
import Dropzone from '../../components/AdminComponents/Dropzone'

function PostCalls() {
  const  [title, setTitle] = useState();
  const  [description, setDescription] = useState();
  const  [field, setField] = useState();
  const  [callType, setCallType] = useState();
  const  [startDate, setStartDate] = useState();
  const  [endDate, setEndDate] = useState();
  const  [prizes, setPrizes] = useState();
  const  [instructions, setInstructions] = useState();
  const  [guideline, setGuideline] = useState();

  function handleClick(){
    axios.post("http://localhost:4000/announcements/addCall", {title,
      description,
      field,
      callType,
      startDate,
      endDate,
      prizes,
      instructions,
      guideline
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
    console.log({title,
      description,
      field,
      callType,
      startDate,
      endDate,
      prizes,
      instructions,
      guideline
    });
  }
  return (
    <div className="">
      <AdminHeader />
      <div className='container mt-5'>
       
          <div className="row">
            <div className="col-xs-12 col-md-3 post-links-container mt-5" style={{overflow: 'hidden'}}>
            <ul className="list-group text-center fs-5 display-6">
                <br/>
                 <li className="list-group-item post-links " >
                  <Link className='links' to="/admin/news/add-news">
                  Post News </Link>
                </li>
                <br/>
                <li className="list-group-item post-links " >
                  <Link className='links' to="/admin/appointments/add-appointment">
                    Set Appointment Date </Link>
                </li>
                <br/>
                <li className="list-group-item post-links "
                ><Link className='links' to="/admin/user-status/add-user-status">
                  Update User Status</Link>
                </li>
                <br/>
                <li className="list-group-item active post-links " >
                  <Link className='links' to="/admin/calls/add-call">
                  Post Calls </Link>
                </li>
                <br/>
                <li className="list-group-item post-links " >
                  <Link className='links' to="/admin/publications/add-publication">
                    Post Publications </Link>
                </li>
                <br/>
                <li className="list-group-item post-links " >
                  <Link className='links' to="/admin/accepted-projects/add-accepted-project">
                    Post Accepted Projects </Link>
                </li>
              </ul>
            </div>
          <div className="col-xs-12 col-md-2"></div>
          <div className="col-xs-12 col-md-7 mb-5">
   
            <form method="post" action="/" onSubmit={function(e){e.preventDefault()}}>
            <br/><br/>
                <h1>Post a Call</h1>
                <div className="form-group ">
                    <label className='form-label'>Announcement Title:</label>
                    <input type="text" name="title" className="form-control " placeholder="Title"
                    onChange={function(e){setTitle(e.target.value)}}/>                  
                </div>
                <div className="form-group">
                  <label htmlFor="1">Announcement Description:</label>
                  <textarea name="description" className="form-control" id="1" cols="63" rows="10" placeholder="Description"
                  onChange={function(e){setDescription(e.target.value)}}></textarea>
                </div>
                <div className="form-group">
                  <label className='form-label'>Field of Study:</label>
                  <select name="field" id="field" style={{marginLeft: "20px"}} onChange={function(e){setCallType(e.target.value); console.log(e.target.value)}}>
                  <option value="" disabled selected>Select a field</option>
                    <option value="agriculture" onChange={function(e){setField(e.target.value)}}>Agriculture</option>
                    <option value="envenergy">Environment and Energy</option>
                    <option value="health">Health</option>
                    <option value="industry">Industry</option>
                    <option value="other">Other</option>
                  </select>
                  {/* <form>
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
                  </form> */}
                </div>
                <div className="form-group">
                  <label className='form-label'>Type of Call:</label>
                  <select name="type" id="type" style={{marginLeft: "20px"}} onChange={function(e){setCallType(e.target.value); console.log(e.target.value)}}>
                  <option value="" disabled selected>Select a type</option>
                    <option value="national">National</option>
                    <option value="foreign">Foreign</option>
                  </select>
                </div>
                <div className="form-group">
                    <label className='form-label'>Application Kickoff Date:</label>
                    <input  type="date" name="date" className="form-control form-input"
                    onChange={function(e){setStartDate(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label className='form-label'>Application Deadline Date:</label>
                    <input  type="date" name="date" className="form-control form-input"
                    onChange={function(e){setEndDate(e.target.value)}}/>
                </div>              
                <div className="form-group">
                  <label htmlFor="2">Prizes:</label>
                  <textarea name="description" className="form-control" id="2" cols="63" rows="10" placeholder="Description"
                  onChange={function(e){setPrizes(e.target.value)}}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="3">Submission Instructions:</label>
                  <textarea name="description" className="form-control" id="3" cols="63" rows="10" placeholder="Description"
                  onChange={function(e){setInstructions(e.target.value)}}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="4">Upload Guideline :</label>
                  <textarea name="description" className="form-control" id="4" cols="63" rows="10" placeholder="Description"
                  onChange={function(e){setGuideline(e.target.value)}}></textarea>
                </div>
                <br/>                
                <div className="form-group">
                    <button type="submit" className=" form-control my-3 fs-5 btn btn-warning fw-bold"
                    onClick={handleClick}>Submit</button>
                </div>
            </form>
            
          </div>
      </div>
    </div>
  </div>
   
  )
}

export default PostCalls