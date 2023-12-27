
// src/components/Footer.js

import React from 'react';
import FooterForm from '../components/footerComponents/FooterForm';
import { Link } from 'react-router-dom';
import { FaPhone, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiMapPin2Fill, RiMailFill } from 'react-icons/ri';
import Logo from '../images/Logo.jpg';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#052629', color: 'white' }}>
      <br/>
      <a href= '/' className='d-flex justify-content-center'>
        <img src={Logo} alt="Logo" style={{ borderRadius: '50%', maxWidth: '70px' }} />
      </a>
      <div className="container py-5">
        <div className="row ">
               
          
                   {/* Left Column */}
            <div className="col-md-4 mb-4" >
            <FooterForm />
            </div>

                  {/* Center Column */}
            <div className="col-md-4 mb-4 d-flex flex-column align-items-center text-center text-lg-start">
              <h5>Quick Links</h5>
             
              <ul className="list-unstyled">
                <li><a href="/" style={{color:"white"}}>Home</a></li>
                <li><a href="/announcements" style={{color:"white"}}>Announcements</a></li>
                <li><a href="/resources/accepted-projects" style={{color:"white"}}>Accepted Projects</a></li>
                <li><a href="/resources/publications" style={{color:"white"}}>Publications</a></li>
                <li><a href="/institutes" style={{color:"white"}}>Institutes</a></li>
                <li><a href="/collaborations" style={{color:"white"}}>Collaborations</a></li>
                <li><a href="/aboutus" style={{color:"white"}}>About Us</a></li>
                <li><a href="/news" style={{color:"white"}}>News</a></li>
              </ul>
            </div>

                {/* Right Column */}
            <div className="col-md-4 mb-4 text-center">
              <h5 className="mt-3">Contact Us</h5>
              <ul className="list-unstyled">
                <li><FaPhone /> +25111265737</li>
                <li><RiMailFill /> contact@mint.gov.et</li>
                <li><RiMapPin2Fill /> Addis Ababa, Ethiopia</li>
                <div className="mt-3">
                  <a href="https://www.facebook.com/MInT.Ethiopia/" className="me-2" style={{color:"orange"}} target="_blank"><FaFacebook /></a>
                  <a href="https://twitter.com/ministryofinno2?lang=en" className="me-2" style={{color:"orange"}} target="_blank"><FaTwitter /></a>
                  <a href="https://www.linkedin.com/company/ministry-of-innovation-and-technology-ethiopia/?originalSubdomain=et" className="me-2" style={{color:"orange"}} target="_blank"><FaLinkedin /></a>  
                </div>
              </ul>
            </div>        
        </div>
        

        {/* Copyright */}
        <div className="text-center">
        <span> 
            <FaRegCopyright /> {currentYear} MinT All rights Reserved.
            </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
