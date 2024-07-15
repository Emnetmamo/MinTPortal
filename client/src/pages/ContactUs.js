import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { RiMapPin2Fill, RiMailFill } from 'react-icons/ri';
import '../images/assets/css/contactUs.css';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.withCredentials = true;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('message', formData.message);
    data.append('email', formData.email);

    try {
      const response = await axios.post(
        'https://research-portal-server-9.onrender.com/footer/add-footer',
        data
      );
      console.log(response.data);
      toast.info('footer form submitted successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('An error occurred while submitting footer form.');
    }
  };

  return (
    <div>
      <div
        style={{
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          paddingBottom: '5%',
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: 'gray' }}>Contact Information</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '30px',
          }}
        >
          <div
            style={{
              fontSize: '28px',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FaPhone />
            <span style={{ marginLeft: '5px' }}>+25111265737</span>
          </div>
          <div
            style={{
              fontSize: '28px',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <RiMailFill />
            <span style={{ marginLeft: '5px' }}>contact@mint.gov.et</span>
          </div>
          <div
            style={{
              fontSize: '28px',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <RiMapPin2Fill />
            <span style={{ marginLeft: '5px' }}>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
      <div className="contact-container" style={{ marginTop: '30px' }}>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form
            method="POST"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label  style={{color:"black"}} htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label  style={{color:"black"}} htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label style={{color:"black"}} htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              style={{
                backgroundColor: '#16676d',
                color: '#ffffff',
                padding: '12px 25px',
                borderRadius: '30px',
                border: 'none',
                fontSize: '16px',
                transition: 'background-color 0.3s ease',
              }}
              type="submit"
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = 'lightblue')
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = '#16676d')
              }
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-map" style={{ marginTop: '30px' }}>
          <iframe
            title="MinT Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.8459669515486!2d38.7525032!3d9.0238125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0xd6d189c2f507323b!2s2QF4%2BG2G%2C%20%E1%8A%A0%E1%8B%B2%E1%88%B5%20%E1%8A%A0%E1%89%A0%E1%89%A3!5e0!3m2!1sen!2set!4v1637351575868!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
