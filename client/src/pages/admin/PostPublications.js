import React, { createRef } from "react";
import { Link } from "react-router-dom";
import "../../images/assets/css/admin.css";
import AdminHeader from "../../components/AdminComponents/AdminHeader";
import DropzoneImage from "../../components/AdminComponents/Dropzone";
import DropzoneText from "../../components/AdminComponents/DropzoneText";
import { useState, useEffect } from "react";
import axios from "axios";

function PostPublications() {
  const inputfile=createRef();
  const [titel, SetTitle] = useState("");
  const [author, SetAuthor] = useState("");
  const [category, SetCategory] = useState("");
  const [description, SetDescription] = useState("");
  const HandleSumit = () => {
    const formData=new FormData()
    formData('document',inputfile.current.value)
    try {
      axios.post("http://localhost:5000/publication", {titel,author,category,description});
      
    } catch {
      console.log("error occure during posting publications");
    }
  };
  return (
    <div className="">
      <AdminHeader />
      <div className="container mt-5">
        <div class="row">
          <div className="col-xs-12 col-md-3 my-5 post-links-container">
            <ul class="list-group text-center fs-5 display-6">
              <br />
              <li class="list-group-item  post-links ">
                <Link className="links" to="/admin/news/add-news">
                  Post News{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links ">
                <Link
                  className="links"
                  to="/admin/appointments/add-appointment"
                >
                  Set Appointment Date{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links ">
                <Link className="links" to="/admin/user-status/add-user-status">
                  Update User Status
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links ">
                <Link className="links" to="/admin/calls/add-call">
                  Post Calls{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item active post-links ">
                <Link
                  className="links"
                  to="/admin/publications/add-publication"
                >
                  Post Publications{" "}
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links ">
                <Link
                  className="links"
                  to="/admin/accepted-projects/add-accepted-project"
                >
                  Post Accepted Projects{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-md-2"></div>
          <div class="col-xs-12 col-md-7 mb-5">
            <form onSubmit={HandleSumit}>
              <br /> <br />
              <h1>Post a Publication</h1>
              <div class="form-group ">
                <label className="form-label">Project Title:</label>
                <input
                  type="text"
                  name="title"
                  class="form-control "
                  placeholder="Title"
                  value={titel}
                  onChange={(e) => {
                    SetTitle(e.target.value);
                  }}
                />
              </div>
              <div class="form-group ">
                <label className="form-label">Author:</label>
                <input
                  type="text"
                  name="title"
                  class="form-control "
                  placeholder="Title"
                  value={author}
                  onChange={(e) => {
                    SetAuthor(e.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="">Project Description:</label>
                <textarea
                  name="description"
                  class="form-control"
                  id="ta"
                  cols="63"
                  rows="10"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => {
                    SetDescription(e.target.value);
                  }}
                ></textarea>
              </div>
              <div
               className="form-group"
               value={category}
               onChange={(e)=>{SetCategory(e.target.value)}}
               >
                <label className="form-label">Field of Study:</label>
                <select className="form-select" name="fieldofstudy">
                  <option value="agriculture">Agriculture</option>
                  <option value="envnenergy">Environment and Energy</option>
                  <option value="health">Health</option>
                  <option value="industrial">Industrial</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label className="form-label">Publication Date:</label>
                <input
                  type="date"
                  name="date"
                  className="form-control form-input"
                />
              </div>
              <br />
              <div class="form-group"></div>
              <div className="row">
                <div className="col">
                  <p>Upload Images:</p>
                  {/* <DropzoneImage className="py-5 mt-10 border border-neutral-200" /> */}
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    // accept=".image"
                    required
                  />
                </div>
                <div className="col">
                  <p>Upload document</p>
                  {/* <DropzoneText className="py-5 mt-10 border border-neutral-200" /> */}
                  <input
                    type="file"
                    className="form-control"
                    id="dicument"
                    name="document"
                    accept=".pdf,.doc,.docx"
                    ref={inputfile}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className=" form-control my-3 fs-5 btn btn-warning fw-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPublications;
