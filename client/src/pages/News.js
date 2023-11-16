// src/components/pages/News.js
import React, {useState, useEffect}  from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {getNews} from '../actions/news'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'; // Importing the search icon


axios.defaults.withCredentials=true

const News = () => {

  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  
  const parsedNewsData = typeof news === 'string' ? JSON.parse(news) : news;

  // // Sort the news by date before setting the state
  const sortedNews = parsedNewsData.sort((a, b) => new Date(a.date) - new Date(b.date));
  console.log(sortedNews)

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
        {sortedNews && sortedNews.map((newsItem, index) => (
          <div key={newsItem._id} className="col-lg-4 mb-4">
            <div className="card rounded shadow grow-on-hover"> {/* Added grow-on-hover class */}
               {newsItem && newsItem.image && (
                  <img className="card-img-top" src={newsItem.image} alt="News" />
                )}
                          
              <div className="card-body text-center">
                <h6 className="mb-0" style={{color: '#11676d', fontSize: '20px'}}
                >Author:  {newsItem.author}</h6>
                <div className='d-flex justify-content-center'>     
                          
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