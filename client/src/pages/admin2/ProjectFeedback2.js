import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import axios from 'axios';
import AdminHeader from '../../components/AdminComponents/AdminHeader';
import Sidebar from './Sidebar.js';
import '../../images/assets/css/admin.css';
import { Modal } from 'react-bootstrap';

function ProjectFeedback() {
  let i = 1;
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
  const location = useLocation();
  const {email} = location.state;
  console.log(email);
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
    
    for (let j = (projects.length-1); j > -1; j--) {
      if(projects[j].status > 0){
      tableData.push(
          generateRow(projects[j])
      );
    }
  }
  //console.log(tableData);
  return tableData;
}
function generateRow(project) {
  let filePath;
  let viewLabel;

  switch (project.status) {
    case 1:
      filePath = project.proposalPath;
      viewLabel = 'View Concept Note'; 
      break;
    case 2:
      filePath = project.proposalPath2;
      viewLabel = 'View Proposal';
      break;
    case 3:
      filePath = project.presentationPath;
      viewLabel = 'View Presentation';
      break;
    case 4:
      filePath = project.proposalPath3;
      viewLabel = 'View Final Proposal';
      break;
    default:
      filePath = project.proposalPath3;
      viewLabel = 'View Final Proposal';
  }

  return (
    <tr>
      <td>{i++}</td>
      <td>{project._id}</td>
      <td>{project.projectTitle}</td>
      <td>
        <h6 style={{ height: "100px", overflowY: "scroll" }}>{project.description}</h6>
      </td>
      <td>{numToStatus(project.status)}</td>
      <td>
        <Link to={'/admin2/viewFile'} state={{ filePath }}>{viewLabel}</Link>
      </td>
      <td>
        <textarea name={`${project._id}-feedback`} id={`${project._id}-feedback`} cols="15" rows="4"></textarea>
      </td>
      <td>
        <select name={`${project._id}-quality`} id={`${project._id}-quality`}>
          <option value="Satisfactory">Satisfactory</option>
          <option value="Unsatisfactory">Unsatisfactory</option>
        </select>
      </td>
      <td>
        <button
          name={`${project._id}-${project.status}-${project.projectTitle}`}
          onClick={(e) => {
            updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1]), e.target.name.split('-')[2]);
          }}
          className='btn btn-primary'
          style={{ display: buttonsDisplay(project.status), marginBottom: "10px" }}
        >
          Submit
        </button>
      </td>
    </tr>
  );
}
function updateStatus(id, newStatus, title){
  console.log("Clicked!")
  const feedback1 = document.getElementById(id+'-feedback').value;
  const feedback2 = document.getElementById(id+'-quality').value;
  //console.log(title);
  const feedback = newStatus + "-" + feedback2 + "-" + feedback1;
  axios.post('http://localhost:5001/admin2Feedback/setFeedback', {id: id, email: email, title: title, feedback: feedback})
  .then(result=>console.log(result))
  .catch(err=>console.log(err));
  window.location.reload(false);
}
function numToStatus(num){
  if(num === 1){
    return "Concept Evaluation";
  }
  else if(num === 2){
    return "Proposal Evaluation";
  }
  else if(num === 3){
    return "Presentation";
  }
  else if(num === 4){
    return "Money Grant"
  }
  else{
    return "Working on Project";
  }
}
function buttonsDisplay(num){
  if(num > 4){
    return "none";
  }
}
  return (
    <div className=" ">
     
      <div className='container mt-5'>
        
          <div className="row ms-0">
            <div className='col-xs-12 col-md-2 post-links-container-user-status mt-5' style={{backgroundColor:"#11676d"}} >
            <Sidebar email={email}/>
            </div>
          <div className="col-xs-12 col-md-1"></div>
          <div className="col-xs-12 col-md-9 mb-5">
            <br/>
            <h1 className='mb-3'>Give Feedback</h1>  
              <table class="table">
                <thead class="table-success" style={{color: '#11676d'}}>  
                  <tr>
                    <th>No.</th>
                    <th>User Id</th>
                    <th>Project Title</th>
                    <th>Project Description</th>
                    <th>Current Stage</th>
                    <th>Current Files</th>
                    <th>Feedback</th>
                    <th>Work Quality</th>
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

export default ProjectFeedback