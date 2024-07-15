// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FeedbackReport = ({email}) => {
  
//   const [projects, setProjects] = useState([]);
//   const[loaded, setLoaded] = useState(false);
//   const [reports, setReports] = useState([]);
//   const email1 = email;
//   useEffect(
//     function(){
//       axios.post('https://research-portal-server-9.onrender.com/report/find', {email:email1})
//       .then((result)=>{console.log(result.data); setReports(result.data);})
//       .catch(err=>console.log(err))
//     }
//   ,[email1]);
//   useEffect(function(){
//     console.log(reports);
//     setLoaded(true);
//   }, [reports])

//   function showMessages(messages){
//     let mssg = [];
//     for (let i = 0; i < messages.length; i++) {
//       mssg.push(
//         <h6>{messages[i]}</h6>
//       ); 
//     }
//     return(
//       mssg
//     );
//   }

//   function displayReports(){
//     if(loaded && reports[0]){
//         let data = [];
//         for (let i = 0; i < reports.length; i++) {
//             data.push(<tr>
//                 <td>Report {i+1}</td>
//                 <td>{reports[i].projectTitle}</td>
//                 <td>{new Date(reports[i].date).toLocaleString()}</td>
//                 <td>{showMessages(reports[i].message)}</td>
//             </tr>);   
//         }
//         return data;
//     }
//   }
//   return(
//     <div>
//         <div className='card shadow p-3 mb-5 bg-white rounded'>
//         <table class="table">
//                 <thead class="table-success" style={{color: '#11676d'}}>  
//                   <tr>
//                     <th>No.</th>
//                     <th>Project Title</th>
//                     <th>Upload Date</th>
//                     <th>Message from Admin</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loaded && displayReports()}
//                 </tbody>  
//               </table>
//         </div>
//     </div>
//   );
// }
// export default FeedbackReport;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logout from '../../components/Logout';
import { useAuthContext } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const FeedbackReport = () => {
  
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
  const [reports, setReports] = useState([]);
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
  //const [isAuthenticated, setIsAuthenticated] = useState(null)
  //const {isAuthenticated, login} = useAuthContext()
    
  
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
      axios.post('https://research-portal-server-9.onrender.com/report/find', {email})
      .then((result)=>{console.log(result.data); setReports(result.data);})
      .catch(err=>console.log(err))
    }
  ,[email]);
  useEffect(function(){
    console.log(reports);
    setLoaded(true);
   
  }, [reports])

  function showMessages(messages){
    let mssg = [];
    for (let i = 0; i < messages.length; i++) {
      mssg.push(
        <h6>{messages[i]}</h6>
      ); 
    }
    return(
      mssg
    );
  }

  function displayReports(){
    if(loaded && reports[0]){
        let data = [];
        for (let i = 0; i < reports.length; i++) {
            data.push(<tr>
                <td>Report {i+1}</td>
                <td>{reports[i].projectTitle}</td>
                <td>{new Date(reports[i].date).toLocaleString()}</td>
                <td>{showMessages(reports[i].message)}</td>
            </tr>);   
        }
        return data;
    }
  }
  return(
    cookies?
    <div>
        <div className='card shadow p-3 mb-5 bg-white rounded'>
        <table class="table">
                <thead class="table-success" style={{color: '#11676d'}}>  
                  <tr>
                    <th>No.</th>
                    <th>Project Title</th>
                    <th>Upload Date</th>
                    <th>Message from Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {loaded && displayReports()}
                </tbody>  
              </table>
        </div>
    </div> : <Logout/>
  );
}
export default FeedbackReport;