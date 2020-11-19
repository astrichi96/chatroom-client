import socket from '../api/socket';
import NewMessage from '../components/NewMessage';

const NewMessageContainer = ({ currentUser }) => {
  const handleSubmit = (message) => {
    socket.emit('new-message', {
      text: message,
      user: currentUser._id
    });
  };

  return <NewMessage handleSubmit={handleSubmit} />;
};

export default NewMessageContainer;
