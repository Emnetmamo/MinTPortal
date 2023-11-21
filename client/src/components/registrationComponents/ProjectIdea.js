import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
const ProjectIdea = ({ nextStep, prevStep }) => {
  const navigat=useNavigate()
  const [projectTitle, setProjectTitle] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [description, setDescription] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [proposalFile, setProposalFile] = useState(null);
  const [email, SetEmail] = useState("");
  const handleCVFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleProposalFileChange = (e) => {
    setProposalFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectTitle", projectTitle);
    formData.append("teamMembers", teamMembers);
    formData.append("projectCategory", projectCategory);
    formData.append("description", description);
    formData.append("email", email);
    if (cvFile) {
      formData.append("cvFile", cvFile);
    }

    if (proposalFile) {
      formData.append("proposalFile", proposalFile);
    }
    try {
      const response = await axios.put(
        "http://localhost:5001/auth/submitProject",
        formData
      );
      console.log(response);
      if(response.data==='titlepresent'){
        toast.error('this project is done by some or already taken,come other day with other topic')
        setTimeout(() => {
          navigat('/')
        }, 7000);
      }
      else{
      nextStep()}
    } catch (error) {
      console.error("Error occurred during project submission: ", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1
            style={{ backgroundColor: "orange", color: "white" }}
            className="card-title text-white p-2 rounded text-center mb-4"
          >
            Project Idea Section
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="projectTitle" className="form-label">
                Project Title*
              </label>
              <input
                type="text"
                className="form-control"
                id="projectTitle"
                name="projectTitle"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="teamMembers" className="form-label">
                Team Members
              </label>
              <input
                type="text"
                className="form-control"
                id="teamMembers"
                name="teamMembers"
                value={teamMembers}
                onChange={(e) => setTeamMembers(e.target.value)}
                placeholder="List your team members ..."
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="projectCategory" className="form-label">
                Category of Project*
              </label>
              <select
                className="form-select"
                id="projectCategory"
                name="projectCategory"
                value={projectCategory}
                onChange={(e) => setProjectCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Agriculture">Agriculture</option>
                <option value="Environment-Energy">Environment and Energy</option>
                <option value="Health">Health</option>
                <option value="Industry">Industry</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="projectDescription" className="form-label">
                Description*
              </label>
              <textarea
                className="form-control"
                id="projectDescription"
                name="projectDescription"
                placeholder="Type your description here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="sample@gmail.com"
                value={email}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="cvFile" className="form-label">
                Attach your CV*
              </label>
              <input
                type="file"
                className="form-control"
                id="cvFile"
                name="cvFile"
                onChange={handleCVFileChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="proposalFile" className="form-label">
                Attach your Proposal*
              </label>
              <input
                type="file"
                className="form-control"
                id="proposalFile"
                name="proposalFile"
                onChange={handleProposalFileChange}
                required
              />
            </div>

            <div className="d-flex justify-content-end">
              <button
                style={{ backgroundColor: "orange", color: "white", float: "right" }}
                type="button"
                className="btn me-2"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "orange", color: "white", float: "right" }}
                type="submit"
                className="btn"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ProjectIdea;
