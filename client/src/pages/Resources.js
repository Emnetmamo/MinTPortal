// import React, { useState } from 'react';
// import Publications from './Publications';
// import AcceptedProjects from './AcceptedProjects';

// const Resources = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="container">
//       <h1>Resources</h1>

//       <ul
//         className="nav nav-tabs"
//         onMouseOver={() => setDropdownOpen(true)}
//         onMouseOut={() => setDropdownOpen(false)}
//       >
//         <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
//           <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             role="button"
//             data-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded={isDropdownOpen}
//           >
//             Resources
//           </a>
//           <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
//             <a className="dropdown-item" data-toggle="tab" href="#acceptedProjects">
//               Accepted Projects
//             </a>
//             <a className="dropdown-item" data-toggle="tab" href="#publications">
//               Publications
//             </a>
//           </div>
//         </li>
//       </ul>

//       <div className="tab-content">
//         <div id="acceptedProjects" className="tab-pane fade show active">
//           <AcceptedProjects />
//         </div>
//         <div id="publications" className="tab-pane fade">
//           <Publications />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resources;




// src/pages/Resources.js
import React from 'react';
//import Publications from '../components/Publications'; // Import the Publications component
import Publications from './Publications';
import AcceptedProjects from './AcceptedProjects';
// import ProjectDescription from './ProjectDescription';



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
      </ul>

      <div className="tab-content">
        <div id="acceptedProjects" className="tab-pane fade show active">
          {/* Content for the "Accepted Projects" tab */}
          <AcceptedProjects/>
        </div>
        <div id="publications" className="tab-pane fade">
          {/* Render the Publications component within the "Publications" tab */}
          <Publications />
        </div>
      </div>
    </div>
  );
};

export default Resources;
