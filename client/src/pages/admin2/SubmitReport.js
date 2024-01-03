import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.js';

const SubmitReport = () => {
  let i = 1;
  const [projects, setProjects] = useState([]);
  const [userID, setUserID] = useState("")
  const[loaded, setLoaded] = useState(false);
  const[file, setFile] = useState(null);
  const location = useLocation();
  const {email} = location.state;
  //console.log(email);
  useEffect(
    function(){
      axios.get('http://localhost:5001/admin/userStatus/getAll')
      .then((result)=>{
        setProjects(result.data);
        //console.log(result);
      })
      .catch(err=>console.log(err))
      axios.get('http://localhost:5001/admin2Reports/find/'+email)
      .then((result)=>{
        setUserID(result.data[0]._id);
        console.log(userID);
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
function generateRow(project){
      if(project.status === 5){
        return (
            <tr>
            <td>{i++}</td>
            <td>{project._id}</td>
            <td>{project.projectTitle}</td>
            <td><h6 style={{height:"100px",overflowY:"scroll"}}>{project.description}</h6></td>
            <td>{numToStatus(project.status)}</td>
            <td><input type="file" name="file" id={project._id + "-" +"file"} className='form-control' 
                    onChange={function(e){ setFile(e.target.files[0]); console.log(file); toast.info("File Selected! Click on Submit") }}/></td>
            <td>
              <button name={project._id + '-' + project.projectTitle} onClick={
                function(e){
                SubmitReport(e.target.name);
              }} 
                className='btn btn-primary'>Submit</button>
            </td>
          </tr>
        );
      }
}
function SubmitReport(id){
  console.log("Clicked!")
  if(loaded && projects[0]){
    const id2 = id.split('-')[0];
    const title1 = id.split('-')[1]
    if(document.getElementById(id2+"-file").files[0]){
    const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        }};
    setFile(document.getElementById(id2+"-file").files[0])    
    let formData = new FormData();
    formData.append('file', file);
    console.log(file);

    axios.post('http://localhost:5001/admin2Reports/upload/'+ userID + "-" +  id , formData, config)
    .then((res)=>{console.log(res);})
    .catch(err=>console.log(err))
    toast.info("Report Submitted Successfully!")

    }
    else{
      toast.error("First choose a file before clicking on Submit")
    }
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
                    <th>Report File</th>
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
    <ToastContainer/>
  </div>
   
  )
}
export default SubmitReport;