import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import FileBase from 'react-file-base64'
import { ToastContainer, toast } from 'react-toastify';
import {setNews} from '../../actions/news'
import '../../images/assets/css/admin.css';
import Dropzone from '../../components/AdminComponents/Dropzone';
import Sidebar from './Sidebar.js';


axios.defaults.withCredentials=true;

function Post_News() {
  
  const defaultImageURL = 'http://localhost:5001/images/noimage.png'
  const [imagePreview, setImagePreview] = useState(defaultImageURL);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    category: '',
    date: '',
    imagePath: ''

  });


  // const defaultImageURL = 'http://localhost:5001/images/noimage.png'
  // const [imagePreview, setImagePreview] = useState(defaultImageURL);
  

  // const handleFileSelect = (event) => {
  //   const selectedFile = event.target.files[0];

  //   if (selectedFile) {
  //     setFormData({
  //       ...formData,
  //       image: selectedFile,
  //     });

  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImagePreview(reader.result);
  //     };
  //     reader.readAsDataURL(selectedFile);
  //   } else {
  //     // If no file is selected, revert to default image
  //     setImagePreview(defaultImageURL);
  //     setFormData({
  //       ...formData,
  //       image: null,
  //     });
  //   }
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
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
  const handleSubmit = async (e) => {
      e.preventDefault();
  
      // dispatch(setNews(formData));
      
      const data = new FormData();

      
      data.append('title', formData.title);
      data.append('author', formData.author);
      data.append('content', formData.content);
      data.append('category', formData.category);    
      data.append('date', formData.date);
      data.append('image', formData.image);

      try {
        const response = axios.post('http://localhost:5001/admin/news/add-news', data);
        console.log(response.data);
          alert('Do you want to submit')
          toast.info('News form submitted successfully!');
          // await  window.location.reload()
      } catch (errors) {
        console.error('Error:', errors.message);
        toast.error('An error occurred while submitting news form.');
      }
      
    
  };

  const clear = () => {

  }
  /*


async function main() {
// Async function enables allows handling of promises with await

  // First, define send settings by creating a new transporter: 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: "***-example-person@gmail.com", // Your email address
      pass: "your-password", // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });
  
  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: '"You" <***-example-person@gmail.com>',
    to: "****.bram@****.com",
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

main()
.catch(err => console.log(err));
  */

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
                    <option value="Agriculture">Agriculture</option>
          <option value="Environment-Energy">Industry</option>
          <option value="Health">Health</option>
          <option value="Construction">Construction</option>
          <option value="Mines and Water">Mines and Water</option>
          <option value="Information Communication">Information Communication</option>
          <option value="Energy">Energy </option>
          <option value="Enviroment Protection">Environment Protection </option>
          <option value="Other related Sectors">Other related Sectors</option>
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
                  <div  className="form-control form-input mb-2">
                  {/* <FileBase
                    type="file" 
                    multiple = {false}                         
                    onDone={({base64}) => setFormData({...formData, imagePath: base64})}
                    
                  />             */}
                  <input type="file" name="image" id="image" onChange={handleFileSelect}/>
                                                 
                 </div>
                 {imagePreview && (
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                  )}
                </div>
                <br />
                <div className="form-group">
                  <button type="submit" className="form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
                </div>
             
                <div className="form-group">
                  <button className="form-control my-3 fs-5 btn btn-warning fw-bold" onClick={clear}>Clear</button>
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

export default Post_News;
