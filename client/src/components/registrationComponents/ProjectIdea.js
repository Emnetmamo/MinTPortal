import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ProjectIdea = ({ nextStep, prevStep }) => {
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [newTeamMember, setNewTeamMember] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [description, setDescription] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [proposalFile, setProposalFile] = useState(null);
  const [letter, setLetter] = useState(null);
  const [email, setEmail] = useState("");
  const [institute, setInstitute] = useState("");

  const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes

  useEffect(function(){
    function checkEmail(){
      try{
        console.log(document.cookie.split(';')[1].split('=')[1]);
        if(document.cookie.split(';')[1].split('=')[1] === '"user"'){
          setEmail(document.cookie.split(';')[0].split('=')[1].replaceAll('"',''));
        }
      }
      catch(err){

      }
    }
    checkEmail();
  },[]);

  const handleCVFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= MAX_FILE_SIZE) {
      setCvFile(file);
    } else {
      toast.error("CV file size should not exceed 3MB");
    }
  };

  const handleProposalFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= MAX_FILE_SIZE) {
      setProposalFile(file);
    } else {
      toast.error("Proposal file size should not exceed 3MB");
    }
  };

  const handleLetterFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= MAX_FILE_SIZE) {
      setLetter(file);
    } else {
      toast.error("Letter file size should not exceed 3MB");
    }
  };

  const handleAddTeamMember = () => {
    if (newTeamMember.trim() !== "") {
      setTeamMembers((prevMembers) => [...prevMembers, newTeamMember.trim()]);
      setNewTeamMember("");
    }
  };

  const handleRemoveTeamMember = (index) => {
    setTeamMembers((prevMembers) => prevMembers.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectTitle", projectTitle);
    formData.append("teamMembers", JSON.stringify(teamMembers));
    formData.append("projectCategory", projectCategory);
    formData.append("description", description);
    formData.append("email", email);
    formData.append("institute", institute);
    if (cvFile) {
      formData.append("cvFile", cvFile);
    }
    if (proposalFile) {
      formData.append("proposalFile", proposalFile);
    }
    if (letter) {
      formData.append("letter", letter);
    }
    try {
      const response = await axios.put(
        "http://localhost:5001/auth/submitProject",
        formData
      );
      console.log(response);
      if (response.data === "titlepresent") {
        toast.error(
          "This project is already taken or done, please choose another topic."
        );
        setTimeout(() => {
          navigate("/");
        }, 7000);
      } else {
        toast.success('Almost done!', {
          position: toast.POSITION.TOP_CENTER, // Centered at the top
          autoClose: 4000,
        });
        nextStep()
      }

    } catch (error) {
      console.error("Error occurred during project submission: ", error);
    }
  };

  return (
    <div className="container mt-3" style={{width:"60%", marginBottom: "30px"}}>
      <div className="card">
        <div className="card-body">
          <h1
            style={{ backgroundColor: "gray", color: "white" }}
            className="card-title text-white p-2 rounded text-center mb-4"
          >
            Project Idea Section
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="projectTitle" className="form-label" style={{fontSize: "25px"}}>
                Project Title*
              </label>
              <input
              style={{fontSize: "22px"}}
                type="text"
                className="form-control"
                id="projectTitle"
                name="projectTitle"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="teamMembers" className="form-label" style={{fontSize: "25px"}}>
                Team Members
              </label>
              {teamMembers.map((member, index) => (
                <div key={index} className="d-flex align-items-center">
                  <input
                  style={{fontSize: "22px"}}
                    type="text"
                    className="form-control me-2"
                    value={member}
                    onChange={(e) => {
                      const updatedMembers = [...teamMembers];
                      updatedMembers[index] = e.target.value;
                      setTeamMembers(updatedMembers);
                    }}
                    required
                  />
                  <button
                  style={{fontSize: "22px"}}
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveTeamMember(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="d-flex align-items-center">
                <input
                style={{fontSize: "22px"}}
                  type="text"
                  className="form-control me-2"
                  placeholder="Add a team member..."
                  value={newTeamMember}
                  onChange={(e) => setNewTeamMember(e.target.value)}
                />
                <button
                style={{fontSize: "22px"}}
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleAddTeamMember}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="projectCategory" className="form-label" style={{fontSize: "25px"}}>
                Project Category*
              </label>
              <select
              style={{fontSize: "22px"}}
                className="form-select"
                id="projectCategory"
                name="projectCategory"
                value={projectCategory}
                onChange={(e) => setProjectCategory(e.target.value)}
                required
              >
                <option value="" style={{fontSize: "22px"}}>Select a category</option>
           <option value="Agriculture">Agriculture</option>
          <option value="Industry">Industry</option>
          <option value="Health">Health</option>
          <option value="Construction">Construction</option>
          <option value="Mines and Water">Mines and Water</option>
          <option value="Information Communication">Information Communication</option>
          <option value="Energy">Energy </option>
          <option value="Enviroment and Protection">Environment and Protection </option>
          <option value="Other related Sectors">Other related Sectors</option>
                {/* <option value="Agriculture">Agriculture</option>
                <option value="Industry">Industry</option>
                <option value="Health">Health</option>
                <option value="Construction">Construction</option>
                <option value="Mines and Water">Mines and Water</option>
                <option value="Information Communication">
                  Information Communication
                </option>
                <option value="Energy">Energy </option>
                <option value="Enviroment and Protection">
                  Environment Protection{" "}
                </option>
                <option value="Other related Sectors">
                  Other related Sectors
                </option>
                <option value="Agriculture">Agriculture</option>
                <option value="Environment_Energy">
                  Environment and Energy
                </option>
                <option value="Health">Health</option>
                <option value="Industry">Industry</option>
                <option value="Other">Other</option> */}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label" style={{fontSize: "25px"}}>
                Project Description*
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="5"
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{fontSize: "25px"}}>
                Email Address*
              </label>
              <input
              style={{fontSize: "22px"}}
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="institute" className="form-label" style={{fontSize: "25px"}}>
                Host Institution*
              </label>
              <input
              style={{fontSize: "22px"}}
                type="text"
                className="form-control"
                id="institute"
                name="institute"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cvFile" className="form-label" style={{fontSize: "25px"}}>
                CV (PDF)*
              </label>
              <input
              style={{fontSize: "22px"}}
                type="file"
                accept="application/pdf"
                className="form-control"
                id="cvFile"
                name="cvFile"
                onChange={handleCVFileChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="proposalFile" className="form-label" style={{fontSize: "25px"}}>
                Concept Note (PDF)*
              </label>
              <input
              style={{fontSize: "22px"}}
                type="file"
                accept="application/pdf"
                className="form-control"
                id="proposalFile"
                name="proposalFile"
                onChange={handleProposalFileChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="letter" className="form-label" style={{fontSize: "25px"}}>
                Letter from Host Institutions*
              </label>
              <input
              style={{fontSize: "22px"}}
                type="file"
                accept="application/pdf"
                className="form-control"
                id="letter"
                name="letter"
                onChange={handleLetterFileChange}
                required
              />
            </div>

            <div className="d-flex justify-content-between">
              <button
                style={{
                  fontSize: "25px",
                  backgroundColor: "gray",
                  color: "white",
                  float: "left",
                }}
                type="button"
                className="btn me-2"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                style={{
                  fontSize: "25px",
                  backgroundColor: "gray",
                  color: "white",
                  float: "right",
                }}
                type="submit"
                className="btn"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProjectIdea;
