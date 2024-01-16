import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css';
import Sidebar from './Sidebar.js';

axios.defaults.withCredentials=true;


function PostInstitutes() {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    description: '',
    category: '',
    email: '',
    phone: '',
    image: null

  });

  const defaultImageURL = 'http://localhost:5001/images/noimage.png'
  const [imagePreview, setImagePreview] = useState(defaultImageURL);
  

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
    if(name==="category" && value!=="Research Institutes" && value!=="Laboratories"
    && value!=="Ict Partners" && value!=="Government Agencies"){
      const otherDiv = document.getElementById("otherDiv");
      otherDiv.style.display = "";
      document.getElementById("selectCategory").removeAttribute("required");
    }
    else if(name==="category" && (value==="Research Institutes" || value==="Laboratories"
    || value==="Ict Partners" || value==="Government Agencies")){
      document.getElementById("otherDiv").style.display = "none";
      document.getElementById("selectCategory").setAttribute("required", "");
    }
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
      data.append('category', formData.category);  
      data.append('email', formData.email);
      data.append('phone', formData.phone);   
      data.append('image', formData.image);
     

      try {
        const response = axios.post('http://localhost:5001/admin/institutes/post-to-institutes', data);
        console.log(response.data);
          alert('Do you want to submit')
          toast.info('Institutes form submitted successfully!');
          // await  window.location.reload()
      } catch (errors) {
        console.error('Error:', errors.message);
        toast.error('An error occurred while submitting institutes form.');
      }
    
  };

  return (
    <div className= " mt-5 pt-5">
      
      <div className='container  '>
        <div className="row" >
          <div className="col-xs-12 col-md-3 post-links-container  " style={{ overflow: 'hidden' }}>
          <Sidebar/>
            {/* ... Navigation links ... */}
          </div>
          <div className="col-xs-12 col-md-2"></div>        
          
          <div className="col-xs-12 col-md-7 mb-5" >                                  
              <form method='POST' action='/admin/institutes/post-to-institutes' onSubmit={handleSubmit} encType='multipart/form-data' >
                
                <h1>Post To Institutes</h1>
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
                  <label className='form-label'>Institutes Category:</label>
                  <select
                    name="category"
                    className="form-control"
                    id="selectCategory"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Research Institutes" >
                      Research Institutes
                    </option>
                    <option value="Laboratories" >
                      Laboratories
                    </option>
                    <option value="Ict Partners" >
                      Ict Partners
                    </option>
                    <option value="Government Agencies" >
                     Affiliate Institutes
                    </option>
                    
                    <option value="Other Category" >
                      Other Category
                    </option>
                  </select>

                </div>
                <div className="form-group" id='otherDiv' style={{display:"none"}}>
                  <label className='form-label' htmlFor='other' >Other Category</label>
                  <input type="text" name="category" id="other" placeholder='Type category name' onChange={handleChange}/>
                </div>
                <div className="form-group">
                  <label className='form-label'>Email:</label>
                  <textarea
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  </div>

                
                  <div className="form-group">
                  <label className='form-label'>Phone:</label>
                  <textarea
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
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
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default PostInstitutes;
