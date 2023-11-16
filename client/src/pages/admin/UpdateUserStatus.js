import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import axios from 'axios';
import AdminHeader from '../../components/AdminComponents/AdminHeader';

function UpdateUserStatus() {
  let i = 1;
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
  useEffect(
    function(){
      axios.get('http://localhost:5001/admin/userStatus/getAll')
      .then((result)=>{
        setProjects(result.data);
        //console.log(result);
      })
      .catch(err=>console.log(err))
      setLoaded(true);
    }
  ,[]);
  function displayProjects(){
    const tableData = [];
    
    for (let j = 0; j < projects.length; j++) {
      tableData.push(
          <tr>
            <td>{i++}</td>
            <td>{projects[j]._id}</td>
            <td>{projects[j].projectTitle}</td>
            <td><p>{projects[j].description}</p></td>
            <td></td>
            <td><Link to={'/admin/viewFile'} state={{filePath: projects[j].proposalPath}} >View Proposal</Link></td>
            <td><Link to={'/admin/viewFile'} state = {{filePath: projects[j].cvPath}} >View CV</Link></td>
            <td>
              <button onClick={handleAccept(projects[j]._id)} className='btn btn-primary'>Accept</button>
              <button onClick={handleReject(projects[j]._id)} className='btn btn-danger'>Reject</button>
            </td>
          </tr>
      );
  }
  console.log(tableData);
  return tableData;
}
function handleAccept(id){

}
function handleReject(id){

}
  return (
    <div className="">
     
      <div className='container mt-5'>
        
          <div className="row ms-0">
            <div className="col-xs-12 col-md-2 post-links-container-user-status mt-5" style={{overflow: 'hidden', backgroundColor:'#11676d', maxHeight: '480px', borderRadius: '10px'}}>
            <ul class="list-group text-center fs-5 display-6">
              <br />
              <li class="list-group-item " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/news/add-news">
                  Post News{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item" style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/appointments/add-appointment"
                >
                  Set Appointment Date{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item active"style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/user-status/add-user-status">
                  Update User Status
                </Link>
              </li>
              <br />
              <li class="list-group-item  " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/calls/add-call">
                  Post Calls
                </Link>
              </li>
              <br />
              <li class="list-group-item  " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/publications/add-publication"
                >
                  Post Publications
                </Link>
              </li>
              <br />
              <li class="list-group-item " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/accepted-projects/add-accepted-project"
                >
                  Post Accepted Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-1"></div>
          <div className="col-xs-12 col-md-9 mb-5">
            <br/>
            <h1 className='mb-3'>Update User Status</h1>  
              <table class="table">
                <thead class="table-success" style={{color: '#11676d'}}>  
                  <tr>
                    <th>No.</th>
                    <th>User Id</th>
                    <th>Project Title</th>
                    <th>Project Description</th>
                    <th>Current Stage</th>
                    <th>Proposal File</th>
                    <th>CV</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loaded && displayProjects()}
                </tbody>  
              </table>
          </div>
      </div>
    </div>
  </div>
   
  )
}

export default UpdateUserStatus