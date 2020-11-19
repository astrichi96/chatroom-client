import { io } from 'socket.io-client';
import config from '../utils/config';

console.log({ conf: config.socketURL });
export default io(config.socketURL, {
  transports: ['websocket']
});
