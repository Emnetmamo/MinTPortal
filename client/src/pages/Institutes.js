import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import "../App.css";
import value from '../images/Institutes/link3.jpg';
import research from '../images/Institutes/Lab.webp';
import lab from '../images/Institutes/Lab1.jpeg';
import ict from '../images/Institutes/ict.webp';
import gov from '../images/Institutes/gov2.jpeg';

const Institutes = () => {


  return (
    <div className="container mt-3 p-5">
      <div className="row">
        {/* Left Section with Background Image */}
        <div className="col-md-6 p-3" style={{ background: `url(${value}) no-repeat center center`, backgroundSize: 'cover', height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '60px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', textAlign: "center" }}>
            Explore our links with different institutes</h1>
        </div>

        {/* Right Section with Cards */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column w-100">
            {/* Pair 1: Research Institutes + Laboratories */}
            <div className="d-flex w-100 justify-content-between">
              <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '48%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
              <a href='/institutes/research' style={{textDecoration:"none"}}>
                <img src={research} className="card-img-top" alt="img research" style={{ height: '200px' }} />
                <div className="card-body" >
                  <h5><a href='/institutes/research'  className="card-title" style={{ color: 'black' , fontSize:"18px",fontWeight:"bold", textDecoration: 'none' }}>Research Institutes</a></h5>
                </div>
                </a> 
              </div>
         
              <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '48%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
               <a href='/institutes/labs' style={{textDecoration:"none"}}>
                <img src={lab} className="card-img-top" alt="img lab" style={{ height: '200px' }} />
                <div className="card-body">
                  <h5><a href='/institutes/labs' className="card-title" style={{  color: 'black' , fontSize:"18px",fontWeight:"bold", textDecoration: 'none' }}>Laboratories</a></h5>
                </div>
                </a>
              </div>
            </div>

            {/* Pair 2: ICT Partners + Government Agencies */}
            <div className="d-flex w-100 justify-content-between" >
              <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '48%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                <a href='/institutes/ict' style={{textDecoration:"none"}} >
                <img src={ict} className="card-img-top" alt="img-ict" style={{ height: '200px' }} />
                <div className="card-body">
                  <h5><a href='/institutes/ict'  className="card-title" style={{  color: 'black' , fontSize:"18px",fontWeight:"bold",textDecoration: 'none' }}>ICT Partners</a></h5>
                </div>
                </a>
              </div>

              <div  className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '48%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                <a href='/institutes/government' style={{textDecoration:"none"}}>
                <img src={gov} className="card-img-top" alt="img-gov" style={{ height: '200px' }} />
                <div className="card-body">
                  <h5><a href='/institutes/government'  className="card-title" style={{ color: 'black' , fontSize:"18px",fontWeight:"bold", textDecoration: 'none' }}>Government Agencies</a></h5>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Institutes;
