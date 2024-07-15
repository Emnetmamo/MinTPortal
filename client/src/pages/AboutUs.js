import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import GoogleMapLocation from '../images/GoogleMapLocation.png'; 
import OrganizationStructure from "../components/AboutUsComponents/OrganizationStructure";
import AboutMint from '../components/AboutUsComponents/AboutMint';
import VisionMissionValues from '../components/AboutUsComponents/VisionMissionValues';
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
import '../App.css'


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
                      <div class="mbr-section-btn"><a class="btn display-4" href="/announcements" style={{background: 'gray'}}>
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
        
       
   
        
        
        <VisionMissionValues />
        <AboutMint />
        <OrganizationStructure />
      <Leaders />
           
      </div>
    </div>



  )
}

export default AboutUs