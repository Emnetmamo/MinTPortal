// src/components/Footer.js

import React from 'react';
import { FaPhone, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiMapPin2Fill, RiMailFill } from 'react-icons/ri';
import GoogleMapLocation from '../images/GoogleMapLocation.png'; 
import Logo from '../images/Logo.jpg';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#052629', color: 'white' }}>
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-4 mb-4">
            <h5>Send Us a Message</h5>
            <form>
              <div className="form-group mb-2">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>
              <div className="form-group mb-2">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-warning">Submit</button>
            </form>
          </div>

          {/* Center Column */}
          <div className="col-lg-4 mb-4 text-center text-lg-start">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="./announcements">Announcements</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/collaborations">Collaborations</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/news">News</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-lg-4 mb-4">
            <div className="text-center">
              <img src={Logo} alt="Logo" style={{ borderRadius: '50%', maxWidth: '70px' }} />
            </div>
            <h5 className="mt-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li><FaPhone /> +25111265737</li>
              <li><RiMailFill /> contact@mint.gov.et</li>
              <li><RiMapPin2Fill /> Addis Ababa, Ethiopia</li>
              <div className="mt-3">
                <a href="https://www.facebook.com/MInT.Ethiopia/" className="me-2"><FaFacebook /></a>
                <a href="https://twitter.com/ministryofinno2?lang=en" className="me-2"><FaTwitter /></a>
                <a href="https://www.linkedin.com/company/ministry-of-innovation-and-technology-ethiopia/?originalSubdomain=et" className="me-2"><FaLinkedin /></a>
                <a href={GoogleMapLocation}><img src={GoogleMapLocation} alt="Google Map" style={{ maxWidth: '30px', cursor: 'pointer' }} /></a>
              </div>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <span><i className="fa fa-copyright"></i> MinT All rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
