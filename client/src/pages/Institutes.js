import React from 'react'
import { Link } from 'react-router-dom';
// import "../components/Institutes/Institutes.css";
import ResearchInstitutes from '../components/Institutes/ResearchInstitutes'; // Import the ResearchInstitutes component
import Laboratories from '../components/Institutes/Laboratories';
import IctPartners from '../components/Institutes/IctPartners';
import GovernmentAgencies from '../components/Institutes/GovernmentAgencies';
import value from "../images/Institutes/default-image.jpg";
import { useState } from 'react';
// shdhdbsdj
const Institutes = () => {
  let [isClicked, setIsClicked] = useState(false);  
  function handleClick(e)
    {
      e.preventDefault();
      setIsClicked(true);
    }
  return (
    <div class="container mt-5 d-flex m-20px">
  <div class="menu">
    <ul class="menu-items">
      <li class="menu-item active" data-content="institutes">Institutes</li>
      <li class="menu-item" data-content="research"><Link to='/resources/institutes/research' onClick={handleClick}>Research Institutes</Link></li>
      <li class="menu-item" data-content="labs"><Link to='/resources/institutes/labs' onClick={handleClick}>Laboratories</Link></li>
      <li class="menu-item" data-content="ict"><Link to='/resources/institutes/ict' onClick={handleClick}>ICT Partners</Link></li>
      <li class="menu-item" data-content="government"><Link to='/resources/institutes/government' onClick={handleClick}>Government Agency</Link></li>
    </ul>
  </div>
  <div class="content">
    { !isClicked &&
    <div class="default-content">
      <h2>Welcome to Institutes</h2>
      <img src={value} class="img-fluid" alt="Default Image" />
    </div>}
   </div>
  <div>
    {isClicked && <ResearchInstitutes/> }
  </div>
</div>
  )
}

export default Institutes
