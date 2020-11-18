import React, { useState } from 'react';

import LoginForm from './LoginForm';
import MessageListContainer from '../containers/MessageList.container';
import NewMessageContainer from '../containers/NewMessage.container';

function App() {
  const [user, setUser] = useState({});

  const handleSubmit = (username, fullname) => {
    setUser({ username, fullname });
  };

  return (
    <div>
      {!user.username ? (
        <LoginForm handleSubmit={handleSubmit} />
      ) : (
        <div>
          <MessageListContainer currentUser={user} />
          <NewMessageContainer />
        </div>
      )}
    </div>
  );
}

export default App;
