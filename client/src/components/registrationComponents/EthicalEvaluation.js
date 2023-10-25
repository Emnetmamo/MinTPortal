// EthicalEvaluation.js
import React from 'react';
import "../../App.css";


const EthicalEvaluation = ({ prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic if needed
  };

  const questions = [
    {
      title: "Human Rights",
      question: "Does the proposal respect and protect the fundamental rights and dignity of human participants or stakeholders?"
    },
    {
      title: "Informed Consent",
      question: "Is there a clear process for obtaining informed consent from human participants?"
    },
    {
      title: "Confidentiality and Privacy",
      question: "Are measures in place to protect the confidentiality and privacy of individuals involved?"
    },
    {
      title: "Fair Treatment",
      question: "Does the proposal ensure fair treatment of all individuals, regardless of factors such as race, gender, age, or socio-economic status?"
    },
    {
      title: "Avoidance of Harm",
      question: "Has the proposal taken measures to minimize any potential harm to human participants?"
    },
    {
      title: "Protection of Vulnerable Populations",
      question: "Are additional safeguards in place for vulnerable populations, such as children, elderly, or marginalized groups?"
    },
    {
      title: "Animal Rights",
      question: "If applicable, does the proposal demonstrate a commitment to the welfare and ethical treatment of animals involved in the research?"
    },
    {
      title: "Compliance with Regulations",
      question: "Does the proposal adhere to all relevant local, national, and international laws and regulations governing ethical research?"
    },
    {
      title: "Conflict of Interest",
      question: "Has the proposal addressed any potential conflicts of interest among team members or stakeholders?"
    },
    {
      title: "Environmental Impact",
      question: "Has the proposal considered and mitigated any potential negative environmental impacts?"
    },
    {
      title: "Long-Term Consequences",
      question: "Has the proposal addressed any potential conflicts of interest among team members or stakeholders?"
    },
    {
      title: "Transparency and Accountability",
      question: "Is there a clear process for reporting and addressing any ethical concerns or violations that may arise during the project?"
    },
    {
      title: "Education and Training",
      question: "Are all team members adequately trained and educated on ethical considerations relevant to the project?"
    }
  ];
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 style={{ backgroundColor: "orange", color:"white"}}  className="card-title  text-white p-2 rounded text-center mb-4">Ethical Evaluation Section</h1>
          <div className="disclaimer mb-4">
            <p className="text-center">Please give focused attention to each question and answer truthfully.</p>
          </div>
          <form onSubmit={handleSubmit}>
            {questions.map((item, index) => (
              <div className="form-group" key={index}>
                <p>
                  {index + 1}. <span className="question-title">{item.title}</span>
                </p>
                <p className="question-text">{item.question}</p>
                <div className="form-check">
                  <input type="radio" className="form-check-input" name={`question${index}`} value="yes" id={`yes${index}`} />
                  <label className="form-check-label" htmlFor={`yes${index}`}>Yes</label>
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" name={`question${index}`} value="no" id={`no${index}`} />
                  <label className="form-check-label" htmlFor={`no${index}`}>No</label>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-end">
              <button style={{ backgroundColor: "orange", color:"white"}}  type="button" className="btn  me-2" onClick={prevStep}>Previous</button>
              <button style={{ backgroundColor: "orange", color:"white"}} type="submit" className="btn ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EthicalEvaluation;
