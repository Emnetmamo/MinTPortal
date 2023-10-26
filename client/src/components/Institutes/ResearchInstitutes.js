
// import './ResearchInstitutes.css'
import AHRI from '../../images/Institutes/AHRI.png';
import ILRI from '../../images/Institutes/ILRI-CGIAR-logo.svg';
import ethiopianBitech from '../../images/Institutes/ethipianBitech.png';

  
    

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ResearchInstitutes() {
  return (
    <>
    <br /><br />
    <Container>
      <Row className="align-items-center">
        <Col>
          <img src={AHRI} alt="Logo" className="img-fluid" />
        </Col>
        <Col xs={9} md={10}>
          <h2 className="mb-2"><a href='https://ahri.gov.et/' style={{textDecoration: 'none'}}>AHRI - Armauer Hansen Research Institute</a></h2>
          <p className="mb-1">      AHRI is a Biomedical research Institute in Ethiopia which is working in tuberculosis, HIV, malaria, Leishmaniasis, training and research capacity building. AHRI is undergoing reform to transform itself to be an institute embracing research agenda which will have direct impact in development and transformation of population in Ethiopia and Africa.',
          </p>
          <p className="mb-1">Email:<span className="text-orange"> example@example.com</span></p>
          <p className="mb-0">Phone: <span className="text-orange">+1 123-456-7890</span></p>
        </Col>
      </Row>
    </Container>
    <br /><br />
    <Container>
        <Row className="align-items-center">
          <Col>
            <img src={ILRI} alt="Logo" className="img-fluid" />
          </Col>
          <Col xs={9} md={10}>
            <h2 className="mb-2"><a href='https://www.ilri.org/' style={{textDecoration: 'none'}}>International Livestock Research Institute</a></h2>
            <p className="mb-1">    We work to improve food security and reduce poverty through research for better and more sustainable use of livestock  ,
            </p>
            <p className="mb-1">Email:<span className="text-orange"> example@example.com</span></p>
            <p className="mb-0">Phone:<span className="text-orange"> +1 123-456-7890</span></p>
          </Col>
        </Row>
      </Container>
      <br /><br />
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={ethiopianBitech} alt="Logo" className="img-fluid" />
          </Col>
          <Col xs={9} md={10}>
            <h2 className="mb-2"><a href='https://www.betin.gov.et/' style={{textDecoration: 'none'}}>Ethiopia Biotechnology Institutes</a></h2>
            <p className="mb-1">   AHRI is a Biomedical research Institute in Ethiopia which is working in tuberculosis, HIV, malaria, Leishmaniasis, training and research capacity building. AHRI is undergoing reform to transform itself to be an institute embracing research agenda which will have direct impact in development and transformation of population in Ethiopia and Africa.',
            </p>
            <p className="mb-1">Email: <span className="text-orange"> example@example.com</span> </p>
            <p className="mb-0">Phone: <span className="text-orange">+1 123-456-7890</span></p>
          </Col>
        </Row>
      </Container>
      <br /><br />
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary">
          <a href="/" style={{ color: 'white', textDecoration: 'none'}}>Next Page</a>
        </button>
      </div>
      </>

     // Add more institutes as needed

  );
}

export default ResearchInstitutes;