import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import TableContainer from '@mui/material/TableContainer';
import Sidebar from './Sidebar.js';
import Logout from '../../components/Logout.js';
import { useAuthContext } from '../../AuthContext.js';


const SubmitReport = () => {
  let i = 1;
  const [projects, setProjects] = useState([]);
  const [userID, setUserID] = useState("")
  const[loaded, setLoaded] = useState(false);
  const[file, setFile] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();


  const [SidebarVisibility, setSiderVisibility] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const {user} = useAuthContext()
  let email;
  const cookies = document.cookie;
if (cookies) {
    const emailCookie = cookies.split(';')[0];
    if (emailCookie) {
        const emailValue = emailCookie.split('=')[1];
        if (emailValue) {
             email = emailValue.replaceAll('"', '');
            // Now you can use the email variable safely
            console.log(email);
        } else {
            console.error("Email value is undefined");
        }
    } else {
        console.error("Email cookie is undefined");
    }
} else {
    console.error("No cookies found");
}

  //console.log(email);
  useEffect(
    function(){
      if(document.cookie){
        if(document.cookie.split(';')[1].split('=')[1] === '"admin2"'){
          
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
      axios.get('https://research-portal-server-9.onrender.com/admin2Reports/find/'+email)
      .then((result)=>{
        setUserID(result.data[0]._id);
        console.log(userID);
      })
      .catch(err=>console.log(err))
      setLoaded(true);
      // const checkAuthentication = async () => {
      //   try {
      //     const response = await axios.get('https://research-portal-server-9.onrender.com/check-auth-status');
          
      //     const isAuthenticated = response.data.isAuthenticated;
      //     console.log(isAuthenticated)    
      //     setIsAuthenticated(isAuthenticated)
        
  
        
      //   } catch (error) {
      //     console.error('Error checking authentication status:', error);
      //     return false;
      //   }
      // };
      
      // // Example usage
      //  checkAuthentication();
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

    axios.post('https://research-portal-server-9.onrender.com/admin2Reports/upload/'+ userID + "-" +  id , formData, config)
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
    document.cookie ?    
        
          <div >
            
           
            
      
          <div >
       
            <h1 className='mb-3'>Submit Report/s</h1>  
            <TableContainer  sx={{ maxHeight: 440 }}>
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
              </TableContainer>
          </div>
          <ToastContainer/>
      </div> : <Logout/>
   
  )
}
export default SubmitReport;