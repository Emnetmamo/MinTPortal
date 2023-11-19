
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

axios.defaults.withCredentials = true;

const IctPartners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchPartners = async () => {
      try {
        const response = await axios.get('http://localhost:5001/institutes/post-to-institutes');
        const data = response.data;
        setPartners(data);
      } catch (error) {
        console.error('Error fetching institutes:', error);
      }
    };

    fetchPartners();
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
      <h1 className="mb-4 mt-3 font-weight-bold text-center">ICT Partners</h1>
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
        {partners.map((partners, index) => (
          <div key={index} className="mb-5">
            <div className="card rounded shadow grow-on-hover d-flex"> {/* Added grow-on-hover class */}
              <div className="row g-0">
                <div className="col-lg-6">
                <img
                src={partners.imagePath}
                className="card-img-top rounded-top"
                alt={`Institute ${index + 1}`}
                style={{ height: '200px', width: '300px' }}
                />
                </div>
                <div className="col mx-5 my-2">
                  <div className="card-body">
                    <h4 className="card-title my-3 text-primary">{partners.title}</h4>
                    <p className="col card-text text-muted">{partners.description}</p>
                    <h6 className="my-2"><b>Category:</b> {partners.category}</h6>
                    <h6 className="my-2"><b>Email:</b> {partners.email}</h6>
                    <h6 className="my-2"><b>Phone:</b> {partners.phone}</h6>
                    <Link
                      to="#"
                      onClick={() => handleDownload(partners.link, getFileNameFromPath(partners.link))}
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

export default IctPartners;




























// import React,{useState} from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 

// import zalaTech from '../../images/Institutes/Zalatech-wp-e1540712041216.png';
// import erp from '../../images/Institutes/erp-logo.jpeg';
// import dreamTech from '../../images/Institutes/dreamtech_logo.png';


// function IctPartners() {
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
//           <img src={erp} alt="Logo" className="img-fluid" />
//         </Col>
//         <Col xs={9} md={10}>
//           <hl  className="mb-2" style={{  textAlign: 'center', fontSize: '60px' }}>ICT Partners </hl>
//           <h2 className="mb-2"><a href='	https:// www.erpethiopia.com' style={{textDecoration: 'none'}}>ERP Solutions PLC </a></h2>
//           <p className="mb-1" style={{color:'grey'}}>Our company is owned by Ethiopian Entrepreneurs and is strongly supported by 
//           Indian based private equity firm which brings experience, strategic advice and financial support.
//           We have proven experience in Ethiopia and have successfully implemented the full 
//           ERP system for more than 10 companies like Ethiopian Trading Business corporation, 
//           East Africa Specialized Engineering, Bamacon Engineering PLC, Amhara Metal works Enterprise, 
//           Gafat Endowment, Kibru Tesfaye Import Export, Labora International Trading PLC and so on.
//            </p>
//           <p className="mb-1">Email: <span className="text-orange">contact@erpethiopia.com</span></p>
//           <p className="mb-0">Phone: <span className="text-orange">	+251982527979</span></p>
//         </Col>
//       </Row>
//     </Container>
//     <br /><br />
//     <Container>
//         <Row className="align-items-center">
//           <Col>
//             <img src={zalaTech} alt="Logo" className="img-fluid" />
//           </Col>
//           <Col xs={9} md={10}>
//             <h2 className="mb-2"><a href='https://zalatechs.com/' style={{textDecoration: 'none'}}>ZalaTech </a></h2>
//             <p className="mb-1" style={{color:'grey'}}>We make sure your website is fast,
//              secure & always up – so your visitors & search engines trust you.
//               Guaranteed. ZalaTech Ethiopia Top-rated website hosting service best-suited 
//             for individuals, bloggers, small and medium businesses.</p>
//             <p className="mb-1">Email: <span className="text-orange">info@zalatechs.com</span></p>
//             <p className="mb-0">Phone: <span className="text-orange">+251-911-645867 | +251-912-974411</span></p>
//           </Col>
//         </Row>
//       </Container>
//       <br /><br />
//       <Container>
//         <Row className="align-items-center">
//           <Col>
//             <img src={dreamTech} alt="Logo" className="img-fluid" />
//           </Col>
//           <Col xs={9} md={10}>
//             <h2 className="mb-2"><a href='https://dreamtech.et/' style={{textDecoration: 'none'}}>Dream Tech </a></h2>
//             <p style={{color:'grey'}} className="mb-1">Dream Tech P.L.C is a leading Web and Mobile App development providing 
//             Company that offers Web Applications Development, FullStack Development, E-commerce Solution Development, 
//             CMS Websites, API Integration, Website Design and Development, Mobile App Development and Design, Server and System
//              Administration with high satisfaction with our valuable clients. We provide high-quality software at an economical cost.
//               We also offer enterprise-level SAAS applications as well.
//             </p>
//             <p className="mb-1">Email: <span className="text-orange"> info@dreamtech.et</span> </p>
//             <p className="mb-0">Phone: <span className="text-orange">0911191347 (Ethiopia)
// +17173333224 (USA)</span></p>
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
// export default IctPartners;