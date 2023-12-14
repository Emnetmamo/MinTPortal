// ContactUs.jsx
import {React, useState} from 'react';
import "../../images/assets/css/contactUs.css"
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.withCredentials=true;







const ContactUs = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',

  });

  //handle change event
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    
      const data = new FormData();

      
      data.append('fullName', formData.fullName);
      data.append('message', formData.message);  
      data.append('email', formData.email);
     

      try {
        const response = axios.post('http://localhost:5001/footer/add-footer', data);
        console.log(response.data);
          alert('Do you want to submit')
          toast.info('footer form submitted successfully!');
          // await  window.location.reload()
      } catch (errors) {
        console.error('Error:', errors.message);
        toast.error('An error occurred while submitting footer form.');
      }
    
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form method='POST'  onSubmit={handleSubmit} encType='multipart/form-data' >
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="fullName" name="fullName" 
            required 
            placeholder='Full name'
            value={formData.fullName}
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" 
            required 
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" 
            required
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-map">
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
  );
};

export default ContactUs;
