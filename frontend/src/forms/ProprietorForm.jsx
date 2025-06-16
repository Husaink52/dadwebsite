

// src/forms/ProprietorForm.jsx
import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { submitClientData } from '../services/api';

const ProprietorForm = () => {
  const [form, setForm] = useState({
    clientName: '',
    businessName: '',
    contactNo: '',
    email: '',
    pan: '',
    tan: '',
    gst: '',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await submitClientData({ clientType: 'Proprietor', ...form });
    alert('Submitted successfully!');
    setForm({ clientName: '', businessName: '', contactNo: '', email: '', pan: '', tan: '', gst: '' });
  };

  return (
    <div>
      <h2>KVSB & Associates - Proprietor Form</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Client Name" name="clientName" value={form.clientName} onChange={handleChange} required />
        <InputField label="Business Name" name="businessName" value={form.businessName} onChange={handleChange} required />
        <InputField label="Contact No." name="contactNo" value={form.contactNo} onChange={handleChange} required />
        <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <InputField label="PAN No." name="pan" value={form.pan} onChange={handleChange} required />
        <InputField label="TAN No." name="tan" value={form.tan} onChange={handleChange} />
        <InputField label="GST No." name="gst" value={form.gst} onChange={handleChange} />
        <Button text="Submit" type="submit" />
      </form>
    </div>
  );
};

export default ProprietorForm;
