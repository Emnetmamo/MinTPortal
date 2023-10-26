// src/pages/Resources.js
import React from 'react';
//import Publications from '../components/Publications'; // Import the Publications component
import Publications from './Publications';
import Institutes  from './Institutes';
<<<<<<< Updated upstream
import AcceptedProjects from './AcceptedProjects';
import ProjectDescription from './ProjectDescription';

=======
import Laboratories from '../components/Institutes/Laboratories';
import GovernmentAgencies from '../components/Institutes/GovernmentAgencies';
>>>>>>> Stashed changes
const Resources = () => {
  return (
    <div className="container">
      <h1>Resources</h1>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#acceptedProjects">
            Accepted Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#publications">
            Publications
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#institutes">
            Institutes
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="acceptedProjects" className="tab-pane fade show active">
          {/* Content for the "Accepted Projects" tab */}
          <AcceptedProjects/>
        </div>
        <div id="publications" className="tab-pane fade">
          {/* Render the Publications component within the "Publications" tab */}
          <Publications />
           <ProjectDescription/>
        </div>
        <div id="institutes" className="tab-pane fade">
          {/* Render the Publications component within the "Publications" tab */}
          <Institutes />
        </div>
      </div>
    </div>
  );
};

export default Resources;
