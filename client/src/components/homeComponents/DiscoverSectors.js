// src/components/homeComponents/DiscoverSectors.js

import React from 'react';
import "../../App.css";
import { Link } from 'react-router-dom';


import video1 from "../../images/home/research.gif";
import video2 from "../../images/home/drone.gif";
import video3 from "../../images/home/Agri.gif";

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
    <div className="container shadow p-4 mb-3 mt-3" style={{ background: '#2b2b2b', color: "white"}}>
      <div className="row">

      <div className="col-md-6">
          <h1 style={{fontSize: "70px"}}>Discover potential Research sectors</h1>
          <h3 style={{marginTop: "30px"}}>Connect with other research institutes like us...</h3>
          <a href = "/institutes" style={{marginLeft: "100px", color: "white", backgroundColor:"gray", marginTop:"30px", marginBottom:'20px'}}  className="btn   ">Connect with institutes</a>
        </div>
        
        <div className="col-md-6" style={{height:"600px", marginLeft: '-20px'}}>
          
          <div style={videoContainerStyle}>
          <img src={video1} alt="Potential Sector Image 1" style={videoStyle} height="250px" width="300px"/>
          </div>
          <div style={{ ...videoContainerStyle, marginLeft: '70px' }}>
          <img src={video2} alt="Potential Sector Image 2" style={videoStyle} height="250px" width="300px"/>
          </div>
          <div style={{ ...videoContainerStyle, marginLeft: '150px' }}>
          <img src={video3} alt="Potential Sector Image 3" style={{...videoStyle, marginBottom:"50px", marginLeft: "-8px"}} height="250px" width="300px"/>
          </div>

        </div>
      
        </div>
    </div>
  );
}

export default DiscoverSectors;