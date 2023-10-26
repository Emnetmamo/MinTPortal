import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResearchInstitutes from '../components/Institutes/ResearchInstitutes';
import Laboratories from '../components/Institutes/Laboratories';
import IctPartners from '../components/Institutes/IctPartners';
import GovernmentAgencies from '../components/Institutes/GovernmentAgencies';
import value from '../images/Institutes/default-image.jpg';

const Institutes = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }

  return (
    <div className="container mt-5 d-flex m-20px">
      <div className="menu">
        <ul className="menu-items">
          <li className="menu-item active" data-content="institutes">Institutes</li>
          <li className="menu-item" data-content="research">
            <Link to='/resources/institutes/research' onClick={handleClick}>Research Institutes</Link>
          </li>
          <li className="menu-item" data-content="labs">
            <Link to='/resources/institutes/labs' onClick={handleClick}>Laboratories</Link>
          </li>
          <li className="menu-item" data-content="ict">
            <Link to='/resources/institutes/ict' onClick={handleClick}>ICT Partners</Link>
          </li>
          <li className="menu-item" data-content="government">
            <Link to='/resources/institutes/government' onClick={handleClick}>Government Agency</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        {!isClicked && (
          <div className="default-content">
            <h2>Welcome to Institutes</h2>
            <img src={value} className="img-fluid" alt="Default Image" />
          </div>
        )}
      </div>
      <div>
        {isClicked && <ResearchInstitutes />}
      </div>
    </div>
  );
}

export default Institutes;
