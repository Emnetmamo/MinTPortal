import React, { useState } from 'react';

import news from '../images/News/news9.webp';
import new8 from '../images/News/news8.jpeg';
import new7 from '../images/News/news7.jpeg';

import ProjectDescription from './ProjectDescription';

const Publications = () => {
  return (
    <div >
        <div className='' style={{height:'80pt'}}>
     <h1 className='bg-dark text-white' style={{
        fontSize: '50px',  
        textAlign: 'center'
       
      }}>Publications</h1>
     </div>
      <div className="card">
       
      <img src={new7} style={{ width: '80%' }} className='mx-auto d-block' />

        <div className="container mt-5">
        <h2 style={{
         
          fontSize:'45px'
        }}>Wind Energy For Rural Area</h2>
        <p class="mb-0">Author: Tomas Mores</p>
<p>Date published: December 4, 2003</p>
<button className=''

  type="button"
  style={{
    backgroundColor: "blue",
    borderRadius: '8px', 
    cursor: "pointer",
    padding: "18px",
    width: "30%",
    border: "rounded",
    textAlign: "left",
    outline: "none",
    fontSize: "15px"
  }}
  onClick={() => {
    const content = document.getElementById('content');
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }}
>
 See description
</button>
<div class="content" style={{ display: "none", padding: "0 18px", overflow: "hidden", backgroundColor: "#f1f1f1" }} id="content">
 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 
</div>    
        </div>
        <div className='mx-auto d-block'> <b>do you want to download the file?</b>
          <button href="" download="downloaded-file-name.pdf"
  className="btn btn-success"
  style={{
    backgroundColor: 'green',
    borderRadius: '8px', 
    padding: '5px 15px', 
  }}
>
  Download
</button>
          </div>
      </div>


   

     










      <div className="row justify-content-center mt-5 ">
        <div className="col p-5">
          <div className="row card">
            
            <img src={news} alt="AI chat system" />
            <h2>Ai chat system</h2>
            <p class="mb-0">Author: Dr. Mekonnen Yilma</p>
            <p>Date published: December 4, 2009</p>
            


            <button
  type="button"
  style={{
    backgroundColor: "blue",
    borderRadius: '8px',
    cursor: "pointer",
    padding: "18px",
    width: "50%",
    border: "1px solid black", // Specify the border style here
    textAlign: "left",
    outline: "none",
  }}
  onClick={() => {
    const content1 = document.getElementById('content1');
    if (content1.style.display === 'none' || content1.style.display === '') {
      content1.style.display = 'block';
    } else {
      content1.style.display = 'none';
    }
  }}
>
  See description
</button>
<div class="content1" style={{ display: "none", padding: "0 18px", overflow: "hidden", backgroundColor: "#f1f1f1" }} id="content1">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>

           <div className='mx-auto d-block'> <b>do you want to download the file?</b>
          <button href="" download="downloaded-file-name.pdf"
             className="btn btn-success"
      style={{
            backgroundColor: 'green',
            borderRadius: '8px', 
           padding: '5px 15px', 
  }}
>
  Download
</button>
          </div>
          </div>
          
        </div>


        <div className="col p-5">
          <div className="row card">
            <img src={new8} alt="New 8"  style={{
              height:175,
              width:'100%'}}/>
            <h2 className="row">Solar Energy</h2>
            <p class="mb-0">Author: Tomas Mores</p>
            <p>Date published: December 4, 2003</p>
           


            <button
  type="button"
  style={{
    backgroundColor: "blue",
    borderRadius: '8px',
    cursor: "pointer",
    padding: "18px",
    width: "50%",
    border: "1px solid black", // Specify the border style here
    textAlign: "left",
    outline: "none",
  }}
  onClick={() => {
    const content2 = document.getElementById('content2');
    if (content2.style.display === 'none' || content2.style.display === '') {
      content2.style.display = 'block';
    } else {
      content2.style.display = 'none';
    }
  }}
>
  See description
</button>
<div class="content2" style={{ display: "none", padding: "0 18px", overflow: "hidden", backgroundColor: "#f1f1f1"}} id="content2">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>


            <div className='mx-auto d-block'> <b>do you want to download the file?</b>
          <button href="" download="downloaded-file-name.pdf"
  className="btn btn-success"
  style={{
    backgroundColor: 'green',
    borderRadius: '8px', 
    padding: '5px 15px', 
  }}
>
  Download
</button>
          </div>

          </div>
        </div>
       

      </div>
      <button className='mb-5 p-3 mr-5 bg-primary b-rounded'>  Veiw More</button>
    
    



     
    
    
    
    </div>
  );
};

export default Publications;
