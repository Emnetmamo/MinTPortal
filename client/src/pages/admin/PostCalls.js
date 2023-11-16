import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate}  from "react-router-dom";
import "../../images/assets/css/admin.css";
import AdminHeader from "../../components/AdminComponents/AdminHeader";
import axios from "axios";
import Dropzone from "../../components/AdminComponents/Dropzone";

function PostCalls() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [field, setField] = useState('');
  const [callType, setCallType] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [prizes, setPrizes] = useState('');
  const [instructions, setInstructions] = useState('');
  const [guideline, setGuideline] = useState('');
const navigate=useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5001/announcements/addCall", {
        title,
        description,
        field,
        callType,
        startDate,
        endDate,
        prizes,
        instructions,
        guideline,
      })
      .then((result) =>{
        console.log(result)
        navigate('/admin')
      })
      .catch((err) => console.log(err));
    console.log({
      title,
      description,
      field,
      callType,
      startDate,
      endDate,
      prizes,
      instructions,
      guideline,
    });
  }
  return (
    <div className="">
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-xs-12 col-md-3 post-links-container mt-5"
            style={{ overflow: "hidden" }}
          >
            <ul class="list-group text-center fs-5 display-6">
              <br />
              <li
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link className="links" to="/admin/news/add-news">
                  Post News{" "}
                </Link>
              </li>
              <br />
              <li
                class="list-group-item"
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link
                  className="links"
                  to="/admin/appointments/add-appointment"
                >
                  Set Appointment Date{" "}
                </Link>
              </li>
              <br />
              <li
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link className="links" to="/admin/user-status/add-user-status">
                  Update User Status
                </Link>
              </li>
              <br />
              <li
                class="list-group-item active "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link className="links" to="/admin/calls/add-call">
                  Post Calls
                </Link>
              </li>
              <br />
              <li
                class="list-group-item  "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link
                  className="links"
                  to="/admin/publications/add-publication"
                >
                  Post Publications
                </Link>
              </li>
              <br />
              <li
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link
                  className="links"
                  to="/admin/accepted-projects/add-accepted-project"
                >
                  Post Accepted Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-2"></div>
          <div className="col-xs-12 col-md-7 mb-5">
            <form onSubmit={handleSubmit}>
              <h1>Post a Call</h1>

              <div className="form-group">
                <label htmlFor="title">Announcement Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Announcement Description:</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  rows="5"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="field">Field of Study:</label>
                <select
                  id="field"
                  name="field"
                  className="form-control"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                >
                  <option >Select Field of Study</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Environment-Energy">Environment and Energy</option>
                  <option value="Health">Health</option>
                  <option value="Industry">Industry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="callType">Type of Call:</label>
                <select
                  id="callType"
                  name="callType"
                  className="form-control"
                  value={callType}
                  onChange={(e) => setCallType(e.target.value)}
                >
                  <option >Select Type of Call</option>
                  <option value="National">National</option>
                  <option value="Foreign">Foreign</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="startDate">Application Kickoff Date:</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="endDate">Application Deadline Date:</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  className="form-control"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="prizes">Prizes:</label>
                <textarea
                  id="prizes"
                  name="prizes"
                  className="form-control"
                  rows="5"
                  placeholder="Prizes"
                  value={prizes}
                  onChange={(e) => setPrizes(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="instructions">Submission Instructions:</label>
                <textarea
                  id="instructions"
                  name="instructions"
                  className="form-control"
                  rows="5"
                  placeholder="Submission Instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="guideline">Upload Guideline:</label>
                <textarea
                  id="guideline"
                  name="guideline"
                  className="form-control"
                  rows="5"
                  placeholder="Upload Guideline"
                  value={guideline}
                  onChange={(e) => setGuideline(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="form-control my-3 fs-5 btn btn-warning fw-bold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCalls;
