// src/components/AboutUs.js

import React from 'react';
import AboutUsSection from '../components/AboutUsComponents/AboutUsSection';
import OrganizationStructure from '../components/AboutUsComponents/OrganizationStructure';
import Leaders from '../components/AboutUsComponents/Leaders';

const AboutUs = () => {
  return (
    <div>
      <AboutUsSection />
      <OrganizationStructure />
      <Leaders />
    </div>
  );
}

export default AboutUs;
