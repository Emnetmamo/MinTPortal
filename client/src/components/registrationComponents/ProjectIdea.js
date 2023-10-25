// ProjectIdea.js
import React from 'react';

const ProjectIdea = ({ nextStep, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1  style={{ backgroundColor: "orange", color:"white"}}  className="card-title  text-white p-2 rounded text-center mb-4">Project Idea Section</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="projectTitle" className="form-label">Project Title*</label>
              <input type="text" className="form-control" id="projectTitle" name="projectTitle" required />
            </div>
            <div className="mb-3">
              <label htmlFor="cvAttachment" className="form-label">Attach your CV*</label>
              <input type="file" className="form-control" id="cvAttachment" name="cvAttachment" accept=".pdf,.doc,.docx" required />
            </div>
            <div className="mb-3">
              <label htmlFor="teamMembers" className="form-label">Team Members</label>
              <input type="text" className="form-control" id="teamMembers" name="teamMembers" placeholder="List your team members ..." required />
            </div>
            <div className="mb-3">
              <label htmlFor="projectCategory" className="form-label">Category of Project*</label>
              <select className="form-select" id="projectCategory" name="projectCategory" required>
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
              <textarea className="form-control" id="projectDescription" name="projectDescription" placeholder="Type your description here..." required></textarea>
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
