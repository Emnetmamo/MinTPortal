import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const SetProjectStatus = ({email}) => {
  
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
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
  function submitStatus(id){
    const selectedStatus = parseInt(document.getElementById(id).value);
    if(loaded && projects[0]){
        axios.get('http://localhost:5001/admin/userStatus/'+id+"-"+selectedStatus)
        .then(result=>console.log(result))
        .catch(err=>console.log(err));
    }
  }
  
  function displayDashboard(){
    if(loaded && projects[0]){
        for (let i = 0; i < projects.length; i++) {
            if(projects[i].status >= 5){
                return(<div>
                    <h3>Set the status for your project: {projects[i].projectTitle}</h3>
                    <label htmlFor={projects[i]._id}>Status</label>
                    <select id={projects[i]._id}>
                        <option value="5">I am still working on the project</option>
                        <option value="6">I have finished working on the project</option>
                        <option value="7">I have stopped working on the project and do not wish to continue</option>
                    </select>
                    <button className='btn btn-primary' name={projects[i]._id} 
                    onClick={function(e){submitStatus(e.target.name)}}>Submit Status</button>
                </div>);
            }
            else if(projects[i].status === 0){
              return(
              <div>
                  <h3>Your project: {projects[i].projectTitle} has been rejected so you cannot update its status.</h3>
              </div>);
            }
            else{
                return(
                <div>
                    <h3>Your project: {projects[i].projectTitle} is still in the process of being reviewed. You will be
                    able to change your project's status once you start working on it.</h3>
                </div>);
            }   
        }
  }
}
  return(
    <div>
        <div className='card shadow p-3 mb-5 bg-white rounded'>
            <h1>Update Project Status</h1>
            {loaded && displayDashboard()}
        </div>
    </div>
  );
}
export default SetProjectStatus;