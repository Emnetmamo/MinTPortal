import React, { useState } from "react";
import NationalCalls from "../components/announcementsComponents/NationalCalls";
import ForeignCalls from "../components/announcementsComponents/ForeignCalls";


const Announcements = () => {
  const [selectedTab, setSelectedTab] = useState("national");
  const [categorySelected, setCategory] = useState(" ");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mt-4">
      <br />
      <br />
      <br />
      <ul className="nav nav-tabs">
        <li>
          <button
            className={`nav-link ${selectedTab === "national" ? "active" : ""}`}
            style={{
              backgroundColor: selectedTab === "national" ? "orange" : "",
              color: selectedTab === "national" ? "white" : "black",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onClick={() => handleTabChange("national")}
          >
            National Calls
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === "foreign" ? "active" : ""}`}
            style={{
              backgroundColor: selectedTab === "foreign" ? "orange" : "",
              color: selectedTab === "foreign" ? "white" : "black",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onClick={() => handleTabChange("foreign")}
          >
            Foreign Calls
          </button>
        </li>
      </ul>
      <div style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
        <select
          name="category"
          id="category"
          style={{
            borderRadius: "5px",
            fontSize: "16px",
          }}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=" ">Select a Field</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Industry">Industry</option>
          <option value="Health">Health</option>
          <option value="Construction">Construction</option>
          <option value="Mines and Water">Mines and Water</option>
          <option value="Information Communication">Information Communication</option>
          <option value="Energy">Energy </option>
          <option value="Environment Protection">Environment Protection </option>
          <option value="Other related Sectors">Other related Sectors</option>
        
        </select>
      </div>
      <div className="tab-content mt-3">
        {selectedTab === "national" && <NationalCalls category={categorySelected} />}
        {selectedTab === "foreign" && <ForeignCalls category={categorySelected} />}
      </div>
    </div>
  );
};

export default Announcements;
