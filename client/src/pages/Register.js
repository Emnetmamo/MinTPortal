import React, { useState } from 'react';
import BasicPersonalInfo from '../components/registrationComponents/BasicPersonalInfo';
import ProjectIdea from '../components/registrationComponents/ProjectIdea';
import EthicalEvaluation from '../components/registrationComponents/EthicalEvaluation';

const Register = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }

  const prevStep = () => {
    setStep(step - 1);
  }

  switch (step) {
    case 1:
      return <BasicPersonalInfo nextStep={nextStep} />;
    case 2:
      return <ProjectIdea nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <EthicalEvaluation prevStep={prevStep} />;
    default:
      return null;
  }
}

export default Register;
