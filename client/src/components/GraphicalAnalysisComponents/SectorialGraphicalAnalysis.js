import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Label } from 'recharts';

const data = [
  { year: 2018, industrial: 120, environmental: 100, health: 80, agricultural: 70, other: 50 },
  { year: 2019, industrial: 150, environmental: 130, health: 110, agricultural: 90, other: 70 },
  { year: 2020, industrial: 180, environmental: 160, health: 140, agricultural: 120, other: 100 },
  { year: 2021, industrial: 200, environmental: 190, health: 170, agricultural: 150, other: 130 },
  { year: 2022, industrial: 220, environmental: 210, health: 190, agricultural: 170, other: 150 },
  { year: 2023, industrial: 240, environmental: 230, health: 210, agricultural: 190, other: 170 },
];

const calculateTotal = (data) => {
  return data.reduce(
    (total, item) =>
      total + item.industrial + item.environmental + item.health + item.agricultural + item.other,
    0
  );
};

const SectorialGraphicalAnalysis = () => {
  const totalApplicants = calculateTotal(data);

  return (
    <div style={{ marginTop: '40px', marginLeft: '300px' }}>
      <div style={{ width: '800px' }}>
        <p>The <em>Graphical Analysis</em> of Applicants in various <em>Sectors</em> within the respective Year of Applying for Researchs</p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <BarChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year">
            <Label value="Years ( G.C )" position="bottom" offset={-10} style={{ textAnchor: 'middle' }} />
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
          <Bar dataKey="industrial" fill="#8884d8" name="Industrial">
            <LabelList dataKey="industrial" position="top" />
          </Bar>
          <Bar dataKey="environmental" fill="#82ca9d" name="Environmental & Energy">
            <LabelList dataKey="environmental" position="top" />
          </Bar>
          <Bar dataKey="health" fill="#ffc658" name="Health">
            <LabelList dataKey="health" position="top" />
          </Bar>
          <Bar dataKey="agricultural" fill="#ff7f50" name="Agricultural">
            <LabelList dataKey="agricultural" position="top" />
          </Bar>
          <Bar dataKey="other" fill="#82ca9d" name="Other">
            <LabelList dataKey="other" position="top" />
          </Bar>
        </BarChart>
      </div>
      <div style={{ width: '800px' }}>
      <p>The <em>Tabular Analysis</em> of Applicants in various <em>Sectors</em> within the respective Year of Applying for Researchs</p>
      </div>
      <div>
        <table style={{ width: '800px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={tableHeaderStyle}>Years ( G.C )</th>
              {data.map((item) => (
                <th key={item.year} style={tableHeaderStyle}>
                  {item.year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr style={tableRowEvenStyle}>
              <td style={tableHeaderStyle}>No. of Industrial Applicants</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>
                  {item.industrial}
                </td>
              ))}
            </tr>
            <tr style={tableRowOddStyle}>
              <td style={tableHeaderStyle}>No. of Environmental & Energy Applicants</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>
                  {item.environmental}
                </td>
              ))}
            </tr>
            <tr style={tableRowEvenStyle}>
              <td style={tableHeaderStyle}>No. of Health Applicants</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>
                  {item.health}
                </td>
              ))}
            </tr>
            <tr style={tableRowOddStyle}>
              <td style={tableHeaderStyle}>No. of Agricultural Applicants</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>
                  {item.agricultural}
                </td>
              ))}
            </tr>
            <tr style={tableRowEvenStyle}>
              <td style={tableHeaderStyle}>No. of Other Applicants</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>
                  {item.other}
                </td>
              ))}
            </tr>
            <tr style={tableRowOddStyle}>
              <td style={tableHeaderStyle}>Total No. of Applicants</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>
                  {item.industrial + item.environmental + item.health + item.agricultural + item.other}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ margin: '10px', textAlign: 'left', fontSize: '16px', width: '800px' }}>
        Total No. of Applicants from ({data[0].year} - {new Date().getFullYear()}): {totalApplicants}
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

export default SectorialGraphicalAnalysis;