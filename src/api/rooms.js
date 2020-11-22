import axios from 'axios';
import config from '../utils/config';

export const create = ({ name, description, headers }) =>
  axios.post(
    `${config.socketURL}/rooms`,
    { name, description },
    {
      headers
    }
  );

export const findAll = ({ headers }) =>
  axios.get(`${config.socketURL}/rooms`, {
    headers
  });
