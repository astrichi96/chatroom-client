import axios from 'axios';
import config from '../utils/config';

export const login = ({ username, password }) =>
  axios.post(`${config.socketURL}/users/login`, { username, password });
export const signup = ({ username, password }) =>
  axios.post(`${config.socketURL}/users`, { username, password });
