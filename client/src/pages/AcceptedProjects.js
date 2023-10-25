// src/components/pages/AcceptedProjects.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import news1 from "../images/News/news1.png";
import news2 from "../images/News/news2.jpeg";
import news3 from "../images/News/news3.jpeg";
import news4 from "../images/News/news4.jpeg";
import news5 from "../images/News/news5.jpeg";
import news6 from "../images/News/news6.jpeg";




const AcceptedProjectsData = [
  {
    imageUrl: news1,
    title: 'Exciting Discovery in Agriculture',
    Investigator: 'Dr. Jane Smith',
    category:'Health',
    description: 'Innovation in technology is a relentless pursuit of progress and improvement, a driving force that shapes and reshapes our world at an accelerating pace. It encompasses the development of groundbreaking solutions, products, and processes that revolutionize industries, enhance our daily lives, and tackle complex global challenges...',
    PublicationDate: 'October 15, 2023'
  },
  {
    imageUrl: news2,
    title: 'Breakthrough in Renewable Energy',
    Investigator: 'Dr. Jane Smith',
    category:'Agriculture',
    description: 'Innovation in technology is a relentless pursuit of progress and improvement, a driving force that shapes and reshapes our world at an accelerating pace. It encompasses the development of groundbreaking solutions, products, and processes that revolutionize industries, enhance our daily lives, and tackle complex global challenges...',
    PublicationDate: 'October 15, 2023'
  },
  {
    imageUrl: news3,
    title: 'New Advances in Healthcare',
    Investigator: 'Dr. Jane Smith',
    category:'Industrial',
    description: 'Innovation in technology is a relentless pursuit of progress and improvement, a driving force that shapes and reshapes our world at an accelerating pace. It encompasses the development of groundbreaking solutions, products, and processes that revolutionize industries, enhance our daily lives, and tackle complex global challenges...',
    PublicationDate: 'October 15, 2023'
  },
  {
    imageUrl: news4,
    title: 'Innovations in Technology Sector',
    Investigator: 'Dr. Jane Smith',
    category:'Invironment and Energy',
    description: 'Innovation in technology is a relentless pursuit of progress and improvement, a driving force that shapes and reshapes our world at an accelerating pace. It encompasses the development of groundbreaking solutions, products, and processes that revolutionize industries, enhance our daily lives, and tackle complex global challenges...',
    PublicationDate: 'October 15, 2023'
  },
  {
    imageUrl: news5,
    title: 'Environmental Conservation Initiatives',
    Investigator: 'Dr. Jane Smith',
    category:'Health',
    description: 'Innovation in technology is a relentless pursuit of progress and improvement, a driving force that shapes and reshapes our world at an accelerating pace. It encompasses the development of groundbreaking solutions, products, and processes that revolutionize industries, enhance our daily lives, and tackle complex global challenges...',
    PublicationDate: 'October 15, 2023'
  },
  {
    imageUrl: news6,
    title: 'Advancements in Artificial Intelligence',
    Investigator: 'Dr. Jane Smith',
    category:'Industrial',
    description: 'Innovation in technology is a relentless pursuit of progress and improvement, a driving force that shapes and reshapes our world at an accelerating pace. It encompasses the development of groundbreaking solutions, products, and processes that revolutionize industries, enhance our daily lives, and tackle complex global challenges...',
    PublicationDate: 'October 15, 2023'
  }
];


const AcceptedProjects = () => {
  return (
    <div className="container m-10" >
      <h1 className="mb-4 font-weight-bold text-center">Accepted Projects</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-pill text-center"
          placeholder="Enter project title"
          aria-label="Enter project title"
          aria-describedby="basic-addon2"
          style={{ maxWidth: '200px' }}
        />
        <div className="input-group-append mt-2">
          <span className="input-group-text bg-white border-0"><FaSearch /></span>
        </div>
      </div>
      <div className="row">
        {AcceptedProjectsData.map((AcceptedProjectsItem, index) => (
          <div key={index} className="mb-5">
            <div className="card rounded shadow grow-on-hover d-flex" > {/* Added grow-on-hover class */}
              <div className="row g-0">
                <div className="col-lg-6">
                  <img
                    src={AcceptedProjectsItem.imageUrl}
                    className="card-img-top rounded-top"
                    alt={`AcceptedProjects ${index + 1}`}
                  />
                </div>
                <div className="col  mx-5 my-2 ">
                  <div className="card-body">
                    <h4 className="card-title my-3 ">{AcceptedProjectsItem.title}</h4>
                    <h6 className="card-Investigator my-2 ">Principal Investigator: {AcceptedProjectsItem.Investigator}</h6>
                    <h6 className="card-category my-2 ">Category: {AcceptedProjectsItem.category}</h6>
                    <h6 className="col card-Description d-flex " >Description: </h6>
                    <p className="col card-text text-muted">{AcceptedProjectsItem.description}</p>
                    <h6 className="card-PublicationDate my-2 ">PublicationDate: {AcceptedProjectsItem.PublicationDate}</h6>
                    <Link to={`/AcceptedProjects/${index}`} className="btn btn-primary my-2">Download</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-left mt-3 mx-end">
        <Link style={{ marginBottom: "30px" }} to="/view-more" className="btn btn-primary">View More</Link>
      </div>
    </div>
  );
}

export default AcceptedProjects;
