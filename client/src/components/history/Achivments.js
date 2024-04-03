import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Achivments = () => {
  const { id } = useParams(); 
  const [achievement, setAchievement] = useState(null); 

  useEffect(() => {
    
    axios.post('http://localhost:5001/history/homehistory', { id })
      .then(response => {
        setAchievement(response.data.data);
        console.log(response.data.data)
      })
      .catch(error => {
        
        console.error('Error fetching data:', error);
      });
  }, [id]);

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
           
    
            <a href={achievement.filePath} className="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer">View PDF</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achivments;