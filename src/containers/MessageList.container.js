import React, { useState, useEffect } from 'react';
import socket from '../api/socket';
import MessageList from '../components/MessageList';

const MessageListContainer = ({ user }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('messages-list', (messages) => {
      setMessages(messages);
    });
  }, [setMessages]);

  return <MessageList messages={messages} currentUser={user} />;
};

export default MessageListContainer;
