import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css'
import axios from 'axios';
import DropzoneImage from '../../components/AdminComponents/Dropzone'
import DropzoneText from '../../components/AdminComponents/DropzoneText'
import Sidebar from './Sidebar.js';


axios.defaults.withCredentials=true;

function ViewCommitteeReports() {
    const [reports, setReports] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();
  const {email} = location.state;
    useEffect(function(){
        axios.get('http://localhost:5001/admin2Reports/getAll')
        .then((result)=>{setReports(result.data); console.log(result)})
        .catch(err=>console.log(err))
        setLoaded(true);
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
    <div className="">
     
      <div className='container mt-5'>       
          <div class="row">
            <div className="col-xs-12 col-md-3 my-5 post-links-container" >
            <Sidebar/>
            </div>
          <div class="col-xs-12 col-md-2"></div>
          <div class="col-xs-12 col-md-7 mb-5">
          <h1>Technical Committee Reports</h1>
          <br />
          <table className="table">
                {loaded && displayReports()}
            </table>
          </div>
      </div>
      
    </div>
    
  </div>
   
  )
}

export default ViewCommitteeReports;