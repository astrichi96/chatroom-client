import { socket } from '../api';
import NewMessage from '../components/NewMessage';

const NewMessageContainer = () => {
  const handleSubmit = (message) => {
    return socket.emit('new-message', message);
  };

  return <NewMessage handleSubmit={handleSubmit} />;
};

export default NewMessageContainer;
