// src/components/AboutUsComponents/AboutUsSection.js

import React from 'react';
import who from "../../images/AboutUs/Who.jpg";
import mission from "../../images/AboutUs/mission.jpg";
import vision from "../../images/AboutUs/vision.jpg";
import value from "../../images/AboutUs/values.jpg";


const AboutUsSection = () => {
  return (
    <div className="container shadow p-4 mb-4 bg-white rounded">
      <h1 className="text-center font-weight-bold mb-4">About Us</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow h-100 shadow grow">
            <img
              src={who}
              className="card-img-top"
              alt="who"
              style={{ height: '200px' , width: "300px", marginLeft:"150px"}}
            />
            <div className="card-body">
              <h5 className="card-title">Who we are</h5>
              <p className="card-text">The innovation and technology ministry is one of the 19 ministerial 
              offices re-organize in a new manner by being accountable to the office of 
              the prime minister after duly established as per Article 55 Sub Article 1 of the 
              FDRE Proclamation No. 1097/2018.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow h-100 shadow grow">
            <img
              src={mission}
              className="card-img-top"
              alt="mission"
              style={{ height: '200px' , width: "300px", marginLeft:"150px"}}
            />
            <div className="card-body">
              <h5 className="card-title">Title 2</h5>
              <p className="card-text">Description 2</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow h-100 shadow grow">
            <img
              src={vision}
              className="card-img-top"
              alt="vision"
              style={{ height: '200px' , width: "300px", marginLeft:"150px"}}
            />
            <div className="card-body">
              <h5 className="card-title">Title 1</h5>
              <p className="card-text">Description 1</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow h-100 shadow grow">
            <img
              src={value}
              className="card-img-top"
              alt="value"
              style={{ height: '200px' , width: "300px", marginLeft:"150px"}}
            />
            <div className="card-body">
              <h5 className="card-title">Title 1</h5>
              <p className="card-text">Description 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
