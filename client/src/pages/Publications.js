import React, { useState ,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

axios.defaults.withCredentials=true


const Publications = () => {
  const [publication, setPublication] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('http://localhost:5001/resources/publications')
      .then(response => {
        const parsedData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        setPublication(parsedData); // Update the state with fetched news
      })
      .catch(error => {
        console.error('Error fetching news:', error);
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

  return (
    <div className="container m-10" >
      <br/><br/>
      <h1 className="mb-4 mt-3 font-weight-bold text-center">Publications</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-pill text-center"
          placeholder="Enter project title"
          aria-label="Enter project title"
          aria-describedby="basic-addon2"
          style={{ maxWidth: '200px' }}
        />
        <div className="input-group-append mt-2">
          <span className="input-group-text bg-white border-0"><FaSearch /></span>
        </div>
      </div>
      <div className="row">
        {publication.map((PublicationItem, index) => (
          
          <div key={index} className="mb-5">
            <div className="card rounded shadow grow-on-hover d-flex" > {/* Added grow-on-hover class */}
              <div className="row g-0">
                <div className="col-lg-6">                
                  <img
                    src={`${PublicationItem.imagePath.replace(/\//g, '\\').split('public\\').join('')}`}
                    className="card-img-top rounded-top"
                    alt={`publications ${index + 1}`}
                  />
                  
                </div>
                <div className="col  mx-5 my-2 ">
                  <div className="card-body">
                    <h4 className="card-title my-3 ">{PublicationItem.title}</h4>
                    <h6 className="card-Investigator my-2 ">Principal Investigator: {PublicationItem.p_investigator}</h6>                    
                    <p className="col card-text text-muted">{PublicationItem.description}</p> 
                    <h6 className="card-Investigator my-2 ">Author: {PublicationItem.author}</h6>                     
                    <div className='d-flex align-items-end'>               
                    
                  <h6 className='card-PublicationDate my-2 mx-1 ' style={{color: '#ffa525'}}>{PublicationItem.date} </h6> <h6>| </h6> <h6 className='ms-1' style={{color: '#ffa525'}}> {PublicationItem.field_of_study}</h6>
                </div>
                <Link
                  to="#"
                  onClick={() => handleDownload(PublicationItem.filePath.replace(/\//g, '\\').split('public\\').join(''), getFileNameFromPath(PublicationItem.filePath.replace(/\//g, '\\').split('public\\').join('')))}
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
