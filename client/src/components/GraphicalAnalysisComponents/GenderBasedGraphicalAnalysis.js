import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  Label
} from 'recharts';

const GenderBasedGraphicalAnalysis = () => {
  const [graphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/resources/gender-info');
        setGraphData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateTotal = (data) => {
    return data.reduce((total, item) => total + item.males + item.females, 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  const totalApplicants = calculateTotal(graphData);

  return (
    <div style={{ marginTop: '40px', marginLeft: '250px' }}>
      <div style={{ width: '800px' }}>
        <p>The <em>Graphical Analysis</em> of Male and Female Applicants within the corresponding Year of Registration for Researchs</p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <BarChart width={800} height={400} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year">
            <Label
              value="Years ( G.C )"
              position="bottom"
              offset={-10}
              style={{ textAnchor: 'middle' }}
            />
          </XAxis>
          <YAxis>
            <Label
              value="Number of Applicants"
              position="left"
              angle={-90}
              offset={-10}
              style={{ textAnchor: 'middle' }}
            />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="males" fill="#8884d8" name="Males">
            <LabelList dataKey="males" position="top" />
          </Bar>
          <Bar dataKey="females" fill="#82ca9d" name="Females">
            <LabelList dataKey="females" position="top" />
          </Bar>
        </BarChart>
      </div>
      <div style={{ width: '800px' }}>
        <p>The <em>Tabular Analysis</em> of Male and Female Applicants within the corresponding Year of Registration for Researchs</p>
      </div>
      <div>
        <table style={{ width: '800px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={tableHeaderStyle}>Years ( G.C ) </th>
              {graphData.map((item) => (
                <th key={item.year} style={tableHeaderStyle}>{item.year}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr style={tableRowEvenStyle}>
              <td style={tableHeaderStyle}>No. of Males Applicant</td>
              {graphData.map((item) => (
                <td key={item.year} style={tableCellStyle}>{item.males}</td>
              ))}
            </tr>
            <tr style={tableRowOddStyle}>
              <td style={tableHeaderStyle}>No. of Females Applicant</td>
              {graphData.map((item) => (
                <td key={item.year} style={tableCellStyle}>{item.females}</td>
              ))}
            </tr>
            <tr style={tableRowEvenStyle}>
              <td style={tableHeaderStyle}>Total No. of Applicants</td>
              {graphData.map((item) => (
                <td key={item.year} style={tableCellStyle}>{item.males + item.females}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ margin: '10px', textAlign: 'left', fontSize: '16px', width: '800px' }}>
        Total No. of Applicants from ({graphData[0].year} - {new Date().getFullYear()}): {totalApplicants}
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '8px',
  border: '1px solid #ddd',
  textAlign: 'left'
};

const tableCellStyle = {
  padding: '8px',
  border: '1px solid #ddd',
  textAlign: 'center'
};

const tableRowEvenStyle = {
  backgroundColor: '#f9f9f9'
};

const tableRowOddStyle = {
  backgroundColor: '#ffffff'
};

export default GenderBasedGraphicalAnalysis;