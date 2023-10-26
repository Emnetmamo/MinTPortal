import React,{useState} from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
const GovernmentAgencies = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }
  return (
    <Container>
      <div className='row'>
      <div className="col-sm-3 mt-5" style={{ position: 'fixed', zIndex: '1' }}>
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
        <div className='col' >
        <br /><br />
      <h1 style={{ color: 'orange'}}>Governmental Agencies</h1>

      <p style={{ fontSize: '20px'}}>
        On this page, you will find contact information for Ethiopian federal government departments and agencies including
        websites, emails, phone numbers, addresses, summaries of the agency's work, and more.
      </p>

      <h2 style={{ color: 'orange'}}>Recommended Agency Websites</h2>
      <p style={{ fontSize: '20px'}}>
        The list below contains popular or important government agencies. The link sends you to that agency's page on
        Ethiopian government where you can find their website, contact information, and a summary of the work conducted in theagency.
      </p>

      <ListGroup>
      <ListGroup.Item> <a href="https://moa.gov.et/amh/" style={{ color: 'blue', textDecoration: 'none'}}>Ministry of Agriculture (MOA)</a></ListGroup.Item>
        <ListGroup.Item><a href="/" style={{ color: 'blue', textDecoration: 'none'}}>Ministry of Commerce (MOC)</a></ListGroup.Item>
        <ListGroup.Item><a href="/" style={{ color: 'blue', textDecoration: 'none'}}>Ministry of Defense (MOD)</a></ListGroup.Item>
        <ListGroup.Item><a href="https://moe.gov.et/" style={{ color: 'blue', textDecoration: 'none'}}>Ministry of Education (MoE)</a></ListGroup.Item>
        <ListGroup.Item><a href="/" style={{ color: 'blue', textDecoration: 'none'}}>Ministry of Energy (MOE)</a></ListGroup.Item>
        {/* Add more items for other major departments */}
      </ListGroup>

<br/>
      <h2 style={{ color: 'orange'}}>Other Agencies</h2>
      <ListGroup>
        <ListGroup.Item>Administration for Native Americans</ListGroup.Item>
        <ListGroup.Item>Agency for International Development (USAID)</ListGroup.Item>
        <ListGroup.Item>Alcohol, Tobacco, Firearms, and Explosives Bureau (ATF)</ListGroup.Item>
        <ListGroup.Item>Americorps</ListGroup.Item>
        <ListGroup.Item>Army Corps of Engineers</ListGroup.Item>
        {/* Add more items for other agencies */}
      </ListGroup>
      <br/><br/>
        </div>
      </div>
     
    </Container>
  );
};

export default GovernmentAgencies;