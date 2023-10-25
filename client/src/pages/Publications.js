// src/components/Publications.js
import React from 'react';

const Publications = () => {
  // Dummy publication data for example
  const publications = [
    { title: 'Publication 1', author: 'Author 1' },
    { title: 'Publication 2', author: 'Author 2' },
    { title: 'Publication 3', author: 'Author 3' },
  ];

  return (
    <div>
      <h2 className='p-3 mt-20% mr-20%'>Here you can find Publications and scientific journals published by people all around this country</h2>
      <label  >Sereach by catogory:</label>
      <ul>
        {publications.map((publication, index) => (
          <li key={index}>
            <strong>{publication.title}</strong> - {publication.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
