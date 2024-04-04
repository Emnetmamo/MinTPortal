
import NewsAnnouncementsPublications from "./NewsAnnouncementsPublications";
import wellCome from '../../images/home/well-come.png';


const QuickLinks = () => {
  
  return (
<div class="row mt-3">
        {/* <div class="col-sm-8 card" style={{objectFit:'cover'}} > */}
        <div className='col-sm-8 card'style={{color: 'white', borderRadius: '40px bold',}} > 
      <div style={{padding:"10px", fontSize:"25px", marginTop: "13%"}}>
       {/* Science, Technology and Innovation (STI) is now universally regarded and recognized as fundamental to achieve sustainable development and economic growth for both developing and developed countries, thus acting as an important driver for poverty alleviation. To set effective STI policies, reliable indicators are needed to benchmark and monitor progress. Research and experimental development (R&D) is an important component of a country’s national innovation system.  */}
       <img
              src={wellCome}
              alt="quick link"
              style={{marginTop: '-50px', objectFit: 'cover', width:"600px", height:"400px"}}
            />
      </div>
       </div>
        <div class="col-sm-4"><NewsAnnouncementsPublications /></div>
     </div>
  );
}

export default QuickLinks;
