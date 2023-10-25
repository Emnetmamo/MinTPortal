// src/components/announcementsComponents/ForeignCalls.js

import React from 'react';

const ForeignCalls = () => {
  const foreignCallsData = [
    {
      id: 1,
      title: 'Foreign Call 1',
      category: 'Science',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
    },
    {
      id: 2,
      title: 'Foreign Call 2',
      category: 'Business',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
    },
    {
      id: 3,
      title: 'Foreign Call 3',
      category: 'Medicine',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
    },
    {
      id: 4,
      title: 'Foreign Call 4',
      category: 'Engineering',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
    },
    {
      id: 5,
      title: 'Foreign Call 5',
      category: 'Arts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut commodo libero.',
    },
  ];

  return (
    <div>
      {foreignCallsData.map(call => (
        <div className="card mb-3" key={call.id}>
          <div className="card-body">
            <h5 className="card-title">{call.title}</h5>
            <p className="card-text">Category: {call.category}</p>
            <p className="card-text">{call.description}</p>
            <button style={{ backgroundColor: "orange", color:"white"}} className="btn">Go to call site</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForeignCalls;
