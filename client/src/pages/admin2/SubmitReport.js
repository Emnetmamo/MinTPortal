import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.js';

const SubmitReport = () => {
  const location = useLocation();
  const {email} = location.state;
//   function displayDashboard(){
//     if(loaded){
//         if(projects[0] && projects[0].status === 4){
//             return(
//                 <div>
//                     <h2>Upload Progress Report</h2>
//                     <h4>You can submit your progress reports for your project: {projects[0].projectTitle}</h4>
//                     <label htmlFor="file" style={{display:"block"}}>Upload Report(PDF)</label>
//                     <input type="file" name="file" id="file" className='form-control' 
//                     onChange={function(e){ setFile(e.target.files[0]) }}/>
//                     <button className='btn btn-primary' style={{margin:"20px 0px"}} onClick={submitReport}>Submit</button>
//                 </div>
//             );
//         }
//         else{
//             return(
//                 <div>
//                     <h2>Upload Progress Report</h2>
//                     <h4>Your project proposal is still in the process of being accepted. When it is accepted you will be
//                         able to submit your progress reports.
//                     </h4>
//                 </div>
//             )
//         }
//     }
//   }
  return(
    <div>
        <br />
        <br />
        <div className='container mt-5'>       
          <div class="row">
          <div
            className="col-xs-12 col-md-3 post-links-container mt-2"
            style={{ overflow: "hidden" }}
          >
            <Sidebar/>
            </div>
          <div class="col-xs-12 col-md-2"></div>
          <div class="col-xs-12 col-md-7 mb-5">
          <div className='card shadow p-3 mb-5 bg-white rounded'>
        <div>
                    <h2>Upload Progress Report</h2>
                    <h4>You can submit your progress reports for your project:</h4>
                    <label htmlFor="file" style={{display:"block"}}>Upload Report(PDF)</label>
                    <input type="file" name="file" id="file" className='form-control' />
                    {/* {onChange={function(e){ setFile(e.target.files[0]) }}} */}
                    <button className='btn btn-primary' style={{margin:"20px 0px"}}>Submit</button>
                    {/* {onClick={submitReport}} */}
                </div>
        </div>
          </div>
      </div>
        
    </div>
    </div>
  );
}
export default SubmitReport;