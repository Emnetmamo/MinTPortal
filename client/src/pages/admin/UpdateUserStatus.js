import React from 'react'
import '../../images/assets/css/admin.css';
import AdminHeader from '../../components/AdminComponents/AdminHeader';

function UpdateUserStatus() {
  return (
    <div className="">
      <AdminHeader />
      <div className='container mt-5'>
        <br/><br/>
        <div class="row ms-0">
          <div class="col-xs-12 col-md-2 post-links-container-user-status mt-5">
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
          <div class="col-xs-12 col-md-9 mb-5">
            <h1 className='mb-3'>Update a User Status</h1>  
            <form method="post" action="/admin/user-status/add-user-status">
              <table class="table">
                <thead class="table-success" style={{color: '#11676d'}}>  
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
                    <td><input type="number" style={{width: '40px'}} name="no"/></td>
                    <td><input type="text" style={{overflow: 'auto'}} name="user-id"/></td>
                    <td><input type="text"  name="title"/></td>
                    <td><textarea  name="description" rows="6" cols="50" style={{overflow: 'scroll'}}></textarea></td>
                    <td>
                    <select  name="status" size={0}>
                        <option > None</option>
                        <option > Accepted</option>  
                        <option > Pending</option>  
                        <option > Rejected</option>                  
                      </select>
                    </td>
                    <td><button className='btn btn-warning' type="submit" value="Submit">Submit</button></td>
                    </tr>
                </tbody>  
              </table>
           </form>
           <form method="post" action="/admin/user-status/add-user-status">
              <table class="table">
                <tbody>
                  <tr>
                    <td><input type="number" style={{width: '40px'}} name="no"/></td>
                    <td><input type="text"  name="user-id"/></td>
                    <td><input type="text"  name="title"/></td>
                    <td><textarea  name="description" rows="6" cols="50" style={{overflow: 'scroll'}}></textarea></td>
                    <td>
                    <select  name="category" size={0}>
                        <option > None</option>
                        <option > Accepted</option>  
                        <option > Pending</option>  
                        <option > Rejected</option>                  
                      </select>
                    </td>
                    <td><button className='btn btn-warning' type="submit" value="Submit">Submit</button></td>
                    </tr>
                </tbody>  
              </table>
              <form method="post" action="/admin/user-status/add-user-status">
              <table class="table">
                <tbody>
                  <tr>
                    <td><input type="number" style={{width: '40px'}} name="no"/></td>
                    <td><input type="text"  name="user-id"/></td>
                    <td><input type="text"  name="title"/></td>
                    <td><textarea  name="description" rows="6" cols="50" style={{overflow: 'scroll'}}></textarea></td>
                    <td>
                    <select  name="category" >
                        <option > None</option>
                        <option > Accepted</option>  
                        <option > Pending</option>  
                        <option > Rejected</option>                  
                      </select>
                    </td>
                    <td><button className='btn btn-warning' type="submit" value="Submit">Submit</button></td>
                    </tr>
                </tbody>  
              </table>
           </form>
           </form>
          </div>
      </div>
    </div>
  </div>
   
  )
}

export default UpdateUserStatus