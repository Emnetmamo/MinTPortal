import React, { useState } from "react";
import GenderBasedGraphicalAnalysis from "../components/GraphicalAnalysisComponents/GenderBasedGraphicalAnalysis";
import SectorialGraphicalAnalysis from "../components/GraphicalAnalysisComponents/SectorialGraphicalAnalysis"


const GraphicalAnalysis = () => {
  const [selectedTab, setSelectedTab] = useState("sector");
  const [categorySelected, setCategory] = useState(" ");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mt-4">
      <br />
      <br />
      <div style={{ width: '800px' }}>
    <h1 style={{ marginLeft: '0px'}}>Analysis of Applicants</h1>
    </div>
    <br />
      <ul className="nav nav-tabs">
        <li>
          <button
            className={`nav-link ${selectedTab === "sector" ? "active" : ""}`}
            style={{
              backgroundColor: selectedTab === "sector" ? "orange" : "",
              color: selectedTab === "sector" ? "white" : "black",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onClick={() => handleTabChange("sector")}
          >
            Sectorial Based Analysis
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === "gender" ? "active" : ""}`}
            style={{
              backgroundColor: selectedTab === "gender" ? "orange" : "",
              color: selectedTab === "gender" ? "white" : "black",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onClick={() => handleTabChange("gender")}
          >
            Gender Based Analysis
          </button>
        </li>
      </ul>
      
      <div className="tab-content mt-3">
        {selectedTab === "sector" && <SectorialGraphicalAnalysis category={categorySelected} />}
        {selectedTab === "gender" && <GenderBasedGraphicalAnalysis category={categorySelected} />}
      </div>
    </div>
  );
};

export default GraphicalAnalysis;
