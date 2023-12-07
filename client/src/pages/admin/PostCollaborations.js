import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css';

axios.defaults.withCredentials=true;


function PostCollaborations() {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    description: '',
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
        const response = axios.post('http://localhost:5001/admin/collaboration/post-to-collaboration', data);
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
          <ul class="list-group text-center fs-5 display-6">
              <br />
              <li class="list-group-item post-links" style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/news/add-news">
                  Post News{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links" style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
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
              <br />
              <li class="list-group-item post-links " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/institutes/post-to-institutes"
                >
                  Post To Institutes
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links active" style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/collaboration/post-to-collaboration"
                >
                  Post To Collaborations
                </Link>
              </li>
              <br />

              <li
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link
                  className="links"
                  to="/admin/viewFeedback/view-feedback"
                >
                View feedback
                </Link>
              </li>
              <li
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                  marginTop: "20px"
                }}
              >
                <Link
                  className="links"
                  to="/admin/viewReports"
                >
                View Reports
                </Link>
              </li>
            </ul>
            {/* ... Navigation links ... */}
          </div>
          <div className="col-xs-12 col-md-2"></div>        
          
          <div className="col-xs-12 col-md-7 mb-5" >                                  
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
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default PostCollaborations;
