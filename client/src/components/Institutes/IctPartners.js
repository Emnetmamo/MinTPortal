import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

import partner from "../../images/Institutes/Ict-partners.png";
import partner1 from "../../images/Institutes/Ict-partners1.png";
import partner2 from "../../images/Institutes/Ict-partners2.png";
import partner3 from "../../images/Institutes/Ict-partners3.png";
import partner4 from "../../images/Institutes/Ict-partners4.png";
import partner5 from "../../images/Institutes/Ict-partners5.png";

const IctPartners = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }
    return (

<container>
<div className='row'>
<div className='col-sm-3 mt-5' >
  <div className="menu" style={{ backgroundColor: '#11676d', marginBottom: '80px', borderRadius: '10px' }}>
    <ul className="menu-items" style={{ listStyleType: 'none', padding: '40px' }}>
      <li className="menu-item active" data-content="institutes">Institutes</li>
      <li className="menu-item" data-content="research" style={{ width: '100%', marginBottom: '10px' }}>
        <Link to='/institutes/research' style={{ textDecoration: 'none', backgroundColor: 'orange', borderRadius: '5px', width: '100%' }} onClick={handleClick}>Research Institutes</Link>
      </li>
      <li className="menu-item" data-content="labs" style={{ width: '100%', marginBottom: '10px' }}>
        <Link to='/institutes/labs' style={{ textDecoration: 'none', backgroundColor: 'orange', borderRadius: '5px', width: '100%' }} onClick={handleClick}>Laboratories</Link>
      </li>
      <li className="menu-item" data-content="ict" style={{ width: '100%', marginBottom: '10px' }}>
        <Link to='/institutes/ict' style={{ textDecoration: 'none', backgroundColor: 'orange', borderRadius: '5px', width: '100%' }} onClick={handleClick}>ICT Partners</Link>
      </li>
      <li className="menu-item" data-content="government" style={{ width: '100%', marginBottom: '10px' }}>
        <Link to='/institutes/government' style={{ textDecoration: 'none', backgroundColor: 'orange', borderRadius: '5px', width: '100%' }} onClick={handleClick}>Government Agency</Link>
      </li>
    </ul>
  </div>
</div>
<div className='col'>
<div >
        <br /><br />
         <Container className='w-60%'>
      {/* Carousel */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={partner} alt="Los Angeles" className="d-block w-100 " />
            <div className="carousel-caption">
              <h1 style={{ color: 'black', textAlign: 'center' }}>Dedicated On-site Time - ICT Partnerships offer a bespoke support solution for any client</h1>
              {/* <p>Slide 1 Description</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={partner1} alt="Chicago" className="d-block w-100" />
            <div className="carousel-caption">
              <h1 style={{ color: 'black', textAlign: 'center' }}>Affordable - Our aim is to provide affordable solutions and services </h1>
              {/* <p>Slide 2 Description</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={partner2} alt="New York" className="d-block w-100 " />
            <div className="carousel-caption">
              <h1 style={{ color: 'black', textAlign: 'center' }}>Reliable - Our team is highly skilled and highly professiona services </h1>
              {/* <p>Slide 3 Description</p> */}
            </div>
          </div>
        </div>

        {/* Left and right controls/icons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

    </Container>
  
        {/* Card form */}
        <div className="container mt-3">
          {/* <h2>Card Image</h2>
          <p>Image at the top (card-img-top):</p> */} <br/><br/>
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src={partner3} alt="Card image" style={{ width: '60%' }} />
            <div className="card-body">
              <h4 className="card-title">Dedicated On-site Time </h4>
              <p className="card-text">ICT Partnerships offer a bespoke support solution for any client that we <br />
               look after as we appreciate the varying needs of every organisation. We believe that in order to <br />
               create the best ongoing partnership possible regular scheduled</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          {/* <h2>Card Image</h2>
          <p>Image at the top (card-img-top):</p> */}<br/><br/>
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src={partner4} alt="Card image" style={{ width: '60%' }} />
            <div className="card-body">
              <h4 className="card-title">Affordable</h4>
              <p className="card-text">Our aim is to provide affordable solutions and a service level you <br />
               would expect as a large enterprise to medium and small organisations. We can even spread the <br />
                cost of your support to meet your budgeting needs.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        <div className="container mt-3 ">
          {/* <h2>Card Image</h2>
          <p>Image at the top (card-img-top):</p> */}<br/><br/>
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src={partner5} alt="Card image" style={{ width: '60%' }} />
            <div className="card-body">
              <h4 className="card-title">Reliable</h4>
              <p className="card-text">Our team is highly skilled and highly professional and if we <br />
              can’t resolve your issue straight away we’ll attempt to provide an alternative option  <br />
              until we can get you back up and running.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <br /><br />
      <div className="d-flex justify-content-end" style={{ marginRight: '50px' }}>
        <button className="btn btn-primary">
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Next Page</a>
        </button>
      </div>
      <br />
      </div>
</div>

</div>

</container>


     
    );
  };
  
  export default IctPartners;