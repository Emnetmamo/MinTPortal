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
import "../App.css"

const collaborationData = [
  {
    id: "https://www.undp.org/",
    title: 'United Nations Development Program',
    description: 'UNDP works in about 170 countries and territories, helping to eradicate poverty, reduce inequalities and exclusion, and build resilience so countries can sustain progress. As the UN’s development agency, UNDP plays a critical role in helping countries achieve the Sustainable Development Goals.',
    imageUrl: collab1,
  },
  {
    id: "https://www.koica.go.kr/sites/koica_en/index.do",
    title: 'Korean International Coorporation Agency',
    description: 'Contributing to the advancement of international cooperation through various cooperative projects to promote friendly and cooperative relationships and mutual exchanges between Republic of Korea and developing countries and achieve poverty reduction, improvement of the quality of life, sustainable development, and humanitarianism of developing countries.',
    imageUrl: collab2,
  },
  {
    id: "http://www.acts-net.org/",
    title: 'Afriacn Center of Technology Science',
    description: 'ACTS vision is knowledge for better livelihoods. Its Mission is to strengthen the capacity and policies of African countries and institutions to harness science, technology and innovation for sustainable development.',
    imageUrl: collab3,
  },
  {
    id: "https://mastercardfdn.org/fdre-jobs-creation-commission-launches-enabling-ethiopia-a-5-year-job-opportunities-project-in-partnership-with-the-mastercard-foundation/",
    title: 'Jobs Creation Commission Ethiopia',
    description: 'Our work is guided by its mission to advance education and financial inclusion to catalyze prosperity in developing countries and to support Indigenous youth in Canada. It was created in 2006 by Mastercard International and operates independently under the governance of its own Board of Directors.',
    imageUrl: collab4,
  },
  {
    id: "https://www.dereja.com/",
    title: 'Dereja',
    description: 'Dereja.com is a social enterprise of Info Mind Solutions PLC. (Ethiojobs.net). Established in 2017, we are dedicated to supporting the over 200,000 fresh graduates entering the labor force in starting their careers on the right path.',
    imageUrl: collab5,
  }
];

const Collaborations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
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
    <br/><br/>
      <h1 className="mb-4 font-weight-bold">Collaborations</h1> {/* Added h1 title */}
      <Slider {...settings}>
        {collaborationData.map(collaboration => (
          <div key={collaboration.id} className="px-2">
            <div className="card rounded" style={{  height: "650px"}}>
              <img
                src={collaboration.imageUrl}
                className="card-img-top  text-center" // Added rounded-circle class
                alt={`Collaboration ${collaboration.id}`}
                style={{ width: '200px', height: '200px' , marginLeft: "83px", marginTop:"10px"}}
              />
              <div className="card-body">
                <h5 className="card-title" >
                  <a style={{color:"orange"}} href={collaboration.id} target='_blank'>{collaboration.title}</a>
                </h5>
                <p style={{color:"black", fontWeight: "normal"}} className="card-text">{collaboration.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Collaborations;
