import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css'
import axios from 'axios';
import TableContainer from '@mui/material/TableContainer';
import DropzoneImage from '../../components/AdminComponents/Dropzone'
import DropzoneText from '../../components/AdminComponents/DropzoneText'
import Sidebar from './Sidebar.js';
import Logout from '../../components/Logout.js';
import { useNavigate } from 'react-router-dom';


axios.defaults.withCredentials=true;

function ViewReports() {
    const [reports, setReports] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    const navigate = useNavigate();
    useEffect(function(){
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
        axios.get('https://research-portal-server-9.onrender.com/report/getAll')
        .then((result)=>{setReports(result.data); console.log(result)})
        .catch(err=>console.log(err))
        setLoaded(true);
        // const checkAuthentication = async () => {
        //     try {
        //       const response = await axios.get('https://research-portal-server-9.onrender.com/check-auth-status');
              
        //       const isAuthenticated = response.data.isAuthenticated;
        //       console.log(isAuthenticated)    
        //       setIsAuthenticated(isAuthenticated)
            
      
            
        //     } catch (error) {
        //       console.error('Error checking authentication status:', error);
        //       return false;
        //     }
        //   };
          
        //   // Example usage
        //    checkAuthentication();
    }, [])

    function displayReports(){
        if(loaded){
            let data = [];
            for (let i = (reports.length-1); i > -1; i--) {
                data.push(
                <div>
                    <h4>Title: {reports[i].projectTitle}</h4>
            <TableContainer  sx={{ maxHeight: 200 }}>
                <table className="table">
                <thead className="table-success" style={{color: '#11676d'}}>  
                  <tr>
                    <th>No.</th>
                    <th>Upload Date</th>
                    <th>Report File</th>
                    <th>Give Feedback</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{reports.length - i}</td>
                        <td>{new Date(reports[i].date).toLocaleString()}</td>
                        <td><Link to={'/admin/viewFile'} state={{filePath: reports[i].filePath}} >View Report</Link></td>
                        <td><input type="text" name={reports[i]._id +"-input"} id={reports[i]._id +"-input"} /></td>
                        <td><button className='btn btn-primary' name={reports[i]._id + "-" + reports[i].projectID} 
                        id={reports[i]._id +"-" +reports[i].projectID} 
                        onClick={function(e){submitFeedback(e.target.id)}}>Submit</button></td>
                    </tr>
                </tbody>
                </table>
            </TableContainer>
                </div>
                )
            }
            return data;
        }
    }
    function submitFeedback(id){
        const reportID = id.split('-')[0];
        const projID = id.split('-')[1];
        const feedback = document.getElementById(reportID+"-input").value;
        axios.post('https://research-portal-server-9.onrender.com/report/setMessage', {reportID:reportID, message: feedback})
        .then((result)=>{console.log(result); toast.info("Feedback Submitted Successfully");})
        .catch(err=>console.log(err))
    }
  return (
    document.cookie ?
      
          <div >                
          <div class="col-xs-12 col-md-7 mb-5">
                {loaded && displayReports()}
          </div>
          <ToastContainer/>
      </div> : <Logout/>
      
  

   
  )
}

export default ViewReports;