import React from 'react'
// import "../components/Institutes/Institutes.css";
import value from "../images/Institutes/default-image.jpg";
// shdhdbsdj
const Institutes = () => {
  return (
    <div class="container mt-5 d-flex m-20px">
  <div class="menu">
    <ul class="menu-items">
      <li class="menu-item active" data-content="institutes">Institutes</li>
      <li class="menu-item" data-content="research">Research Institutes</li>
      <li class="menu-item" data-content="labs">Laboratories</li>
      <li class="menu-item" data-content="ict">ICT Partners</li>
      <li class="menu-item" data-content="government">Government Agency</li>
    </ul>
  </div>
  <div class="content"> 
    <div class="default-content">
      <h2>Welcome to Institutes</h2>
      <img src={value} alt="Default Image" />
    </div>
    <div class="sub-content" id="institutes">
      <h2>Institutes Links</h2>
      <ul>
        <li><a href="#">Institute 1</a></li>
        <li><a href="#">Institute 2</a></li>
        <li><a href="#">Institute 3</a></li>
      </ul>
      {/* <img src="institutes-image.jpg" alt="Institutes Image"> */}
    </div>
    <div class="sub-content" id="research">
      <h2>Research Institutes Links</h2>
      <ul>
        <li><a href="#">Research Institute 1</a></li>
        <li><a href="#">Research Institute 2</a></li>
        <li><a href="#">Research Institute 3</a></li>
      </ul>
      {/* <img src="research-image.jpg" alt="Research Institutes Image"> */}
    </div>
    <div class="sub-content" id="labs">
      <h2>Laboratories Links</h2>
      <ul>
        <li><a href="#">Laboratory 1</a></li>
        <li><a href="#">Laboratory 2</a></li>
        <li><a href="#">Laboratory 3</a></li>
      </ul>
      {/* <img src="labs-image.jpg" alt="Laboratories Image"> */}
    </div>
    <div class="sub-content" id="ict">
      <h2>ICT Partners Links</h2>
      <ul>
        <li><a href="#">ICT Partner 1</a></li>
        <li><a href="#">ICT Partner 2</a></li>
        <li><a href="#">ICT Partner 3</a></li>
      </ul>
      {/* <img src="ict-image.jpg" alt="ICT Partners Image"> */}
    </div>
    <div class="sub-content" id="government">
      <h2>Government Agency Links</h2>
      <ul>
        <li><a href="#">Government Agency 1</a></li>
        <li><a href="#">Government Agency 2</a></li>
        <li><a href="#">Government Agency 3</a></li>
      </ul>
      {/* <img src="government-image.jpg" alt="Government Agency Image"> */}
    </div>
  </div>
</div>
  )
}

export default Institutes
