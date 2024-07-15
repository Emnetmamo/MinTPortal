import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../../images/assets/css/admin.css";
import Sidebar from "./Sidebar.js";
import axios from "axios";
import Logout from "../../components/Logout.js";
import DropzoneImage from "../../components/AdminComponents/Dropzone";
import DropzoneText from "../../components/AdminComponents/DropzoneText";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";



function PostHistory() {
  axios.defaults.withCredentials = true;
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [p_investigator, setInvenstigator] = useState("");
  const [author, setAuthor] = useState("");
  const [funding_source, setFunding] = useState("");
  const [description, setDescription] = useState("");
  const [field_of_study, setStudy] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();
  const defaultImageURL =
    "https://research-portal-server-9.onrender.com/images/noimage.png";
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

  const handleChange = (e) => {
    setStudy(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // const data = new FormData();
    // data.append("title", title);
    // data.append("p_investigator", p_investigator);
    // data.append("author", author);
    // data.append("funding_source", funding_source);
    // data.append("description", description);
    // data.append("field_of_study", field_of_study);
    // data.append("date", date);
    // data.append("image", image);
    // data.append("file", file);
    // console.log('from post history', data.title)
    const data=[title,p_investigator,author,funding_source,description,field_of_study,date,image,file]
  console.log('from hisotru ',data)
    try {
      const response = await axios.post(
        "https://research-portal-server-9.onrender.com/admin/history/add-history",{title,p_investigator,author,funding_source,description,field_of_study,date,image,file}
       
      );
  
      console.log(response.data);
      alert("Do you want to submit");
      toast.info("History submitted successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("An error occurred while submitting news.");
    }
  };


  return (
    document.cookie ?
    <div className="">
      <form
        method="POST"
        action="/admin/history/add-history"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <br /> <br />
        <h1>Post History</h1>
        <div class="form-group ">
          <label className="form-label">Project Title:</label>
          <input
            type="text"
            name="title"
            class="form-control "
            value={title}
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div class="form-group ">
          <label className="form-label">Principal Investigator's Name:</label>
          <input
            type="text"
            name="p_investigator"
            class="form-control "
            value={p_investigator}
            placeholder="Name"
            onChange={(e) => {
              setInvenstigator(e.target.value);
            }}
            required
          />
        </div>
        <div class="form-group ">
          <label className="form-label">Author:</label>
          <input
            type="text"
            name="author"
            class="form-control "
            value={author}
            placeholder="Author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            required
          />
        </div>
        <div class="form-group ">
          <label for="">Funding Sources:</label>
          <textarea
            name="funding_source"
            class="form-control"
            id="ta"
            cols="63"
            rows="3"
            value={funding_source}
            placeholder="Funding Sources"
            onChange={(e) => {
              setFunding(e.target.value);
            }}
            defaultValue="None"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="ta">Project Description:</label>
          <textarea
            name="description"
            class="form-control"
            id="ta"
            cols="63"
            value={description}
            rows="10"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label className="form-label">Field of Study:</label>
          <form>
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="radio"
                name="field_of_study"
                id="agri"
                value="Agriculture"
                onChange={handleChange}
                checked={field_of_study === "Agriculture"}
              />
              <label className="form-check-label" htmlFor="agri">
                Agriculture
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="radio"
                name="field_of_study"
                id="envnenergy"
                value="Industry"
                onChange={handleChange}
                checked={field_of_study === "Industry"}
              />
              <label className="form-check-label" htmlFor="envnenergy">
                Industry
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="radio"
                name="field_of_study"
                id="health"
                value="Health"
                onChange={handleChange}
                checked={field_of_study === "Health"}
              />
              <label className="form-check-label" htmlFor="health">
                Health
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="radio"
                name="field_of_study"
                id="industrial"
                value="Mines and Water"
                onChange={handleChange}
                checked={field_of_study === "Mines and Water"}
              />
              <label className="form-check-label" htmlFor="industrial">
                Mines and Water
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="radio"
                name="field_of_study"
                id="technology"
                value="Construction"
                onChange={handleChange}
                checked={field_of_study === "Construction"}
              />
              <label className="form-check-label" htmlFor="technology">
                Construction
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="radio"
                name="field_of_study"
                id="other"
                value="Information Communication"
                onChange={handleChange}
                checked={field_of_study === "Information Communication"}
              />
              <label className="form-check-label" htmlFor="other">
                Information Communication
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="radio"
                name="field_of_study"
                id="other"
                value="Energy"
                onChange={handleChange}
                checked={field_of_study === "Energy"}
              />
              <label className="form-check-label" htmlFor="other">
                Energy{" "}
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="radio"
                name="field_of_study"
                id="other"
                value="Environment Protection"
                onChange={handleChange}
                checked={field_of_study === "Environment Protection"}
              />
              <label className="form-check-label" htmlFor="other">
                Environment Protection{" "}
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="radio"
                name="field_of_study"
                id="other"
                value="Other related Sectors"
                onChange={handleChange}
                checked={field_of_study === "Other related Sectors"}
              />
              <label className="form-check-label" htmlFor="other">
                Other related Sectors
              </label>
            </div>
          </form>
        </div>
        <div class="form-group">
          <label className="form-label">Publication Date:</label>
          <input
            type="date"
            name="date"
            className="form-control form-input"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Upload Image:</label>
          <FileBase
            type="file"
            name="image"
            multiple={false}
            className="form-control form-input mb-2"
            //onChange={handleFileSelect}
            onDone={({ base64 }) => setImage(base64)}
          />
          {/* Display the image preview */}
          {/* {imagePreview && (
                  <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                )} */}
        </div>
        <div className="form-group">
          <label className="form-label">Upload File:</label>
          <FileBase
            type="file"
            name="file"
            value={file}
            multiple={false}
            className="form-control form-input mb-2"
            // onChange={handleTextFileSelect}
            onDone={({ base64 }) => setFile(base64)}
          />
        </div>
        <br />
        <div class="form-group">
          <button
            type="submit"
            className=" form-control my-3 fs-5 btn btn-warning fw-bold"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
    : <Logout/>
  );
}

export default PostHistory;
