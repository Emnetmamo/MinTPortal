import React from 'react';
import { Link } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import AdminHeader from '../../components/AdminComponents/AdminHeader';
import Dropzone from '../../components/AdminComponents/Dropzone';

function Post_News() {
  return (
    <div className="">
      <AdminHeader />
      <div className='container mt-5'>
        <br/><br/><br/>
        <div class="row">
          <div class="col-xs-12 col-md-3 post-links-container mt-5"style={{overflow: 'hidden'}}>
              <ul class="list-group">
                <br/>
                <li class="list-group-item post-links active "><Link className='links' 
                to="/admin/news/add-news">Post News</Link>
                </li>
                <br/>
                <li class="list-group-item post-links "><Link className='links'
                to="/admin/appointments/add-appointment">Set Appointment Date</Link>
                </li>
                <br/>
                <li class="list-group-item post-links "><Link className='links' 
                to="/admin/user-status/add-user-status">Update User Status</Link>
                </li>
                <br/>
                <li class="list-group-item post-links "><Link className='links' 
                to="/admin/calls/add-call">Post Calls</Link>
                </li>
                <br/>
                <li class="list-group-item post-links "><Link className='links' 
                to="/admin/publications/add-publication">Post Publications</Link>
                </li>
                <br/>
                <li class="list-group-item post-links "><Link className='links' 
                to="/admin/accepted-projects/add-accepted-project">Post Accepted Projects</Link>
                </li>
                <br/>
              </ul>
          </div>
          <div class="col-xs-12 col-md-2"></div>
          <div class="col-xs-12 col-md-7 mb-5">
            <form method="post" action="/admin/news/add-news">
                <br/><br/>
                <h1>Post a News</h1>
                <div class="form-group ">
                    <label className='form-label'>News Title:</label>
                    <input type="text" name="title" class="form-control " placeholder="Title"/>                  
                </div>
                <div class="form-group">
                    <label className='form-label'>News Author:</label>
                    <input  type="text" name="author" className="form-control " placeholder="Auhtor"/>
                </div>
                <div class="form-group">
                  <label for="">News Content</label>
                  <textarea name="content" class="form-control" id="ta" cols="63" rows="10" placeholder="Content"></textarea>
                </div>
                <div class="form-group">
                    <label className='form-label'>News Category:</label>
                    <select class="form-control" name="category" placeholder="Category">
                      <option > category one</option>
                      <option > category two</option>  
                      <option > category three</option>  
                      <option > category four</option>                  
                    </select>
                </div>
                <div class="form-group">
                    <label className='form-label'>News Publication Date:</label>
                    <input  type="date" name="date" className="form-control form-input"/>
                </div>
                <div class="form-group">
                    <button type="submit" className=" form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
                </div>
            </form>
            <p>Upload Images:</p>
            <Dropzone className='py-5 mt-10 border border-neutral-200'/>
          </div>
      </div>
    </div>
  </div>
   
  )
}

export default Post_News