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
      <Introduction/> 
      <DiscoverSectors />
      <RegistrationSteps />
      <QuickLinks />
      <LatestUpdates />
      
    </div>
  );
}

export default Home;
