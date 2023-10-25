import React, { useState } from 'react';

import news from '../images/News/news9.webp';
import new8 from '../images/News/news8.jpeg';
import new7 from '../images/News/news7.jpeg';
import ProjectDescription from './ProjectDescription';

const Publications = () => {
  const [Description, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!Description);
  };

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

          <p>
            <button
              className="btn btn-primary"
              type="button"
              onClick={toggleReadMore}
            >
              {Description? 'Close' : 'See Description'}
            </button>
          </p>
        
          {Description && (
            <div >
              Solar energy is one of the main energy sources in Ethiopia. As Ethiopia is an underdeveloped country, it mainly depends on natural power. Dr. John is the inventor of such energy-converting devices.
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          )}
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
            <p>
            <button
              className="btn btn-primary"
              type="button"
              onClick={toggleReadMore}
            >
              {Description? 'Close' : 'See Description'}
            </button>
          </p>
        
          {Description && (
            <div >
              Solar energy is one of the main energy sources in Ethiopia. As Ethiopia is an underdeveloped country, it mainly depends on natural power. Dr. John is the inventor of such energy-converting devices.
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          )}
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
            <p>
            <button
              className="btn btn-primary"
              type="button"
              onClick={toggleReadMore}
            >
              {Description? 'Close' : 'See Description'}
            </button>
          </p>
        
          {Description && (
            <div >
              Solar energy is one of the main energy sources in Ethiopia. As Ethiopia is an underdeveloped country, it mainly depends on natural power. Dr. John is the inventor of such energy-converting devices.
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          )}
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
 
    </div>
  );
};

export default Publications;
