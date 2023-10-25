import React from 'react';
import { Link } from 'react-router-dom';

import news from '../images/News/news9.webp'
import new8 from '../images/News/news8.jpeg'
import new7 from '../images/News/news7.jpeg'
const Publications = () => {
  return (
    <div className="">
     <div className='' style={{height:'70pt'}}>
     <h1 className='bg-dark text-white' style={{
        fontSize: '50px',  
        textAlign: 'center'
       
      }}>Publications</h1>
     </div>
     <div className='container'>
      <div className='container card'>
        <h2 className=''>Solar energy for rural area</h2>
        <img src={new7} style={{width:'90%'}}/>
        <p>Discoved by doctor TOmas more who is the collaborator of the ....</p>
      </div>
      <div className='row jusifty-content-center'>

        <div className='col'>
          <div className='row card'>
            <h2>Ai chat system</h2>
            <img src={news}/>
            <p>this is software system used to chat online</p>
            
          </div>
          <div className='row'>
            
          </div>
        </div>
        <div className='col'>
          <div className='row'><img src={new8}></img></div>
          <div className='row'>dkfjsdj</div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Publications;
