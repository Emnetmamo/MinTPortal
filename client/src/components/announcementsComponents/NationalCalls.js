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
            <h5 className="card-title">{calls[i].title}</h5>
            <p className="card-text">Category: {calls[i].callType}</p>
            <p className="card-text">{calls[i].description}</p>
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
