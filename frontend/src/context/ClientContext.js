import React, { createContext, useState, useContext } from 'react';

// Create the context
const ClientContext = createContext();

// Create a provider component
export const ClientProvider = ({ children }) => {
  const [clientType, setClientType] = useState(null);
  const [formData, setFormData] = useState({}); // Optional: store partial form data

  return (
    <ClientContext.Provider value={{ clientType, setClientType, formData, setFormData }}>
      {children}
    </ClientContext.Provider>
  );
};

// Create a custom hook for easy access
export const useClientContext = () => useContext(ClientContext);
