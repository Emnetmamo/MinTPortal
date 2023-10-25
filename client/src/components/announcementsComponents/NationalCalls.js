// src/components/announcementsComponents/NationalCalls.js

import React from 'react';
import { Link } from 'react-router-dom';


const NationalCalls = () => {
  const nationalCallsData = [
    {
      id: 1,
      title: 'National Call 1',
      category: 'Agriculture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
    },
    {
      id: 2,
      title: 'National Call 2',
      category: 'Health',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
    },
    {
      id: 3,
      title: 'National Call 3',
      category: 'Environment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
    },
    {
      id: 4,
      title: 'National Call 4',
      category: 'Technology',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
    },
    {
      id: 5,
      title: 'National Call 5',
      category: 'Education',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
    },
  ];


  return (
    <div>
      {nationalCallsData.map(call => (
        <div className="card mb-3" key={call.id}>
          <div className="card-body">
            <h5 className="card-title">{call.title}</h5>
            <p className="card-text">Category: {call.category}</p>
            <p className="card-text">{call.description}</p>
            <Link  style={{ backgroundColor: "orange", color:"white"}}
            to="/register" className="btn ">
              Start your application
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NationalCalls;
