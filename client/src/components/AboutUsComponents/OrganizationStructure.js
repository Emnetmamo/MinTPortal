// src/components/AboutUsComponents/OrganizationStructureSection.js

import React, { useState } from 'react';
import imgPath from "../../images/AboutUs/arm.png";
      
const OrganizationStructureSection = () => {
        const [selectedButton, setSelectedButton] = useState(null);
      
        const handleButtonClick = (button) => {
          setSelectedButton(prevState => prevState === button ? null : button);
        };
      
        const departments = [
          {
            name: 'National Research Office',
            lists: [
              'National Research Development Desk',
              'National Research Infrastructure Development Desk',
              'National Research Ethics and Methodology Development Desk'
            ]
          },
          {
            name: 'Technology Transformation Office',
            lists: [
              'Innovation and Transformation Technology and Management Desk',
              'Technology Transformation and Collaboration Desk',
              'Indigenous Technology Development Desk'
            ]
          },
          {
            name: 'Technology Innovation and Management Office',
            lists: [
              'Innovation Development Desk',
              'Innovation Infrastructure Development Desk',
              'Startup and Innovation Enterprise Development Desk 1',
              'Startup and Innovation Enterprise Development Desk 2'
            ]
          }
        ];
      
        return (
          <div className="container shadow p-4 mb-4 bg-white rounded">
            <h1 className="text-center font-weight-bold mb-4">Our Research and Innovation organization Structure</h1>
            <div className="text-center mb-3">
              <button className="btn" 
                style={{backgroundColor:"#11475f", color:"white", fontWeight:"bold", fontSize:"28px"}} 
                onClick={() => handleButtonClick('viewDepartments')}>
                  Innovation and Research Sector
              </button>
            </div>
            <div style={{textAlign:"center"}}>
                 <img src={imgPath} alt="" width={"80%"} height={"100px"}/>
            </div>
            <div className="row">
              {departments.map((department, index) => (
                <div className="col-md-4" key={index}>
                  <button 
                    className="btn mb-2" 
                    style={{ 
                      backgroundColor: selectedButton === department.name ? 'orange' : '#11676d', 
                      color: 'white', 
                      fontSize: '20px'
                    }}
                    onClick={() => handleButtonClick(department.name)}
                  >
                    {department.name}
                  </button>
                  {selectedButton === department.name && (
                    <ul style={{marginLeft:"32%", backgroundColor: '#f9e394', fontSize:'18px'}}>
                      {department.lists.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      }
      
      export default OrganizationStructureSection;