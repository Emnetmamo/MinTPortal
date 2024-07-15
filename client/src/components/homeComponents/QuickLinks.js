import NewsAnnouncementsPublications from "./NewsAnnouncementsPublications";
import wellCome from '../../images/home/well-come.png';

const QuickLinks = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-8">
          <div className="card" style={{ color: 'white', borderRadius: '40px bold' }}>
            <div style={{ padding: "10px", fontSize: "25px", marginTop: "13%" }}>
              <img
                src={wellCome}
                alt="quick link"
                style={{ marginTop: '-50px', objectFit: 'cover', width: "100%", maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <NewsAnnouncementsPublications />
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
