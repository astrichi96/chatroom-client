import socket from 'socket.io-client';
import config from '../utils/config';

export default socket(config.socketURL, {
  transports: ['websocket']
});
