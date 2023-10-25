// src/components/pages/Collaborations.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import collab1 from "../images/Collaborations/collab1.jpeg";
import collab2 from '../images/Collaborations/kodica-logo.png';
import collab3 from '../images/Collaborations/Logo-ACTS.jpg';
import collab4 from '../images/Collaborations/jos-log.png';
import collab5 from '../images/Collaborations/dereja-log.png';


const collaborationData = [
  {
    id: 1,
    title: 'United Nations Development Program',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: collab1,
  },
  {
    id: 2,
    title: 'Korean International Coorporation Agency',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: collab2,
  },
  {
    id: 3,
    title: 'Afriacn Center of Technology Science ',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    imageUrl: collab3,
  },
  {
    id: 4,
    title: 'Jobs Creation Commission Ethiopia',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    imageUrl: collab4,
  },
  {
    id: 5,
    title: 'Dereja',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    imageUrl: collab5,
  }
];

const Collaborations = () => {
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container mt-4 mb-4 text-center"> {/* Added text-center class */}
      <h1 className="mb-4 font-weight-bold">Collaborations</h1> {/* Added h1 title */}
      <Slider {...settings}>
        {collaborationData.map(collaboration => (
          <div key={collaboration.id} className="px-2">
            <div className="card rounded">
              <img
                src={collaboration.imageUrl}
                className="card-img-top  text-center" // Added rounded-circle class
                alt={`Collaboration ${collaboration.id}`}
                style={{ width: '200px', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href={`/collaboration/${collaboration.id}`}>{collaboration.title}</a>
                </h5>
                <p className="card-text">{collaboration.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Collaborations;
