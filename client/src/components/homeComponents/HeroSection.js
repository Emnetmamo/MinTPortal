
import '../../App.css';
import videoSource from '../../images/home/potential3.mp4';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="video-container" style={{ marginTop:"6px" }}>
        <video  autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <h1 style={{marginLeft: "120px", fontSize: "70px", fontWeight:"bolder", marginBottom:"50px", color: "#fff"}}>Welcome to Ethiopia's National Research Portal</h1>
        <h1 className="hero-title" style={{color: "black"}}> Where innovation meets purpose, and every milestone takes Ethiopia closer to a smarter future. </h1>
      </div>
    </section>
  );
};

export default HeroSection;
