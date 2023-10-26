import React,{useState} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import AHRI from '../../images/Institutes/AHRI.png';
import partner from '../../images/Institutes/Ict-partners.png';

function Laboratories() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }
  const labs = [
    {
      id: 1,
      name: 'Lab 1',
      image: AHRI,
      description: 'Description of Lab 1',
      email: 'lab1@example.com',
      phone: '+1 123-456-7890'
    },
    {
      id: 2,
      name: 'Lab 2',
      image: partner,
      description: 'Description of Lab 2',
      email: 'lab2@example.com',
      phone: '+1 234-567-8901'
    }
    // Add more labs as needed
  ];

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
<Container>
      <h2>Laboratories</h2>
      {labs.map(lab => (
        <Row key={lab.id} className="mb-4">
          <Col md={3}>
            <img src={lab.image} alt={`${lab.name} Image`} className="img-fluid" />
          </Col>
          <Col md={9}>
            <div className="lab-details">
              <h3>{lab.name}</h3>
              <p>{lab.description}</p>
              <Form>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={lab.email} disabled />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" value={lab.phone} disabled />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      ))}
    </Container>

</div>
</div>
</container>

   
  );
}

export default Laboratories;