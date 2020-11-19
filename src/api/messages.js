import axios from 'axios';
import config from '../utils/config';

export const getAll = () => axios.get(`${config.socketURL}/messages`);
