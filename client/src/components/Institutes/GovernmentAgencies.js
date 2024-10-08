import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

axios.defaults.withCredentials = true;

const GovernmentAgencies = () => {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchAgencies = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_SERVER+'institutes/agencies');
        const data = response.data;
        setAgencies(data);
      } catch (error) {
        console.error('Error fetching institutes:', error);
      }
    };

    fetchAgencies();
  }, []);
  function searchItem(e){
    let searchText = e.value.toLowerCase();
    let titles2 = Array.from(document.getElementsByClassName('card-title'));
    let contents = Array.from(document.getElementsByClassName('card-text text-muted'));
    let titles = titles2.concat(contents);
    let parent = null;
    Array.from(titles).forEach(function(title1){
      if(title1.innerText.toLowerCase().indexOf(searchText) > -1){
        title1.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "";
        parent = title1.parentElement.parentElement.parentElement.parentElement.parentElement;
        console.log(parent);
      }
      else{
        if(parent === title1.parentElement.parentElement.parentElement.parentElement.parentElement){
          title1.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "";
        }
        else{
          title1.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
        }
      }
    })
  }
  return (
    <div className="container m-10">
      <br /><br />
      <h1 className="mb-4 mt-3 font-weight-bold text-center">Affiliate Institutes</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-pill text-center"
          placeholder="Search Here"
          aria-label="Enter institute title"
          aria-describedby="basic-addon2"
          style={{ maxWidth: '200px' }}
          onChange={function(e){searchItem(e.target)}}
        />
        <div className="input-group-append mt-2">
          <span className="input-group-text bg-white border-0"><FaSearch /></span>
        </div>
      </div>
      <div className="row">
        {agencies.map((agency, index) => (
          <div key={index} className="mb-5">
            <div className="card rounded shadow grow-on-hover d-flex">
              <div className="row g-0">
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
             <img
             src={agency.imagePath}
             className="card-img-top rounded-top"
             alt={`Institute ${index + 1}`}
            style={{ height: '200px', width: '300px' }}
              />
             </div>
                <div className="col mx-5 my-2">
                  <div className="card-body">
                    <h4 className="card-title my-3 text-primary">
                      <a href={agency.link} target="_blank" rel="noopener noreferrer">
                        {agency.title}
                      </a>
                    </h4>
                    <p className="col card-text text-muted">{agency.description}</p>
                    <h6 className="my-2"><b>Category:</b> {agency.category}</h6>
                    <h6 className="my-2"><b>Email:</b> {agency.email}</h6>
                    <h6 className="my-2"><b>Phone:</b> {agency.phone}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-left mt-3 mx-5">
        <Link style={{ marginBottom: "30px" }} to="/view-more" className="btn btn-primary">View More</Link>
      </div>
    </div>
  );
};

export default GovernmentAgencies;