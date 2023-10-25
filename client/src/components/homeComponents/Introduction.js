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
    maxHeight: '400px', // Adjust the value as needed to maintain a consistent height
    objectFit: 'cover', // Ensure the image covers the entire container
  };
  return (
    <div className="row mt-5">
      <div className="col-md-6">
        <h1 style={{fontSize: "50px"}}>Our Mission is to bring change through Researches and Innovation</h1>
        <Link style={{background: "white", color: "black", borderColor:"black",  margin: '50px'}} to="/aboutus" className="btn btn-primary ">About Us</Link>  
        <Link style={{background: "orange", color: "white", border: 'none'}} to="/announcements" className="btn btn-secondary  ms-2">See open Research Calls</Link>
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
