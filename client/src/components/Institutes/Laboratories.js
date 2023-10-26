import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import AHRI from '../../images/Institutes/AHRI.png';
import partner from '../../images/Institutes/Ict-partners.png';

function Laboratories() {
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
  );
}

export default Laboratories;