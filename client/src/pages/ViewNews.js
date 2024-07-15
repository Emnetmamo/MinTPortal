import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

function ViewNews() {
  const location = useLocation();
  const { id } = location.state;
  const [news, setNews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(function () {
    axios.get('https://research-portal-server-9.onrender.com/news')
      .then((result) => {
        setNews(result.data);
        setLoaded(true);
      })
      .catch(err => console.log(err))
  }, []);

  function findNewsById(id1) {
    const foundNews = news.find(item => item._id === id1);

    if (foundNews) {
      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <img
                className="img-fluid rounded"
                src={foundNews.imagePath}
                alt={foundNews.title}
              />
              <div className="text-center mt-4">
                <h4>{foundNews.title}</h4>
              </div>
              <p className="text-muted mt-4">{foundNews.content}</p>
              <div className="text-center mt-4">
                <div className="d-flex justify-content-center">
                  <h6 style={{ color: '#ffa525' }}>
                    {foundNews.date && foundNews.date.split('T')[0]}{' '}
                  </h6>
                  <h6>|</h6>
                  <h6 style={{ color: '#ffa525' }}>
                    {foundNews.category}
                  </h6>
                </div>
                <h6 style={{ color: '#11676d' }}>
                  Author: {foundNews.author}
                </h6>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  return (
    <div>
      <br />
      <br />
      <Link to="/news" className="btn btn-warning" style={{ float: "right", marginRight: "20px", color: "#fff" }}>Back to News</Link>
      <h1 className="text-center">News</h1>
      <br />
      <br />
      {loaded && findNewsById(id)}
      <br />
    </div>
  );
}

export default ViewNews;
