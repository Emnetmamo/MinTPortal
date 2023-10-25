// src/pages/Resources.js

import React from 'react';

const Resources = () => {
  return (
    <div className="container">
      <h1>Resources</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#acceptedProjects">Accepted Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#publications">Publications</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#institutes">Institutes</a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="acceptedProjects" className="tab-pane fade show active">
          {/* Display accepted projects */}
          {/* Example: */}
          {/* <div>
            <h3>Project Title</h3>
            <p>Project Description</p>
            <p>Publication Date</p>
            <img src="project-image.jpg" alt="Project" />
            <button className="btn btn-primary">Download</button>
          </div> */}
        </div>
        <div id="publications" className="tab-pane fade">
          {/* Display publications */}
          {/* Example: */}
          {/* <div>
            <h3>Publication Title</h3>
            <p>Publication Description</p>
            <p>Publication Date</p>
            <img src="publication-image.jpg" alt="Publication" />
            <button className="btn btn-primary">Download</button>
          </div> */}
        </div>
        <div id="institutes" className="tab-pane fade">
          {/* Display institutes */}
          {/* Example: */}
          {/* <div>
            <h3>Institute Name</h3>
            <p>Institute Description</p>
            <p>Contact Info</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Resources;
