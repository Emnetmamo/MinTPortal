import React, { useState, useEffect } from 'react';

const CheckStatus = () => {
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    // Fetch status data from the server or set it manually
    const fetchedStatusData = [
      { stage: 'Ethical Evaluation', status: 'Accepted' },
      { stage: 'Concept Evaluation', status: 'Pending' },
      { stage: 'Project Proposal', status: 'Pending' },
      { stage: 'Money Grant', status: 'Pending' },
    ];
    
    setStatusData(fetchedStatusData);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-10">
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card shadow" style={{ backgroundColor: "#11676d", color: 'white' }}>
                <div className="card-body">
                  <h5 className="card-title">Check Your Status</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Stages</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statusData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.stage}</td>
                          <td>{item.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckStatus;
