// import React, { useEffect, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom';
// import '../../images/assets/css/admin.css';
// import axios from 'axios';
// import AdminHeader from '../../components/AdminComponents/AdminHeader.js';
// import Sidebar from './Sidebar.js';
// import '../../images/assets/css/admin.css';
// import TableContainer from '@mui/material/TableContainer';
// import Logout from '../../components/Logout.js';
// import { Modal } from 'react-bootstrap';

// function ProjectFeedback() {
//   let i = 1;
//   const [projects, setProjects] = useState([]);
//   const[loaded, setLoaded] = useState(false);
//   const location = useLocation();
//   const {email} = location.state;
//   const [SidebarVisibility, setSiderVisibility] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] =useState(null)
//   console.log(email);
//   useEffect(
//     function(){
//       axios.get('https://research-portal-server-9.onrender.com/admin/userStatus/getAll')
//       .then((result)=>{
//         setProjects(result.data);
//         //console.log(result);
//       })
//       .catch(err=>console.log(err))
//       setLoaded(true);
//       const checkAuthentication = async () => {
//         try {
//           const response = await axios.get('https://research-portal-server-9.onrender.com/check-auth-status');
          
//           const isAuthenticated = response.data.isAuthenticated;
//           console.log(isAuthenticated)    
//           setIsAuthenticated(isAuthenticated)
        
  
        
//         } catch (error) {
//           console.error('Error checking authentication status:', error);
//           return false;
//         }
//       };
      
//       // Example usage
//        checkAuthentication();
//     }
//   ,[]);
//   function displayProjects(){
//     const tableData = [];
    
//     for (let j = (projects.length-1); j > -1; j--) {
//       if(projects[j].status > 0){
//       tableData.push(
//           generateRow(projects[j])
//       );
//     }
//   }
//   //console.log(tableData);
//   return tableData;
// }
// function generateRow(project) {
//   let filePath;
//   let viewLabel;

//   switch (project.status) {
//     case 1:
//       filePath = project.proposalPath;
//       viewLabel = 'View Concept Note';
//       break;
//     case 2:
//       filePath = project.proposalPath2;
//       viewLabel = 'View Proposal';
//       break;
//     case 3:
//       filePath = project.presentationPath;
//       viewLabel = 'View Presentation';
//       break;
//     case 4:
//       filePath = project.proposalPath3;
//       viewLabel = 'View Final Proposal';
//       break;
//     default:
//       filePath = project.proposalPath3;
//       viewLabel = 'View Final Proposal';
//   }

//   return (
//     <tr>
//       <td>{i++}</td>
//       <td>{project._id}</td>
//       <td>{project.projectTitle}</td>
//       <td>
//         <h6 style={{ height: "100px", overflowY: "scroll" }}>{project.description}</h6>
//       </td>
//       <td>{numToStatus(project.status)}</td>
//       <td>
//         <Link to={'/admin2/viewFile'} state={{ filePath }}>{viewLabel}</Link>
//       </td>
//       <td>
//         <textarea name={`${project._id}-feedback`} id={`${project._id}-feedback`} cols="15" rows="4"></textarea>
//       </td>
//       <td>
//         <select name={`${project._id}-quality`} id={`${project._id}-quality`}>
//           <option value="Satisfactory">Satisfactory</option>
//           <option value="Unsatisfactory">Unsatisfactory</option>
//         </select>
//       </td>
//       <td>
//         <button
//           name={`${project._id}-${project.status}-${project.projectTitle}`}
//           onClick={(e) => {
//             updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1]), e.target.name.split('-')[2]);
//           }}
//           className='btn btn-primary'
//           style={{ display: buttonsDisplay(project.status), marginBottom: "10px" }}
//         >
//           Submit
//         </button>
//       </td>
//     </tr>
//   );
// }

