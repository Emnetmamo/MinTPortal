import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Label } from 'recharts';

const SectorialGraphicalAnalysis = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(('http://localhost:5001/resources/project-idea'));
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateTotal = (data) => {
    return data.reduce(
      (total, item) =>
        total + item.industry + item.environmemtEnergy + item.health + item.agriculture + item.other,
      0
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const totalApplicants = calculateTotal(data);

  return (
    <div style={{ marginTop: '40px', marginLeft: '250px' }}>
      <div style={{ width: '800px' }}>
        <p>
          The <em>Graphical Analysis</em> of Applicants in various <em>Sectors</em> within the respective Year of Applying for Researchs
        </p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <BarChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year">
            <Label value="Years ( G.C )" position="bottom" offset={-10} style={{ textAnchor: 'middle' }} />
          </XAxis>
          <YAxis>
            <Label value="Number of Applicants" position="left" angle={-90} offset={-10} style={{ textAnchor: 'middle' }} />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="industry" fill="#8884d8" name="Industrial">
            <LabelList dataKey="industry" position="top" />
          </Bar>
          <Bar dataKey="environmemtEnergy" fill="#82ca9d" name="Environmental & Energy">
            <LabelList dataKey="environmemtEnergy" position="top" />
          </Bar>
          <Bar dataKey="health" fill="#ffc658" name="Health">
            <LabelList dataKey="health" position="top" />
          </Bar>
          <Bar dataKey="agriculture" fill="#ff7f50" name="Agricultural">
            <LabelList dataKey="agriculture" position="top" />
          </Bar>
          <Bar dataKey="other" fill="#82ca9d" name="Other">
            <LabelList dataKey="other" position="top" />
          </Bar>
        </BarChart>
      </div>
      <div style={{ width: '800px' }}>
        <p>
          The <em>Tabular Analysis</em> of Applicants in various <em>Sectors</em> within the respective Year of Applying for Researchs
        </p>
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
                  {item.industry}
                </td>
              ))}
            </tr>
            <tr style={tableRowOddStyle}>
              <td style={tableHeaderStyle}>No. of Environmental & Energy Applicants</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>
                  {item.environmemtEnergy}
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
                  {item.agriculture}
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
              <td style={tableHeaderStyle}>Total Applicants</td>
              {data.map((item) => (
                <td key={item.year} style={tableCellStyle}>
                  {item.industry + item.environmemtEnergy + item.health + item.agriculture + item.other}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ width: '800px' }}>
        <p>
          Total number of applicants in all sectors: <strong>{totalApplicants}</strong>
        </p>
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