// src/components/homeComponents/DiscoverSectors.js

import React from 'react';
import "../../App.css";
import { Link } from 'react-router-dom';


 // import video1 from "../../images/home/potential7.mp4";
// import video2 from "../../images/home/potential8.gif";
// import video3 from "../../images/home/potential9.gif";

const DiscoverSectors = () => {
  const videoContainerStyle = {
    position: 'relative',
    borderRadius: '40px',
    marginBottom: '-100px',
  };

  const videoStyle = {
    innerWidth: "cover",
    innerHeight: "cover",
    borderRadius: "10px"
    // borderRadius: '10px',
  };

  return (
    <div className="container shadow p-4 mb-5 mt-5" style={{ background: '#2b2b2b', color: "white" }}>
      <div className="row">
        <div className="col-md-6" style={{height:"700px"}}>
          <div style={videoContainerStyle}>

            
         


           
          <div style={videoContainerStyle}>
          <img src="../../images/home/potential7.mp4" alt="Potential Sector Image 1" style={videoStyle} height="300px" width="220px"/>
          </div>
          <div style={{ ...videoContainerStyle, marginLeft: '70px' }}>
          <img src="../../images/home/potential8.gif" alt="Potential Sector Image 2" style={videoStyle} height="300px" width="220px"/>
          </div>
          <div style={{ ...videoContainerStyle, marginLeft: '150px' }}>
          <img src="../../images/home/potential9.gif" alt="Potential Sector Image 3" style={{...videoStyle, marginBottom:"50px"}} height="300px" width="220px"/>
  </div>



        </div>
        </div>
        <div className="col-md-6">
          <h1 style={{fontSize: "70px"}}>Discover potential Research sectors</h1>
          <h3 style={{marginTop: "30px"}}>Connect with other research institutes like us...</h3>
          <Link style={{marginLeft: "250px", color: "white", backgroundColor:"orange", marginTop:"30px"}} to="/resources/institutes" className="btn btn-warning  ">Connect with institutes</Link>
        </div>
      
    </div>
    </div>
  );
}

export default DiscoverSectors;
