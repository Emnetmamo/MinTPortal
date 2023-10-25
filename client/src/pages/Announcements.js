// src/components/pages/Announcements.js

import React, { useState } from 'react';
import NationalCalls from "../components/announcementsComponents/NationalCalls";
import ForeignCalls from "../components/announcementsComponents/ForeignCalls";

const Announcements = () => {
  const [selectedTab, setSelectedTab] = useState('national');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === 'national' ? 'active' : ''}`}
            onClick={() => handleTabChange('national')}
          >
            National Calls
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === 'foreign' ? 'active' : ''}`}
            onClick={() => handleTabChange('foreign')}
          >
            Foreign Calls
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3">
        {selectedTab === 'national' && <NationalCalls />}
        {selectedTab === 'foreign' && <ForeignCalls />}
      </div>
    </div>
  );
}

export default Announcements;
