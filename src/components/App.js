import React, { useState } from 'react';

import LoginForm from './LoginForm';
import MessageListContainer from '../containers/MessageList.container';
import NewMessageContainer from '../containers/NewMessage.container';
import RoomListContainer from '../containers/RoomsList.container';

import { users } from '../api';

function App() {
  const [user, setUser] = useState({});
  const [room, setRoom] = useState({});

  const handleSubmit = (username) => {
    users.login({ username }).then(({ data }) => {
      return setUser(data);
    });
  };

  return (
    <div>
      {!user._id && <LoginForm handleSubmit={handleSubmit} />}
      {user._id && !room._id && <RoomListContainer setRoom={setRoom} />}
      {user._id && room._id && (
        <div>
          <MessageListContainer currentUser={user} currentRoom={room} />
          <NewMessageContainer currentUser={user} currentRoom={room} />
        </div>
      )}
    </div>
  );
}

export default App;