// function updateStatus(id, newStatus, title){
//   console.log("Clicked!")
//   const feedback1 = document.getElementById(id+'-feedback').value;
//   const feedback2 = document.getElementById(id+'-quality').value;
//   //console.log(title);
//   const feedback = newStatus + "-" + feedback2 + "-" + feedback1;
//   axios.post('https://research-portal-server-9.onrender.com/admin2Feedback/setFeedback', {id: id, email: email, title: title, feedback: feedback})
//   .then(result=>console.log(result))
//   .catch(err=>console.log(err));
//   window.location.reload(false);
// }
// function numToStatus(num){
//   if(num === 1){
//     return "Concept Evaluation";
//   }
//   else if(num === 2){
//     return "Proposal Evaluation";
//   }
//   else if(num === 3){
//     return "Presentation";
//   }
//   else if(num === 4){
//     return "Money Grant"
//   }
//   else{
//     return "Working on Project";
//   }
// }
// function buttonsDisplay(num){
//   if(num > 4){
//     return "none";
//   }
// }
//   return (
//     isAuthenticated ?
//     <div className=" ">
     
//       <div >
        
    
//             {SidebarVisibility && <Sidebar email={email}/>}
                                
//             <h1 className='mb-3'>Give Feedback</h1> 
          
//             <TableContainer  sx={{ maxHeight: 440 }}>
//               <table class="table">
//                 <thead class="table-success" style={{color: '#11676d'}}>  
//                   <tr>
//                     <th>No.</th>
//                     <th>User Id</th>
//                     <th>Project Title</th>
//                     <th>Project Description</th>
//                     <th>Current Stage</th>
//                     <th>Current Files</th>
//                     <th>Feedback</th>
//                     <th>Work Quality</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loaded && displayProjects()}
//                 </tbody>  
//               </table>
//               </TableContainer>
//           </div>
//       </div> : <Logout/>
  
   
//   )
// }

// export default ProjectFeedback
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import axios from 'axios';
import AdminHeader from '../../components/AdminComponents/AdminHeader';
import TableContainer from '@mui/material/TableContainer';
import Sidebar from './Sidebar.js';
import '../../images/assets/css/admin.css';
import { Modal } from 'react-bootstrap';
import { useAuthContext } from '../../AuthContext.js';
import Logout from '../../components/Logout.js';
import {toast, ToastContainer} from 'react-toastify';



