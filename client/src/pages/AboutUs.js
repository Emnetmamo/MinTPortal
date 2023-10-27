// src/components/AboutUs.js

import React from 'react';
import AboutUsSection from '../components/AboutUsComponents/AboutUsSection';
import OrganizationStructure from '../components/AboutUsComponents/OrganizationStructure';
import Leaders from '../components/AboutUsComponents/Leaders';
// import MapContainer from '../components/AboutUsComponents/MapContainer';

const AboutUs = () => {
  return (
    <div>
<<<<<<< HEAD
      {/* <br /> <br /> 
      <div className="container shadow p-4 mb-4 bg-white rounded">
      <h1>Use Google Map Here About Our Location</h1> </ div>
       <MapContainer /> */}
=======
      <br/><br/>
      <MapContainer/>
>>>>>>> 8b00b9d2a3f7204a35755d1538548d896b8ef678
      <AboutUsSection />
      <OrganizationStructure />
      <Leaders />

      

    </div>
  );
}

export default AboutUs;
