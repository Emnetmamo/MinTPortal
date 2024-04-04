// src/components/pages/News.js
import React, {useState, useEffect}  from 'react';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

axios.defaults.withCredentials=true

const News = () => {



  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    
    axios.get('http://localhost:5001/news')
      .then(response => {
        const parsedData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        console.log(parsedData.date)

         // Sort the publications by date before setting the state
        const sortedPublications = parsedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        setNews(sortedPublications); // Update the state with the sorted publicationssetNews(parsedData); // Update the state with fetched news
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
              
              <img className='card-img-top' src={`${newsItem.imagePath.replace(/\//g, '\\')}`} alt={newsItem.title} />               
              <div className="card-body text-center">
                <h6 className="mb-0" style={{color: '#11676d', fontSize: '20px'}}
                >Author:  {newsItem.author}</h6>
                <div className='d-flex'>     
                          
                  <h6 className='mx-1' style={{color: '#ffa525'}}>{newsItem.date} </h6> <h6>| </h6> <h6 className='ms-1' style={{color: '#ffa525'}}> {newsItem.category}</h6>
                </div>                
                <h5 className="card-title fw-bold fs-3">{newsItem.title}</h5>
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