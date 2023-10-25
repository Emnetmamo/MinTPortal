// src/components/homeComponents/DiscoverSectors.js

import React from 'react';
import "../../App.css";
import { Link } from 'react-router-dom';
import video1 from "../../images/home/potentail5.mp4";
import video2 from "../../images/home/potentail4.mp4";
import video3 from "../../images/home/potential6.mp4";

const DiscoverSectors = () => {
  const videoContainerStyle = {
    position: 'relative',
    borderRadius: '40px',
    overflow: 'hidden',
    marginBottom: '-30px',
  };

  const videoStyle = {
    innerWidth: "cover",
    innerHeight: "cover"
    // borderRadius: '10px',
  };

  return (
    <div className="container shadow p-4 mb-5 mt-5" style={{ background: '#2b2b2b', color: "white" }}>
      <div className="row">
        <div className="col-md-6">
          <div style={videoContainerStyle}>
            <iframe style={videoStyle}  src={video1 + "?autoplay=1&loop=1"} title="Video 1" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div style={{ ...videoContainerStyle, marginLeft: '70px' }}>
            <iframe style={videoStyle}  src={video2 + "?autoplay=1&loop=1"} title="Video 2" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div style={{ ...videoContainerStyle, marginLeft: '150px' }}>
            <iframe style={videoStyle}  src={video3 + "?autoplay=1&loop=1"} title="Video 3" frameBorder="0" allowFullScreen></iframe>
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
