const BACKEND_URL = 'http://localhost:5000'; 
import axios from 'axios';

const login = async (username, password) => {
  try {
    //const res = await axios.post
    const res = await axios.post(`${BACKEND_URL}/auth/api/login`, {username, password})
    // Save the token to localStorage
    localStorage.setItem('token', res.data.token);
    return res.data; // Return the response data
  } catch (err) {
    throw new Error('Invalid username or password'); // Throw an error to handle in the component
  }
};

export { login };