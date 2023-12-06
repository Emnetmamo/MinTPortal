import React, { useState ,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

axios.defaults.withCredentials=true


const Publications = () => {
  const [acceptedProject, setAcceptedProject] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('http://localhost:5001/resources/accepted-projects')
      .then(response => {
        const parsedData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

        // Sort the publications by date before setting the state
        const sortedAcceptedProjects = parsedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        setAcceptedProject( sortedAcceptedProjects ); // Update the state with the sorted publications
      })
      .catch(error => {
        console.error('Error fetching accepted projects:', error);
      });
  }, []);
// get file name
function getFileNameFromPath(filePath) {
  const parts = filePath.split(/[\\/]/); // Split the path using either / or \
  return parts[parts.length - 1]; // Get the last part, which is the file name
}
  
  // handle dowload

  const handleDownload = (fileUrl,fileName) => {
  
    axios({
      url: fileUrl,
      method: 'GET',
      responseType: 'blob', // Ensure the response type is set to blob
    })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download',  fileName ); // Set the file name and extension
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => {
        console.error('Error downloading file:', error);
        // Handle the error, maybe show a message to the user
      });
  };
  function searchItem(e){
    let searchText = e.value.toLowerCase();
    let titles2 = Array.from(document.getElementsByClassName('card-title'));
    let contents = Array.from(document.getElementsByClassName('card-text text-muted'));
    let titles = titles2.concat(contents);
    let parent = null;
    Array.from(titles).forEach(function(title1){
      if(title1.innerText.toLowerCase().indexOf(searchText) > -1){
        title1.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "";
        parent = title1.parentElement.parentElement.parentElement.parentElement.parentElement;
        console.log(parent);
      }
      else{
        if(parent === title1.parentElement.parentElement.parentElement.parentElement.parentElement){
          title1.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "";
        }
        else{
          title1.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
        }
      }
    })
  }
  return (
    <div className="container m-10" >
      <br/><br/>
      <h1 className="mb-4 mt-3 font-weight-bold text-center">Accepted Projects</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-pill text-center"
          placeholder="Enter project title"
          aria-label="Enter project title"
          aria-describedby="basic-addon2"
          style={{ maxWidth: '200px' }}
          onChange={function(e){searchItem(e.target)}}
        />
        <div className="input-group-append mt-2">
          <span className="input-group-text bg-white border-0"><FaSearch /></span>
        </div>
      </div>
      <div className="row">
        {acceptedProject.map((AcceptedProjectItem, index) => (
          
          <div key={index} className="mb-5">
            <div className="card rounded shadow grow-on-hover d-flex" > {/* Added grow-on-hover class */}
              <div className="row g-0">
                <div className="col-lg-6">                
                  <img
                    src={`${AcceptedProjectItem.imagePath.replace(/\//g, '\\').split('public\\').join('')}`}
                    className="card-img-top rounded-top"
                    alt={`Accepted Project ${index + 1}`}
                  />
                  
                </div>
                <div className="col  mx-5 my-2 ">
                  <div className="card-body">
                    <h4 className="card-title my-3 text-primary fs-2">{AcceptedProjectItem.title}</h4>
                    <h6 className="card-Investigator my-2 "><b>Principal Investigator</b>: {AcceptedProjectItem.p_investigator}</h6>                    
                    <p className="col card-text text-muted">{AcceptedProjectItem.description}</p> 
                    <h6 className="card-Investigator my-2 "><b>Funding Source(s):</b> {AcceptedProjectItem.funding_source}</h6>  
                    <h6 className="card-Investigator my-2 "><b>Author:</b> {AcceptedProjectItem.author}</h6>                     
                    <div className='d-flex align-items-end'>               
                    
                  <h6 className='card-PublicationDate my-2 mx-1 ' style={{color: '#ffa525'}}>{AcceptedProjectItem.date.split('T')[0]} </h6> <h6>| </h6> <h6 className='ms-1' style={{color: '#ffa525'}}> {AcceptedProjectItem.field_of_study}</h6>
                </div>
                <Link
                  to="#"
                  onClick={() => handleDownload(AcceptedProjectItem.filePath.replace(/\//g, '\\').split('public\\').join(''), getFileNameFromPath(AcceptedProjectItem.filePath.replace(/\//g, '\\').split('public\\').join('')))}
                  className="btn btn-primary my-2"
                >
                  Download
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-left mt-3 mx-5">
        <Link style={{ marginBottom: "30px" }} to="/view-more" className="btn btn-primary">View More</Link>
      </div>
    </div>
  );
}

export default Publications;
