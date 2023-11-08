import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

import ethiopianBitech from '../../images/Institutes/ethipianBitech.png';
import essti from '../../images/Institutes/essti-logo.jpeg';
import dreamTech from '../../images/Institutes/dreamtech_logo.png';


function GovernmentAgencies() {
  return (
<container>
<div className='row'>
<div className='col'>
<>
    <br />
    <br />
    <Container>
      
      <Row className="align-items-center">
        <Col>
          <img src={essti} alt="Logo" className="img-fluid" />
        </Col>
        <Col xs={9} md={10}>
          <hl  className="mb-2" style={{  textAlign: 'center', fontSize: '60px' }}>Government Agencies </hl>
          <h2 className="mb-2"><a href='https://etssti.org/' style={{textDecoration: 'none'}}> 
          ETHIOPIAN SPACE SCIENCE AND TECHNOLOGY INSTITUTE </a></h2>
          <p className="mb-1" style={{color:'grey'}}>Contribute to the development of the national economy by 
          providing creative and social services to our people and improving their living conditions in the field
           of space science and technology, In astronomy and astrophysics, on earth view global and to provide 
           competitive research in aeronautics and astronomy, manpower training and international relations.
           </p>
          <p className="mb-1">Email: <span className="text-orange">mainessti@essti.gov.et</span></p>
          <p className="mb-0">Phone: <span className="text-orange">+251-928-992614 |
+251-118-961050</span></p>
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
            <p style={{color:'grey'}} className="mb-1">Betin resolves and address the major challenges in society
             that are related to health, food security, the realization of sustainable 
             development and facilitate the basement of industrialization, work on human 
             development and to establish the general
             framework and basic structures for national innovative research.
            </p>
            <p className="mb-1">Email: <span className="text-orange"> info@betin.gov.et</span> </p>
            <p className="mb-0">Phone: <span className="text-orange">+251118619695/ +251118756388</span></p>
          </Col>
        </Row>
      </Container>
      <br /><br />
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={dreamTech} alt="Logo" className="img-fluid" />
          </Col>
          <Col xs={9} md={10}>
            <h2 className="mb-2"><a href='https://dreamtech.et/' style={{textDecoration: 'none'}}>Dream Tech </a></h2>
            <p style={{color:'grey'}} className="mb-1">Dream Tech P.L.C is a leading Web and Mobile App development providing 
            Company that offers Web Applications Development, FullStack Development, E-commerce Solution Development, 
            CMS Websites, API Integration, Website Design and Development, Mobile App Development and Design, Server and System
             Administration with high satisfaction with our valuable clients. We provide high-quality software at an economical cost.
              We also offer enterprise-level SAAS applications as well.
            </p>
            <p className="mb-1">Email: <span className="text-orange"> info@dreamtech.et</span> </p>
            <p className="mb-0">Phone: <span className="text-orange">0911191347 (Ethiopia)
+17173333224 (USA)</span></p>
          </Col>
        </Row>
      </Container>
      <br /><br />
      <div className="d-flex justify-content-end me-5 mt-3">
        <button className="btn btn-primary">
          <a href="/" style={{ color: 'white', textDecoration: 'none'}}>Next Page</a>
        </button>
      
      </div>
      </>


</div>

</div>
<br/>
</container>

   
     // Add more institutes as needed

  );
}


export default GovernmentAgencies;