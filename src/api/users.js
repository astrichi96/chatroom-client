import axios from 'axios';
import config from '../utils/config';

export const login = ({ username }) =>
  axios.post(`${config.socketURL}/users`, { username });
