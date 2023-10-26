import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
// import './ResearchInstitutes.css'
import AHRI from '../../images/Institutes/AHRI.png';
import ILRI from '../../images/Institutes/ILRI-CGIAR-logo.svg';
import ethiopianBitech from '../../images/Institutes/ethipianBitech.png';

  
    


function ResearchInstitutes() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }
  return (
<container>
<div className='row'>
<div className='col-sm-2 mt-5' style={{ position: 'fixed', marginRight: '80px' }}>
  <div className="menu" style={{ backgroundColor: '#11676d', marginBottom: '80px', borderRadius: '10px' }}>
    <ul className="menu-items" style={{ listStyleType: 'none', padding: '40px' }}>
      <li className="menu-item active" data-content="institutes">Institutes</li>
      <li className="menu-item" data-content="research" style={{ width: '100%', marginBottom: '10px' }}>
        <Link to='/resources/institutes/research' style={{ textDecoration: 'none', backgroundColor: 'orange', borderRadius: '5px', width: '100%' }} onClick={handleClick}>Research Institutes</Link>
      </li>
      <li className="menu-item" data-content="labs" style={{ width: '100%', marginBottom: '10px' }}>
        <Link to='/resources/institutes/labs' style={{ textDecoration: 'none', backgroundColor: 'orange', borderRadius: '5px', width: '100%' }} onClick={handleClick}>Laboratories</Link>
      </li>
      <li className="menu-item" data-content="ict" style={{ width: '100%', marginBottom: '10px' }}>
        <Link to='/resources/institutes/ict' style={{ textDecoration: 'none', backgroundColor: 'orange', borderRadius: '5px', width: '100%' }} onClick={handleClick}>ICT Partners</Link>
      </li>
      <li className="menu-item" data-content="government" style={{ width: '100%', marginBottom: '10px' }}>
        <Link to='/resources/institutes/government' style={{ textDecoration: 'none', backgroundColor: 'orange', borderRadius: '5px', width: '100%' }} onClick={handleClick}>Government Agency</Link>
      </li>
    </ul>
  </div>
</div>
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


</div>

</div>

</container>

   
     // Add more institutes as needed

  );
}

export default ResearchInstitutes;