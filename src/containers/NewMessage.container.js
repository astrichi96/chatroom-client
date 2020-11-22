import socket from '../api/socket';
import NewMessage from '../components/NewMessage';

const NewMessageContainer = ({ currentUser, currentRoom }) => {
  const handleSubmit = (message) => {
    socket.emit('new-message', {
      text: message,
      user: currentUser._id,
      room: currentRoom._id,
      token: currentUser.access_token
    });
  };

  return <NewMessage handleSubmit={handleSubmit} />;
};

export default NewMessageContainer;
