import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css'
import axios from 'axios';
import DropzoneImage from '../../components/AdminComponents/Dropzone'
import DropzoneText from '../../components/AdminComponents/DropzoneText'
import Sidebar from './Sidebar.js';
import Logout from '../../components/Logout.js';


axios.defaults.withCredentials=true;

function ViewCommitteeReports() {
    const [reports, setReports] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(null)

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
        axios.get('https://research-portal-server-9.onrender.com/admin2Reports/getAll')
        .then((result)=>{setReports(result.data); console.log(result)})
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
    }, [])

    function displayReports(){
        if(loaded){
            let data = [];
            for (let i = (reports.length-1); i > -1; i--) {
                data.push(
                <div>
                <thead className="table-success" style={{color: '#11676d'}}>  
                  <tr>
                    <th>No.</th>
                    <th>Project Title</th>
                    <th>Upload Date</th>
                    <th>Report File</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{reports.length - i}</td>
                        <td>{reports[i].projectTitle}</td>
                        <td>{new Date(reports[i].uploadDate).toLocaleString()}</td>
                        <td><Link to={'/admin/viewFile'} state={{filePath: reports[i].reportPath}} >View Report</Link></td>
                    </tr>
                </tbody>
                </div>
                )
            }
            return data;
        }
    }
  return (
    document.cookie ?
    <div className="">

          <h1>Technical Committee Reports</h1>
          <br />
          <table className="table">
                {loaded && displayReports()}
            </table>
          </div>
     
    
 : <Logout/>
   
  )
}

export default ViewCommitteeReports;