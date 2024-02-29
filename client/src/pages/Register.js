import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BasicPersonalInfo from '../components/registrationComponents/BasicPersonalInfo';
import ProjectIdea from '../components/registrationComponents/ProjectIdea';
import EthicalEvaluation from '../components/registrationComponents/EthicalEvaluation';

const Register = () => {
  const [step, setStep] = useState(1);
  let email = "";
  useEffect(function(){
    function checkIfUserLoggedIn(){
      try{
        console.log(document.cookie.split(';')[1].split('=')[1]);
        if(document.cookie.split(';')[1].split('=')[1] === '"user"'){
          setStep(2);
        }
        else{
          logout();
        }
      }
      catch(err){

      }
    }
    async function logout (){
      try {
        await axios.get('http://localhost:5001/logout');
        //window.location.href = '/login'; 
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
    checkIfUserLoggedIn();
  }, []);
  const nextStep = () => {
    setStep(step + 1);
  }

  const prevStep = () => {
    setStep(step - 1);
  }
  // const giveEmail = (address) => {
  //   email = address;
  //   console.log("Email is " + address);
  // }
  // const getEmail = () => {
  //   console.log("Found " + email);
  //   return email;
  // }
  switch (step) {
    case 1:
      return <BasicPersonalInfo nextStep={nextStep}/>;
    case 2:
      return <ProjectIdea nextStep={nextStep} prevStep={prevStep}/>;
    case 3:
      return <EthicalEvaluation prevStep={prevStep} />;
    default:
      return null;
  }
}

export default Register;
