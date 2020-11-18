import axios from 'axios';
const API_URL = 'http://localhost:4000';

export const create = ({ name, description }) => {
  axios.post(API_URL, { name, description });
};

export const findAll = () => {
  axios.get(API_URL);
};
