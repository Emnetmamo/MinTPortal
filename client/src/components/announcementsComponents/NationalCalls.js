// src/components/announcementsComponents/NationalCalls.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';


const NationalCalls = () => {
  const[calls, setCalls] = useState([]);
  const[loaded, setLoaded] = useState(false);
  useEffect(function(){
    axios.get("http://localhost:5001/announcements/fetchCalls")
    .then(result=>setCalls(result.data))
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    setLoaded(true);
  
  },[]);
  function display(){
    if(loaded)
    {
      let data = [];
    for(let i=0; i<calls.length; i++){
      if(calls[i].callType=="national")
      {
      data.push(
        <div className="card mb-3" key={calls[i]._id}>
          <div className="card-body">
            <h3 className="card-title">{calls[i].title}</h3>
            <p className="card-text">Category: {calls[i].callType} calls</p>
            <p className="card-text">descriptions:{calls[i].description}</p>
            <p className='card-text'>filed of study:{calls[i].field}</p>
            <p className='card-text'>start Date: {calls[i].startDate}</p>
            <p className='card-text'>end Date:{calls[i].endDate}</p>
            <a href='/register' style={{ backgroundColor: "orange", color:"white"}}
           className="btn ">
              Start your application
            </a>
          </div>
        </div>
      );
      }
    }
    return data;
  }
  }
 


  return (
    <div>
      {loaded && display()}
    </div>
  );
}

export default NationalCalls;
