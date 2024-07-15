// import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom';
// import '../../images/assets/css/admin.css';
// import axios from 'axios';
// import TableContainer from '@mui/material/TableContainer';
// import AdminHeader from '../../components/AdminComponents/AdminHeader';
// import Sidebar from './Sidebar.js';


// function SetAppointmentDate() {
//   let i = 1;
//   const [projects, setProjects] = useState([]);
//   const[loaded, setLoaded] = useState(false);
//   useEffect(
//     function(){
//       axios.get('https://research-portal-server-9.onrender.com/admin/appointment/getAll')
//       .then((result)=>{
//         setProjects(result.data);
//         //console.log(result);
//       })
//       .catch(err=>console.log(err))
//       setLoaded(true);
//     }
//   ,[]);
//   function displayProjects(){
//     const tableData = [];
    
//     for (let j = (projects.length-1); j > -1; j--) {
//       tableData.push(
//           <tr>
//             <td>{i++}</td>
//             <td>{projects[j].projectId}</td>
//             <td>{projects[j].projectTitle}</td>
//             <td>{new Date(projects[j].appointmentDate).toLocaleString()}</td>
//             <td>{projects[j].status}</td>
//             <td><h6 style={{height:"50px",overflowY:"scroll"}}>{projects[j].message}</h6></td>
//             <td><input type="datetime-local" name={projects[j].projectId} id={projects[j].projectId} /></td>
//             <td>
//               <button name={projects[j].projectId + "-" + projects[j].status} onClick={
//                 function(e){
//                 updateStatus(e.target.name.split('-')[0], e.target.name.split('-')[1]);
//               }} 
//                 className='btn btn-primary'>Set Appointment</button>
//             </td>
//           </tr>
//       );
//   }
//   //console.log(tableData);
//   return tableData;
// }
// function updateStatus(id){
//   console.log("Clicked!")
//   const dateInput = document.getElementById(id);
//   const newDate = new Date(dateInput.value).toISOString(); 
//   console.log(newDate);
//   axios.get('https://research-portal-server-9.onrender.com/admin/appointment/setAppointment_'+id+"_"+newDate)
//   .then((result)=>{
//     console.log(result);
//     if(result.data==="Already set"){
//       window.alert("This date and time have already been set for another project. Choose a different date and time.")
//     }
//   })
//   .catch(err=>console.log(err));
//   window.location.reload(false);
// }
// return (
 
//         <div >
//           <h1 className='mb-3'>Set Appointment Date</h1>
//           {/* <form method="post" action="/admin/appointments/add-appointment">
//               <br/><br/>
//               <h1>Post an Appointment</h1>
//               <div class="form-group ">
//                   <label className='form-label'>Date:</label>
//                   <input type="date" name="date" class="form-control " placeholder="Date"/>                  
//               </div>
//               <div class="form-group">
//                   <label className='form-label'>Time:</label>
//                   <input  type="time" name="time" className="form-control " placeholder="Time"/>
//               </div>
//               <div class="form-group">
//             <label className='form-label'>Location:</label>
//                     <input  type="text" name="location" className="form-control " placeholder="Location"/>
//                 </div>
//                 <div class="form-group">
//                   <label for="">Description</label>
//                   <textarea name="content" class="form-control" id="ta" cols="63" rows="10" placeholder="Description"></textarea>
//                 </div>
             
//                 <div class="form-group">
//                     <label className='form-label'>Attendees Email:</label>
//                     <input  type="email" name="email" className="form-control form-input"/>
//                 </div>
//                 <div class="form-group">
//                     <button type="submit" className=" form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
//                 </div>
//             </form> */}
//           <TableContainer  sx={{ maxHeight: 440 }}>
//             <table className="table">
//                 <thead className="table-success" style={{color: '#11676d'}}>  
//                   <tr>
//                     <th>No.</th>
//                     <th>User Id</th>
//                     <th>Project Title</th>
//                     <th>Appointment Date (mm/dd/yyyy)</th>
//                     <th>Status</th>
//                     <th>Message from User</th>
//                     <th>New Appointment</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loaded && displayProjects()}
//                 </tbody>  
//               </table>
//               </TableContainer>
//           </div>
    
   
//   )
// }

