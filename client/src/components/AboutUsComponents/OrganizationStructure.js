// src/components/AboutUsComponents/OrganizationStructureSection.js

import React, { useState } from 'react';

const OrganizationStructureSection = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(prevState => prevState === button ? null : button);
  };

  return (
    <div className="container shadow p-4 mb-4 bg-white rounded">
      <h1 className="text-center font-weight-bold mb-4">Organization Structure</h1>
      <div className="text-center mb-3">
        <button className="btn btn-primary" onClick={() => handleButtonClick('viewDepartments')}>
          View Departments
        </button>
      </div>
      <div className="row">
        {['dept1', 'dept2', 'dept3'].map((department) => (
          <div className="col-md-4" key={department}>
            <button 
              className="btn btn-success mb-2" 
              style={{ marginLeft: '90px' }}
              onClick={() => handleButtonClick(department)}
            >
              Department {department.charAt(4)}
            </button>
            {selectedButton === department && (
              <ul>
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganizationStructureSection;
