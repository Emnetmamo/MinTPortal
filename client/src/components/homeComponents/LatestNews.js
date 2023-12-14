import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

axios.defaults.withCredentials = true;

const LatestNews = () => {
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
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // Show only the latest news item
        if (sortedPublications.length > 0) {
          setNews([sortedPublications[0]]);
        }
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  if (news.length === 0) {
    return <div>Loading...</div>;
  }

  const latestNewsItem = news[0];

  return (
    <div >
      <h3 className='m-5'>Recent News</h3>
        <div >
          <div className="card rounded shadow grow-on-hover">
            <img
              className="card-img-top news"
              src={latestNewsItem.imagePath}
              alt={latestNewsItem.title}
            />
            <div className="card-body newsbody1 text-center">
              <h6
                className="mb-0"
                style={{ color: '#11676d', fontSize: '20px' }}
              >
                Author: {latestNewsItem.author}
              </h6>
              <div
                className="d-flex"
                style={{ justifyContent: 'center' }}
              >
                <h6 className="mx-1" style={{ color: '#ffa525' }}>
                  {latestNewsItem.date && latestNewsItem.date.split('T')[0]}{' '}
                </h6>
                <h6>| </h6>
                <h6 className="ms-1" style={{ color: '#ffa525' }}>
                  {latestNewsItem.category}
                </h6>
              </div>
              <h5 className="card-title fw-bold fs-3">
                {latestNewsItem.title}
              </h5>
              <p className="card-text text-muted">
                {latestNewsItem.content}
              </p>
            </div>
            <div className="d-flex px-4 my-2">
              <Link
                to="/viewNews"
                state={{ id: latestNewsItem._id }}
                className="btn btn-primary px-3"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      {/* </div> */}

    </div>
  );
};

export default LatestNews;