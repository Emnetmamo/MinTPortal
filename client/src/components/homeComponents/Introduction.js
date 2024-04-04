// src/components/homeComponents/Introduction.js

import React from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";
import image1 from "../../images/home/introImage1.png";
import image2 from "../../images/home/introImage2.png";
import image3 from "../../images/home/introImage3.png";
import image4 from "../../images/home/introImage4.png";
import image5 from "../../images/home/introImage5.png";


const Introduction = () => {
  const carouselImageStyle = {
    height: '400px', // Adjust the value as needed to maintain a consistent height
    objectFit: 'cover', // Ensure the image covers the entire container
  };
  return (
    <div className="row mt-4">
      <div id="top"></div>

      <div className="col-md-6" style={{color: '#2b2b2b', borderRadius: '40px bold', backgroundColor: '#fff', marginBottom: "10px"}}>
        <h1 style={{fontSize: "28px"}}>Ethiopian National Research Portal</h1>  
        <div style={{padding:"10px", fontSize:"22px"}}>
       Science, Technology and Innovation (STI) is now universally regarded and recognized as fundamental to achieve sustainable development and economic growth for both developing and developed countries, thus acting as an important driver for poverty alleviation. To set effective STI policies, reliable indicators are needed to benchmark and monitor progress. Research and experimental development (R&D) is an important component of a country’s national innovation system. 
      </div>
      <div style={{marginLeft: "400px"}}>
      <a href="/announcements" style={{background: "goldenrod", color: "white", border: 'none', marginLeft:"-380px", marginTop: "10px", marginBottom: "20px"}} className="btn btn-secondary">See open Research Calls</a>
      </div>
        
      </div>
      <div className="col-md-6">
        <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="Slide 1" style={carouselImageStyle}/>
            </div>
            <div className="carousel-item">
              <img src={image2}className="d-block w-100" alt="Slide 2" style={carouselImageStyle} />
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="Slide 3" style={carouselImageStyle}/>
            </div>
            <div className="carousel-item">
              <img src={image4} className="d-block w-100" alt="Slide 4" style={carouselImageStyle}/>
            </div>
            <div className="carousel-item">
              <img src={image5} className="d-block w-100" alt="Slide 5" style={carouselImageStyle}/>
            </div>
            {/* Add more Carousel.Items as needed */}
          </div>
          <button  className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
