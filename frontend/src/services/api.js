import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust this if your backend runs elsewhere

/**
 * Submit new client data to backend
 * @param {Object} data - All client form fields along with clientType
 */
export const submitClientData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/createUser`, data);
    return response.data;
  } catch (error) {
    console.error('Error submitting client data:', error);
    throw error;
  }
};

/**
 * Fetch all clients
 */
export const fetchAllClients = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getallUsers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

/**
 * Update an existing client by ID
 * @param {String} id - MongoDB document ID
 * @param {Object} data - Updated client fields
 */
export const updateClient = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/updateUser/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};

/**
 * Delete a client by ID
 * @param {String} id - MongoDB document ID
 */
export const deleteClient = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/deleteUser/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting client:', error);
    throw error;
  }
};
