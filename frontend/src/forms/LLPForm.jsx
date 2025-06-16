
// src/forms/LLPForm.jsx
import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { submitClientData } from '../services/api';

const LLPForm = () => {
  const [form, setForm] = useState({
    businessName: '',
    businessPAN: '',
    tan: '',
    gst: '',
    contact: '',
    address: '',
    accountantName: '',
    accountantEmail: '',
    gstState: '',
    gstNumber: '',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await submitClientData({ clientType: 'LLP', ...form });
    alert('Submitted successfully!');
    setForm({
      businessName: '', businessPAN: '', tan: '', gst: '',
      contact: '', address: '', accountantName: '', accountantEmail: '',
      gstState: '', gstNumber: ''
    });
  };

  return (
    <div>
      <h2>KVSB & Associates - LLP Form</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Business Name" name="businessName" value={form.businessName} onChange={handleChange} required />
        <InputField label="Business PAN" name="businessPAN" value={form.businessPAN} onChange={handleChange} required />
        <InputField label="TAN No." name="tan" value={form.tan} onChange={handleChange} />
        <InputField label="GST No." name="gst" value={form.gst} onChange={handleChange} />
        <InputField label="Contact" name="contact" value={form.contact} onChange={handleChange} required />
        <InputField label="Address" name="address" value={form.address} onChange={handleChange} required />
        <InputField label="Accountant Name" name="accountantName" value={form.accountantName} onChange={handleChange} />
        <InputField label="Accountant Email" name="accountantEmail" value={form.accountantEmail} onChange={handleChange} />
        <InputField label="Additional GST State" name="gstState" value={form.gstState} onChange={handleChange} />
        <InputField label="Additional GST No." name="gstNumber" value={form.gstNumber} onChange={handleChange} />
        <Button text="Submit" type="submit" />
      </form>
    </div>
  );
};

export default LLPForm;
