import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css'
import DropzoneImage from '../../components/AdminComponents/Dropzone'
import DropzoneText from '../../components/AdminComponents/DropzoneText'
import Sidebar from './Sidebar.js';

axios.defaults.withCredentials=true;

function PostPublications() {
    const [formData, setFormData] = useState({
      title: '',
      p_investigator: '',
      author: '',
      description: '',
      field_of_study: '',
      date: '',
      image: null,
      file: null,
      
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
    data.append('p_investigator', formData.author);
    data.append('author', formData.author);
    data.append('description', formData.description);
    data.append('field_of_study', formData.field_of_study);
    data.append('date', formData.date);   
    data.append('image', formData.image);
    data.append('file', formData.file);
      
    
    try {
      const response =  axios.post('http://localhost:5001/admin/publications/add-publication', data);
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
    <div className="">
      
      <div className='container mt-5'>       
          <div class="row">
            <div className="col-xs-12 col-md-3 my-5 post-links-container" >
            <Sidebar/>
            </div>
          <div class="col-xs-12 col-md-2"></div>
          <div class="col-xs-12 col-md-7 mb-5">
            <form method="POST" action="/admin/publications/add-publication" onSubmit={handleSubmit} encType='multipart/form-data' >
                <br/> <br/>
                <h1>Post a Publication</h1>
                <div class="form-group ">
                    <label className='form-label'>Project Title:</label>
                    <input type="text" name="title" class="form-control " placeholder="Title" onChange={handleChange}/>                  
                </div>
                <div class="form-group ">
                    <label className='form-label'>Principal Investigator's Name:</label>
                    <input type="text" name="p_investigator" class="form-control " placeholder="Name" onChange={handleChange}/>                  
                </div>
                <div class="form-group ">
                    <label className='form-label'>Author:</label>
                    <input type="text" name="author" class="form-control " placeholder="Author" onChange={handleChange}/>                  
                </div>
                <div class="form-group">
                  <label for="">Project Description:</label>
                  <textarea name="description" class="form-control" id="ta" cols="63" rows="10" placeholder="Description" onChange={handleChange}></textarea>
                </div>
                <div class="form-group">
                  <label className='form-label'>Field of Study:</label>
                  <form>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="field_of_study"   id="agri" value="Agriculture" onChange={handleChange}   />                     
                      <label className="form-check-label" htmlFor="agri">Agriculture</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="field_of_study"   id="agri" value="Energy" onChange={handleChange}   />                     
                      <label className="form-check-label" htmlFor="agri">Energy</label>
                    </div>
                    
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="field_of_study"   id="health" value="Health"  onChange={handleChange}  />                     
                      <label className="form-check-label" htmlFor="health">Health</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="field_of_study"   id="health" value="Construction"  onChange={handleChange}  />                     
                      <label className="form-check-label" htmlFor="health">Construction</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="field_of_study"   id="industrial" value="Industry" onChange={handleChange}   />                     
                      <label className="form-check-label" htmlFor="industrial">Industry</label>
                    </div>     
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="field_of_study"   id="industrial" value="Mines and Water" onChange={handleChange}   />                     
                      <label className="form-check-label" htmlFor="industrial">Mines and Water</label>
                    </div>              
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="field_of_study"   id="technology" value="Informatiom Comminication" onChange={handleChange}   />                     
                      <label className="form-check-label" htmlFor="technology">Information Communication</label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="field_of_study"   id="technology" value="Enviroment Protection" onChange={handleChange}   />                     
                      <label className="form-check-label" htmlFor="technology">Environment Protection </label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input className="form-check-input me-2" type="radio"  name="field_of_study"   id="other" value="Other related Sectors"  onChange={handleChange}  />                     
                      <label className="form-check-label" htmlFor="other">Other related Sectors</label>
                    </div>
                  </form>
                </div>
                <div class="form-group">
                    <label className='form-label'>Publication Date:</label>
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
          </div>
      </div>
    </div>
   
  </div>
   
  )
}

export default PostPublications;