import axios from 'axios';
import config from '../utils/config';

export const create = ({ name, description }) =>
  axios.post(`${config.socketURL}/rooms`, { name, description });

export const findAll = () => axios.get(`${config.socketURL}/rooms`);
