// src/components/announcementsComponents/ForeignCalls.js

import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const ForeignCalls = () => {
  const[calls, setCalls] = useState([]);
  const[loaded, setLoaded] = useState(false);
  useEffect(function(){
    axios.get("http://localhost:4000/announcements/fetchCalls")
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
      if(calls[i].callType=="foreign")
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
  // const foreignCallsData = [
  //   {
  //     id: 1,
  //     title: 'Foreign Call 1',
  //     category: 'Science',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Foreign Call 2',
  //     category: 'Business',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Foreign Call 3',
  //     category: 'Medicine',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
  //   },
  //   {
  //     id: 4,
  //     title: 'Foreign Call 4',
  //     category: 'Engineering',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
  //   },
  //   {
  //     id: 5,
  //     title: 'Foreign Call 5',
  //     category: 'Arts',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
  //   },
  // ];

  // return (
  //   <div>
  //     {foreignCallsData.map(call => (
  //       <div className="card mb-3" key={call.id}>
  //         <div className="card-body">
  //           <h5 className="card-title">{call.title}</h5>
  //           <p className="card-text">Category: {call.category}</p>
  //           <p className="card-text">{call.description}</p>
  //           <button style={{ backgroundColor: "orange", color:"white"}} className="btn">Go to call site</button>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default ForeignCalls;
