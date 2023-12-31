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
    <div className="container row mt-3 d-flex m-20px">
      <br/><br/><br/>
      <div className="col-sm-3 mt-5" >
  <div className="menu" style={{ backgroundColor: '#11676d', marginBottom: '80px', borderRadius: '10px' }}>
    <ul className=" list-group" style={{ listStyleType: 'none', padding: '40px' }}>
      
      <li className="list-group-item list-group-item-dark" data-content="research" style={{ width: '100%', marginBottom: '10px' ,backgroundColor: 'orange', borderRadius: '5px'}}>
        <Link to='/institutes/research' style={{ textDecoration: 'none', width: '100%', color:'white'}} onClick={handleClick}>Research Institutes</Link>
      </li>
      <li className=" list-group-item list-group-item-dark" data-content="labs" style={{ width: '100%', marginBottom: '10px',backgroundColor: 'orange', borderRadius: '5px' }}>
        <Link to='/institutes/labs' style={{ textDecoration: 'none', width: '100%', color:'white' }} onClick={handleClick}>Laboratories</Link>
      </li>
      <li className=" list-group-item list-group-item-dark" data-content="ict" style={{ width: '100%', marginBottom: '10px',backgroundColor: 'orange', borderRadius: '5px' }}>
        <Link to='/institutes/ict' style={{ textDecoration: 'none', width: '100%', color:'white' }} onClick={handleClick}>ICT Partners</Link>
      </li>
      <li className=" list-group-item list-group-item-dark" data-content="government" style={{ width: '100%', marginBottom: '10px' ,backgroundColor: 'orange', borderRadius: '5px'}}>
        <Link to='/institutes/government' style={{ textDecoration: 'none', width: '100%', color:'white' }} onClick={handleClick}>Government Agency</Link>
      </li>
    </ul>
  </div>
</div>

      <div className="content col">
        {!isClicked && (
          <div className="default-content">
            <br /> <br />
            <h2>Welcome to Institutes</h2>
            <img src={value} className="img-fluid" alt="Default Image" />
          </div>
        )}
      </div>
      <div>
        {isClicked && <ResearchInstitutes />}
      </div>
      <br></br>
    </div>
  );
}

export default Institutes;
