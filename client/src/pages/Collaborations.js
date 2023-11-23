import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const Collaborations = () => {
  const [collaborations, setCollaborations] = useState([]);

  useEffect(() => {
    fetchCollaborations();
  }, []);

  const fetchCollaborations = async () => {
    try {
      const response = await axios.get('http://localhost:5001/collaboration/collaborations');
      setCollaborations(response.data);
    } catch (error) {
      console.error('Error fetching collaborations:', error);
    }
  };

  // Slider setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-4 mb-4 text-center">
      <h1 className="mb-4 font-weight-bold">Collaborations</h1>
      <Slider {...settings}>
        {collaborations.map((collaboration) => (
          <div key={collaboration._id} className="px-2">
            <div className="card rounded">
              <img
                src={collaboration.imagePath}
                className="card-img-top"
                alt={`Collaboration ${collaboration._id}`}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    style={{ color: 'orange' }}
                    href={collaboration.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {collaboration.title}
                  </a>
                </h5>
                <p style={{ color: 'black', fontWeight: 'normal' }} className="card-text">
                  {collaboration.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Collaborations;