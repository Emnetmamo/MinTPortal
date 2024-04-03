import React from 'react';
import { useParams } from 'react-router-dom';

const Awards = () => {
  const { id } = useParams(); // Destructuring id from the URL parameters
  console.log(id); // Log the id parameter

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>{id}</p>
      <p>Award area</p>
    </div>
  );
};

export default Awards;
