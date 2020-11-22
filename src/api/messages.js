import axios from 'axios';
import config from '../utils/config';

export const getAll = ({ room, headers }) =>
  axios.get(`${config.socketURL}/messages?room=${room}`, {
    headers
  });
