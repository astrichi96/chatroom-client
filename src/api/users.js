import axios from 'axios';
const API_URL = 'http://localhost:4000';

export const login = ({ username, fullName }) => {
  axios.post(API_URL, { username, fullName });
};
