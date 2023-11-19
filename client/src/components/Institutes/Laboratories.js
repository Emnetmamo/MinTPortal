

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

axios.defaults.withCredentials = true;

const Laboratories = () => {
  const [laboratories, setLaboratories] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchLaboratories = async () => {
      try {
        const response = await axios.get('http://localhost:5001/institutes/post-to-institutes');
        const data = response.data;
        setLaboratories(data);
      } catch (error) {
        console.error('Error fetching institutes:', error);
      }
    };

    fetchLaboratories();
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
      <h1 className="mb-4 mt-3 font-weight-bold text-center">Laboratories</h1>
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
        {laboratories.map((laboratories, index) => (
          <div key={index} className="mb-5">
            <div className="card rounded shadow grow-on-hover d-flex"> {/* Added grow-on-hover class */}
              <div className="row g-0">
                <div className="col-lg-6">
                <img
                src={laboratories.imagePath}
                className="card-img-top rounded-top"
                alt={`Institute ${index + 1}`}
                style={{ height: '200px', width: '300px' }}
                />
                </div>
                <div className="col mx-5 my-2">
                  <div className="card-body">
                    <h4 className="card-title my-3 text-primary">{laboratories.title}</h4>
                    <p className="col card-text text-muted">{laboratories.description}</p>
                    <h6 className="my-2"><b>Category:</b> {laboratories.category}</h6>
                    <h6 className="my-2"><b>Email:</b> {laboratories.email}</h6>
                    <h6 className="my-2"><b>Phone:</b> {laboratories.phone}</h6>
                    <Link
                      to="#"
                      onClick={() => handleDownload(laboratories.link, getFileNameFromPath(laboratories.link))}
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

export default Laboratories;




























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


















// import React,{useState} from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
// // import './ResearchInstitutes.css'
// import ICL from '../../images/Institutes/ICL-LOGO-NEW.png';
// import BLESS from '../../images/Institutes/blessLogo.svg';
// import ARSHO from '../../images/Institutes/arsho.png';



// function Laboratories() {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(true);
//   }
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
//           <img src={ICL} alt="Logo" className="img-fluid" />
//         </Col>
//         <Col xs={9} md={10}>
//           <hl  className="mb-2" style={{  textAlign: 'center', fontSize: '60px' }}> Laboratories</hl>
//           <h2 className="mb-2"><a href='https://www.icladdis.com/' style={{textDecoration: 'none'}}>
//           INTERNATIONAL CLINICAL LABORATORY</a></h2>
//           <p className="mb-1" style={{color:'grey'}}> ICL serves its clients with its high tech equipment 
//           and extreme professionals. At ICL we provide you with  more than 2000 Tests at international standard.
//           </p>
//           <p className="mb-1">Email: <span className="text-orange"> info@icladdis.com</span></p>
//           <p className="mb-0">Phone: <span className="text-orange">	+251114671818</span></p>
//         </Col>
//       </Row>
//     </Container>
//     <br /><br />
//     <Container>
//         <Row className="align-items-center">
//           <Col>
//             <img src={BLESS} style={{backgroundColor:'black'}} alt="Logo" className="img-fluid" />
//           </Col>
//           <Col xs={9} md={10}>
//             <h2 className="mb-2"><a href='https://www.blesslaboratory.com/' style={{textDecoration: 'none'}}>BLESS AGRI FOOD LABORATORY SERVICE PLC</a></h2>
//             <p className="mb-1" style={{color:'grey'}}>
//               BLESS Agri-Food Laboratory services PLC laboratory established by the joint venture of Ethiopian and French investors in 2011. 
//               Bless serves as one of the Country’s focal conformity assessment body specializing in testing, product certification, inspection 
//               and training services on agri-food items.
//             </p>
//             <p className="mb-1">Email: <span className="text-orange">info@blesslaboratory.com</span></p>
//             <p className="mb-0">Phone: <span className="text-orange">	+251116679221</span></p>
//           </Col>
//         </Row>
//       </Container>
//       <br /><br />
//       <Container>
//         <Row className="align-items-center">
//           <Col>
//             <img src={ARSHO} alt="Logo" className="img-fluid" />
//           </Col>
//           <Col xs={9} md={10}>
//             <h2 className="mb-2"><a href='https://www.arsholab.com' style={{textDecoration: 'none'}}>ARSHO MEDICAL LABORATORIES PLC</a></h2>
//             <p style={{color:'grey'}} className="mb-1">Arsho Lab service is diagnosing patient samples collected from our different sites around the country. 
//             All testings are performed following standard operating procedures 
//             that are revised regularly. Patient samples will be tested only when daily
//              control runs are acceptable according to the setWestgard rules.
//              Automated analyzers in our Core laboratory (Hematology,Chemistry and Immino assay) 
//             are interfaced with the Lab information computerized system (LIS) to avoid transcription errors.
//             </p>
//             <p className="mb-1">Email: <span className="text-orange">info@arsholab.com</span> </p>
//             <p className="mb-0">Phone: <span className="text-orange">+251 11 416 70 89 or +251 11 467 29 98</span></p>
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

// export default Laboratories;