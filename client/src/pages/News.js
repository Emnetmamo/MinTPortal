// src/components/pages/News.js

import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import news1 from "../images/News/news1.png";
import news2 from "../images/News/news2.jpeg";
import news3 from "../images/News/news3.jpeg";
import news4 from "../images/News/news4.jpeg";
import news5 from "../images/News/news5.jpeg";
import news6 from "../images/News/news6.jpeg";
import news7 from "../images/News/news7.jpeg";
import news8 from "../images/News/news8.jpeg";
import news9 from "../images/News/news9.webp";




const newsData = [
  {
    imageUrl: news1,
    title: 'Exciting Discovery in Agriculture',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: news2,
    title: 'Breakthrough in Renewable Energy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: news3,
    title: 'New Advances in Healthcare',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: news4,
    title: 'Innovations in Technology Sector',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: news5,
    title: 'Environmental Conservation Initiatives',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: news6,
    title: 'Advancements in Artificial Intelligence',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: news7,
    title: 'Space Exploration Milestones',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: news8,
    title: 'Innovative Solutions for Education',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: news9,
    title: 'Advances in Clean Energy Sources',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];


const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('http://localhost:5000/news')
      .then(response => {
        const parsedData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        setNews(parsedData); // Update the state with fetched news
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="mb-4 font-weight-bold text-center">News</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-pill text-center"
          placeholder="What's new?"
          aria-label="What's new?"
          aria-describedby="basic-addon2"
          style={{ maxWidth: '200px' }}
        />
        <div className="input-group-append">
          <span className="input-group-text bg-white border-0"><FaSearch /></span>
        </div>
      </div>
      <div className="row">
        {news.map((newsItem, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card rounded shadow grow-on-hover"> {/* Added grow-on-hover class */}
             
              <div className="card-body text-center">
                <h5 className="card-title">{newsItem.title}</h5>
                <p className="card-text text-muted">{newsItem.content}</p>
                <Link to={`/news/${index}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-3">
        <Link style={{marginBottom: "30px"}} to="/view-more" className="btn btn-primary">View More</Link>
      </div>
    </div>
  );
}

export default News;