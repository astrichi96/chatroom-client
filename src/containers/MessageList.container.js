import React, { useState, useEffect } from 'react';
import { socket, messages as messagesActions } from '../api';
import MessageList from '../components/MessageList';

const MessageListContainer = ({ currentUser, currentRoom }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    messagesActions.getAll({ room: currentRoom._id }).then(({ data }) => {
      setMessages(data);
    });
  }, [currentRoom._id]);

  useEffect(() => {
    socket.on('messages', (messages) => {
      setMessages(messages);
    });

    return () => socket.disconnect();
  }, [setMessages, currentRoom]);
  return <MessageList messages={messages} currentUser={currentUser} />;
};

export default MessageListContainer;
