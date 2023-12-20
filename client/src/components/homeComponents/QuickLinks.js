
import NewsAnnouncementsPublications from "./NewsAnnouncementsPublications";
import wellCome from '../../images/home/well-come.png';


const QuickLinks = () => {
  
  return (
<div class="row">
        <div class="col-sm-8">
          <br /><br /><br />
        <img src={wellCome} className="d-block w-100" alt="Well-come Guide" /></div>
        <div class="col-sm-4"><br /><br /><br /><NewsAnnouncementsPublications /></div>
     </div>
  );
}

export default QuickLinks;
