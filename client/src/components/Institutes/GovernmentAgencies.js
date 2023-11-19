// src/components/Institutes/GovernmentAgencies.js

import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

axios.defaults.withCredentials=true

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    
    axios.get('http://localhost:5001/news')
      .then(response => {
        const parsedData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        console.log(parsedData.date)

         // Sort the publications by date before setting the state
        const sortedPublications = parsedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        setNews(sortedPublications); // Update the state with the sorted publicationssetNews(parsedData); // Update the state with fetched news
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="mb-4 font-weight-bold text-center">News</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-pill text-center"
          placeholder="What's new?"
          aria-label="What's new?"
          aria-describedby="basic-addon2"
          style={{ maxWidth: '200px' }}
        />
        <div className="input-group-append">
          <span className="input-group-text bg-white border-0"><FaSearch /></span>
        </div>
      </div>
      <div className="row">
        {news.map((newsItem, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card rounded shadow grow-on-hover"> {/* Added grow-on-hover class */}
              
              <img className='card-img-top news' src={`${newsItem.imagePath.replace(/\//g, '\\')}`} alt={newsItem.title} />               
              <div className="card-body newsbody1 text-center">
                <h6 className="mb-0" style={{color: '#11676d', fontSize: '20px'}}
                >Author:  {newsItem.author}</h6>
                <div className='d-flex' style={{justifyContent: "center"}}>     
                          
                  <h6 className='mx-1' style={{color: '#ffa525'}}>{newsItem.date.split('T')[0]} </h6> <h6>| </h6> <h6 className='ms-1' style={{color: '#ffa525'}}> {newsItem.category}</h6>
                </div>                
                <h5 className="card-title fw-bold fs-3">{newsItem.title}</h5>
                <p className="card-text text-muted">{newsItem.content}</p>
              </div>
              <div className='d-flex px-4 my-2 '>
                <Link to={`/news/${index}`} className="btn btn-primary px-3">Read More</Link>
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-3">
        <Link style={{marginBottom: "30px"}} to="/view-more" className="btn btn-primary">View More</Link>
      </div>
    </div>
  );
}

export default News;















// import React,{useState} from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 

// import ethiopianBitech from '../../images/Institutes/ethipianBitech.png';
// import essti from '../../images/Institutes/essti-logo.jpeg';
// import INSA from '../../images/Institutes/INSA.png';


// function GovernmentAgencies() {
//   return (
// <container>
// <div className='row'>
// <div className='col'>
// <>
//     <br />
//     <br />
//     <Container>
      
//       <Row className="align-items-center">
//         <Col>
//           <img src={essti} alt="Logo" className="img-fluid" />
//         </Col>
//         <Col xs={9} md={10}>
//           <hl  className="mb-2" style={{  textAlign: 'center', fontSize: '60px' }}>Government Agencies </hl>
//           <h2 className="mb-2"><a href='https://etssti.org/' style={{textDecoration: 'none'}}> 
//           ETHIOPIAN SPACE SCIENCE AND TECHNOLOGY INSTITUTE </a></h2>
//           <p className="mb-1" style={{color:'grey'}}>Contribute to the development of the national economy by 
//           providing creative and social services to our people and improving their living conditions in the field
//            of space science and technology, In astronomy and astrophysics, on earth view global and to provide 
//            competitive research in aeronautics and astronomy, manpower training and international relations.
//            </p>
//           <p className="mb-1">Email: <span className="text-orange">mainessti@essti.gov.et</span></p>
//           <p className="mb-0">Phone: <span className="text-orange">+251-928-992614 |
// +251-118-961050</span></p>
//         </Col>
//       </Row>
//     </Container>
//     <br /><br />
//     <Container>
//         <Row className="align-items-center">
//           <Col>
//             <img src={ethiopianBitech} alt="Logo" className="img-fluid" />
//           </Col>
//           <Col xs={9} md={10}>
//             <h2 className="mb-2"><a href='https://www.betin.gov.et/' style={{textDecoration: 'none'}}>Ethiopia Biotechnology Institutes</a></h2>
//             <p style={{color:'grey'}} className="mb-1">Betin resolves and address the major challenges in society
//              that are related to health, food security, the realization of sustainable 
//              development and facilitate the basement of industrialization, work on human 
//              development and to establish the general
//              framework and basic structures for national innovative research.
//             </p>
//             <p className="mb-1">Email: <span className="text-orange"> info@betin.gov.et</span> </p>
//             <p className="mb-0">Phone: <span className="text-orange">+251118619695/ +251118756388</span></p>
//           </Col>
//         </Row>
//       </Container>
//       <br /><br />
//       <Container>
//         <Row className="align-items-center">
//           <Col>
//             <img src={INSA} alt="Logo" className="img-fluid" />
//           </Col>
//           <Col xs={9} md={10}>
//             <h2 className="mb-2"><a href='https://www.insa.gov.et' style={{textDecoration: 'none'}}>Information Network Security Administration (INSA)  </a></h2>
//             <p style={{color:'grey'}} className="mb-1">The Information Network Security Administration (INSA) was established for the first 
//             time in 1999 in accordance with Council of Ministers Regulation No. 130/1999 with the aim of protecting our country's information
//              and information infrastructure from harm.
//             </p>
//             <p className="mb-1">Email: <span className="text-orange"> contact@insa.gov.et</span> </p>
//             <p className="mb-0">Phone: <span className="text-orange">+251-113-71-71-14 (Ethiopia)
// </span></p>
//           </Col>
//         </Row>
//       </Container>
//       <br /><br />
//       <div className="d-flex justify-content-end me-5 mt-3">
//         <button className="btn btn-primary">
//           <a href="/" style={{ color: 'white', textDecoration: 'none'}}>Next Page</a>
//         </button>
      
//       </div>
//       </>


// </div>

// </div>
// <br/>
// </container>

   
//      // Add more institutes as needed

//   );
// }


// export default GovernmentAgencies;