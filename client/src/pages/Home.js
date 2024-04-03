// src/pages/Home.js

import React from 'react';
import HeroSection from '../components/homeComponents/HeroSection';
import Introduction from '../components/homeComponents/Introduction';
import DiscoverSectors from '../components/homeComponents/DiscoverSectors';
import RegistrationSteps from '../components/homeComponents/RegistrationSteps';
import LatestUpdates from '../components/homeComponents/LatestUpdates';
import QuickLinks from '../components/homeComponents/QuickLinks';


const Home = () => {
  return (

    <div className="container py-5" >
      <HeroSection/>
      <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
      <Introduction/>
      <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
      <QuickLinks />
      <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
      <DiscoverSectors />
      <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
      <RegistrationSteps />
      <hr className="section-divider" style={{ border: "none", borderTop: "2px dashed black", marginTop: "10px", marginBottom: "10px" }} /> 
      <LatestUpdates />
      
    </div>
  );
}

export default Home;
