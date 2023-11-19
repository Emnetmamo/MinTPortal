import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css';
import AdminHeader from '../../components/AdminComponents/AdminHeader';
import Dropzone from '../../components/AdminComponents/Dropzone';


axios.defaults.withCredentials=true;

function PostInstitutes() {
  const navigate=useNavigate();
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
      data.append('link', formData.link);
      data.append('description', formData.description);
      data.append('category', formData.category);  
      data.append('email', formData.email);
      data.append('phone', formData.phone);   
      data.append('image', formData.image);
     

     
      

      try {
        const response = await axios.post('http://localhost:5001/admin/institutes/post-to-institutes', data);
        console.log(formattedDate); // Output: 11/13/2023 (or a date format specific to your locale)

        console.log(response.data.ok);
        if(response.data.ok='ok'){
          alert('Do you want to submit')
          toast.info('Institutes form submitted successfully!');
          // await  window.location.reload()
        }else{
             navigate('/login')
        }
       
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
              <br />
              <li class="list-group-item post-links   " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/institutes/post-to-institutes"
                >
                  Post To Institutes
                </Link>
              </li>
            </ul>
            {/* ... Navigation links ... */}
          </div>
          <div className="col-xs-12 col-md-2"></div>        
          
          <div className="col-xs-12 col-md-7 mb-5" >                                  
              <form method='POST' action='/admin/institutes/post-to-institutes' onSubmit={handleSubmit} encType='multipart/form-data' >
                
                <h1>Post To Institutes</h1>
                <div className="form-group">
                  <label className='form-label'>Institutes Catagory Title:</label>
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
                  <label className='form-label'>Institutes Catagory website link(if possible):</label>
                  <input
                    type="text"
                    name="link"
                    className="form-control"
                    placeholder="URL"
                    value={formData.author}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className='form-label'>Institutes Catagory Description:</label>
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Description"
                    value={formData.content}
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
                    <option value="IctPartners" >
                      Ict Partners
                    </option>
                    <option value="Government Agencies" >
                      Government Agencies
                    </option>
                    
                    <option value="Other Catagory" >
                      Other Catagory
                    </option>
                  </select>

                </div>

                <div className="form-group">
                  <label className='form-label'>Institutes Catagory Email:</label>
                  <textarea
                    name="link"
                    className="form-control"
                    placeholder="Email"
                    value={formData.content}
                    onChange={handleChange}
                    required
                  />
                  </div>

                
                  <div className="form-group">
                  <label className='form-label'>Institutes Catagory Phone:</label>
                  <textarea
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                    value={formData.content}
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
