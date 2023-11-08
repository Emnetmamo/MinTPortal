// src/components/pages/Announcements.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import NationalCalls from "../components/announcementsComponents/NationalCalls";
import ForeignCalls from "../components/announcementsComponents/ForeignCalls";

const Announcements = () => {
  const [selectedTab, setSelectedTab] = useState("national");
  const [categorySelected, setCategory] = useState("Agriculture");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mt-4">
      <br />
      <br />
      <br />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === "national" ? "active" : ""}`}
            onClick={() => handleTabChange("national")}
          >
            National Calls
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === "foreign" ? "active" : ""}`}
            onClick={() => handleTabChange("foreign")}
          >
            Foreign Calls
          </button>
        </li>
      </ul>
      <div style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
        <select name="category" id="category" style={{ borderRadius: "5px" }} onChange={function(e){setCategory(e.target.value)}}>
          <option value=" ">Select a Field</option>
          <option value="Agriculture">Agriculture</option>
          <option value="envenergy">Environment and Energy</option>
          <option value="Health">Health</option>
          <option value="Industry">Industrial</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="tab-content mt-3">
        {selectedTab === "national" && <NationalCalls category ={categorySelected}/>}
        {selectedTab === "foreign" && <ForeignCalls category ={categorySelected}/>}
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        <Link
          style={{
            backgroundColor: "#11676d",
            color: "white",
            marginRight: "20px",
            width: "100px",
          }}
          to="/"
          className="btn "
        >
          Previous
        </Link>
        <select name="pageNo" id="pageNo" style={{ borderRadius: "5px" }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <Link
          style={{
            backgroundColor: "#11676d",
            color: "white",
            marginLeft: "20px",
            width: "100px",
          }}
          to="/"
          className="btn "
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Announcements;
