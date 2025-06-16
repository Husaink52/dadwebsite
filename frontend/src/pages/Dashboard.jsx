import React, { useState, useEffect } from 'react';
import { fetchAllClients, deleteClient } from '../services/api';

const Dashboard = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  useEffect(() => {
    const getClients = async () => {
      const data = await fetchAllClients();
      setClients(data);
    };
    getClients();
  }, []);

  const filteredClients = clients.filter(client =>
    (filterType === 'All' || client.clientType === filterType) &&
    Object.values(client).some(val =>
      val && val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleDelete = async (id) => {
    await deleteClient(id);
    setClients(clients.filter(client => client._id !== id));
  };

  return (
    <div>
      <h1>KVSB & Associates - Dashboard</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setFilterType(e.target.value)}>
          <option>All</option>
          <option>Individual</option>
          <option>Proprietor</option>
          <option>Firm</option>
          <option>LLP</option>
          <option>Corporate</option>
        </select>
      </div>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Client Type</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr key={client._id}>
              <td>{client.clientType}</td>
              <td>{client.clientName || client.businessName}</td>
              <td>{client.email || client.accountantEmail}</td>
              <td>{client.contact || 'N/A'}</td>
              <td>
                <button onClick={() => handleDelete(client._id)}>Delete</button>
              </td>
            </tr>
          ))}
          {filteredClients.length === 0 && <tr><td colSpan="5">No results found.</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
