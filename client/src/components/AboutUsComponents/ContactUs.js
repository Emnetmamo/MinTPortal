// ContactUs.jsx
import React from 'react';
import "../../images/assets/css/contactUs.css"


const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-map">
        <iframe
          title="MinT Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.8459669515486!2d38.7525032!3d9.0238125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0xd6d189c2f507323b!2s2QF4%2BG2G%2C%20%E1%8A%A0%E1%8B%B2%E1%88%B5%20%E1%8A%A0%E1%89%A0%E1%89%A3!5e0!3m2!1sen!2set!4v1637351575868!5m2!1sen!2set"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
