import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Label } from 'recharts';

const data = [
  { year: 2018, males: 120, females: 100 },
  { year: 2019, males: 150, females: 130 },
  { year: 2020, males: 180, females: 160 },
  { year: 2021, males: 200, females: 190 },
  { year: 2022, males: 220, females: 210 },
  { year: 2023, males: 240, females: 230 },
];

const calculateTotal = (data) => {
  return data.reduce((total, item) => total + item.males + item.females, 0);
};

const GraphicalAnalysis = () => {
  const totalApplicants = calculateTotal(data);

  return (
    <div style={{ marginTop: '40px', marginLeft: '300px' }}>
       <h1 style={{ marginLeft: '130px'}}>The Graphical Analysis of Applicants</h1>
      <p>The Graphical and Tabular Analysis of Male and Female Applicants <br />within the corresponding Year of Registration</p>
      <div style={{ marginBottom: '20px' }}>
        <BarChart width={800} height={400} data={data}>
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
      <div>
        <table style={{ width: '800px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={tableHeaderStyle}>Years ( G.C ) </th>
              {data.map((item) => (
                <th key={item.year} style={tableHeaderStyle}>{item.year}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr style={tableRowEvenStyle}>
              <td style={tableHeaderStyle}>No. of Males Applicant</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>{item.males}</td>
              ))}
            </tr>
            <tr style={tableRowOddStyle}>
              <td style={tableHeaderStyle}>No. of Females Applicant</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>{item.females}</td>
              ))}
            </tr>
            <tr style={tableRowEvenStyle}>
              <td style={tableHeaderStyle}>Sum of Applicants</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>{item.males + item.females}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ margin: '10px', textAlign: 'left', fontSize: '16px' }}>
        Total No. of Applicants: {totalApplicants}
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};

const tableRowEvenStyle = {
  backgroundColor: '#f9f9f9',
};

const tableRowOddStyle = {
  backgroundColor: '#D6EEEE',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

export default GraphicalAnalysis;