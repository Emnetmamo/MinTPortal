// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CheckStatus = ({email}) => {
//   // const [statusData, setStatusData] = useState([]);

//   // useEffect(() => {
//   //   // Fetch status data from the server or set it manually
//   //   const fetchedStatusData = [
//   //     { stage: 'Ethical Evaluation', status: 'Accepted' },
//   //     { stage: 'Concept Evaluation', status: 'Pending' },
//   //     { stage: 'Project Proposal', status: 'Pending' },
//   //     { stage: 'Money Grant', status: 'Pending' },
//   //   ];
    
//   //   setStatusData(fetchedStatusData);
//   // }, []);
//   const [projects, setProjects] = useState([]);
//   const[loaded, setLoaded] = useState(false);
//   const email = email;
//   useEffect(
//     function(){
//       axios.get('https://research-portal-server-9.onrender.com/admin/userStatus/fetch-'+email)
//       .then((result)=>{
//         setProjects(result.data);
//         //console.log(result);
//       })
//       .catch(err=>console.log(err))
//       setLoaded(true);
//     }
//   ,[email]);
//   function displayProjects(){
//     const tableData = [];
//     let i = 1;
//     for (let j = 0; j < projects.length; j++) {
//       if(projects[j].status > 0){
//       tableData.push(
//         <div>
//           <h4>{projects[j].projectTitle + " status"}</h4>
//         <table className="table table-bordered">
//                     <thead>
//                       <tr>
//                         <th>Stages</th>
//                         <th>Status</th>
//                       </tr>
//                     </thead>
//                       {getStatus(projects[j].status)}
//                   </table>
//           </div>
//       );
//     }
//   }
//   //console.log(tableData);
//   return tableData;
// }
// function getStatus(status){
//   if(status === 0){
//     return( 
//       <tbody>
//         <tr>
//           <td>Ethical Evaluation</td>
//           <td>Rejected</td>
//         </tr>
//       <tr>
//         <td>Concept Evaluation</td>
//         <td>Rejected</td>
//       </tr>
//       <tr>
//         <td>Proposal Evaluation</td>
//         <td>Rejected</td>
//       </tr>
//       <tr>
//         <td>Presentation</td>
//         <td>Rejected</td>
//       </tr>
//       <tr>
//         <td>Money Grant</td>
//         <td>Rejected</td>
//       </tr>
//       </tbody>
//      );
//   }
//   else if(status===1){
//     return(
//       <tbody>
//         <tr>
//           <td>Ethical Evaluation</td>
//           <td>Accepted</td>
//         </tr>
//       <tr>
//         <td>Concept Evaluation</td>
//         <td>Pending</td>
//       </tr>
//       <tr>
//         <td>Proposal Evaluation</td>
//         <td>Pending</td>
//       </tr>
//       <tr>
//         <td>Presentation</td>
//         <td>Pending</td>
//       </tr>
//       <tr>
//         <td>Money Grant</td>
//         <td>Pending</td>
//       </tr>
//       </tbody>
//     );
//   }
//   else if(status===2){
//     return(
//       <tbody>
//         <tr>
//           <td>Ethical Evaluation</td>
//           <td>Accepted</td>
//         </tr>
//       <tr>
//         <td>Concept Evaluation</td>
//         <td>Accepted</td>
//       </tr>
//       <tr>
//         <td>Proposal Evaluation</td>
//         <td>Pending</td>
//       </tr>
//       <tr>
//         <td>Presentation</td>
//         <td>Pending</td>
//       </tr>
//       <tr>
//         <td>Money Grant</td>
//         <td>Pending</td>
//       </tr>
//       </tbody>
//     );
//   }
//   else if(status===3){
//     return(
//       <tbody>
//         <tr>
//           <td>Ethical Evaluation</td>
//           <td>Accepted</td>
//         </tr>
//       <tr>
//         <td>Concept Evaluation</td>
//         <td>Accepted</td>
//       </tr>
//       <tr>
//         <td>Proposal Evaluation</td>
//         <td>Accepted</td>
//       </tr>
//       <tr>
//         <td>Presentation</td>
//         <td>Pending</td>
//       </tr>
//       <tr>
//         <td>Money Grant</td>
//         <td>Pending</td>
//       </tr>
//       </tbody>
//     );
// }
// else if(status===4){
//   return(
//     <tbody>
//       <tr>
//         <td>Ethical Evaluation</td>
//         <td>Accepted</td>
//       </tr>
//     <tr>
//       <td>Concept Evaluation</td>
//       <td>Accepted</td>
//     </tr>
//     <tr>
//         <td>Proposal Evaluation</td>
//         <td>Accepted</td>
//       </tr>
//     <tr>
//       <td>Presentation</td>
//       <td>Accepted</td>
//     </tr>
//     <tr>
//       <td>Money Grant</td>
//       <td>Pending</td>
//     </tr>
//     </tbody>
//   );
// }
// else if(status===5){
//   return(
//     <tbody>
//       <tr>
//         <td>Ethical Evaluation</td>
//         <td>Accepted</td>
//       </tr>
//     <tr>
//       <td>Concept Evaluation</td>
//       <td>Accepted</td>
//     </tr>
//     <tr>
//         <td>Proposal Evaluation</td>
//         <td>Accepted</td>
//       </tr>
//     <tr>
//       <td>Presentation</td>
//       <td>Accepted</td>
//     </tr>
//     <tr>
//       <td>Money Grant</td>
//       <td>Accepted</td>
//     </tr>
//     </tbody>
//   );
// }
// }
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-10">
//           <div className="row mb-4">
//             <div className="col-md-12">
//               <div className="card shadow" style={{ backgroundColor: "#11676d", color: 'white' }}>
//                 <div className="card-body">
//                   <h5 className="card-title">Check Your Status</h5>
//                   {loaded && displayProjects()}
//                   {/* <table className="table table-bordered">
//                     <thead>
//                       <tr>
//                         <th>Project Title</th>
//                         <th>Stages</th>
//                         <th>Status</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {statusData.map((item, index) => (
//                         <tr key={index}>
//                           <td>{item.stage}</td>
//                           <td>{item.status}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckStatus;
import React, { useState, useEffect } from 'react';
import Logout from '../../components/Logout';
import axios from 'axios';
import { useAuthContext } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const CheckStatus = () => {
  // const [statusData, setStatusData] = useState([]);

  // useEffect(() => {
  //   // Fetch status data from the server or set it manually
  //   const fetchedStatusData = [
  //     { stage: 'Ethical Evaluation', status: 'Accepted' },
  //     { stage: 'Concept Evaluation', status: 'Pending' },
  //     { stage: 'Project Proposal', status: 'Pending' },
  //     { stage: 'Money Grant', status: 'Pending' },
  //   ];
    
  //   setStatusData(fetchedStatusData);
  // }, []);
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
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
//const [isAuthenticated, setIsAuthenticated] = useState(null)
//const {isAuthenticated, login} = useAuthContext()
    
// useEffect(
//   function(){
   
//     const checkAuthentication = async () => {
//       try {
//         const response = await axios.get('https://research-portal-server-9.onrender.com/check-auth-status');
        
//         const isAuthenticated = response.data.isAuthenticated;
//         console.log(isAuthenticated)    
//         setIsAuthenticated(isAuthenticated)
      

      
//       } catch (error) {
//         console.error('Error checking authentication status:', error);
//         return false;
//       }
//     };
    
//     // Example usage
//      checkAuthentication();
//   }
// ,[]);
  useEffect(
    function(){
      if(document.cookie){
        if(document.cookie.split(';')[1].split('=')[1] === '"user"'){
          
        }
        else{
          navigate('/login');
        }
      }
      else{
        navigate('/login'); 
      }
      axios.get('https://research-portal-server-9.onrender.com/admin/userStatus/fetch-'+email)
      .then((result)=>{
        setProjects(result.data);
        console.log(result.data);
      })
      .catch(err=>console.log(err))
      setLoaded(true);
  
    }
  ,[email]);
  function displayProjects(){
    const tableData = [];
    let i = 1;
    for (let j = 0; j < projects.length; j++) {
      if(projects[j].status > -1){
      tableData.push(
        <div>
          <h4>{projects[j].projectTitle + " status"}</h4>
        <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Stages</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                      {getStatus(projects[j].status, projects[j])}
                      {/* <h4 style={{color:"white"}}>Currently being reviewed by: {projects[j].currentReviewer===undefined ? "MinT Research Sector Members": projects[j].currentReviewer}</h4> */}
                  </table>
          </div>
      );
    }
  }
  //console.log(tableData);
  return tableData;
}
function getStatus(status, project){
  //console.log(project.currentReviewer);
  if(status === 0){
    if(project.proposalPath3 === " "){
      if(project.presentationPath === " "){
        if(project.proposalPath2 === " "){
          return( 
            <tbody>
              <tr>
                <td>Ethical Evaluation</td>
                <td>Accepted</td>
              </tr>
            <tr>
              <td>Concept Evaluation</td>
              <td>Rejected</td>
            </tr>
            <tr>
              <td>Proposal Evaluation</td>
              <td>Rejected</td>
            </tr>
            <tr>
              <td>Presentation</td>
              <td>Rejected</td>
            </tr>
            <tr>
              <td>Money Grant</td>
              <td>Rejected</td>
            </tr>
            </tbody>
           );
        }
        else{
          return( 
            <tbody>
              <tr>
                <td>Ethical Evaluation</td>
                <td>Accepted</td>
              </tr>
            <tr>
              <td>Concept Evaluation</td>
              <td>Accepted</td>
            </tr>
            <tr>
              <td>Proposal Evaluation</td>
              <td>Rejected</td>
            </tr>
            <tr>
              <td>Presentation</td>
              <td>Rejected</td>
            </tr>
            <tr>
              <td>Money Grant</td>
              <td>Rejected</td>
            </tr>
            </tbody>
           );
        }
      }
      else{
        return( 
          <tbody>
            <tr>
              <td>Ethical Evaluation</td>
              <td>Accepted</td>
            </tr>
          <tr>
            <td>Concept Evaluation</td>
            <td>Accepted</td>
          </tr>
          <tr>
            <td>Proposal Evaluation</td>
            <td>Accepted</td>
          </tr>
          <tr>
            <td>Presentation</td>
            <td>Rejected</td>
          </tr>
          <tr>
            <td>Money Grant</td>
            <td>Rejected</td>
          </tr>
          </tbody>
         );
      }
    }
    else{
      return( 
        <tbody>
          <tr>
            <td>Ethical Evaluation</td>
            <td>Accepted</td>
          </tr>
        <tr>
          <td>Concept Evaluation</td>
          <td>Accepted</td>
        </tr>
        <tr>
          <td>Proposal Evaluation</td>
          <td>Accepted</td>
        </tr>
        <tr>
          <td>Presentation</td>
          <td>Accepted</td>
        </tr>
        <tr>
          <td>Money Grant</td>
          <td>Rejected</td>
        </tr>
        </tbody>
       );
    }
  }
  else if(status===1){
    return(
      <tbody>
        <tr>
          <td>Ethical Evaluation</td>
          <td>Accepted</td>
        </tr>
      <tr>
        <td>Concept Evaluation</td>
        <td>Pending</td>
      </tr>
      <tr>
        <td>Proposal Evaluation</td>
        <td>Pending</td>
      </tr>
      <tr>
        <td>Presentation</td>
        <td>Pending</td>
      </tr>
      <tr>
        <td>Money Grant</td>
        <td>Pending</td>
      </tr>
      </tbody>
    );
  }
  else if(status===2){
    return(
      <tbody>
        <tr>
          <td>Ethical Evaluation</td>
          <td>Accepted</td>
        </tr>
      <tr>
        <td>Concept Evaluation</td>
        <td>Accepted</td>
      </tr>
      <tr>
        <td>Proposal Evaluation</td>
        <td>Pending</td>
      </tr>
      <tr>
        <td>Presentation</td>
        <td>Pending</td>
      </tr>
      <tr>
        <td>Money Grant</td>
        <td>Pending</td>
      </tr>
      </tbody>
    );
  }
  else if(status===3){
    return(
      <tbody>
        <tr>
          <td>Ethical Evaluation</td>
          <td>Accepted</td>
        </tr>
      <tr>
        <td>Concept Evaluation</td>
        <td>Accepted</td>
      </tr>
      <tr>
        <td>Proposal Evaluation</td>
        <td>Accepted</td>
      </tr>
      <tr>
        <td>Presentation</td>
        <td>Pending</td>
      </tr>
      <tr>
        <td>Money Grant</td>
        <td>Pending</td>
      </tr>
      </tbody>
    );
}
else if(status===4){
  return(
    <tbody>
      <tr>
        <td>Ethical Evaluation</td>
        <td>Accepted</td>
      </tr>
    <tr>
      <td>Concept Evaluation</td>
      <td>Accepted</td>
    </tr>
    <tr>
        <td>Proposal Evaluation</td>
        <td>Accepted</td>
      </tr>
    <tr>
      <td>Presentation</td>
      <td>Accepted</td>
    </tr>
    <tr>
      <td>Money Grant</td>
      <td>Pending</td>
    </tr>
    </tbody>
  );
}
else if(status===5){
  return(
    <tbody>
      <tr>
        <td>Ethical Evaluation</td>
        <td>Accepted</td>
      </tr>
    <tr>
      <td>Concept Evaluation</td>
      <td>Accepted</td>
    </tr>
    <tr>
        <td>Proposal Evaluation</td>
        <td>Accepted</td>
      </tr>
    <tr>
      <td>Presentation</td>
      <td>Accepted</td>
    </tr>
    <tr>
      <td>Money Grant</td>
      <td>Accepted</td>
    </tr>
    </tbody>
  );
}
}
  return (
    document.cookie ?
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-10">
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card shadow" style={{ backgroundColor: "#11676d", color: 'white' }}>
                <div className="card-body">
                  <h5 className="card-title">Check Your Status</h5>
                  { loaded && displayProjects()}
                  {/* <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Project Title</th>
                        <th>Stages</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statusData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.stage}</td>
                          <td>{item.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> : <Logout/>
  );
};

export default CheckStatus;