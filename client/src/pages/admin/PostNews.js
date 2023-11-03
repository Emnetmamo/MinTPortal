import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import AdminHeader from '../../components/AdminComponents/AdminHeader';
import Dropzone from '../../components/AdminComponents/Dropzone';
import axios from 'axios';

function Post_News() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    category: '',
    image: null

  });
 

  const [imagePreview, setImagePreview] = useState(""); // State variable to store the image preview URL


    try {
      const response = await axios.post('http://localhost:5000/adminr/admin/news/add-news', formData);
      console.log(response.data); // Handle the response from the server
      alert('heloo')
    } catch (error) {
      console.error('Error:', error);
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {


      setFormData({
        ...formData,
        image: selectedFile,
      });               
      // Preview the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Set the image preview URL in state
      };
      reader.readAsDataURL(selectedFile); // Read the selected file as a data URL
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
  data.append('title', formData.title);
  data.append('author', formData.author);
  data.append('content', formData.content);
  data.append('category', formData.category);
  data.append('date', formData.date);    
 // data.append('newNewsId', formData.newNewsId);
  data.append('image', formData.image);


  try {

    const response =  axios.post('http://localhost:5001/admin/news/add-news', data);

      // Handle success - HTTP status 200
      console.log(response.data);
      alert('do you want to submit')
      window.location.reload()

  } catch (error) {
    // Handle error
    console.error('Error:', error.message);
    // Perform actions like showing an error message to the user
  }
};



  return (
    <div className="">
      <AdminHeader />
      <div className='container mt-5 '>
        <div className="row">
          <div className="col-xs-12 col-md-3 post-links-container active mt-5" style={{ overflow: 'hidden' }}>
              <ul class="list-group text-center fs-5 display-6">
                <br/>
                <li class="list-group-item active post-links " >
                  <Link className='links' to="/admin/news/add-news">
                  Post News </Link>
                </li>
                <br/>
                <li class="list-group-item post-links " >
                  <Link className='links' to="/admin/appointments/add-appointment">
                    Set Appointment Date </Link>
                </li>
                <br/>
                <li class="list-group-item post-links " 
                ><Link className='links' to="/admin/user-status/add-user-status">
                  Update User Status</Link>
                </li>
                <br/>
                <li class="list-group-item post-links " >
                  <Link className='links' to="/admin/calls/add-call">
                    Post Calls </Link>
                </li>
                <br/>
                <li class="list-group-item post-links " >
                  <Link className='links' to="/admin/publications/add-publication">
                    Post Publications </Link>
                </li>
                <br/>
                <li class="list-group-item post-links " >
                  <Link className='links' to="/admin/accepted-projects/add-accepted-project">
                    Post Accepted Projects </Link>
                </li>
              </ul>
            {/* ... Navigation links ... */}
          </div>
          <div className="col-xs-12 col-md-2"></div>
          <div className="col-xs-12 col-md-7 mb-5">
            <form onSubmit={handleSubmit}>
              <br /><br />
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
                />
              </div>
              <div className="form-group">
                <label className='form-label'>News Category:</label>
                <select
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option>Category one</option>
                  <option>Category two</option>
                  <option>Category three</option>
                  <option>Category four</option>
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
                />
              </div>
              <br />
              <div className="form-group">
                <button type="submit" className="form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
              </div>
            </form>
            <p>Upload Images:</p>
            <Dropzone className='py-5 mt-10 border border-neutral-200' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post_News;
