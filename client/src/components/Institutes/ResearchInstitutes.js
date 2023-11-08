import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
// import './ResearchInstitutes.css'
import AHRI from '../../images/Institutes/AHRI.png';
import ILRI from '../../images/Institutes/ILRI-CGIAR-logo.svg';
import EDRI from '../../images/Institutes/EDRI.png';

  
    


function ResearchInstitutes() {
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
          <img src={AHRI} alt="Logo" className="img-fluid" />
        </Col>
        <Col xs={9} md={10}>
          <hl  className="mb-2" style={{  textAlign: 'center', fontSize: '60px' }}> Research Institutes </hl>
          <h2 className="mb-2"><a href='https://ahri.gov.et/' style={{textDecoration: 'none'}}>AHRI - Armauer Hansen Research Institute</a></h2>
          <p className="mb-1" style={{color:'grey'}}>AHRI is a Biomedical research Institute in Ethiopia which is working in tuberculosis, HIV, malaria, Leishmaniasis, training and research capacity building. AHRI is undergoing reform to transform itself to be an institute embracing research agenda which will have direct impact in development and transformation of population in Ethiopia and Africa.',
          </p>
          <p className="mb-1">Email:<span className="text-orange"> admin@ahri.gov.et</span></p>
          <p className="mb-0">Phone: <span className="text-orange">+251113483752</span></p>
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
            <p className="mb-1" style={{color:'grey'}}>ILRI works to improve food security and reduce poverty through research for better and more sustainable use of livestock  ,
            </p>
            <p className="mb-1">Email: <span className="text-orange">Ethiopia@cgiar.org</span></p>
            <p className="mb-0">Phone: <span className="text-orange">+251-11 617 2000</span></p>
          </Col>
        </Row>
      </Container>
      <br /><br />
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={EDRI} alt="Logo" className="img-fluid" />
          </Col>
          <Col xs={9} md={10}>
            <h2 className="mb-2"><a href='https://socialprotection.org/connect/stakeholders/ethiopian-development-research-institute-edri' style={{textDecoration: 'none'}}>Ethiopian Development Research institute (EDRI)</a></h2>
            <p style={{color:'grey'}} className="mb-1">The Ethiopian Development Research Institute is a semi-autonomous research think-tank engaged in: 
            Economic research and policy analysis, Bridging research and policy, Capacity, Knowledge dissemination and exchange and Consultancy.
            </p>
            <p className="mb-0">Phone: <span className="text-orange">+251 (0)115 506 066</span></p>
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

export default ResearchInstitutes;