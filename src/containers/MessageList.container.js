import React, { useState, useEffect } from 'react';
import { socket, messages as messagesActions } from '../api';
import MessageList from '../components/MessageList';

const MessageListContainer = ({ user }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    messagesActions.getAll().then(({ data }) => {
      setMessages(data);
    });
    socket.on('messages', (messages) => {
      setMessages(messages);
    });
    return socket.disconnect();
  }, [setMessages]);

  return <MessageList messages={messages} currentUser={user} />;
};

export default MessageListContainer;
