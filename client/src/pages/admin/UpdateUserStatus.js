import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import axios from 'axios';
import TableContainer from '@mui/material/TableContainer';
import AdminHeader from '../../components/AdminComponents/AdminHeader';
import Sidebar from './Sidebar.js';
import {ToastContainer, toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function UpdateUserStatus() {
  let i = 1;
  const [projects, setProjects] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const[loaded, setLoaded] = useState(false);

  const navigate = useNavigate();
  useEffect(
    function(){
      if(document.cookie){
        if(document.cookie.split(';')[1].split('=')[1] === '"admin"'){
          
        }
        else{
          navigate('/login');
        }
      }
      else{
        navigate('/login'); 
      }
      axios.get('https://research-portal-server-9.onrender.com/admin/userStatus/getAll')
      .then((result)=>{
        setProjects(result.data);
        //console.log(result);
      })
      .catch(err=>console.log(err))
      axios.get('https://research-portal-server-9.onrender.com/admin2Feedback/getFeedback')
      .then((result)=>{setFeedbacks(result.data); console.log(feedbacks)})
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
function organizeFeedback(id, status){
  if(loaded){
    let fdbcks = [];
    let satNo = 0;
    let unsatNo = 0;
    for (let j = 0; j < feedbacks.length; j++) {
      if(feedbacks[j].projectID === id ){
    for (let i = 0; i < feedbacks[j].feedback.length; i++) {
        if(feedbacks[j].feedback[i].split('-')[0] === status.toString()){
        if(feedbacks[j].feedback[i].split('-')[1] === "Satisfactory"){
          satNo += 1;
        }
        if(feedbacks[j].feedback[i].split('-')[1] === "Unsatisfactory"){
          unsatNo += 1;
        }
        fdbcks.push(
          <h6>{"->"+feedbacks[j].feedback[i].split('-')[2]}</h6>
        );
        }
      }
    }
  }
  fdbcks.push(
    <h6>Satisfactory: {satNo}</h6>
  );
  fdbcks.push(
    <h6>Unsatisfactory: {unsatNo}</h6>
  );
  return (fdbcks);
  }
}
function updateStatus(id, newStatus){
  console.log("Clicked!")
  axios.get('https://research-portal-server-9.onrender.com/admin/userStatus/'+id+"-"+newStatus)
  .then(result=>console.log(result))
  .catch(err=>console.log(err));
  // window.location.reload(false);
  toast.success("Updated Status of User Project");
}
function generateRow(project){
  if(project.status === 1){
   
    
  return (
        <tr>
        <td>{i++}</td>
        <td>{project._id}</td>
        <td>{project.projectTitle}</td>
        <td><h6 style={{height:"100px",overflowY:"scroll"}}>{project.description}</h6></td>
        <td>{numToStatus(project.status)}</td>
        <td><Link to={'/admin2/viewFile'} state={{filePath: project.proposalPath}} >View Concept Note</Link>
        <br /> {console.log(`proposla path: ${project.proposalPath}`)}
        <Link to={'/admin2/viewFile'} state = {{filePath: project.cvPath}} >View CV</Link></td>
        <td style={{overflowY:"scroll"}}>{organizeFeedback(project._id, project.status)}</td>
        <td>
              <button name={project._id + "-" + project.status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1])+1);
              }} 
                className='btn btn-primary' style={{display:buttonsDisplay(project.status), marginBottom:"10px"}}>Accept</button>
              <button name={project._id + "-" + project.status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1])-1)}} 
                className='btn btn-danger' style={{display:buttonsDisplay(project.status)}}>Reject</button>
            </td>
      </tr>
    );
  }
  else if(project.status === 2){

    return (
        <tr>
        <td>{i++}</td>
        <td>{project._id}</td>
        <td>{project.projectTitle}</td>
        <td><h6 style={{height:"100px",overflowY:"scroll"}}>{project.description}</h6></td>
        <td>{numToStatus(project.status)}</td>
        {project.proposalPath2 !== " " ? (<td><Link to={'/admin2/viewFile'} state={{filePath: project.proposalPath2}}>View Proposal</Link></td>) : (<td>Not Submitted Yet</td>)}
        <td style={{overflowY:"scroll"}}>{organizeFeedback(project._id, project.status)}</td>
        <td>
          <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'strech'}}>
              <button name={project._id + "-" + project.status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1])+1);
              }} 
                className='btn btn-primary' style={{display:buttonsDisplay(project.status), marginBottom:"10px"}}>Accept</button>
              <button name={project._id + "-" + project.status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1])-1)}} 
                className='btn btn-danger' style={{display:buttonsDisplay(project.status)}}>Reject</button>
          </div>
        </td>
         
      </tr>
    );
  }
  else if(project.status === 3){
    let fileLink = "";
    if(project.presentationPath === " "){
      fileLink = (<td>Not Submitted Yet</td>)
    }
    else{
      fileLink = (<td><Link to={'/admin2/viewFile'} state={{filePath: project.presentationPath}}>View Presentation File</Link></td>);
    }
    return (
        <tr>
        <td>{i++}</td>
        <td>{project._id}</td>
        <td>{project.projectTitle}</td>
        <td><h6 style={{height:"100px",overflowY:"scroll"}}>{project.description}</h6></td>
        <td>{numToStatus(project.status)}</td>
        {fileLink}
        <td style={{overflowY:"scroll"}}>{organizeFeedback(project._id, project.status)}</td>
        <td>
              <button name={project._id + "-" + project.status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1])+1);
              }} 
                className='btn btn-primary' style={{display:buttonsDisplay(project.status), marginBottom:"10px"}}>Accept</button>
              <button name={project._id + "-" + project.status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1])-1)}} 
                className='btn btn-danger' style={{display:buttonsDisplay(project.status)}}>Reject</button>
            </td>
      </tr>
    );
  }
  else if(project.status === 4){
    let fileLink = "";
    if(project.proposalPath3 === " "){
      fileLink = (<td>Not Submitted Yet</td>)
    }
    else{
      fileLink = (<td><Link to={'/admin2/viewFile'} state={{filePath: project.proposalPath3}}>View Final Proposal</Link></td>);
    }
    return (
        <tr>
        <td>{i++}</td>
        <td>{project._id}</td>
        <td>{project.projectTitle}</td>
        <td><h6 style={{height:"100px",overflowY:"scroll"}}>{project.description}</h6></td>
        <td>{numToStatus(project.status)}</td>
        {fileLink}
        <td style={{overflowY:"scroll"}}>{organizeFeedback(project._id, project.status)}</td>
        <td>
              <button name={project._id + "-" + project.status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1])+1);
              }} 
                className='btn btn-primary' style={{display:buttonsDisplay(project.status), marginBottom:"10px"}}>Accept</button>
              <button name={project._id + "-" + project.status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1])-1)}} 
                className='btn btn-danger' style={{display:buttonsDisplay(project.status)}}>Reject</button>
            </td>
      </tr>
    );
  }
  else{
    return (
        <tr>
        <td>{i++}</td>
        <td>{project._id}</td>
        <td>{project.projectTitle}</td>
        <td><h6 style={{height:"100px",overflowY:"scroll"}}>{project.description}</h6></td>
        <td>{numToStatus(project.status)}</td>
        <td><Link to={'/admin/viewFile'} state={{filePath: project.proposalPath3}} >View Final Proposal</Link></td>
        <td style={{overflowY:"scroll"}}>{organizeFeedback(project._id, project.status)}</td>
        <td>
           <div style={{display: 'flex', flexDirection: 'row', alignItems: 'end'}}>
              <button name={project._id + "-" + project.status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1])+1);
              }} 
                className='btn btn-primary' style={{display:buttonsDisplay(project.status), marginBottom:"10px"}}>Accept</button>
              <button name={project._id + "-" + project.status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1])-1)}} 
                className='btn btn-danger' style={{display:buttonsDisplay(project.status)}}>Reject</button>
          </div>
        </td>
      </tr>
    );
  }
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
    
          <div>
            
            <h1 className='mb-3'>Update User Status</h1>  
            <TableContainer  sx={{ maxHeight: 440 }}>
              <table class="table">
                <thead class="table-success" style={{color: '#11676d'}}>  
                  <tr>
                    <th>No.</th>
                    <th>User Id</th>
                    <th>Project Title</th>
                    <th>Project Description</th>
                    <th>Current Stage</th>
                    <th>Current Files</th>
                    <th>Feedback from Committee</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loaded && displayProjects()}
                </tbody>  
              </table>
            </TableContainer>
            <ToastContainer/>
          </div>
    
   
  )
}

export default UpdateUserStatus
