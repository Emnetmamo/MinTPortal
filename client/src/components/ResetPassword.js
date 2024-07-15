import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RestPassowrd = () => {
    const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const {id}=useParams()
    function handleSubmit(e) {
        e.preventDefault();
    
        axios.post('https://research-portal-server-9.onrender.com/password/reset', { password: password,id:id })

          .then((result) => {
            console.log(result.data);
            if (result.data.message === 'sent') {
              toast.success("password update   succesfull", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                draggable: false
            });
            
            } else {
              toast.error("please try again", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                draggable: false
            });
            


            }
          })
          .catch((error) => {
            console.log('Error occurred during sending the data for reset password' + error);
          });
      }
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ENETER NEW Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        <div style={{textAlign:"right"}}>
        <button type="submit" className="btn btn-primary">
            update
          </button>
        </div>
        </form>
        
      </div>
    </div>
  </div>
  )
}

export default RestPassowrd
