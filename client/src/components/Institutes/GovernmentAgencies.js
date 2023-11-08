import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

import ethiopianBitech from '../../images/Institutes/ethipianBitech.png';
import essti from '../../images/Institutes/essti-logo.jpeg';
import INSA from '../../images/Institutes/INSA.png';


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
            <img src={INSA} alt="Logo" className="img-fluid" />
          </Col>
          <Col xs={9} md={10}>
            <h2 className="mb-2"><a href='https://www.insa.gov.et' style={{textDecoration: 'none'}}>Information Network Security Administration (INSA)  </a></h2>
            <p style={{color:'grey'}} className="mb-1">The Information Network Security Administration (INSA) was established for the first 
            time in 1999 in accordance with Council of Ministers Regulation No. 130/1999 with the aim of protecting our country's information
             and information infrastructure from harm.
            </p>
            <p className="mb-1">Email: <span className="text-orange"> contact@insa.gov.et</span> </p>
            <p className="mb-0">Phone: <span className="text-orange">+251-113-71-71-14 (Ethiopia)
</span></p>
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