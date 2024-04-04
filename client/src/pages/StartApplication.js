import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
function StartApplication(){
    function downloadFile(){
        axios({
            url: 'http://localhost:5001/templates/ProposalTemplate.docx',
            method: 'GET',
            responseType: 'blob', // Ensure the response type is set to blob
          })
            .then(response => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download',  'ProposalTemplate.docx' ); // Set the file name and extension
              document.body.appendChild(link);
              link.click();
            })
            .catch(error => {
              console.error('Error downloading file:', error);
              // Handle the error, maybe show a message to the user
            });
    }
    return(
        <div>
            <br />
            <br />
            <div  style={{width:"85%", height:"80%",paddingLeft:"200px"}}>
            <div>
              <div className="card-title">
                <h4 style={{fontSize:"40px",paddingBottom:"15px"}}>Guidelines for Starting your Application</h4>
              </div>
              <p>
                You have to submit your curriculum vitae(CV) and a concept note for your project.
                Components/elements to be considered for Concept Note <br />
                </p>
                <p style={{color: "black"}}>
                1. Cover page<br />

                Title of the Project Affiliation/Endorsing Institutes Name of Innovator/Researcher<br />
                2. Introduction<br />

                Background Problems/gaps to be filled<br />
                3. Significance<br />

              Beneficiaries Expected outputs Expected outcomes/ Benefits</p>
              <p>Curriculum Vitae of applicants(Things to be included)</p>
              <p style={{color: "black"}}>
            1.       Full name:<br />    

            2.         Nationality:<br />

            3.         Date of birth:<br />

            4.         Highest Education Qualification:<br />

            5.         Field /areas of specialization:<br />

            6.         Address-  Mobile:  Email:<br /> 

            7.         Present and most recent posts held (name of institution, type of posts/ responsibilities, year)<br />

            8.    List most recent top 5 publications<br />

            9.   Attach any patent/utility model of the applicants if any<br />

            10.     Endorsing Institutes, Signature (Head of endorsing Institution)<br />
              </p>
              <p>When you write your proposal, you have to follow the format in the file that you can download here: </p>
              <Link to="#" onClick={downloadFile} className="btn btn-primary">Download Template</Link>
              <br />
              <br />
              <p>Once you have these documents you can click on the register button on the top right corner 
                or use this button:</p>
              <a href="/register" className="btn btn-primary">APPLY</a>
              <br />
            </div>
            <br />
            <br />
          </div>
            <br />
        </div>
    );
}
export default StartApplication;