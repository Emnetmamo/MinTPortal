import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Importing the search icon
import Logo from "../images/Logo.jpg";
import { Button } from "react-bootstrap";

axios.defaults.withCredentials = true;

const History = () => {
  const [acceptedProject, setAcceptedProject] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/resources/history")
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
    <div className="d-flex flex-column align-items-center mt-3 ml-5 mr-5" style={{ minHeight: '100vh' }}>
      
      <div className=" row mt-5 " style={{backgroundColor:"#e4e8f0",borderRadius:"15px" }}>
        <div className="col" style={{display:"flex",flexDirection:"column",textAlign:'center',marginTop: "30px", alignItems:"center",height:"70vh" }}>
          <h1 className="roll-in-left" style={{fontSize:"50px",textAlign:"center"}}>Our History</h1>
          <p style={{textAlign:"justify"}}> Embarking on a journey of digital transformation, the Ethiopian Ministry of Innovation and Technology (MinT) has
              witnessed a remarkable evolution from its establishment in 1975 to the present day. 
         <br /><br />
              The introduction of groundbreaking government initiatives marked a turning point, propelling the nation towards widespread
              adoption of information and communication technologies (ICT). With each passing year, the MinT's unwavering commitment to 
              innovation has paved the way for a brighter digital future, empowering Ethiopia to thrive in the digital age.</p>
          <p className="btn" style={{marginTop: "20px", fontSize: "20px"}}>
            <a style={{textDecoration:"none",borderRadius:"5px"}} href="#">
              Discover our past achievements
            </a>
          </p>
        </div>
        <div className="col">
          <img
            style={{ width: "100%", height: "100%" }}
            alt="history"
            src="https://pbs.twimg.com/media/GJnWGrcXMAAcKsp?format=jpg&name=large"
          ></img>
        </div>
      </div>

      <div className="my-5">
        <h2 className="font-weight-bold text-center">Time line of Events</h2>
      </div>

      <div
        className="card_history card mb-5 m-1"
        style={{ width: "65rem", height: "30rem" }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          {/* <img src={Logo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} /> */}
          <img
            className="kenburns-top"
            src="https://scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/434727280_740806204906794_5669519378009709643_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rMEqPCkE84wAX9p0vSg&_nc_ht=scontent.fadd2-1.fna&oh=00_AfCPdV29evCi7C6KQXaOhO_XroETHLFqiPRMH48qzHKz8A&oe=6612F4BE"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <h1 className="m-5" id="5">
        Researches and Innovations
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
                  <h5 className="card-title">{project.title}</h5>
                  <h6 className="card-Investigator my-2">
                    <b>Principal Investigator</b>: {project.p_investigator}
                  </h6>
                  <p className="card-text">
                    {project.description.substring(0, 20)}...
                  </p>
                  <h6 className="card-Investigator my-2">
                    <b>Funding Source(s):</b> {project.funding_source}
                  </h6>
                  <h6 className="card-Investigator my-2">
                    <b>Author:</b> {project.author}
                  </h6>
                  Here, instead of linking directly to a file download, you can
                  open a modal or handle file download as per your requirements
                  <a
                    href={`/achivment/${project._id}`}
                    // onClick={() => handleDownload(project.filePath, getFileNameFromPath(project.filePath))}
                    className="d-block mx-auto"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      backgroundColor: "black",
                      alignSelf: "center",
                      borderRadius: "5px",
                    }}
                  >
                    Explore
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
