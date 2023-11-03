// ProjectIdea.js
import React from 'react';
import { useState,useEffect,createRef } from 'react';
import axios from 'axios'
const ProjectIdea = ({ nextStep, prevStep }) => {
  const[projectTitle,SetProjectTitle]=useState('')
  const[teamMembers,SetTeamMember]=useState('')
  const[projectCategory,SetProjectCategory]=useState('')
  const[description,SetDescription]=useState('')
  const[cvFile,SetCvfile]=useState(null)
  const[proposalFile,SetProposalFile]=useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();

         axios.post('http://localhost:5000/auth/submitProject',{
          projectTitle,
          projectCategory,
          teamMembers,
          description
         })
         .then((response)=>{console.log(response)})
         .catch((error)=>{console.log('error ocure during sent project file'+error)})

    nextStep();
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1  style={{ backgroundColor: "orange", color:"white"}}  className="card-title  text-white p-2 rounded text-center mb-4">Project Idea Section</h1>
          <form onSubmit={handleSubmit} >

            <div className="mb-3">
              <label htmlFor="projectTitle" className="form-label">Project Title*</label>
              <input
               type="text" 
               className="form-control"
                id="projectTitle"
                name="projectTitle"
                value={projectTitle}
                onChange={(e)=>{SetProjectTitle(e.target.value)}}
                required />
            </div>
            <div className="mb-3">
              <label htmlFor="cvAttachment" className="f5orm-label">Attach your CV*</label>
              <input type="file" className="form-control" id="cvAttachment" name="cvAttachment" accept=".pdf,.doc,.docx" required />
            </div>
            <div className="mb-3">
              <label htmlFor="teamMembers" className="form-label">Team Members</label>
              <input 
              type="text"
               className="form-control"
                id="teamMembers"
                name="teamMembers"
                value={teamMembers}
                onChange={(e)=>{SetTeamMember(e.target.value)}}
                 placeholder="List your team members ..." 
                 required />
            </div>
            <div className="mb-3">
              <label htmlFor="projectCategory" className="form-label">Category of Project*</label>
              <select className="form-select" id="projectCategory" name="projectCategory" value={projectCategory} onChange={(e)=>{SetProjectCategory(e.target.value)}} required>
                <option value="" disabled selected>Select a category</option>
                <option value="Category 1">Agriculture</option>
                <option value="Category 2">Environment and Energy</option>
                <option value="Category 3">Health</option>
                <option value="Category 4">Industrial</option>
                <option value="Category 5">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="projectDescription" className="form-label">Description*</label>
              <textarea 
              className="form-control"
               id="projectDescription"
                name="projectDescription"
                 placeholder="Type your description here..."
                 value={description}
                 onChange={(e)=>{SetDescription(e.target.value)}}
                  required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="proposalAttachment" className="form-label">Attach your Proposal*</label>
              <input type="file" className="form-control" id="proposalAttachment" name="proposalAttachment" accept=".pdf,.doc,.docx" required />
            </div>
            <div className="d-flex justify-content-end">
              <button style={{ backgroundColor: "orange", color:"white"}} type="button" className="btn  me-2" onClick={prevStep}>Previous</button>
              <button style={{ backgroundColor: "orange", color:"white"}} type="submit" className="btn ">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectIdea;
