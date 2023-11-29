import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css';
import AdminHeader from '../../components/AdminComponents/AdminHeader';
import Dropzone from '../../components/AdminComponents/Dropzone';


axios.defaults.withCredentials=true;

function Post_News() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    category: '',
    date: '',
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
      const dateFromServer = formData.date  // This is the date string fetched from the server
      const formattedDate = new Date(dateFromServer).toLocaleDateString(); // Format the date

      data.append('title', formData.title);
      data.append('author', formData.author);
      data.append('content', formData.content);
      data.append('category', formData.category);    
      data.append('date', formattedDate);
      data.append('image', formData.image);
     

     
      

      try {
        const response = await axios.post('http://localhost:5001/admin/news/add-news', data);
        console.log(formattedDate); // Output: 11/13/2023 (or a date format specific to your locale)

        console.log(response.data);
        alert('Do you want to submit')
        toast.info('News submitted successfully!');
        // await  window.location.reload()
      } catch (errors) {
        console.error('Error:', errors.message);
        toast.error('An error occurred while submitting news.');
      }
    
  };

  return (
    <div className= " mt-5 pt-5">
      
      <div className='container  '>
        <div className="row" >
          <div className="col-xs-12 col-md-3 post-links-container  " style={{ overflow: 'hidden' }}>
          <ul class="list-group text-center fs-5 display-6">
              <br />
              <li class="list-group-item post-links active " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/news/add-news">
                  Post News{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/appointments/add-appointment"
                >
                  Set Appointment Date{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links "style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/user-status/add-user-status">
                  Update User Status
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/calls/add-call">
                  Post Calls
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/publications/add-publication"
                >
                  Post Publications
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links   " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/accepted-projects/add-accepted-project"
                >
                  Post Accepted Projects
                </Link>
              </li>
            </ul>
            {/* ... Navigation links ... */}
          </div>
          <div className="col-xs-12 col-md-2"></div>        
          
          <div className="col-xs-12 col-md-7 mb-5" >                                  
              <form method='POST' action='/admin/news/add-news' onSubmit={handleSubmit} encType='multipart/form-data' >
                
                <h1>Post a News</h1>
                <div className="form-group">
                  <label className='form-label'>News Title:</label>
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
                  <label className='form-label'>News Author:</label>
                  <input
                    type="text"
                    name="author"
                    className="form-control"
                    placeholder="Author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className='form-label'>News Content:</label>
                  <textarea
                    name="content"
                    className="form-control"
                    placeholder="Content"
                    value={formData.content}
                    onChange={handleChange}
                    rows="10"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className='form-label'>News Category:</label>
                  <select
                    name="category"
                    className="form-control"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="National News" >
                      National News
                    </option>
                    <option value="Foreign News" >
                      Foreign News
                    </option>
                    <option value="Technology" >
                      Technology
                    </option>
                    <option value="Science" >
                      Science
                    </option>
                    <option value="Health" >
                      Health
                    </option>
                    <option value="Entertainment" >
                      Entertainment
                    </option>
                    <option value="Finance" >
                      Finance
                    </option>
                    <option value="Sports" >
                      Sports
                    </option>
                  </select>

                </div>

                <div className="form-group">
                  <label className='form-label'>News Publication Date:</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control form-input"
                    value={formData.date}
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
            <p>Upload Images:</p>
            <Dropzone className='py-5 mt-10 border border-neutral-200' />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Post_News;
