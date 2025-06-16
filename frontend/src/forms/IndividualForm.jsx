

// src/forms/IndividualForm.jsx
import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { submitClientData } from '../services/api';

const IndividualForm = () => {
  const [form, setForm] = useState({
    clientName: '',
    contactNo: '',
    email: '',
    pan: '',
    aadhar: '',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await submitClientData({ clientType: 'Individual', ...form });
    alert('Submitted successfully!');
    setForm({ clientName: '', contactNo: '', email: '', pan: '', aadhar: '' });
  };

  return (
    <div>
      <h2>KVSB & Associates - Individual Client Form</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Client Name" name="clientName" value={form.clientName} onChange={handleChange} required />
        <InputField label="Contact No." name="contactNo" value={form.contactNo} onChange={handleChange} required />
        <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <InputField label="PAN No." name="pan" value={form.pan} onChange={handleChange} required />
        <InputField label="Aadhar No." name="aadhar" value={form.aadhar} onChange={handleChange} required />
        <Button text="Submit" type="submit" />
      </form>
    </div>
  );
};

export default IndividualForm;
