import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const UploadReport = ({email}) => {
  
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
  const [file, setFile] = useState();
  const email1 = email;
  useEffect(
    function(){
      axios.get('http://localhost:5001/admin/userStatus/fetch-'+email1)
      .then((result)=>{
        console.log(result);
        setProjects(result.data);
      })
      .catch(err=>console.log(err))
      setLoaded(true);
    }
  ,[email1]);
  function submitReport(){
    if(loaded && projects[0]){
    const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        }};
    let formData = new FormData();
    formData.append('file', file);
    console.log(file);
    let message = "";
    axios.post('http://localhost:5001/report/upload/'+ projects[0].projectTitle +"-" + projects[0]._id, formData, config)
    .then((res)=>{console.log(res); message = "Report Submitted Successfully!"; toast.success(message);})
    .catch(err=>{console.log(err); message = "There was an error"; toast.error(message);})
    }
  }
  function submitFile(){
    if(loaded && projects[0]){
    const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        }};
    let formData = new FormData();
    formData.append('file', file);
    console.log(file);

    let message = "";
    axios.post('http://localhost:5001/projectFiles/upload/'+ projects[0].status +"-" + projects[0]._id, formData, config)
    .then((res)=>{console.log(res); message = "File Submitted Successfully!"; toast.success(message)})
    .catch(err=>{console.log(err); message = "There was an error"; toast.error(message)})

    }
  }
  function displayDashboard(){
    if(loaded && projects[0]){
        if(projects[0] && projects[0].status === 5){
          
            return(
                <div>
                    <h2>Upload Progress Report</h2>
                    <h4>You can submit your progress reports for your project: {projects[0].projectTitle}</h4>
                    <label htmlFor="file" style={{display:"block"}}>Upload Report(PDF)</label>
                    <input type="file" name="file" id="file" className='form-control' 
                    onChange={function(e){ setFile(e.target.files[0]) }}/>
                    <button className='btn btn-primary' style={{margin:"20px 0px"}} onClick={submitReport}>Submit</button>
                </div>
            );
        }
        else if(projects[0] && projects[0].status === 4){
          if(projects[0].proposalPath3.length > 5){
            return(
              <div>
                  <h2>Upload Files</h2>
                  <h4>You have already uploaded all necessary files needed at this stage for your project: {projects[0].projectTitle}</h4>
                  <h4>Good job!</h4>
              </div>
          );
          }
          else{
          return(
              <div>
                  <h2>Upload Final Proposal</h2>
                  <h4>You can submit your final proposal with action plan for your project: {projects[0].projectTitle}</h4>
                  <label htmlFor="file" style={{display:"block"}}>Upload Proposal(PDF)</label>
                  <input type="file" name="file" id="file" className='form-control' 
                  onChange={function(e){ setFile(e.target.files[0]) }}/>
                  <button className='btn btn-primary' style={{margin:"20px 0px"}} onClick={submitFile}>Submit</button>
              </div>
          );
          }
      }
      else if(projects[0] && projects[0].status === 3){
        if(projects[0].presentationPath.length > 5){
          return(
            <div>
                <h2>Upload Files</h2>
                <h4>You have already uploaded all necessary files needed at this stage for your project: {projects[0].projectTitle}</h4>
                <h4>Good job!</h4>
            </div>
        );
        }
        else{
        return(
            <div>
                <h2>Upload Presentation File</h2>
                <h4>You can submit your presentation file for your project: {projects[0].projectTitle}</h4>
                <label htmlFor="file" style={{display:"block"}}>Upload Presentation(PDF)</label>
                <input type="file" name="file" id="file" className='form-control' 
                onChange={function(e){ setFile(e.target.files[0]) }}/>
                <button className='btn btn-primary' style={{margin:"20px 0px"}} onClick={submitFile}>Submit</button>
            </div>
        );
        }
    }
    else if(projects[0] && projects[0].status === 2){
      if(projects[0].proposalPath2.length > 5){
        return(
          <div>
              <h2>Upload Files</h2>
              <h4>You have already uploaded all necessary files needed at this stage for your project: {projects[0].projectTitle}</h4>
              <h4>Good job!</h4>
          </div>
      );
      }
      else{
      return(
          <div>
              <h2>Upload Proposal</h2>
              <h4>You can submit your proposal for your project: {projects[0].projectTitle}</h4>
              <label htmlFor="file" style={{display:"block"}}>Upload Proposal(PDF)</label>
              <input type="file" name="file" id="file" className='form-control' 
              onChange={function(e){ setFile(e.target.files[0]) }}/>
              <button className='btn btn-primary' style={{margin:"20px 0px"}} onClick={submitFile}>Submit</button>
          </div>
      );
      }
  }
  else{
    return(
      <div>
          <h2>Upload Files</h2>
          <h4>You have already uploaded all necessary files needed for this stage for your project: {projects[0].projectTitle}</h4>
          <h4>Good job!</h4>
      </div>
  );
  }
    }
  }
  return(
    <div>
        <div className='card shadow p-3 mb-5 bg-white rounded'>
            {loaded && displayDashboard()}
        </div>
        <ToastContainer/>
    </div>
  );
}
export default UploadReport;