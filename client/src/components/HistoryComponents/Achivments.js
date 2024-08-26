import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Achivments = () => {
  const { id } = useParams(); 
  const [achievement, setAchievement] = useState(null); 

  useEffect(() => {
    
    axios.post(process.env.REACT_APP_SERVER+'history/homehistory', { id })
      .then(response => {
        
        setAchievement(response.data.data);
        console.log(response.data.data)
      })
      .catch(error => {
        
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleDownload = (event, fileUrl, fileName) => {
    event.preventDefault();
    axios({
      url: fileUrl,
      method: "GET",
      responseType: "blob", // Ensure the response type is set to blob
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName); // Set the file name and extension
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
        // Handle the error, maybe show a message to the user
      });
  };

  function getFileNameFromPath(filePath) {
    const parts = filePath.split(/[\\/]/); // Split the path using either / or \
    return parts[parts.length - 1]; // Get the last part, which is the file name
  }

  return (
    <div className="container mt-5" >
      {achievement && (
        <div className="card">
          <div className="card-body">
            <div className='row'>
            <div className='col'>
            <img src={achievement.imagePath} className="img-fluid" alt="Achievement"
           style={{width:'100%', height:'auto',
           markerStart:'30px'
           }} />
            </div>
            <div className='col'>
            <h5 className="card-title" style={{color:'black',alignContent:'center' ,fontSize:'2pc'}}>{achievement.title}</h5>
            <p className="card-text" style={{color:'black'}}>Investigator: {achievement.p_investigator}</p>
            <p className="card-text" style={{color:'black'}}>Author: {achievement.author}</p>
            <p className="card-text" style={{color:'black'}}>Funding Source: {achievement.funding_source}</p>
            <p className="card-text" style={{color:'black'}}>Field of Study: {achievement.field_of_study}</p>
            <p className="card-text" style={{color:'black'}}>Date: {new Date(achievement.date).toLocaleDateString()}</p>
            </div>
            </div>
          
         
            <p className="card-text" style={{color:'black' ,fontSize:'1pc',}}> {achievement.description}</p>
           
    
            <Link to="#" className="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer"
            onClick={(e) => {handleDownload(e,achievement.filePath.replace(/\//g, '\\').split('public\\').join(''), getFileNameFromPath(achievement.filePath.replace(/\//g, '\\').split('public\\').join('')))
            }}>
              Download PDF</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achivments;