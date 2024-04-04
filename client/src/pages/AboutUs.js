import React from 'react'
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
        
       
   

        <section >
          <br/><br/><br/><br/>
          <div className='d-flex flex-wrap align-items-strech justify-content-evenly  mx-5 '>
            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '250px', height:'80px', position: 'absolute',top: '-10px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h1 >Our Visions</h1></div>
                <div className='slanted-contents1 card pe-0  m-1   ' style={{ width: '480px',height:"300px", color: 'white', borderRadius: '40px', backgroundColor: '#11676d'}}  >
               
                  {/* <ul className='car p-5  fw-bold'>
                    <li  style={{opacity: '1',width: '100%'}}>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul> */}
                  <div style={{padding:"30px"}}>
                   <h3 className='car pt-5 mt-3 ' style={{width: '100%'}} >
                   Build a country that is conducive for job and wealth creation through technology and innovation.                   
                  
                </h3>  
                </div>                    
                </div> 
              </div>
            </div>
<br></br>
            
            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '250px', height:'80px', position: 'absolute',top: '-10px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h1 >Our Missions</h1></div>
                <div className='slanted-contents1 card pe-0  m-1   ' style={{width: '480px', color: 'white', borderRadius: '40px', backgroundColor: '#11676d'}}  >
               
                  {/* <ul className='car p-5 ' style={{width: '100%'}}>
                    <li>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul> */}
                  <div style={{padding:"30px"}}>
                   <h3 className='car pt-5 mt-3 ' style={{width: '100%'}} >
                   To ensure the sustainability of the country’s development by creating an environment in which innovation systems are implemented.
                  
                 </h3> 
                 </div>                           
                </div> 
              </div>
            </div>
