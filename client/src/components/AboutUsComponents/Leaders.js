import React from 'react';
import leader1 from '../../images/AboutUs/BeleteMolla.jpg';
import leader2 from '../../images/AboutUs/baysa.jpg';
import leader3 from '../../images/AboutUs/Dr-Yeshurun-Alemayehu-Adde-696x464.jpeg';
import leader4 from '../../images/AboutUs/8888.jpeg';

const leaderData = [
  { imageUrl: leader1, name: 'Dr Belete Molla', position: 'Minister of Ministry of Innovation and Technology'},
  { imageUrl: leader2, name: 'Dr Baysa Badada', position: 'State minister of innovation technology development and management sector'},
  { imageUrl: leader3, name: 'Dr Yshirun Alemayehu', position: 'Deputy Minister of the Ethiopian Ministry of Innovation and Technology' },
  { imageUrl: leader4, name: 'Dr Fozya Amin', position: 'Advisor to the minister with a status of state minister' },
];

const LeadersSection = () => {
  return (
    <div className="container shadow p-4 mb-4 bg-white rounded">
      <h1 className="text-center font-weight-bold mb-4">Meet Our Leaders</h1>
      <div className="d-flex flex-column align-items-center">
        <img
          src={leader1}
          alt="Leader 1"
          className="rounded-circle mb-3"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <h5>Dr. Belete Molla</h5>
        <p style={{color:"grey"}}>Minister of Ministry of Innovation and Technology</p>
      </div>
      <div className="row">
        {leaderData.slice(1).map((leader, index) => (
          <div className="col-md-4 text-center" key={index}>
            <img
              src={leader.imageUrl}
              alt= 'Leader img'
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h5>{leader.name}</h5>
            <p style={{color:"grey"}}>{leader.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadersSection;