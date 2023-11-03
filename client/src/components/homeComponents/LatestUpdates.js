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
          <a href="/news" >
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h3>Innovation, Technology Ministry to Develop Digital Platform for Coffee</h3>
              <p style={{color:"white"}}>Addis Ababa July 21/2020(ENA)
                 Ministry of Innovation and Technology and Ministry of Agriculture have 
                 signed today a Memorandum of Understanding (MoU) to develop digital platform
                  that promotes Ethiopian coffee globally.</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
         <a href="/news" >
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h3>Scientists Develop New Method to Create Stable, 
                Efficient Next-Gen Solar Cells</h3>
              <p style={{color:"white"}}>Next-generation solar materials are cheaper and more 
              sustainable to produce than traditional silicon solar cells,
               but hurdles remain in making the devices
                durable.</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/news" >
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h3>The Ministry of Innovation and Technology and the
                Internet Society Sign New Pact to Advance Digital Economy in Ethiopia</h3>
              <p style={{color:"white"}}> The Ministry of Innovation and Technology (MINT) of Ethiopia and the Internet Society 
                announced a new collaboration agreement today 
                that will help advance the digital economy and drive economic transformation.</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/news" >
            <img
              className="d-block w-100"
              src={image4}
              alt="Fourth slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h3>UNDP signed MoU with Ministry of Innovation 
                and Technology to support Ethiopian innovators and tech sector</h3>
              <p style={{color:"white"}}>A challenge grant will be jointly launched to identify local
                 innovators capable to co-design, experiment and implement technology-driven 
                 solutions to monitor the outbreak, and advance preventive
                 measures including awareness-raising, disease surveillance
                  and citizen action, among others.</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/news" >
            <img
              className="d-block w-100"
              src={image5}
              alt="Fifth slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h3>Ministry Says Working to Create Favorable Environment for Innovation, 
                Technology Investment</h3>
              <p style={{color:"white"}}>The Government of Ethiopia is creating favorable
               business environment for investors interested in the innovation and technology sector,
               according to Ministry of Innovation and Technology.</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
   
  );
}

export default LatestUpdates;
