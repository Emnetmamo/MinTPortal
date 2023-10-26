import React from 'react'
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
      <li class="menu-item" data-content="research"><a href='/resources/institutes/research' onClick={handleClick}>Research Institutes</a></li>
      <li class="menu-item" data-content="labs"><a href='/resources/institutes/labs' onClick={handleClick}>Laboratories</a></li>
      <li class="menu-item" data-content="ict"><a href='/resources/institutes/ict' onClick={handleClick}>ICT Partners</a></li>
      <li class="menu-item" data-content="government"><a href='/resources/institutes/government' onClick={handleClick}>Government Agency</a></li>
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
