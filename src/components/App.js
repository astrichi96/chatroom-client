import React, { useState } from 'react';

import LoginForm from './LoginForm';
import MessageListContainer from '../containers/MessageList.container';
import NewMessageContainer from '../containers/NewMessage.container';
import { users } from '../api';

function App() {
  const [user, setUser] = useState({});

  const handleSubmit = (username) => {
    users.login({ username }).then(({ data }) => {
      return setUser(data);
    });
  };

  return (
    <div>
      {!user._id ? (
        <LoginForm handleSubmit={handleSubmit} />
      ) : (
        <div>
          <MessageListContainer currentUser={user} />
          <NewMessageContainer currentUser={user} />
        </div>
      )}
    </div>
  );
}

export default App;
