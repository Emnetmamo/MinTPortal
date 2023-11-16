// src/components/announcementsComponents/ForeignCalls.js

import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const ForeignCalls = () => {
  const[calls, setCalls] = useState([]);
  const[loaded, setLoaded] = useState(false);
 
  useEffect(()=>{
    axios.get("http://localhost:5001/announcements/fetchCalls")
    .then(result=>{
      console.log(result.data)
      setCalls(result.data)
    })
    .catch(err=>console.log(err))
    setLoaded(true);
   
  },[]);
  function display(){
    if(loaded)
    {
      let data = [];
    for(let i=0; i<calls.length; i++){
      if(calls[i].callType=="foreign")
      {
      data.push(
        <div className="card mb-3" key={calls[i]._id}>
          <div className="card-body">
          <h3 className="card-title">{calls[i].title}</h3>
            <p className="card-text text-primary">Category: {calls[i].callType} calls</p>
            <p className="card-text text-primary">descriptions:{calls[i].description}</p>
            <p className='card-text text-primary '>filed of study:{calls[i].field}</p>
            <p className='card-text text-primary'>start Date: {calls[i].startDate}</p>
            <p className='card-text text-primary'>end Date:{calls[i].endDate}</p>
            <p className='card-text text-primary'>prizes:{calls[i].prizes}</p>
            <p className='card-text text-primary'>follow this  instructions:{calls[i]. instructions}</p>
            <p className='card-text text-primary'>guideline how to fill:{calls[i].guideline}</p>
           
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

export default ForeignCalls;
