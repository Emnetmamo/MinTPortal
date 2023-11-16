import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
// import './ResearchInstitutes.css'
import ICL from '../../images/Institutes/ICL-LOGO-NEW.png';
import BLESS from '../../images/Institutes/blessLogo.svg';
import ARSHO from '../../images/Institutes/arsho.png';



function Laboratories() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }
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
          <img src={ICL} alt="Logo" className="img-fluid" />
        </Col>
        <Col xs={9} md={10}>
          <hl  className="mb-2" style={{  textAlign: 'center', fontSize: '60px' }}> Laboratories</hl>
          <h2 className="mb-2"><a href='https://www.icladdis.com/' style={{textDecoration: 'none'}}>
          INTERNATIONAL CLINICAL LABORATORY</a></h2>
          <p className="mb-1" style={{color:'grey'}}> ICL serves its clients with its high tech equipment 
          and extreme professionals. At ICL we provide you with  more than 2000 Tests at international standard.
          </p>
          <p className="mb-1">Email: <span className="text-orange"> info@icladdis.com</span></p>
          <p className="mb-0">Phone: <span className="text-orange">	+251114671818</span></p>
        </Col>
      </Row>
    </Container>
    <br /><br />
    <Container>
        <Row className="align-items-center">
          <Col>
            <img src={BLESS} style={{backgroundColor:'black'}} alt="Logo" className="img-fluid" />
          </Col>
          <Col xs={9} md={10}>
            <h2 className="mb-2"><a href='https://www.blesslaboratory.com/' style={{textDecoration: 'none'}}>BLESS AGRI FOOD LABORATORY SERVICE PLC</a></h2>
            <p className="mb-1" style={{color:'grey'}}>
              BLESS Agri-Food Laboratory services PLC laboratory established by the joint venture of Ethiopian and French investors in 2011. 
              Bless serves as one of the Country’s focal conformity assessment body specializing in testing, product certification, inspection 
              and training services on agri-food items.
            </p>
            <p className="mb-1">Email: <span className="text-orange">info@blesslaboratory.com</span></p>
            <p className="mb-0">Phone: <span className="text-orange">	+251116679221</span></p>
          </Col>
        </Row>
      </Container>
      <br /><br />
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={ARSHO} alt="Logo" className="img-fluid" />
          </Col>
          <Col xs={9} md={10}>
            <h2 className="mb-2"><a href='https://www.arsholab.com' style={{textDecoration: 'none'}}>ARSHO MEDICAL LABORATORIES PLC</a></h2>
            <p style={{color:'grey'}} className="mb-1">Arsho Lab service is diagnosing patient samples collected from our different sites around the country. 
            All testings are performed following standard operating procedures 
            that are revised regularly. Patient samples will be tested only when daily
             control runs are acceptable according to the setWestgard rules.
             Automated analyzers in our Core laboratory (Hematology,Chemistry and Immino assay) 
            are interfaced with the Lab information computerized system (LIS) to avoid transcription errors.
            </p>
            <p className="mb-1">Email: <span className="text-orange">info@arsholab.com</span> </p>
            <p className="mb-0">Phone: <span className="text-orange">+251 11 416 70 89 or +251 11 467 29 98</span></p>
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

export default Laboratories;