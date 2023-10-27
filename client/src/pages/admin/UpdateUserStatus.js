import React from 'react'
import { Link } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import AdminHeader from '../../components/AdminComponents/AdminHeader';

function UpdateUserStatus() {
  return (
    <div className="">
      <AdminHeader />
      <div className='container mt-5'>
        
          <div className="row ms-0">
            <div className="col-xs-12 col-md-2 post-links-container-user-status mt-5" style={{overflow: 'hidden', backgroundColor:'#11676d', maxHeight: '450px', borderRadius: '10px'}}>
            <ul class="list-group text-center fs-5 display-6">
                <br/>
                <li class="list-group-item  post-links " >
                  <Link className='links' to="/admin/news/add-news">
                  Post News </Link>
                </li>
                <br/>
                <li class="list-group-item post-links " >
                  <Link className='links' to="/admin/appointments/add-appointment">
                    Set Appointment Date </Link>
                </li>
                <br/>
                <li class="list-group-item active post-links " 
                ><Link className='links' to="/admin/user-status/add-user-status">
                  Update User Status</Link>
                </li>
                <br/>
                <li class="list-group-item post-links " >
                  <Link className='links' to="/admin/calls/add-call">
                    Post Calls </Link>
                </li>
                <br/>
                <li class="list-group-item post-links " >
                  <Link className='links' to="/admin/publications/add-publication">
                    Post Publications </Link>
                </li>
                <br/>
                <li class="list-group-item post-links " >
                  <Link className='links' to="/admin/accepted-projects/add-accepted-project">
                    Post Accepted Projects </Link>
                </li>
              </ul>
          </div>
          <div className="col-xs-12 col-md-1"></div>
          <div className="col-xs-12 col-md-9 mb-5">
            <br/>
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
                    <td><textarea  name="description" rows="6" cols="40" style={{overflow: 'scroll'}}></textarea></td>
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