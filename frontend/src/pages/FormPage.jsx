import React from 'react';
import { useParams } from 'react-router-dom';

import IndividualForm from '../forms/IndividualForm';
import ProprietorForm from '../forms/ProprietorForm';
import FirmForm from '../forms/FirmForm';
import LLPForm from '../forms/LLPForm';
import CorporateForm from '../forms/CorporateForm';

const FormPage = () => {
  const { clientType } = useParams();

  const renderForm = () => {
    switch (clientType) {
      case 'Individual':
        return <IndividualForm />;
      case 'Proprietor':
        return <ProprietorForm />;
      case 'Firm':
        return <FirmForm />;
      case 'LLP':
        return <LLPForm />;
      case 'Corporate':
        return <CorporateForm />;
      default:
        return <p>Invalid client type selected.</p>;
    }
  };

  return (
    <div>
      <h1>KVSB & Associates</h1>
      {renderForm()}
    </div>
  );
};

export default FormPage;
