import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckStatus = ({email}) => {
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
  const [projects, setProjects] = useState([]);
  const[loaded, setLoaded] = useState(false);
  const email1 = email;
  useEffect(
    function(){
      axios.get('http://localhost:5001/admin/userStatus/fetch-'+email1)
      .then((result)=>{
        setProjects(result.data);
        //console.log(result);
      })
      .catch(err=>console.log(err))
      setLoaded(true);
    }
  ,[email1]);
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
                  </table>
                  <h4 style={{color:"white"}}>Currently being reviewed by: {projects[j].currentReviewer}</h4>
          </div>
      );
    }
  }
  //console.log(tableData);
  return tableData;
}
function getStatus(status, project){
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-10">
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card shadow" style={{ backgroundColor: "#11676d", color: 'white' }}>
                <div className="card-body">
                  <h5 className="card-title">Check Your Status</h5>
                  {loaded && displayProjects()}
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
    </div>
  );
};

export default CheckStatus;
