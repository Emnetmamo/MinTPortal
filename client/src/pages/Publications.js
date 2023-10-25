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
      <h2>Publications</h2>
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
