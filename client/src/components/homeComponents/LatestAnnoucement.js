import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const LatestAnnouncement = (props) => {
    const[calls, setCalls] = useState([]);
  const [latestCall, setLatestCall] = useState(null);
  const [loaded, setLoaded] = useState(false);
  let category = props.category;

  useEffect(() => {
    axios
      .get("http://localhost:5001/announcements/fetchCalls")
      .then(result => {
        const calls = result.data;

        const sortedCalls = calls.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        let i=0;
    for ( i ; i < sortedCalls.length; i++) {
    }
        if (sortedCalls.length > 0) {
          setLatestCall(sortedCalls[i-1]);
        }
        setCalls(sortedCalls);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [category]);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  if (!latestCall) {
    return <h3 style={{ color: "green", marginBottom: "50%" }}>No calls in that category</h3>;
  }

  const typeOfCalls = () => {
    let isNational = false;

    for (let i =(calls.length); i>=(calls.length)  ; i--) {
      if (calls[i-1].callType.toLowerCase() === "national" ) {
        isNational = true;
        break;
      }
    }

    return isNational;
  };

  return (
    <div>
      <div>
        
        <h3 className='m-5 ml-5'>Recent announcement</h3>
        <h3 style={{ textTransform: 'uppercase',marginLeft:"40px" , marginBottom:"20px" }} className="card-title">{latestCall.title}</h3>
        <div style={{ marginLeft: "40px" }}>
        {typeOfCalls() ?  
           <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }} className="card-text">
            National Call</p> :  
            <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }} className="card-text">
            Foreign Call</p> }
          <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }} className="card-text">
            Description: <span style={{ color: "black", fontWeight: "normal" }}>{latestCall.description}</span>
          </p>
          <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }} className='card-text'>
            Field of Study: <span style={{ color: "black", fontWeight: "normal" }}>{latestCall.field}</span>
          </p>
          <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }} className='card-text'>
            Start Date: <span style={{ color: "black", fontWeight: "normal" }}>{latestCall.startDate.split("T")[0]}</span>
          </p>
          <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }} className='card-text'>
            End Date: <span style={{ color: "black", fontWeight: "normal" }}>{latestCall.endDate.split("T")[0]}</span>
          </p>
          <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }} className='card-text'>
            Prizes(Monetary): <span style={{ color: "black", fontWeight: "normal" }}>{latestCall.prizes}</span>
          </p>
          <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }} className='card-text'>
            Instructions: <span style={{ color: "black", fontWeight: "normal" }}>{latestCall.instructions}</span>
          </p>
          <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }} className='card-text'>
            Guidelines on how to fill the application: <span style={{ color: "black", fontWeight: "normal" }}>{latestCall.guideline}</span>
          </p>
        </div>
        <div className="d-flex px-5 my-3">
          <a
            href='/startApplication'
            style={{ backgroundColor: "orange", color: "white" }}
            className="btn px-3 "
          >
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}

export default LatestAnnouncement;