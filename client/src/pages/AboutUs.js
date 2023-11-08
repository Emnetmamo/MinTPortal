import React from 'react'
import { FaPhone, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsFillPersonFill } from "react-icons/bs";
import GoogleMapLocation from '../images/GoogleMapLocation.png'; 
import OrganizationStructure from "../components/AboutUsComponents/OrganizationStructure";
import Leaders from "../components/AboutUsComponents/Leaders";
import image1 from "../images/News/news1.png"
import image2 from "../images/News/news2.jpeg"
import image3 from "../images/News/news3.jpeg"
import image4 from "../images/News/news4.jpeg"


function AboutUs() {
  return (
    <div>     
       <br/><br/><br/><br/>
      <div class="container-fluid">
      <section> 
        <div class="row ms-5">
          <div class="col col-lg-3">
            <div class="d-flex flex-column align-items-center">
              <h1 class= "display-2  pb-2">
                <b>Ministry of  <br/> Innovation and <br/> Technology</b> 
                      </h1>
                      <div class="mbr-section-btn"><a class="btn btn-warning display-4" href="#">
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
                        <h4 className='slanted-content'>Agriculture</h4>
                        <img className='slanted-content' src={image1} alt=""/>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="slanted-box">
                      <h4 className='slanted-content'>Technology</h4>
                      <img className='slanted-content' src={image4} alt=""/>
                      
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="slanted-box">
                      <h4 className='slanted-content'>Industrial</h4>
                      <img className='slanted-content' src={image3} alt=""/>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="slanted-box">
                        <h4 className='slanted-content'>Health</h4>
                        <img className='slanted-content' src={image2} alt=""/>                    
                      </div>
                    </div>
                  </div>
                </div>                                                                                       
        </div>
        </section> 
        <br/><br/>
        <div className=" d-flex  align-items-center justify-content-evenly mx-5  mt-3 bg-black" style={{height: '200px', }}>
          <div className='d-flex align-items-end'  style={{color:"orange"}}>
            <BsFillPersonFill className=' display-5 '/>
             <h1 className= 'ms-3  my-0'>Hello User</h1>
          </div>
          <div className='text-warning  d-flex align-items-end'>
            <a href="https://www.facebook.com/MInT.Ethiopia/" className="me-3 display-5" style={{color:"orange"}}><FaFacebook /></a>
            <a href="https://twitter.com/ministryofinno2?lang=en" className="me-3 display-5" style={{color:"orange"}}><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/ministry-of-innovation-and-technology-ethiopia/?originalSubdomain=et" className="me-3 display-5" style={{color:"orange"}}><FaLinkedin /></a>
            <div className='pt-2 ps-2' style={{height: '45px', width: '55px',display: 'inline' ,backgroundColor: 'orange'}}>
              <a href={GoogleMapLocation}><img src={GoogleMapLocation} alt="Google Map" style={{ maxWidth: '40px', cursor: 'pointer' }}  /></a>

            </div>
          </div>
                  
          </div>
        <br/><br/>
        <section >
          <h1 className='text-center slanted-text'>Click to Read More</h1>
          <br/><br/><br/><br/>
          <div className='d-flex flex-wrap align-items-center justify-content-evenly  mx-5 '>
            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '300px', height:'80px', position: 'absolute',top: '0px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h1 >Our Vision</h1></div>
                <div className='slanted-contents1 card pe-0 p-5 m-1 bg-black  ' style={{width: '600px', color: 'white', borderRadius: '40px'}}  >
                  <ul className='car p-5 ' style={{width: '100%'}}>
                  <ul>
                    <li>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul>
                  
                  <h2 className='mt-5 text-warning'>See more ...</h2>
                             
                  </ul>
                </div> 
              </div>
            </div>
            
            <div className='mb-5'>
              <div  style={{position: 'relative'}} >
                <div className='btn btn-secondary slanted-text2 d-flex align-items-center justify-content-center' style={{width: '300px', height:'80px',backgroundColor: 'black', color: 'white', position: 'absolute',top: '-5px', left: '110px', zIndex: '5', transform: 'rotate(10deg)' , borderRadius: '20px'}}><h1 >Our Mission</h1></div>
                <div className='slanted-contents2 card  pe-0 p-5 m-1 '  style={{ width: '600px', borderRadius: '40px'}}    >
                <h3 className='car p-5  ' style={{width: '100%'}} >
                gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn
                  gchvkjcks diovhsujkvdbn cyifejvsd ckl ojvdbskjxcl njjvdn   cklojvdbskjxcl njj vdn
                  gchvkjcks diovhsujkvdbn cyifejvsd ckl ojvdbskjxcl njjvdn   cklojvdbskjxcl njj vdn 
                  gchvkjcks diovhsujkvdbn cyifejvsd ckl ojvdbskjxcl njjvdn   cklojvdbskjxcl njj vdn 
                  <h2 className='mt-5 text-primary  '>See more ...</h2>
                  
                  </h3> 
                  </div>
              </div>
            </div>
            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '300px', height:'80px', position: 'absolute',top: '0px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h1 >Our Values</h1></div>
                <div className='slanted-contents1 card pe-0 p-5 m-1 bg-black  ' style={{width: '600px', color: 'white', borderRadius: '40px'}}  >
                  <h3 className='car p-5 ' style={{width: '100%'}}>
                  gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn
                  gchvkjcks diovhsujkvdbn cyifejvsd ckl ojvdbskjxcl njjvdn   cklojvdbskjxcl njj vdn
                  gchvkjcks diovhsujkvdbn cyifejvsd ckl ojvdbskjxcl njjvdn   cklojvdbskjxcl njj vdn 
                  gchvkjcks diovhsujkvdbn cyifejvsd ckl ojvdbskjxcl njjvdn   cklojvdbskjxcl njj vdn 
                  <h2 className='mt-5 text-warning'>See more ...</h2>
                             
                  </h3>
                </div> 
              </div>
            </div>
            
            <div className='mb-5'>
              <div  style={{position: 'relative'}} >
                <div className='btn btn-secondary slanted-text2 d-flex align-items-center justify-content-center' style={{width: '300px', height:'80px',backgroundColor: 'black', color: 'white', position: 'absolute',top: '-5px', left: '110px', zIndex: '5', transform: 'rotate(10deg)' , borderRadius: '20px'}}><h1 >Our Goals</h1></div>
                <div className='slanted-contents2 card  pe-0 p-5 m-1 '  style={{ width: '600px', borderRadius: '40px'}}    >
                <h3 className='car p-5  ' style={{width: '100%'}} >
                gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn
                  gchvkjcks diovhsujkvdbn cyifejvsd ckl ojvdbskjxcl njjvdn   cklojvdbskjxcl njj vdn
                  gchvkjcks diovhsujkvdbn cyifejvsd ckl ojvdbskjxcl njjvdn   cklojvdbskjxcl njj vdn 
                  gchvkjcks diovhsujkvdbn cyifejvsd ckl ojvdbskjxcl njjvdn   cklojvdbskjxcl njj vdn 
                  <h2 className='mt-5 text-primary '>See more ...</h2>
                  
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