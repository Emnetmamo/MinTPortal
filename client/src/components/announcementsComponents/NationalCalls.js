// src/components/announcementsComponents/NationalCalls.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';


const NationalCalls = () => {
  const[calls, setCalls] = useState([]);
  const[loaded, setLoaded] = useState(false);
  useEffect(function(){
    axios.get("http://localhost:5000/announcements/fetchCalls")
    .then(result=>setCalls(result.data))
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    setLoaded(true);
    // async function getData(){
    //   try{
    //     const response = await axios.get("http://localhost:4000/announcements/fetchCalls");
    //     setCalls(response);
    //     console.log(response.data);
    //     setLoaded(true);
    //   }
    //   catch(err){
    //     console.log(err);
    //   }
    // }
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
  // const nationalCallsData = [
  //   {
  //     id: 1,
  //     title: 'National Call 1',
  //     category: 'Agriculture',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
  //   },
  //   {
  //     id: 2,
  //     title: 'National Call 2',
  //     category: 'Health',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
  //   },
  //   {
  //     id: 3,
  //     title: 'National Call 3',
  //     category: 'Environment',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
  //   },
  //   {
  //     id: 4,
  //     title: 'National Call 4',
  //     category: 'Technology',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
  //   },
  //   {
  //     id: 5,
  //     title: 'National Call 5',
  //     category: 'Education',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
  //   },
  // ];


  return (
    <div>
      {loaded && display()}
    </div>
  );
}

export default NationalCalls;
