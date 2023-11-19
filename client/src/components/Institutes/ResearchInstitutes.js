import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

axios.defaults.withCredentials = true;

const ResearchInstitutes = () => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchResearch = async () => {
      try {
        const response = await axios.get('http://localhost:5001/institutes/post-to-institutes');
        const data = response.data;
        setResearch(data);
      } catch (error) {
        console.error('Error fetching institutes:', error);
      }
    };

    fetchResearch();
  }, []);

  // get file name
  function getFileNameFromPath(filePath) {
    const parts = filePath.split(/[\\/]/); // Split the path using either / or \
    return parts[parts.length - 1]; // Get the last part, which is the file name
  }

  // handle download
  const handleDownload = (fileUrl, fileName) => {
    axios({
      url: fileUrl,
      method: 'GET',
      responseType: 'blob', // Ensure the response type is set to blob
    })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName); // Set the file name and extension
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => {
        console.error('Error downloading file:', error);
        // Handle the error, maybe show a message to the user
      });
  };

  return (
    <div className="container m-10">
      <br /><br />
      <h1 className="mb-4 mt-3 font-weight-bold text-center">Research Institutes</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-pill text-center"
          placeholder="Seach Here"
          aria-label="Enter institute title"
          aria-describedby="basic-addon2"
          style={{ maxWidth: '200px' }}
        />
        <div className="input-group-append mt-2">
          <span className="input-group-text bg-white border-0"><FaSearch /></span>
        </div>
      </div>
      <div className="row">
        {research.map((research, index) => (
          <div key={index} className="mb-5">
            <div className="card rounded shadow grow-on-hover d-flex"> {/* Added grow-on-hover class */}
              <div className="row g-0">
                <div className="col-lg-6">
                <img
                src={research.imagePath}
                className="card-img-top rounded-top"
                alt={`Institute ${index + 1}`}
                style={{ height: '200px', width: '300px' }}
                />
                </div>
                <div className="col mx-5 my-2">
                  <div className="card-body">
                    <h4 className="card-title my-3 text-primary">{research.title}</h4>
                    <p className="col card-text text-muted">{research.description}</p>
                    <h6 className="my-2"><b>Category:</b> {research.category}</h6>
                    <h6 className="my-2"><b>Email:</b> {research.email}</h6>
                    <h6 className="my-2"><b>Phone:</b> {research.phone}</h6>
                    <Link
                      to="#"
                      onClick={() => handleDownload(research.link, getFileNameFromPath(research.link))}
                      className="btn btn-primary my-2"
                    >
                      Download
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-left mt-3 mx-5">
        <Link style={{ marginBottom: "30px" }} to="/view-more" className="btn btn-primary">View More</Link>
      </div>
    </div>
  );
};

export default ResearchInstitutes;


























// import React,{useState} from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
// // import './ResearchInstitutes.css'
// import AHRI from '../../images/Institutes/AHRI.png';
// import ILRI from '../../images/Institutes/ILRI-CGIAR-logo.svg';
// import EDRI from '../../images/Institutes/EDRI.png';

  
    


// function ResearchInstitutes() {
//   return (
// <container>
// <div className='row'>
// <div className='col'>
// <>
//     <br />
//     <br />
//     <Container>
      
//       <Row className="align-items-center">
//         <Col>
//           <img src={AHRI} alt="Logo" className="img-fluid" />
//         </Col>
//         <Col xs={9} md={10}>
//           <hl  className="mb-2" style={{  textAlign: 'center', fontSize: '60px' }}> Research Institutes </hl>
//           <h2 className="mb-2"><a href='https://ahri.gov.et/' style={{textDecoration: 'none'}}>AHRI - Armauer Hansen Research Institute</a></h2>
//           <p className="mb-1" style={{color:'grey'}}>AHRI is a Biomedical research Institute in Ethiopia which is working in tuberculosis, HIV, malaria, Leishmaniasis, training and research capacity building. AHRI is undergoing reform to transform itself to be an institute embracing research agenda which will have direct impact in development and transformation of population in Ethiopia and Africa.',
//           </p>
//           <p className="mb-1">Email:<span className="text-orange"> admin@ahri.gov.et</span></p>
//           <p className="mb-0">Phone: <span className="text-orange">+251113483752</span></p>
//         </Col>
//       </Row>
//     </Container>
//     <br /><br />
//     <Container>
//         <Row className="align-items-center">
//           <Col>
//             <img src={ILRI} alt="Logo" className="img-fluid" />
//           </Col>
//           <Col xs={9} md={10}>
//             <h2 className="mb-2"><a href='https://www.ilri.org/' style={{textDecoration: 'none'}}>International Livestock Research Institute</a></h2>
//             <p className="mb-1" style={{color:'grey'}}>ILRI works to improve food security and reduce poverty through research for better and more sustainable use of livestock  ,
//             </p>
//             <p className="mb-1">Email: <span className="text-orange">Ethiopia@cgiar.org</span></p>
//             <p className="mb-0">Phone: <span className="text-orange">+251-11 617 2000</span></p>
//           </Col>
//         </Row>
//       </Container>
//       <br /><br />
//       <Container>
//         <Row className="align-items-center">
//           <Col>
//             <img src={EDRI} alt="Logo" className="img-fluid" />
//           </Col>
//           <Col xs={9} md={10}>
//             <h2 className="mb-2"><a href='https://socialprotection.org/connect/stakeholders/ethiopian-development-research-institute-edri' style={{textDecoration: 'none'}}>Ethiopian Development Research institute (EDRI)</a></h2>
//             <p style={{color:'grey'}} className="mb-1">The Ethiopian Development Research Institute is a semi-autonomous research think-tank engaged in: 
//             Economic research and policy analysis, Bridging research and policy, Capacity, Knowledge dissemination and exchange and Consultancy.
//             </p>
//             <p className="mb-0">Phone: <span className="text-orange">+251 (0)115 506 066</span></p>
//           </Col>
//         </Row>
//       </Container>
//       <br /><br />
//       <div className="d-flex justify-content-end me-5 mt-3">
//         <button className="btn btn-primary">
//           <a href="/" style={{ color: 'white', textDecoration: 'none'}}>Next Page</a>
//         </button>
      
//       </div>
//       </>


// </div>

// </div>
// <br/>
// </container>

   
//      // Add more institutes as needed

//   );
// }

// export default ResearchInstitutes;