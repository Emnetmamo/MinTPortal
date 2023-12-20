// src/pages/Home.js

import React from 'react';
import Introduction from '../components/homeComponents/Introduction';
import DiscoverSectors from '../components/homeComponents/DiscoverSectors';
import RegistrationSteps from '../components/homeComponents/RegistrationSteps';
import LatestUpdates from '../components/homeComponents/LatestUpdates';
import RecentInformations from '../components/homeComponents/RecentInformations';

const Home = () => {
  return (
    <div className="container py-5" style={{position:"relative"}}>
      <div className='col-md-4 offset-md-7 ' style={{position:"absolute", zIndex:"10", marginLeft:"66%" }}><RecentInformations/></div>
      
      <div><Introduction /></div>
      <div><DiscoverSectors /></div>
      <div><RegistrationSteps /></div>
      <div><LatestUpdates /></div>
    </div>
  );
}

export default Home;
