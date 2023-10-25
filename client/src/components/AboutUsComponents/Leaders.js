// src/components/AboutUsComponents/LeadersSection.js

import React from 'react';
import leader1 from '../../images/AboutUs/leader1.jpg';
import leader2 from '../../images/AboutUs/leader2.jpg';
import leader3 from '../../images/AboutUs/leader3.jpg';
import leader4 from '../../images/AboutUs/leader4.jpg';
import leader5 from '../../images/AboutUs/leader5.jpg';
import leader6 from '../../images/AboutUs/leader6.jpg';
import leader7 from '../../images/AboutUs/leader7.jpg';
import leader8 from '../../images/AboutUs/leader8.jpg';
import leader9 from '../../images/AboutUs/leader9.jpg';

const leaderData = [
  { imageUrl: leader1, name: 'John Doe', position: 'CEO' },
  { imageUrl: leader2, name: 'Jane Smith', position: 'CTO' },
  { imageUrl: leader3, name: 'Bob Johnson', position: 'CFO' },
  { imageUrl: leader4, name: 'Mary Davis', position: 'COO' },
  { imageUrl: leader5, name: 'David Brown', position: 'CMO' },
  { imageUrl: leader6, name: 'Sarah Green', position: 'CIO' },
  { imageUrl: leader7, name: 'Michael Lee', position: 'CDO' },
  { imageUrl: leader8, name: 'Laura Wilson', position: 'CRO' },
  { imageUrl: leader9, name: 'Kevin Harris', position: 'CLO' },
];

const LeadersSection = () => {
  return (
    <div className="container shadow p-4 mb-4 bg-white rounded">
      <h1 className="text-center font-weight-bold mb-4">Meet Our Leaders</h1>
      <div className="row">
        {leaderData.map((leader, index) => (
          <div className="col-md-4 text-center" key={index}>
            <img
              src={leader.imageUrl}
              alt={`Leader ${index + 1}`}
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h5>{leader.name}</h5>
            <p>{leader.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadersSection;
