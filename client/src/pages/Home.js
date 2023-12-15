// src/pages/Home.js

import React from 'react';
import Introduction from '../components/homeComponents/Introduction';
import DiscoverSectors from '../components/homeComponents/DiscoverSectors';
import RegistrationSteps from '../components/homeComponents/RegistrationSteps';
import LatestUpdates from '../components/homeComponents/LatestUpdates';
import RecentInformations from '../components/homeComponents/RecentInformations';

const Home = () => {
  return (
    <div className="container py-5">
      <Introduction />
      <RecentInformations/>
      <DiscoverSectors />
      <RegistrationSteps />
      <LatestUpdates />
    </div>
  );
}

export default Home;
