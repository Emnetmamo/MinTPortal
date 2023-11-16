import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

import zalaTech from '../../images/Institutes/Zalatech-wp-e1540712041216.png';
import erp from '../../images/Institutes/erp-logo.jpeg';
import dreamTech from '../../images/Institutes/dreamtech_logo.png';


function IctPartners() {
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
          <img src={erp} alt="Logo" className="img-fluid" />
        </Col>
        <Col xs={9} md={10}>
          <hl  className="mb-2" style={{  textAlign: 'center', fontSize: '60px' }}>ICT Partners </hl>
          <h2 className="mb-2"><a href='	https:// www.erpethiopia.com' style={{textDecoration: 'none'}}>ERP Solutions PLC </a></h2>
          <p className="mb-1" style={{color:'grey'}}>Our company is owned by Ethiopian Entrepreneurs and is strongly supported by 
          Indian based private equity firm which brings experience, strategic advice and financial support.
          We have proven experience in Ethiopia and have successfully implemented the full 
          ERP system for more than 10 companies like Ethiopian Trading Business corporation, 
          East Africa Specialized Engineering, Bamacon Engineering PLC, Amhara Metal works Enterprise, 
          Gafat Endowment, Kibru Tesfaye Import Export, Labora International Trading PLC and so on.
           </p>
          <p className="mb-1">Email: <span className="text-orange">contact@erpethiopia.com</span></p>
          <p className="mb-0">Phone: <span className="text-orange">	+251982527979</span></p>
        </Col>
      </Row>
    </Container>
    <br /><br />
    <Container>
        <Row className="align-items-center">
          <Col>
            <img src={zalaTech} alt="Logo" className="img-fluid" />
          </Col>
          <Col xs={9} md={10}>
            <h2 className="mb-2"><a href='https://zalatechs.com/' style={{textDecoration: 'none'}}>ZalaTech </a></h2>
            <p className="mb-1" style={{color:'grey'}}>We make sure your website is fast,
             secure & always up – so your visitors & search engines trust you.
              Guaranteed. ZalaTech Ethiopia Top-rated website hosting service best-suited 
            for individuals, bloggers, small and medium businesses.</p>
            <p className="mb-1">Email: <span className="text-orange">info@zalatechs.com</span></p>
            <p className="mb-0">Phone: <span className="text-orange">+251-911-645867 | +251-912-974411</span></p>
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
export default IctPartners;