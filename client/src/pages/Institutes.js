import React, { useState } from 'react';
import "../App.css";
import value from '../images/Institutes/link3.jpg';
import research from '../images/Institutes/Lab.webp';
import lab from '../images/Institutes/Lab1.jpeg';
import ict from '../images/Institutes/ict.webp';
import gov from '../images/Institutes/gov2.jpeg';
import other from '../images/Institutes/linkage1.png';

import GovernmentAgencies from '../components/Institutes/GovernmentAgencies';
import IctPartners from '../components/Institutes/IctPartners';
import Laboratories from '../components/Institutes/Laboratories';
import ResearchInstitutes from '../components/Institutes/ResearchInstitutes';

const Institutes = () => {
  const [showGovernmentAgencies, setShowGovernmentAgencies] = useState(false);
  const [showIctPartners, setShowIctPartners] = useState(false);
  const [showLaboratories, setShowLaboratories] = useState(false);
  const [showResearchInstitutes, setShowResearchInstitutes] = useState(false);
  return (
    <div className="container mt-3 p-5">
      <div className="row" style={{marginLeft: "-100px"}}>
        {/* Left Section with Background Image */}
        <div className="col-md-5 p-3" style={{ background: `url(${value}) no-repeat center center`, backgroundSize: 'cover', height: '535px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , borderRadius:"10px"}}>
          <h1 style={{ color: 'white', fontSize: '60px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', textAlign: "center" }}>
            Explore our links with different institutes
          </h1>
        </div>

        {/* Right Section with Cards */}
        <div className="col-md-7 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column w-100">
            {/* Pair 1: Research Institutes + Laboratories */}
            <div className="d-flex w-100 justify-content-between">
              <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '30%', height: '40%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                <a href='/institutes/research' style={{ textDecoration: "none" }} onClick={() => setShowResearchInstitutes(true)}>
                  <img src={research} className="card-img-top" alt="img research" style={{ height: '200px' }} />
                  <div className="card-body">
                    <h5><a href='/institutes/research' className="card-title" style={{ color: 'black', fontSize: "17px", fontWeight: "bold", textDecoration: 'none' }}>Research Institutes</a></h5>
                  </div>
                </a>
              </div>

              <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '30%', height: '40%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                <a href='/institutes/labs' style={{ textDecoration: "none" }} onClick={() => setShowLaboratories(true)}>
                  <img src={lab} className="card-img-top" alt="img lab" style={{ height: '200px' }} />
                  <div className="card-body">
                    <h5><a href='/institutes/labs' className="card-title" style={{ color: 'black', fontSize: "17px", fontWeight: "bold", textDecoration: 'none' }}>Laboratories</a></h5>
                  </div>
                </a>
              </div>
            </div>

            {/* Pair 2: ICT Partners + Government Agencies */}
            <div className="d-flex w-100 justify-content-between">
              <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '30%', height: '40%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                <a href='/institutes/ict' style={{ textDecoration: "none" }} onClick={() => setShowIctPartners(true)}>
                  <img src={ict} className="card-img-top" alt="img-ict" style={{ height: '175px' }} />
                  <div className="card-body">
                    <h5><a href='/institutes/ict' className="card-title" style={{ color: 'black', fontSize: "17px", fontWeight: "bold", textDecoration: 'none' }}>ICT Partners</a></h5>
                  </div>
                </a>
              </div>

              <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '30%', height: '40%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                <a href='/institutes/government' style={{ textDecoration: "none" }} onClick={() => setShowGovernmentAgencies(true)}>
                  <img src={gov} className="card-img-top" alt="img-gov" style={{ height: '175px' }} />
                  <div className="card-body">
                    <h5><a href='/institutes/government' className="card-title" style={{ color: 'black', fontSize: "17px", fontWeight: "bold", textDecoration: 'none' }}>Affiliate Institutes</a></h5>
                  </div>
                </a>
              </div>

              <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '30%', height: '40%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                <a href='/institutes/other' style={{ textDecoration: "none" }} >
                  <img src={other} className="card-img-top" alt="img-gov" style={{ height: '175px' }} />
                  <div className="card-body">
                    <h5><a href='/institutes/other' className="card-title" style={{ color: 'black', fontSize: "17px", fontWeight: "bold", textDecoration: 'none' }}>Other Partners</a></h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show or hide Government Agencies component */}
      {showResearchInstitutes && <ResearchInstitutes />}
      {showLaboratories && <Laboratories />}
      {showIctPartners && <IctPartners />}
      {showGovernmentAgencies && <GovernmentAgencies />}
    </div>
  );
};

export default Institutes;


// import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// import "../App.css";
// import value from '../images/Institutes/link3.jpg';
// import research from '../images/Institutes/Lab.webp';
// import lab from '../images/Institutes/Lab1.jpeg';
// import ict from '../images/Institutes/ict.webp';
// import gov from '../images/Institutes/gov2.jpeg';

// const Institutes = () => {


//   return (
//     <div className="container mt-3 p-5">
//       <div className="row">
//         {/* Left Section with Background Image */}
//         <div className="col-md-6 p-3" style={{ background: `url(${value}) no-repeat center center`, backgroundSize: 'cover', height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//           <h1 style={{ color: 'white', fontSize: '60px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', textAlign: "center" }}>
//             Explore our links with different institutes</h1>
//         </div>

//         {/* Right Section with Cards */}
//         <div className="col-md-6 d-flex justify-content-center align-items-center">
//           <div className="d-flex flex-column w-100">
//             {/* Pair 1: Research Institutes + Laboratories */}
//             <div className="d-flex w-100 justify-content-between">
//               <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '48%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
//               <a href='/institutes/research' style={{textDecoration:"none"}}>
//                 <img src={research} className="card-img-top" alt="img research" style={{ height: '200px' }} />
//                 <div className="card-body" >
//                   <h5><a href='/institutes/research'  className="card-title" style={{ color: 'black' , fontSize:"18px",fontWeight:"bold", textDecoration: 'none' }}>Research Institutes</a></h5>
//                 </div>
//                 </a> 
//               </div>
         
//               <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '48%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
//                <a href='/institutes/labs' style={{textDecoration:"none"}}>
//                 <img src={lab} className="card-img-top" alt="img lab" style={{ height: '200px' }} />
//                 <div className="card-body">
//                   <h5><a href='/institutes/labs' className="card-title" style={{  color: 'black' , fontSize:"18px",fontWeight:"bold", textDecoration: 'none' }}>Laboratories</a></h5>
//                 </div>
//                 </a>
//               </div>
//             </div>

//             {/* Pair 2: ICT Partners + Government Agencies */}
//             <div className="d-flex w-100 justify-content-between" >
//               <div className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '48%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
//                 <a href='/institutes/ict' style={{textDecoration:"none"}} >
//                 <img src={ict} className="card-img-top" alt="img-ict" style={{ height: '200px' }} />
//                 <div className="card-body">
//                   <h5><a href='/institutes/ict'  className="card-title" style={{  color: 'black' , fontSize:"18px",fontWeight:"bold",textDecoration: 'none' }}>ICT Partners</a></h5>
//                 </div>
//                 </a>
//               </div>

//               <div  className="card m-3 flex-grow-1 card1" title="Click here to visit more" style={{ width: '48%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
//                 <a href='/institutes/government' style={{textDecoration:"none"}}>
//                 <img src={gov} className="card-img-top" alt="img-gov" style={{ height: '200px' }} />
//                 <div className="card-body">
//                   <h5><a href='/institutes/government'  className="card-title" style={{ color: 'black' , fontSize:"18px",fontWeight:"bold", textDecoration: 'none' }}>Government Agencies</a></h5>
//                 </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Institutes;
