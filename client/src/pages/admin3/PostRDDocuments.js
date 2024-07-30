import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css'
import DropzoneImage from '../../components/AdminComponents/Dropzone.js'
import DropzoneText from '../../components/AdminComponents/DropzoneText.js'
import Sidebar from './Sidebar.js';
import Logout from '../../components/Logout.js';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials=true;

function PostRDDocuments() {
    const [formData, setFormData] = useState({
      title: '',
      category: '',
      description: '',
      date: '',
      image: null,
      file: null,
      
    });

    const navigate = useNavigate();
    const defaultImageURL = process.env.REACT_APP_SERVER+'images/noimage.png'
    const [imagePreview, setImagePreview] = useState(defaultImageURL);
    
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
        // Preview the selected image
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result); // Set the image preview URL in state
        };
        reader.readAsDataURL(selectedFile); // Read the selected file as a data URL
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
    data.append('category', formData.category);
    data.append('description', formData.description);
    data.append('date', formData.date);   
    data.append('image', formData.image);
    data.append('file', formData.file);
      
    
    try {
      const response =  axios.post(process.env.REACT_APP_SERVER+'admin/RDDocuments/addRDDocuments', data);
      console.log(response.data);
      alert('Do you want to submit')
      toast.info('R&D Document submitted successfully!');
      // await  window.location.reload()
    } catch (errors) {
      console.error('Error:', errors.message);
      toast.error('An error occurred while submitting news.');
    }
  };



  return (
    document.cookie ?
    <div className="">
     
            <form method="POST" action="/admin/publications/add-publication" onSubmit={handleSubmit} encType='multipart/form-data' >
              
                <h1>Post an R&D Document</h1>
                <div class="form-group ">
                    <label className='form-label'>Document Title:</label>
                    <input type="text" name="title" class="form-control " placeholder="Title" onChange={handleChange}/>                  
                </div>
                <div class="form-group">
                  <label for="">Document Description:</label>
                  <textarea name="description" class="form-control" id="ta" cols="63" rows="10" placeholder="Description" onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                  <label className='form-label'>Document Category:</label>
                  <select
                    name="category"
                    className="form-control"
                    id="selectCategory"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Guidelines" >
                      Guidelines
                    </option>
                    <option value="Vouchers" >
                      Vouchers
                    </option>
                    <option value="Policy and Strategy" >
                    Policy and Strategy
                    </option>
                    <option value="Research Ethics" >
                      Research Ethics
                    </option>
                  </select>

                </div>
                <div class="form-group">
                    <label className='form-label'>Document Publication Date:</label>
                    <input  type="date" name="date" className="form-control form-input" onChange={handleChange}/>
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
              <div className="form-group">
                <label className='form-label'>Upload File:</label>
                <input
                  type="file"
                  name="file"
                  className="form-control form-input mb-2"             
                  onChange={handleTextFileSelect}
                  
                />                                               
              </div>

                <br/>                
                <div class="form-group">
                    <button type="submit" className=" form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
                </div>
            </form>
            <ToastContainer />
            {/* <p>Upload Images:</p>
            <DropzoneImage className='py-5 mt-10 border border-neutral-200'/>            
            <p>Upload Files</p>
            <DropzoneText className='py-5 mt-10 border border-neutral-200'/> */}
          </div> : <Logout/>
     
   
  )
}

export default PostRDDocuments;