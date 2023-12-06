import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

axios.defaults.withCredentials = true;

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/news')
      .then(response => {
        const parsedData =
          typeof response.data === 'string'
            ? JSON.parse(response.data)
            : response.data;
        console.log(parsedData.createdAt);

        const sortedPublications = parsedData.sort(
          (a, b) =>new Date(b.createdAt)- new Date(a.createdAt) 
        );

        setNews(sortedPublications);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  function searchNews(e){
    let searchText = e.value.toLowerCase();
    let titles2 = Array.from(document.getElementsByClassName('card-title'));
    let contents = Array.from(document.getElementsByClassName('card-text text-muted'));
    let titles = titles2.concat(contents);
    let parent = null;
    Array.from(titles).forEach(function(title1){
      if(title1.innerText.toLowerCase().indexOf(searchText) > -1){
        title1.parentElement.parentElement.parentElement.style.display = "";
        parent = title1.parentElement.parentElement.parentElement;
        console.log(parent);
      }
      else{
        if(parent === title1.parentElement.parentElement.parentElement){
          title1.parentElement.parentElement.parentElement.style.display = "";
        }
        else{
          title1.parentElement.parentElement.parentElement.style.display = "none";
        }
      }
    })
  }

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
          onChange={function(e){searchNews(e.target)}}
        />
        <div className="input-group-append">
          <span className="input-group-text bg-white border-0">
            <FaSearch />
          </span>
        </div>
      </div>
      <div className="row">
        {news.map((newsItem, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card rounded shadow grow-on-hover">
              <img
                className="card-img-top news"
                src={newsItem.imagePath}
                alt={newsItem.title}
              />
              <div className="card-body newsbody1 text-center">
                <h6
                  className="mb-0"
                  style={{ color: '#11676d', fontSize: '20px' }}
                >
                  Author: {newsItem.author}
                </h6>
                <div className="d-flex" style={{ justifyContent: 'center' }}>
                  <h6 className="mx-1" style={{ color: '#ffa525' }}>
                    {newsItem.date && newsItem.date.split('T')[0]}{' '}
                  </h6>
                  <h6>| </h6>
                  <h6 className="ms-1" style={{ color: '#ffa525' }}>
                    {newsItem.category}
                  </h6>
                </div>
                <h5 className="card-title fw-bold fs-3">{newsItem.title}</h5>
                <p className="card-text text-muted">{newsItem.content}</p>
              </div>
              <div className="d-flex px-4 my-2">
                <Link
                  to='/viewNews'
                  state={{id:newsItem._id}}
                  className="btn btn-primary px-3"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-3">
        <Link
          style={{ marginBottom: '30px' }}
          to="/view-more"
          className="btn btn-primary"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default News;