import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faBullhorn, faBookOpen, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Importing the necessary FontAwesome icons
import Slider from 'react-slick'; // Importing Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Importing slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Importing slick carousel theme
// import newsIcon from '../../images/home/news-icon.png';
// import announcementIcon from '../../images/home/announcement-icon.png';
// import publicationIcon from '../../images/home/publication-icon.png';

const BlinkingIcon = ({ icon, text, link, size, blinkInterval, onClick }) => {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prevIsBlinking) => !prevIsBlinking);
    }, blinkInterval);

    return () => clearInterval(interval);
  }, [blinkInterval]);

  return (
    <div className="blinking-icon" onClick={onClick}>
      {icon === 'news' && <FontAwesomeIcon icon={faNewspaper} className={`icon ${isBlinking ? 'blink' : ''}`} style={{ fontSize: size, color: '#ded61f', marginRight: '10px' }} />}
      {icon === 'announcement' && <FontAwesomeIcon icon={faBullhorn} className={`icon ${isBlinking ? 'blink' : ''}`} style={{ fontSize: size, color: '#ded61f', marginRight: '10px' }} />}
      {icon === 'publication' && <FontAwesomeIcon icon={faBookOpen} className={`icon ${isBlinking ? 'blink' : ''}`} style={{ fontSize: size, color: '#ded61f', marginRight: '10px' }} />}
      <span>{text}</span>
    </div>
  );
};

const NewsAnnouncementsPublications = () => {
  const [latestNews, setLatestNews] = useState('');
  const [latestAnnouncement, setLatestAnnouncement] = useState('');
  const [latestPublication, setLatestPublication] = useState('');

  useEffect(() => {
    // Fetch news
    axios
      .get('http://localhost:5001/news')
      .then((response) => {
        const parsedData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        const sortedNews = parsedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const recentNews = sortedNews.length > 0 ? sortedNews[0].title : '';
        setLatestNews(recentNews);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });

    // Fetch announcements
    axios
      .get('http://localhost:5001/resources/announcements')
      .then((response) => {
        const recentAnnouncement = response.data.length > 0 ? response.data[0].title : '';
        setLatestAnnouncement(recentAnnouncement);
      })
      .catch((error) => {
        console.error('Error fetching announcements:', error);
      });

    // Fetch publications
    axios
      .get('http://localhost:5001/resources/publications')
      .then((response) => {
        const parsedData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        const sortedPublications = parsedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        const recentPublication = sortedPublications.length > 0 ? sortedPublications[0].title : '';
        setLatestPublication(recentPublication);
      })
      .catch((error) => {
        console.error('Error fetching publications:', error);
      });
  }, []);

  const handleNewsClick = () => {
    // Handle news click here, e.g., navigate to the news detail page
    // You can use the ID of the latest news to fetch the detailed information
    console.log('News clicked');
  };

  const handleAnnouncementClick = () => {
    // Handle announcement click here, e.g., navigate to the announcement detail page
    // You can use the ID of the latest announcement to fetch the detailed information
    console.log('Announcement clicked');
  };

  const handlePublicationClick = () => {
    // Handle publication click here, e.g., navigate to the publication detail page
    // You can use the ID of the latest publication to fetch the detailed information
    console.log('Publication clicked');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000
  };

  return (
    <div className="news-announcements-publications">
      <style>
        {`
          .blinking-icon .icon {
            margin-right: 10px;
          }
          .blinking-icon .blink {
            animation: blink-animation 1100ms infinite;
          }

          @keyframes blink-animation {
            0% {
              opacity: 0.6;
            }
            50% {
              opacity: 0.1;
            }
            100% {
              opacity: 1;
            }
          }

          .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 20px;
          }
        `}
      </style>
      <div style={{ background: "linear-gradient(to right, #ded61f, #dbb21e)", color: "white", padding: "10px", marginBottom: "10px", textAlign: "center" }}>QUICK LINKS</div>
      <div className="quick-links"> 
        <FontAwesomeIcon icon={faArrowRight} className="icon" style={{ fontSize: '24px', color: '#ded61f', paddingRight: '8px' }} /> 
        <Link to="/news" style={{ textDecoration: "none" }}>News</Link>
      </div>
      <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
      <div className="quick-links"> 
        <FontAwesomeIcon icon={faArrowRight} className="icon" style={{ fontSize: '24px', color: '#ded61f' , paddingRight: '8px'}} /> 
        <Link to="/graph" style={{ textDecoration: "none" }}>Reports</Link>
      </div>
      <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} />  
      <div className="quick-links"> 
        <FontAwesomeIcon icon={faArrowRight} className="icon" style={{ fontSize: '24px', color: '#ded61f', paddingRight: '8px' }} /> 
        <Link to="/institutes" style={{ textDecoration: "none" }}>Institutes</Link>
      </div>
      <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
      <div className="quick-links"> 
        <FontAwesomeIcon icon={faArrowRight} className="icon" style={{ fontSize: '24px', color: '#ded61f' , paddingRight: '8px'}} /> 
        <Link to="/resources/publications" style={{ textDecoration: "none" }}>Publications</Link>
      </div>
      <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px"}} /> 
      <div className="quick-links"> 
        <FontAwesomeIcon icon={faArrowRight} className="icon" style={{ fontSize: '24px', color: '#ded61f' , paddingRight: '8px'}} /> 
        <Link to="/announcements" style={{ textDecoration: "none" }}>Announcements</Link>
      </div>
      {/* <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} />  */}
      {/* <div className="quick-links"> 
        <FontAwesomeIcon icon={faArrowRight} className="icon" style={{ fontSize: '24px', color: '#ded61f', paddingRight: '8px' }} /> 
        <Link to="/startApplication" style={{ textDecoration: "none" }}>Register</Link>
      </div> */}
      
      <hr className="section-divider" />
      <h5 className='text-center'>Check Out Our New Collections</h5>
      <Slider {...settings}>
        <div className="card quickCard">
          <div className="section">
            <BlinkingIcon
              icon="news" // Set icon prop to 'news'
              text={<a href="/news" style={{ marginLeft: '10px' , textDecoration: 'none', color: '#333', fontSize: "20px"}}>{latestNews}</a>}
              size={32} // Increased size
              blinkInterval={1000}
              onClick={handleNewsClick}
            />
          </div>
        </div>
        <div className="card quickCard">
          <div className="section">
            <BlinkingIcon
              icon="announcement" // Set icon prop to 'announcement'
              text={<a href="/announcements" style={{ marginLeft: '10px', textDecoration: 'none',  color: '#333', fontSize: "20px"}}>{latestAnnouncement}</a>}
              size={32} // Increased size
              blinkInterval={1500}
              onClick={handleAnnouncementClick}
            />
          </div>
        </div>
        <div className="card quickCard">
          <div className="section">
            <BlinkingIcon
              icon="publication" // Set icon prop to 'publication'
              text={<a href="/resources/publications" style={{ marginLeft: '10px' , textDecoration: 'none',  color: '#333', fontSize: "20px"}}>{latestPublication}</a>}
              size={32} // Increased size
              blinkInterval={2000}
              onClick={handlePublicationClick}
            />
          </div>
        </div>
      </Slider>
      <br />
      <div style={{background: "linear-gradient(to right, #ded61f, #dbb21e)", color: "black", padding: "10px", marginBottom: "10px", textAlign: "center" }}></div>
    </div>
  );
};

export default NewsAnnouncementsPublications;