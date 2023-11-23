import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

axios.defaults.withCredentials = true;

const ResearchInstitutes = () => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchResearch = async () => {
      try {
        const response = await axios.get('http://localhost:5001/institutes/researchs');
        const data = response.data;
        setResearch(data);
      } catch (error) {
        console.error('Error fetching institutes:', error);
      }
    };

    fetchResearch();
  }, []);

  const handleTitleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="container m-10">
      <br /><br />
      <h1 className="mb-4 mt-3 font-weight-bold text-center">Research Institutes</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-pill text-center"
          placeholder="Search Here"
          aria-label="Enter institute title"
          aria-describedby="basic-addon2"
          style={{ maxWidth: '200px' }}
        />
        <div className="input-group-append mt-2">
          <span className="input-group-text bg-white border-0"><FaSearch /></span>
        </div>
      </div>
      <div className="row">
        {research.map((researchInstitute, index) => (
          <div key={index} className="mb-5">
            <div className="card rounded shadow grow-on-hover d-flex">
              <div className="row g-0">
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <img
                    src={researchInstitute.imagePath}
                    className="card-img-top rounded-top"
                    alt={`Institute ${index + 1}`}
                    style={{ height: '200px', width: '300px' }}
                  />
                </div>
                <div className="col mx-5 my-2">
                  <div className="card-body">
                    <h4
                      className="card-title my-3 text-primary"
                      style={{ cursor: 'pointer' }}
                    >
                      <a href={researchInstitute.link} target="_blank" rel="noopener noreferrer">
                        {researchInstitute.title}
                      </a>
                    </h4>
                    <p className="col card-text text-muted">{researchInstitute.description}</p>
                    <h6 className="my-2"><b>Category:</b> {researchInstitute.category}</h6>
                    <h6 className="my-2"><b>Email:</b> {researchInstitute.email}</h6>
                    <h6 className="my-2"><b>Phone:</b> {researchInstitute.phone}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchInstitutes;