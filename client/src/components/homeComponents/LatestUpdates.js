// src/components/homeComponents/LatestUpdates.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from "../../images/home/news1.png";
import image2 from "../../images/home/news8.jpeg";
import image3 from "../../images/home/news9.webp";
import image4 from "../../images/home/news6.jpeg";
import image5 from "../../images/home/news5.jpeg";


const LatestUpdates = () => {
  const carouselImageStyle = {
    maxHeight: '400px', // Adjust the value as needed to maintain a consistent height
    objectFit: 'cover', // Ensure the image covers the entire container
  };
  return (
    <div>
       <h1 className="text-center mb-4">Latest Updates</h1>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption>
          <h3>Slide 1 Title</h3>
          <p>Slide 1 Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption>
          <h3>Slide 2 Title</h3>
          <p>Slide 2 Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption>
          <h3>Slide 3 Title</h3>
          <p>Slide 3 Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Fourth slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption>
          <h3>Slide 4 Title</h3>
          <p>Slide 4 Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          alt="Fifth slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption>
          <h3>Slide 5 Title</h3>
          <p>Slide 5 Description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="text-center mt-4">
        <Link to="/news" className="btn btn-warning">Go to our News page for more</Link>
      </div>
    </div>
   
  );
}

export default LatestUpdates;