function ProjectFeedback() {
  let i = 1;
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
  const [field, setField] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  
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
      axios.post('https://research-portal-server-9.onrender.com/admin2Feedback/getField', {email:email})
      .then((result)=>{
        setField(result.data.field);
        console.log(result);
      })
      .catch(err=>console.log(err))
      setLoaded(true);
    }
  ,[]);
  function displayProjects(){
    const tableData = [];
    
    for (let j = (projects.length-1); j > -1; j--) {
      if(projects[j].status > 0) /*&& projects[j].projectCategory === field)*/{
      tableData.push(
          generateRow(projects[j])
      );
    }
  }
  //console.log(tableData);
  return tableData;
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
            <br />
            <Link to={'/admin2/viewFile'} state = {{filePath: project.cvPath}} >View CV</Link></td>
            <td style={{width:"100px"}}><textarea name={project._id+"-feedback"} id={project._id+"-feedback"} cols="15" rows="4"></textarea>
            </td>
            <td>
              <input name={project._id+"-quality"} id={project._id+"-quality"} type='number' min={0} max={100}/>
            </td>
            <td>
              <button name={project._id + "-" + project.status + "-" + project.projectTitle} onClick={
                function(e){
                    updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1]), e.target.name.split('-')[2]);
              }} 
                className='btn btn-primary' style={{display:buttonsDisplay(project.status), marginBottom:"10px"}}>Submit</button>
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
            <td><Link to={'/admin2/viewFile'} state={{filePath: project.proposalPath2}} >View Proposal</Link></td>
            <td><textarea name={project._id+"-feedback"} id={project._id+"-feedback"} cols="15" rows="4"></textarea>
            </td>
            <td>
              <input name={project._id+"-quality"} id={project._id+"-quality"} type='number' min={0} max={100}/>
            </td>
            <td>
              <button name={project._id + "-" + project.status + "-" + project.projectTitle} onClick={
                function(e){
                    updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1]), e.target.name.split('-')[2]);
              }} 
                className='btn btn-primary' style={{display:buttonsDisplay(project.status), marginBottom:"10px"}}>Submit</button>
            </td>
          </tr>
        );
      }
      else if(project.status === 3){
        return (
            <tr>
            <td>{i++}</td>
            <td>{project._id}</td>
            <td>{project.projectTitle}</td>
            <td><h6 style={{height:"100px",overflowY:"scroll"}}>{project.description}</h6></td>
            <td>{numToStatus(project.status)}</td>
            <td><Link to={'/admin2/viewFile'} state={{filePath: project.presentationPath}} >View Presentation</Link></td>
            <td><textarea name={project._id+"-feedback"} id={project._id+"-feedback"} cols="15" rows="4"></textarea>
            </td>
            <td>
              <input name={project._id+"-quality"} id={project._id+"-quality"} type='number' min={0} max={100}/>
            </td>
            <td>
              <button name={project._id + "-" + project.status + "-" + project.projectTitle} onClick={
                function(e){
                    updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1]), e.target.name.split('-')[2]);
              }} 
                className='btn btn-primary' style={{display:buttonsDisplay(project.status), marginBottom:"10px"}}>Submit</button>
            </td>
          </tr>
        );
      }
      else if(project.status === 4){
        return (
            <tr>
            <td>{i++}</td>
            <td>{project._id}</td>
            <td>{project.projectTitle}</td>
            <td><h6 style={{height:"100px",overflowY:"scroll"}}>{project.description}</h6></td>
            <td>{numToStatus(project.status)}</td>
            <td><Link to={'/admin2/viewFile'} state={{filePath: project.proposalPath3}} >View Final Proposal</Link></td>
            <td><textarea name={project._id+"-feedback"} id={project._id+"-feedback"} cols="15" rows="4"></textarea>
            </td>
            <td>
              <input name={project._id+"-quality"} id={project._id+"-quality"} type='number' min={0} max={100}/>
            </td>
            <td>
              <button name={project._id + "-" + project.status + "-" + project.projectTitle} onClick={
                function(e){
                    updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1]), e.target.name.split('-')[2]);
              }} 
                className='btn btn-primary' style={{display:buttonsDisplay(project.status), marginBottom:"10px"}}>Submit</button>
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
            <td><Link to={'/admin2/viewFile'} state={{filePath: project.proposalPath3}} >View Final Proposal</Link></td>
            <td><textarea name={project._id+"-feedback"} id={project._id+"-feedback"} cols="15" rows="4"></textarea>
            </td>
            <td>
                <input name={project._id+"-quality"} id={project._id+"-quality"} type='number' min={0} max={100}/>
            </td>
            <td>
              <button name={project._id + "-" + project.status + "-" + project.projectTitle} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], parseInt(e.target.name.split('-')[1]), e.target.name.split('-')[2]);
              }} 
                className='btn btn-primary' style={{display:buttonsDisplay(project.status), marginBottom:"10px"}}>Submit</button>
            </td>
          </tr>
        );
      }
}
async function updateStatus(id, newStatus, title){
  console.log("Clicked!")
  const feedback1 = document.getElementById(id+'-feedback').value;
  const feedback2 = document.getElementById(id+'-quality').value;
  //console.log(title);
  const feedback = newStatus + "-" + feedback2 + "-" + feedback1;
  let message = "";
 await axios.post('https://research-portal-server-9.onrender.com/admin2Feedback/setFeedback', {id: id, email: email, title: title, feedback: feedback})
  .then(result=>{console.log(result); message = "Feedback Uploaded"; console.log(message); toast.success(message);})
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


    document.cookie ?
    <div className=" ">
     
      
            <h1 className='mb-3'>Give Feedback</h1>  
            <TableContainer sx={{maxHeight: 440}}>
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
                    <th>Grade(Out of 100)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loaded && displayProjects()}
                </tbody>  
              </table>
              </TableContainer>
              <ToastContainer/>
          </div>: <Logout/>
  
  )
}

export default ProjectFeedback