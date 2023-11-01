// src/components/AboutUs.js

import React from "react";
import AboutUsSection from "../components/AboutUsComponents/AboutUsSection";
import OrganizationStructure from "../components/AboutUsComponents/OrganizationStructure";
import Leaders from "../components/AboutUsComponents/Leaders";

const AboutUs = () => {
  return (
    <div>
      <br /> <br />
      <div className="container shadow p-4 mb-4 bg-white rounded">
        <h1>Use Google Map Here About Our Location</h1>{" "}
      </div>
      <AboutUsSection />
      <OrganizationStructure />
      <Leaders />
    </div>
  );
};

export default AboutUs;
