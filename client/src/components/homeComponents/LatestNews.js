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
     
     
          
            <div className="card-body newsbody1 ">

           
              <h5 className="card-title ">Recent Announcement about <br/>
                {latestNewsItem.title} <hr/>
              </h5>
                
            <div className="d-flex">
              <Link
                to="/viewNews"
                state={{ id: latestNewsItem._id }}
                className="btn btn-primary "
                >
                Read More
              </Link>
            </div>
                </div>


  );
};

export default LatestNews;