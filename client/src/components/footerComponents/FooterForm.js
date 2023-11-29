
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

axios.defaults.withCredentials=true;



function FooterForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',

  });
 
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFormData({
        ...formData,
        image: selectedFile,
      });

      const reader = new FileReader();
      reader.onload = () => {
        
      };
      reader.readAsDataURL(selectedFile);
    } else {
      // If no file is selected, revert to default image
      
      setFormData({
        ...formData,
        image: null,
      });
    }
  };
 //text file
    
 const handleTextFileSelect = (event) => {
      
  const selectedFile = event.target.files[0];       
  if (selectedFile) {
    
    setFormData({
      ...formData,
      file: selectedFile,
    });                              
  }
  else {
   
    setFormData({
      ...formData,
      file: null,
    });
  }
};

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

    <div className="col-ml-4 mb-4" style={{ width: '70%' }}>
      <h5>Send Us a Message</h5>
      <form method='POST'  onSubmit={handleSubmit} encType='multipart/form-data' >
        <div className="form-group mb-2">
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
           
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group mb-3" style={{ width: '100%' }}>
        <textarea
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  />
        </div>
        <button type="submit" className="form-control my-3 fs-5 btn btn-warning fw-bold">
          Submit
        </button>
      </form>
      <ToastContainer/> 
    </div>

           
         
)};



export default FooterForm;