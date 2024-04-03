import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Achivments = () => {
  const { id } = useParams(); 
  const [achievement, setAchievement] = useState(null); 
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    axios.post('http://localhost:5001/history/homehistory', { id })
      .then(response => {
        setAchievement(response.data.data);
      })
      .catch(error => {
        setError(error); // Set error state if request fails
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div className="container mt-5">
      {error && <div className="alert alert-danger">Error fetching data: {error.message}</div>}
      {achievement && (
        <div className="card">
          <div className="card-body">
            <img src={achievement.imagePath} className="img-fluid" alt="Achievement" style={{width:'70%', height:'auto'}} />
            <h5 className="card-title">{achievement.title}</h5>
            <p className="card-text">Investigator: {achievement.p_investigator}</p>
            <p className="card-text">Author: {achievement.author}</p>
            <p className="card-text">Funding Source: {achievement.funding_source}</p>
            <p className="card-text">Description: {achievement.description}</p>
            <p className="card-text">Field of Study: {achievement.field_of_study}</p>
            <p className="card-text">Deffence Date: {new Date(achievement.date).toLocaleDateString()}</p>
    
            <a href={achievement.filePath} className="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer">View PDF</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achivments;
