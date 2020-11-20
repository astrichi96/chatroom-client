import socket from '../api/socket';
import NewMessage from '../components/NewMessage';

const NewMessageContainer = ({ currentUser, currentRoom }) => {
  const handleSubmit = (message) => {
    socket.emit('new-message', {
      text: message,
      user: currentUser._id,
      room: currentRoom._id
    });
  };

  return <NewMessage handleSubmit={handleSubmit} />;
};

export default NewMessageContainer;
