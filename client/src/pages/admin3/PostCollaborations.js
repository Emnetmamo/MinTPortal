import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css';
import Sidebar from './Sidebar.js';
import Logout
 from '../../components/Logout.js';

axios.defaults.withCredentials=true;


function PostCollaborations() {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    description: '',
    image: null

  });

  const navigate = useNavigate();
  const defaultImageURL = 'https://research-portal-server-9.onrender.com/images/noimage.png'
  const [imagePreview, setImagePreview] = useState(defaultImageURL);
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  
  // useEffect (() => {const checkAuthentication = async () => {
  //   try {
  //     const response = await axios.get('https://research-portal-server-9.onrender.com/check-auth-status');
      
  //     const isAuthenticated = response.data.isAuthenticated;
  //     console.log(isAuthenticated)    
  //     setIsAuthenticated(isAuthenticated)
    

    
  //   } catch (error) {
  //     console.error('Error checking authentication status:', error);
  //     return false;
  //   }
  // };
  
  // // Example usage
  //  checkAuthentication();
  // }, [])

  useEffect(function(){
    if(document.cookie){
      if(document.cookie.split(';')[1].split('=')[1] === '"admin3"'){
        
      }
      else{
        navigate('/login');
      }
    }
    else{
      navigate('/login'); 
    }
  }
    ,[]);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFormData({
        ...formData,
        image: selectedFile,
      });

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      // If no file is selected, revert to default image
      setImagePreview(defaultImageURL);
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

      
      data.append('title', formData.title);
      data.append('link', formData.link);
      data.append('description', formData.description);  
      data.append('image', formData.image);
     

      try {
        const response = axios.post('https://research-portal-server-9.onrender.com/admin/collaboration/post-to-collaboration', data);
        console.log(response.data);
          alert('Do you want to submit')
          toast.info('Collaboration form submitted successfully!');
          // await  window.location.reload()
      } catch (errors) {
        console.error('Error:', errors.message);
        toast.error('An error occurred while submitting institutes form.');
      }
    
  };

  return (
    document.cookie ?
    <div>
      
                                     
              <form method='POST' action='/admin/collaboration/post-to-collaboration' onSubmit={handleSubmit} encType='multipart/form-data' >
                
                <h1>Post To Collaborations</h1>
                <div className="form-group">
                  <label className='form-label'>Title:</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className='form-label'>Website link(if possible):</label>
                  <input
                    type="text"
                    name="link"
                    className="form-control"
                    placeholder="URL"
                    value={formData.link}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className='form-label'>Description:</label>
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="10"
                    required
                  />
                </div>
                

                
                            
                <div className="form-group">
                  <label className='form-label'>Upload Image:</label>
                  <input
                    type="file"
                    name="image"
                    className="form-control form-input mb-2"             
                    onChange={handleFileSelect}
                    
                  />                                
                  {/* Display the image preview */}
                  {imagePreview && (
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                  )}
                </div>
                <br />
                <div className="form-group">
                  <button type="submit" className="form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
                </div>
              </form>            
              <ToastContainer/>         
            {/* <p>Upload Images:</p>
            <Dropzone className='py-5 mt-10 border border-neutral-200' /> */}
          </div>  : <Logout/>
  );
}

export default PostCollaborations;
