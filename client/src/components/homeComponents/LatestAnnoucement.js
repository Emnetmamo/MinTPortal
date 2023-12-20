import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.css';


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

  // function blink(){
  //   if(document.getElementById("blink"))
  //   {
  //   let state1 = document.getElementById("blink").style.color;
  //   //console.log(state1);
  //   if(state1 === "black"){
  //     document.getElementById("blink").style.color = "red";
  //     // setTimeout(function(){
  //     //   //console.log(state1);
  //     // }, 5000);
  //   }
  //   else{
  //     document.getElementById("blink").style.color = "black";
  //     // setTimeout(function(){
  //     //   //console.log(state1);
  //     // }, 2000);
  //   }
  //   window.setInterval(blink, 1000);
  // }
  // }

  return (
    <div>
      <div >
        
        {/* <h3 className='m-5 ml-5'>Recent announcement</h3> */}
        <div className="d-flex px-4" style={{display:"inline"}}>
          <a
            href='/announcements'
            style={{ display: "inline", backgroundColor:"#d1f0e2", borderColor:"#ddd", border:"solid 1px",boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)' }}
            className="btn px-1 "
          >
            <h6 id="blink" className= "blink" style={{display:"inline" }}>New Announcement</h6>
            
            <h6 style={{marginLeft:"30px" , marginBottom:"20px", display:"inline" }} className="card-title">Title {latestCall.title.toUpperCase()}</h6>
        <div style={{ marginLeft: "40px" }}>
        {typeOfCalls() ?  
           <p style={{ color: "green", fontWeight: "bold", fontSize: "16px", display:"inline" }} className="card-text">
            Type: National Call</p> :
            <p style={{ color: "green", fontWeight: "bold", fontSize: "16px", display:"inline" }} className="card-text">
            Type: Foreign Call &nbsp; </p> }
         
          <p style={{ color: "green", fontWeight: "bold", fontSize: "16px", display:"inline" }} className='card-text'>
            Field of Study: <span style={{ color: "black", fontWeight: "normal", display:"inline" }}>{latestCall.field}</span>
          </p>
       
        </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LatestAnnouncement;