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
<<<<<<< Updated upstream
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
      {/* <div className="content">
=======
      
      <div className="menu" style={{ backgroundColor: '#11676d',  marginBottom: '80px', borderRadius: '10px'}}>
         <ul className="menu-items" style={{ listStyleType: 'none', padding: '40px'}}>
            <li className="menu-item active" data-content="institutes">Institutes</li>
            <li className="menu-item" data-content="research">
                <Link to='/resources/institutes/research' style={{ textDecoration: 'none',backgroundColor: 'orange', borderRadius: '5px'}} onClick={handleClick}>Research Institutes</Link>
            </li>
            <li className="menu-item" data-content="labs">
                <Link to='/resources/institutes/labs' style={{ textDecoration: 'none',backgroundColor: 'orange', borderRadius: '5px'}} onClick={handleClick}>Laboratories</Link>
            </li>
            <li className="menu-item" data-content="ict">
                <Link to='/resources/institutes/ict' style={{ textDecoration: 'none',backgroundColor: 'orange', borderRadius: '5px'}} onClick={handleClick}>ICT Partners</Link>
            </li>
           <li className="menu-item" data-content="government">
                <Link to='/resources/institutes/government' style={{ textDecoration: 'none',backgroundColor: 'orange', borderRadius: '5px'}} onClick={handleClick}>Government Agency</Link>
           </li>
         </ul>
    </div>
    <br /><br />
      <div className="content">
>>>>>>> Stashed changes
        {!isClicked && (
          <div className="default-content">
            <h2>Welcome to Institutes</h2>
            <img src={value} className="img-fluid" alt="Default Image" />
          </div>
        )}
      </div>
<<<<<<< Updated upstream
      <div>
        {isClicked && <ResearchInstitutes />}
      </div> */}
=======
>>>>>>> Stashed changes
    </div>
  );
}

export default Institutes;
