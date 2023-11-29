import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import { setAppointment } from '../../actions/appointment';

axios.defaults.withCredentials=true;

function SetAppointmentDate() {
  
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    content: '',
    sender_email: '',
    sender_password: '',
    attendee_email: ''

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

  const handleSubmit = async (e) => {
      e.preventDefault();
    //  const emailResponse = await axios.post('http://localhost:5001/admin/appointments/add-appointment');
      dispatch(setAppointment(formData));
    
  };

  const clear = () => {

  }
  return (
    <div className="">
      
      <div className='container mt-5'>
        
          <div class="row">
            <div class="col-xs-12 col-md-3 post-links-container mt-5" style={{overflow: 'hidden'}}>
            <ul class="list-group text-center fs-5 display-6">
              <br />
              <li class="list-group-item " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/news/add-news">
                  Post News{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item active" style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/appointments/add-appointment"
                >
                  Set Appointment Date{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item "style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/user-status/add-user-status">
                  Update User Status
                </Link>
              </li>
              <br />
              <li class="list-group-item " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link className="links" to="/admin/calls/add-call">
                  Post Calls
                </Link>
              </li>
              <br />
              <li class="list-group-item  " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/publications/add-publication"
                >
                  Post Publications
                </Link>
              </li>
              <br />
              <li class="list-group-item " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin/accepted-projects/add-accepted-project"
                >
                  Post Accepted Projects
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-md-2"></div>
          <div class="col-xs-12 col-md-7 mb-5">
            <form method="post" action="/admin/appointments/add-appointment1" onSubmit={handleSubmit} >
                <br/><br/>
                <h1>Post an Appointment</h1>
                <div class="form-group ">
                    <label className='form-label'>Date:</label>
                    <input type="date" name="date" class="form-control " placeholder="Date" onChange={handleChange}/>                  
                </div>
                <div class="form-group">
                    <label className='form-label'>Time:</label>
                    <input  type="time" name="time" className="form-control " placeholder="Time" onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label className='form-label'>Location:</label>
                    <input  type="text" name="location" className="form-control " placeholder="Location" onChange={handleChange}/>
                </div>
                <div class="form-group">
                  <label for="">Description</label>
                  <textarea name="content" class="form-control" id="ta" cols="63" rows="10" placeholder="Description"  onChange={handleChange}></textarea>
                </div>

                <div class="form-group">
                    <label className='form-label'>Sender or Admin Email:</label>
                    <input  type="email" name="sender_email" className="form-control form-input"  onChange={handleChange}/>
                </div>

                <div class="form-group">
                    <label className='form-label'>Sender or Admin Password:</label>
                    <input  type="password" name="sender_password" className="form-control form-input" onChange={handleChange}/>
                </div>
             
                <div class="form-group">
                    <label className='form-label'>Attendee's Email:</label>
                    <input  type="email" name="attendee_email" className="form-control form-input" onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <button type="submit" className=" form-control my-3 fs-5 btn btn-warning fw-bold">Submit</button>
                </div>
            </form>
          </div>
      </div>
    </div>
  </div>
   
  )
}

export default SetAppointmentDate