<br></br>

            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '250px', height:'80px', position: 'absolute',top: '-10px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h2 >Our Values</h2></div>
                <div className='slanted-contents1 card pe-0  m-1   ' style={{width: '480px', color: 'white', borderRadius: '40px', backgroundColor: '#11676d'}}  >
               
                  {/* <ul className='car p-5 ' style={{width: '100%'}}>
                    <li>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul> */}
                  <div style={{padding:"30px"}}>
                   <h3 className='car pt-5 mt-3 ' style={{width: '100%',height:"400px"}} >
             
                  <ul class=" custom-bullet-list">
                  <li >Moral virtue and earnestness.</li>
                  <li >Avid thirst for knowledge and learning.</li>
                  <li >Work ethic and diligence.</li>
                  <li >Unbounded imagination and thinking.</li>
                  <li >A foundation for generations to come.</li>
                </ul>
                  
                  </h3> 
                  </div>                          
                </div> 
              </div>
            </div>
            <br></br>
            
            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '280px', height:'80px', position: 'absolute',top: '-7px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h2 >policy/Strategy</h2></div>
                <div className='slanted-contents1 card pe-0 m-1   ' style={{width: '480px', color: 'white', borderRadius: '40px', backgroundColor: '#11676d'}}  >
               \
                  {/* <ul className='car p-5 ' style={{width: '100%'}}>
                    <li>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul> */}
                  <div style={{padding:"30px"}}>
                   <h3 className='car pt-5 mt-3 ' style={{width: '100%'}} >
                   The general objective of the STI policy is to achieve sustainable social and economic development so as to meet the present and future needs of the nation through a coordinated and integrated application of science and technology for a better standard and quality of life of the Ethiopian peoples.
                  
                 </h3>  
                 </div>                          
                </div> 
              </div>
            </div>
   <br></br>
            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '370px', height:'80px', position: 'absolute',top: '-7px', left: '15px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h3 >Mandate and Responsibility</h3></div>
                <div className='slanted-contents1 card pe-0  m-1   ' style={{width: '480px', color: 'white', borderRadius: '40px', backgroundColor: '#11676d'}}  >
               \
                  {/* <ul className='car p-5 ' style={{width: '100%'}}>
                    <li>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul> */}
                  <div style={{padding:"30px"}}>
                   <h3 className='car pt-5 mt-3 ' style={{width: '100%'}} >
                   The institution has been carrying out various activities since the time it is established in the level of commission up to these days and with a view to realize the vision to see building up of bridge to transform our country to overall prosperity by supported with innovation technology knowledge and research skill has been implemented as of very recently.                   
                 </h3>  
                 </div>                          
                </div> 
              </div>
            </div>


            <div className='mb-5'>
              <div style={{position: 'relative'}} >
                <div className='btn btn-warning slanted-text1 d-flex align-items-center justify-content-center'  style={{width: '300px', height:'80px', position: 'absolute',top: '-7px', left: '20px', zIndex: '5',  transform: 'rotate(-15deg)', borderRadius: '20px'}}><h2 >Organization Set UP</h2></div>
                <div className='slanted-contents1 card pe-0  m-1   ' style={{width: '480px',height:"550px", color: 'white', borderRadius: '40px', backgroundColor: '#11676d'}}  >
               \
                  {/* <ul className='car p-5 ' style={{width: '100%'}}>
                    <li>gchvkjcks dio vhsujkvdbn cyifejvsd cklojvdbskjxcl njj vdn   cklojvdbskjxcl njj vdn</li>
                    <li>jjdsLJv jdsv jdsnxj kldsjkvxsurjkasdv xc odsbxjkdsibvjskd</li>
                    <li>Item #3 jvihsdj iouewvds copilbusdbhac jijdskn cx</li>
                    <li>Item #4  vsduivajxiepsdlvbueowdsjbncx </li>
                    <li>Item #5uejSBDV IOSDAOUKJEPIDSVNA ou;jrkbvfcxjk</li>
                  </ul> */}
                  <div style={{padding:"30px"}}>
                   <h3 className='car pt-5 mt-3 ' style={{width: '100%'}} >
                   The Ministry of Innovation and Technology (MINT) is governmental organization which is located in Arada Sub city, Wereda 03. The organization was categorized under 3 state ministers.. Currently there are about 360 permanent employees in the ministry                  
                 </h3>  
                 </div>                          
                </div> 
              </div>
            </div>

          </div>
        </section>
        <br/><br/><br/><br/>
        
        <div className='container  card pe-0 card-body'style={{width:"1000px", height:"725px",fontSize:"25px",color: 'white', borderRadius: '40px bold', backgroundColor: '#11676d',marginBottom:"135px",borderRadius:"50px"}} >
        <div className='btn btn-warning  d-flex align-items-center justify-content-center'  style={{width: '300px', height:'80px', position: 'absolute',top: '-12px',bottom:'20px', left: '350px', borderRadius: '20px',marginTop:"18px"}}><h1>About MInT</h1></div>

        <div style={{padding:"20px"}}>
        <h4 className='pt-5 m-2'>•	MINT in Brief </h4>
The Ministry of Innovation and Technology (formerly known as the Ministry of Science and Technology (MoST)) is an agency of the Government of Ethiopia. It was established as a commission in December 1975 by directive No.62/1975. The Ministry of Science and Technology (MoST) was a governmental institution that was established for the first time in December 1975 by proclamation No.62/1975 as a commission. Following the change in government in 1991 and with the issuance of the new economic policy, the Commission was re-established in March 1994 by Proclamation No.91/94. The commission went into its 3rd phase of re-institution on 24 August 1995 by Proclamation No.7/1995, as an agency following the establishment of the Federal Democratic Republic of Ethiopia. Finally, in 2008 it was promulgated at the level of the Ministry of Science and Technology (MoST) Proclamation No. 604/2008 and two more years later, it was established at the ministry level by Proclamation No. 691/2010. The ministry was merged with Ministry of Information Communication and Technology and changed its title to Ministry of Innovation and Technology in October 2018.
</div>
        </div>

        <OrganizationStructure />
      <Leaders />
           
      </div>
    </div>



  )
}

export default AboutUs