// export default SetAppointmentDate
import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import axios from 'axios';
import AdminHeader from '../../components/AdminComponents/AdminHeader';
import Sidebar from './Sidebar.js';
import Logout from '../../components/Logout.js';
import TableContainer from '@mui/material/TableContainer';
import { useNavigate } from 'react-router-dom';


function SetAppointmentDate() {
  let i = 1;
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(null)
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
      axios.get(process.env.REACT_APP_SERVER+'admin/appointment/getAll')
      .then((result)=>{
        setProjects(result.data);
        //console.log(result);
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
      tableData.push(
          <tr>
            <td>{i++}</td>
            <td>{projects[j].projectId}</td>
            <td>{projects[j].projectTitle}</td>
            <td>{new Date(projects[j].appointmentDate).toLocaleString()}</td>
            <td>{projects[j].status}</td>
            <td><h6 style={{height:"50px",overflowY:"scroll"}}>{projects[j].message}</h6></td>
            <td><input type="datetime-local" name={projects[j].projectId} id={projects[j].projectId} /></td>
            <td>
              <button name={projects[j].projectId + "-" + projects[j].status} onClick={
                function(e){
                updateStatus(e.target.name.split('-')[0], e.target.name.split('-')[1]);
              }} 
                className='btn btn-primary'>Set Appointment</button>
            </td>
          </tr>
      );
  }
  //console.log(tableData);
  return tableData;
}
function updateStatus(id){
  console.log("Clicked!")
  const dateInput = document.getElementById(id);
  const newDate = new Date(dateInput.value).toISOString(); 
  console.log(newDate);
  axios.get(process.env.REACT_APP_SERVER+'admin/appointment/setAppointment_'+id+"_"+newDate)
  .then((result)=>{
    console.log(result);
    if(result.data==="Already set"){
      window.alert("This date and time have already been set for another project. Choose a different date and time.")
    }
  })
  .catch(err=>console.log(err));
  window.location.reload(false);
}
return (
  document.cookie ? 
  <div >
    
 
      
    
          {/* <form method="post" action="/admin/appointments/add-appointment">
              <br/><br/>
              <h1>Post an Appointment</h1>
              <div class="form-group ">
                  <label className='form-label'>Date:</label>
                  <input type="date" name="date" class="form-control " placeholder="Date"/>                  
              </div>
              <div class="form-group">
                  <label className='form-label'>Time:</label>
                  <input  type="time" name="time" className="form-control " placeholder="Time"/>
              </div>
              <div class="form-group">
            <label className='form-label'>Location:</label>
                    <input  type="text" name="location" className="form-control " placeholder="Location"/>
                </div>
                <div class="form-group">
                  <label for="">Description</label>
                  <textarea name="content" class="form-control" id="ta" cols="63" rows="10" placeholder="Description"></textarea>
                </div>
             
                <div class="form-group">
                    <label className='form-label'>Attendees Email:</label>
                    <input  type="email" name="email" className="form-control form-input"/>
                </div>
                <div class="form-group">
                    <button type="submit" className=" form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
                </div>
            </form> */}
              <h1 className='mb-3'>Set Appointment Date</h1>  
            <TableContainer sx={{ maxHeight: 440 }}>
            <table className="table">
                <thead className="table-success" style={{color: '#11676d'}}>  
                  <tr>
                    <th>No.</th>
                    <th>User Id</th>
                    <th>Project Title</th>
                    <th>Appointment Date (mm/dd/yyyy)</th>
                    <th>Status</th>
                    <th>Message from User</th>
                    <th>New Appointment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loaded && displayProjects()}
                </tbody>  
              </table>
              </TableContainer>
       
      </div>: <Logout/>

 
   
  )
}

export default SetAppointmentDate