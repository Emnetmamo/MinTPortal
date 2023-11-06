import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:5001/admind/dashboard') // Update the route path here
      .then((result) => {
        console.log(result)
        if (result.data === 'ok') {
          setMessage('You are the admin. Welcome to the dashboard.');
        } else {
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error);
        navigate('/login'); // Handle errors by redirecting to the login page
      });
  }, []);

  return (
    <div>
      <br />
      <h3>{message}</h3>
      <h1 className='text-center'>Hello Admin !!!</h1>
    </div>
  );
}

export default Admin;
