import React from 'react';
import { useNavigate } from 'react-router-dom';


const clientTypes = ['Individual', 'Proprietor', 'Firm', 'LLP', 'Corporate'];

const Home = () => {
  const navigate = useNavigate();

  const handleClientSelect = (type) => {
    navigate(`/form/${type}`);
  };

  return (
    <div className="home-container">
      <h1>KVSB & Associates</h1>
      <h2>Select Client Type</h2>
      <div className="client-options">
        {clientTypes.map((type) => (
          <button key={type} onClick={() => handleClientSelect(type)}>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
