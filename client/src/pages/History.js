
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Importing the search icon
import Logo from "../images/Logo.jpg";
import { Carousel } from "react-bootstrap";
import "../App.css"
import china from "../images/China.jpg";
import Bbb from "../images/BBB.jpg";
import Startup from '../images/StartUp.jpg';
import Abey from '../images/Abey.jpg';
import Abey2 from '../images/Abey2.jpg';


axios.defaults.withCredentials = true;

const History = () => {
  const [acceptedProject, setAcceptedProject] = useState([]);

  useEffect(() => {
    axios
      .get("https://research-portal-server-9.onrender.com/resources/history")
      .then((response) => {
        const parsedData =
          typeof response.data === "string"
            ? JSON.parse(response.data)
            : response.data;

        const sortedAcceptedProjects = parsedData.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );

        setAcceptedProject(sortedAcceptedProjects);
      })
      .catch((error) => {
        console.error("Error fetching accepted projects:", error);
      });
  }, []);
  // get file name
  function getFileNameFromPath(filePath) {
    const parts = filePath.split(/[\\/]/); // Split the path using either / or \
    return parts[parts.length - 1]; // Get the last part, which is the file name
  }

  // handle dowload

  const handleDownload = (fileUrl, fileName) => {
    axios({
      url: fileUrl,
      method: "GET",
      responseType: "blob", // Ensure the response type is set to blob
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName); // Set the file name and extension
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
        // Handle the error, maybe show a message to the user
      });
  };
  function searchItem(e) {
    let searchText = e.value.toLowerCase();
    let titles2 = Array.from(document.getElementsByClassName("card-title"));
    let contents = Array.from(
      document.getElementsByClassName("card-text text-muted")
    );
    let titles = titles2.concat(contents);
    let parent = null;
    Array.from(titles).forEach(function (title1) {
      if (title1.innerText.toLowerCase().indexOf(searchText) > -1) {
        title1.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
          "";
        parent =
          title1.parentElement.parentElement.parentElement.parentElement
            .parentElement;
        console.log(parent);
      } else {
        if (
          parent ===
          title1.parentElement.parentElement.parentElement.parentElement
            .parentElement
        ) {
          title1.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
            "";
        } else {
          title1.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
            "none";
        }
      }
    });
  }

  // const handleExploreClick = (id) => {
  //  console.log(id)
  //   window.location.href = `/achivment/${id}`;
  // };
  return (
    <div className="d-flex flex-column align-items-center mt-3 ml-5 mr-5" >
      <div className="container">
        <div className="row mt-5 quickCard" style={{ borderRadius: "15px" }}>
          <div className="col-md-6" style={{ display: "flex", flexDirection: "column", textAlign: 'center', marginTop: "30px", alignItems: "center"}}>
            <h1 className="roll-in-left" style={{ fontSize: "50px", textAlign: "center" }}>Our History</h1>
            <p style={{ textAlign: "justify", color: "black" }}>Embarking on a journey of digital transformation, the Ethiopian Ministry of Innovation and Technology (MinT) has
                witnessed a remarkable evolution from its establishment in 1975 to the present day.
           <br /><br />
              The introduction of groundbreaking government initiatives marked a turning point, propelling the nation towards widespread
              adoption of information and communication technologies (ICT). With each passing year, the MinT's unwavering commitment to
              innovation has paved the way for a brighter digital future, empowering Ethiopia to thrive in the digital age.</p>
            <p className="btn" style={{ marginTop: "20px", fontSize: "20px" }}>
              {/* <Link className="quick-links">
                Discover our past achievements
              </Link> */}
            </p>
          </div>
          <div className="col-md-6">
            <div style={{ width: "100%", margin: "auto", marginTop: "20px", borderRadius: "15px", overflow: "hidden" }}>
              <Carousel style={{ borderRadius: "15px" }}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {Abey}
                    alt="First slide"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Carousel.Caption>
                    <p style={{ color: "white" }}>Prime Minister Abiy Ahmed (Dr.)'s main thoughts on "Ethiopian Start Up National Status"</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/media/GJnWGrcXMAAcKsp?format=jpg&name=large"
                    alt="Second slide"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Carousel.Caption>
                    <p style={{ color: "white" }}>Dr. Belete Mola, who made an opening speech on the current review of Digital Ethiopia 2025 strategy</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {Bbb}
                    alt="Third slide"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Carousel.Caption>
                    <p style={{ color: "white" }}>Collaboration between Ministry of innovation and technology and GIZ</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {Abey2}
                    alt="Fourth slide"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Carousel.Caption>
                    <p style={{ color: "white" }}>Ethiopia is working to be part of the 2028 unmanned landing mission on the moon by the foreigners</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {china}
                    alt="Fifth slide"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Carousel.Caption>  
                    <p style={{ color: "white" }}>Ethio Robo Robotics Education and Competition Center in collaboration with the Ministry of Innovation and Technology.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
  
        <div className="my-5">
          <h2 className="font-weight-bold text-center">Time line of Events</h2>
        </div>
  
        <div className="card_history card mb-5 m-1" style={{ maxWidth: "65rem", margin: "0 auto", height: "30rem" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img
              className="kenburns-top"
              src= {Startup}
              style={{ width: "100%", height: "100%" }}
              alt="Event"
            />
          </div>
        </div>
      </div>
  
      <h1 className="m-5" id="5">
        Explore Our Recent Researches and Innovations
      </h1>
      <div className="container mb-5">
        <div className="row">
          {acceptedProject.map((project, index) => (
            <div className="col-md-4" key={index} style={{ marginTop: "30px" }}>
              <div
                className="card-history_innovation card"
                id={`col${index + 1}`}
              >
                <div className="card-body text-center">
                  <a
                    href={`/achivment/${project._id}`}
                  >
                    <img
                      src={`${project.imagePath
                        .replace(/\//g, "\\")
                        .split("public\\")
                        .join("")}`}
                      className="card-img-top rounded-top"
                      alt={`Accepted Project ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }} // Adjust image size here
                    />
                    <h5 className="card-title" >{project.title}</h5>
                    <h6 className="card-Investigator my-2" style={{color: "black"}}>
                      <b>Principal Investigator</b>: {project.p_investigator}
                    </h6>
                    <p style={{color: "black"}} className="card-text">
                      {project.description.substring(0, 20)}...
                    </p>
                    <h6 style={{color: "black"}} className="card-Investigator my-2">
                      <b>Funding Source(s):</b> {project.funding_source}
                    </h6>
                    <h6 style={{color: "black"}} className="card-Investigator my-2">
                      <b>Author:</b> {project.author}
                    </h6>
                    <p     
                      className="d-block mx-auto"
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        alignSelf: "center",
                        borderRadius: "5px",
                      }}
                    >
                      Explore
                    </p> 
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default History;
