// src/components/InputField.jsx
import React from 'react';

const InputField = ({ label, name, type = "text", value, onChange, placeholder, required }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
