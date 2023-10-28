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
      name: 'Lab A',
      image: AHRI,
      description: 'Lab A is a research laboratory dedicated to advancing scientific discoveries in a specific field or discipline. It provides a controlled environment where researchers can conduct experiments, analyze data, and collaborate on innovative projects. The lab is equipped with state-of-the-art equipment and tools necessary for conducting experiments, making observations, and collecting data.Lab A focuses on studying and exploring various aspects of its specific field. It aims to address research questions, develop new methodologies, and contribute to the existing knowledge in the field. The lab may specialize in areas such as biotechnology, chemistry, physics, computer science, or any other scientific domain. Researchers in Lab 1 work on projects that can range from fundamental scientific research to applied research with practical implications.',
      email: 'lab1@example.com',
      phone: '+1 123-456-7890'
    },
    {
      id: 2,
      name: 'Lab B',
      image: partner,
      description: 'Lab B is a specialized laboratory dedicated to conducting research and experiments in a specific scientific field. It provides a controlled environment for scientists, researchers, and students to explore and investigate various phenomena, theories, and applications related to their area of focus. The lab is equipped with advanced equipment, instruments, and technologies necessary for carrying out experiments, data analysis, and research simulations. Lab 2 focuses on advancing knowledge and understanding in its specific scientific field. Lab B work on projects that encompass a wide range of topics, including but not limited to biology, environmental science, engineering, materials science, or neuroscience. The labs research activities may involve conducting experiments, analyzing data, developing new technologies, or exploring innovative approaches to solve complex problems in the field.',
      email: 'lab2@example.com',
      phone: '+1 234-567-8901'
    }
    // Add more labs as needed
  ];

  return (
<container>
<div className='row'>
<div className="col-sm-3 mt-5" >
  <div className="menu" style={{ backgroundColor: '#11676d', marginBottom: '80px', borderRadius: '10px' }}>
    <ul className=" list-group" style={{ listStyleType: 'none', padding: '40px' }}>
      
      <li className="list-group-item list-group-item-dark" data-content="research" style={{ width: '100%', marginBottom: '10px' ,backgroundColor: 'orange', borderRadius: '5px'}}>
        <Link to='/institutes/research' style={{ textDecoration: 'none', width: '100%', color:'white'}} onClick={handleClick}>Research Institutes</Link>
      </li>
      <li className=" list-group-item list-group-item-dark" data-content="labs" style={{ width: '100%', marginBottom: '10px',backgroundColor: 'orange', borderRadius: '5px' }}>
        <Link to='/institutes/labs' style={{ textDecoration: 'none', width: '100%', color:'white' }} onClick={handleClick}>Laboratories</Link>
      </li>
      <li className=" list-group-item list-group-item-dark" data-content="ict" style={{ width: '100%', marginBottom: '10px',backgroundColor: 'orange', borderRadius: '5px' }}>
        <Link to='/institutes/ict' style={{ textDecoration: 'none', width: '100%', color:'white' }} onClick={handleClick}>ICT Partners</Link>
      </li>
      <li className=" list-group-item list-group-item-dark" data-content="government" style={{ width: '100%', marginBottom: '10px' ,backgroundColor: 'orange', borderRadius: '5px'}}>
        <Link to='/institutes/government' style={{ textDecoration: 'none', width: '100%', color:'white' }} onClick={handleClick}>Government Agency</Link>
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
<div className="d-flex justify-content-end" style={{ marginRight: '50px' }}>
        <button className="btn btn-primary">
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Next Page</a>
        </button>
      </div> 
      <br/> 
</container>

   
  );
}

export default Laboratories;