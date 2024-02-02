import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import newsIcon from '../../images/home/news-icon.png';
import announcementIcon from '../../images/home/announcement-icon.png';
import publicationIcon from '../../images/home/publication-icon.png';
import arrowIcon from '../../images/home/arrow-icon.png';

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
      <img src={icon} alt="Icon" className={`${isBlinking ? 'blink' : ''}`} style={{ width: size, height: size }} />
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

  return (
    <div className="news-announcements-publications">
      <style>
        {`
          .blinking-icon img.blink {
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
        `}
      </style>
      <div style={{ backgroundColor: "#11676d", color: "white", padding: "10px", marginBottom: "10px", textAlign: "center" }}>QUICK LINKS</div>
      <div className="quick-links"> 
     <img src={arrowIcon} alt="Arrow" width="30px" height="13px" className="arrow-icon" style={{ paddingRight: '10px' }}/> 
     <Link  to="/news" style={{textDecoration: "none"}}>News</Link></div>
     <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
     <div className="quick-links"> 
     <img src={arrowIcon} alt="Arrow" width="30px" height="13px" className="arrow-icon" style={{ paddingRight: '10px' }}/> 
     <Link  to="/graph" style={{textDecoration: "none"}}>Reports</Link></div>
     <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} />  
     <div className="quick-links"> 
     <img src={arrowIcon} alt="Arrow" width="30px" height="13px" className="arrow-icon" style={{ paddingRight: '10px' }}/> 
     <Link  to="/institutes" style={{textDecoration: "none"}}>Institutes</Link></div>
     <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
     <div className="quick-links"> 
     <img src={arrowIcon} alt="Arrow" width="30px" height="13px" className="arrow-icon" style={{ paddingRight: '10px' }}/> 
     <Link  to="/resources/publications" style={{textDecoration: "none"}}>Publications</Link></div>
     <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
     <div className="quick-links"> 
     <img src={arrowIcon} alt="Arrow" width="30px" height="13px" className="arrow-icon" style={{ paddingRight: '10px' }}/> 
     <Link  to="/announcements" style={{textDecoration: "none"}}>Announcements</Link></div>
     <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
     <div className="quick-links"> 
     <img src={arrowIcon} alt="Arrow" width="30px" height="13px" className="arrow-icon" style={{ paddingRight: '10px' }} /> 
     <Link  to="/startApplication" style={{textDecoration: "none"}}>Register</Link></div>

      <hr className="section-divider" />
      <div className="section">
        <BlinkingIcon
          icon={newsIcon}
          text={<a href="/news" style={{ marginLeft: '10px' , textDecoration: 'none'}}>{latestNews}</a>}
          size={48}
          blinkInterval={1000}
          onClick={handleNewsClick}
        />
      </div>
      <div className="section">
        <BlinkingIcon
          icon={announcementIcon}
          text={<a href="/announcements" style={{ marginLeft: '10px', textDecoration: 'none'}}>{latestAnnouncement}</a>}
          size={48}
          blinkInterval={1500}
          onClick={handleAnnouncementClick}
        />
      </div>
      <div className="section">
        <BlinkingIcon
          icon={publicationIcon}
          text={<a href="/resources/publications" style={{ marginLeft: '10px' , textDecoration: 'none'}}>{latestPublication}</a>}
         size={48}
          blinkInterval={2000}
          onClick={handlePublicationClick}
        />
      </div>
      <br />
      <div style={{ backgroundColor: "#11676d", color: "black", padding: "10px", marginBottom: "10px", textAlign: "center" }}></div>

     </div>
     
  );
};

export default NewsAnnouncementsPublications;