import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const GovernmentAgencies = () => {
  return (
    <Container>
      <br /><br />
      <h1 style={{ color: 'orange'}}>What are government agencies?</h1>
      <p style={{ fontSize: '20px'}}>
        A government agency is a permanent or semi-permanent organization within a national or state government.
        These agencies are responsible for oversight or administration of a specific sector, field, or area of study.
        Most government agencies are meant to be non-political but the direction and intention of their work may change
        depending on which political party makes up the majority of elected officials.
      </p>

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
    </Container>
  );
};

export default GovernmentAgencies;