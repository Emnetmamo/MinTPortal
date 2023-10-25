import React from 'react'
import '../../images/assets/css/admin.css';
import AdminHeader from '../../components/AdminComponents/AdminHeader';

function UpdateUserStatus() {
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
          <div class="col-xs-12 col-md-1"></div>
          <div class="col-xs-12 col-md-8 mb-5">
            <form method="post" action="/admin/user-status/add-user-status">
                <br/><br/>
                <h1 className='mb-3'>Update a User Status</h1>
                <table class="table">
                <thead class="table-success">
                  <tr>
                    <th>No.</th>
                    <th>User Id</th>
                    <th>Project Title</th>
                    <th>Project Description</th>
                    <th>Status</th>
                    <th>Submit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>POL_1</td>
                    <td>Waste Management System</td>
                    <td>this system used to control wastes in-----</td>
                    <td> 
                      <select class="form-control" name="category" placeholder="Category">
                        <option > None</option>
                        <option > Accepted</option>  
                        <option > Pending</option>  
                        <option > Rejected</option>                  
                      </select>
                    </td>
                    <td><button>Submit</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>POL_2</td>
                    <td>Waste Management System</td>
                    <td>this system used to control wastes in-----</td>
                    <td> 
                      <select class="form-control" name="category" placeholder="Category">
                        <option > None</option>
                        <option > Accepted</option>  
                        <option > Pending</option>  
                        <option > Rejected</option>                  
                      </select>
                    </td>
                    <td><button>Submit</button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>POL_1</td>
                    <td>Waste Management System</td>
                    <td>this system used to control wastes in-----</td>
                    <td> 
                      <select class="form-control" name="category" placeholder="Category">
                        <option > None</option>
                        <option > Accepted</option>  
                        <option > Pending</option>  
                        <option > Rejected</option>                  
                      </select>
                    </td>
                    <td><button>Submit</button></td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
      </div>
    </div>
  </div>
   
  )
}

export default UpdateUserStatus