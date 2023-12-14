import React from 'react'
import { FaPhone, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsFillPersonFill } from "react-icons/bs";
import GoogleMapLocation from '../images/GoogleMapLocation.png'; 
import OrganizationStructure from "../components/AboutUsComponents/OrganizationStructure";
import './assets/AboutUs.css'
import Logo from '../images/Logo.jpg'
import Vision from '../images/AboutUs/vision.jpg'
import Mission from '../images/AboutUs/mission.jpg'
import Value from '../images/AboutUs/values.jpg'
import Leaders from "../components/AboutUsComponents/Leaders";
import image1 from "../images/News/news1.png"
import image2 from "../images/News/news2.jpeg"
import image3 from "../images/News/news3.jpeg"
import image4 from "../images/News/news4.jpeg"
import { Link } from 'react-router-dom';



function AboutUs() {
  return (
    <div>     
       <br/><br/><br/><br/>
      <div class="container-fluid">
      <section> 
        <div class="row ms-5">
          <div class="col col-lg-2">
            <div class="d-flex flex-column align-items-center">
            <img src={Logo} alt="Logo" style={{ maxWidth: '160px' }} />
              <h1 class= "display-5  pb-2">             
                <b>Ministry of  <br/> Innovation and <br/> Technology</b> 
                      </h1>
                      <div class="mbr-section-btn"><a class="btn btn-warning display-4" href="/announcements">
                              <strong>START APPLICATION</strong> </a>
                      </div>                       
                  </div>
              </div>
              <div class="col-1 col-lg-1">
              </div>
               <div class="col col-lg-6">            
                  <div class="row">
                    <div class="col-md-2">
                      <div class="slanted-box">
                        <h4 className='slanted-content'  style={{color: '#11676d'}}>Agriculture</h4>
                        <img className='slanted-content' src={image1} alt=""/>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="slanted-box">
                      <h4 className='slanted-content'style={{color: '#11676d'}}>Technology</h4>
                      <img className='slanted-content' src={image4} alt=""/>
                      
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="slanted-box">
                      <h4 className='slanted-content' style={{color: '#11676d'}}>Industrial</h4>
                      <img className='slanted-content' src={image3} alt=""/>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="slanted-box">
                        <h4 className='slanted-content'style={{color: '#11676d'}}>Health</h4>
                        <img className='slanted-content' src={image2} alt=""/>                    
                      </div>
                    </div>
                  </div>
                </div>                                                                                       
        </div>
        </section> 
        <br/><br/>
       
        <br/><br/>
  
        <section >
          <h1 className='text-center slanted-text'>Click to Read More</h1>
          <br/><br/><br/><br/>
          <div className='d-flex flex-wrap align-items-strech justify-content-evenly  mx-5 '>
            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '250px', height:'80px', position: 'absolute',top: '-10px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h1 >Our Visions</h1></div>
                <div className='slanted-contents1 card pe-0 p-5 m-1   ' style={{ width: '480px', color: 'white', borderRadius: '40px', backgroundColor: '#11676d'}}  >
               
                  {/* <ul className='car p-5  fw-bold'>
                    <li  style={{opacity: '1',width: '100%'}}>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul> */}
                   <h3 className='car pt-5 mt-3 ' style={{width: '100%'}} >
                Prepare national innovation and technology research and development programs; And plan institutional capacity and human resources development for effective implementation of the programs Provide professional and technical support to regions’ innovation and technology institutions 
                  
                  <h2 className='mt-5 text-warning'>See more ...</h2>
                </h3>                      
                </div> 
              </div>
            </div>
            
            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '250px', height:'80px', position: 'absolute',top: '-10px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h1 >Our Missions</h1></div>
                <div className='slanted-contents1 card pe-0 p-5 m-1   ' style={{width: '480px', color: 'white', borderRadius: '40px', backgroundColor: '#11676d'}}  >
               
                  {/* <ul className='car p-5 ' style={{width: '100%'}}>
                    <li>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul> */}
                   <h3 className='car pt-5 mt-3 ' style={{width: '100%'}} >
                Prepare national innovation and technology research and development programs; And plan institutional capacity and human resources development for effective implementation of the programs Provide professional and technical support to regions’ innovation and technology institutions 
                  <h2 className='mt-5 text-warning'>See more ...</h2>
                 </h3>                            
                </div> 
              </div>
            </div>
            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '250px', height:'80px', position: 'absolute',top: '-10px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h1 >Our Values</h1></div>
                <div className='slanted-contents1 card pe-0 p-5 m-1   ' style={{width: '480px', color: 'white', borderRadius: '40px', backgroundColor: '#11676d'}}  >
               
                  {/* <ul className='car p-5 ' style={{width: '100%'}}>
                    <li>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul> */}
                   <h3 className='car pt-5 mt-3 ' style={{width: '100%'}} >
                Prepare national innovation and technology research and development programs; And plan institutional capacity and human resources development for effective implementation of the programs Provide professional and technical support to regions’ innovation and technology institutions 
                  <h2 className='mt-5 text-warning'>See more ...</h2>
                  </h3>                           
                </div> 
              </div>
            </div>
            
            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '250px', height:'80px', position: 'absolute',top: '-10px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h1 >Our Goals</h1></div>
                <div className='slanted-contents1 card pe-0 p-5 m-1   ' style={{width: '480px', color: 'white', borderRadius: '40px', backgroundColor: '#11676d'}}  >
               \
                  {/* <ul className='car p-5 ' style={{width: '100%'}}>
                    <li>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul> */}
                   <h3 className='car pt-5 mt-3 ' style={{width: '100%'}} >
                Prepare national innovation and technology research and development programs; And plan institutional capacity and human resources development for effective implementation of the programs Provide professional and technical support to regions’ innovation and technology institutions 
                  <h2 className='mt-5 text-warning'>See more ...</h2>
                 </h3>                            
                </div> 
              </div>
            </div>
          </div>
        </section>
        <br/><br/><br/><br/>
     
        <OrganizationStructure />
      <Leaders />
           
      </div>
    </div>



  )
}

export default AboutUs