import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import '../../images/assets/css/admin.css'
import axios from 'axios';



axios.defaults.withCredentials=true;

function PostGovernmentAgencies() {

    const [formData, setFormData] = useState({
      title: '',
      link: '',
      description: '',
      email: '',
      phone: '',
      image: '',
      
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
    data.append('link', formData.link);
    data.append('description', formData.description);
    data.append('email', formData.email);
    data.append('phone', formData.phone);   
    data.append('image', formData.image);
       
    try {
      const response =  axios.post('http://localhost:5001/admin/institutes/government-agencie/government-agencies', data);
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
            <ul class="list-group text-center fs-5 display-6">
              <br />
              <li class="list-group-item " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/institutes/research-institutes">
                  Research Institutes{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item" style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/institutes/laboratories"
                >
                  Laboratories{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item "style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/institutes/ict-partners">
                  ICT Partners
                </Link>
              </li>
              <br />
              <li class="list-group-item  " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/institutes/government-agencies">
                  Government Agencies
                </Link>
              </li>
              <br />
            </ul>
            </div>

          <div class="col-xs-12 col-md-2"></div>
          <div class="col-xs-12 col-md-7 mb-5">
            <form method="POST" action="/admin/institutes/government-agencies" onSubmit={handleSubmit} encType='multipart/form-data' >
                <br/> <br/>
                <h1>Post Government Agencies</h1>
                <div class="form-group ">
                    <label className='form-label'>Government Agencies Title:</label>
                    <input type="text" name="title" class="form-control " placeholder="Title" onChange={handleChange}/>                  
                </div>
                <div class="form-group ">
                    <label className='form-label'>Link Address of Government Agencies:</label>
                    <input type="text" name="link" class="form-control " placeholder="URL" onChange={handleChange}/>                  
                </div>
                <div class="form-group">
                  <label for="">Description About Government Agencies:</label>
                  <textarea name="description" class="form-control" id="ta" cols="63" rows="10" placeholder="Description" onChange={handleChange}></textarea>
                </div>
                <div class="form-group ">
                    <label className='form-label'>Email Address of Government Agencies:</label>
                    <input type="text" name="email" class="form-control " placeholder="Email" onChange={handleChange}/>                  
                </div>
                <div class="form-group ">
                    <label className='form-label'>Phone Number of Government Agencies:</label>
                    <input type="text" name="phone" class="form-control " placeholder="Phone" onChange={handleChange}/>                  
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
            

                <br/>                
                <div class="form-group">
                    <button type="submit" className=" form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
                </div>
            </form>
            <ToastContainer />
            
          </div>
      </div>
    </div>
   
  </div>
   
  )
}

export default PostGovernmentAgencies;