// src/pages/Home.js

import React from 'react';
import Introduction from '../components/homeComponents/Introduction';
import DiscoverSectors from '../components/homeComponents/DiscoverSectors';
import RegistrationSteps from '../components/homeComponents/RegistrationSteps';
import LatestUpdates from '../components/homeComponents/LatestUpdates';
import QuickLinks from '../components/homeComponents/QuickLinks';


const Home = () => {
  return (

    <div className="container py-5" style={{position:"relative"}}>
      <div><Introduction /></div>
      <div><QuickLinks /></div>
      <div><DiscoverSectors /></div>
      <div><RegistrationSteps /></div>
      <div><LatestUpdates /></div>

    </div>
  );
}

export default Home;
