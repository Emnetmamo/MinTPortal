// src/components/AboutUs.js

import React from 'react';
import AboutUsSection from '../components/AboutUsComponents/AboutUsSection';
import OrganizationStructure from '../components/AboutUsComponents/OrganizationStructure';
import Leaders from '../components/AboutUsComponents/Leaders';
import MapContainer from '../components/AboutUsComponents/MapContainer';

const AboutUs = () => {
  return (
    <div>
      <br/><br/>
      <AboutUsSection />
      <OrganizationStructure />
      <Leaders />

      

    </div>
  );
}

export default AboutUs;
