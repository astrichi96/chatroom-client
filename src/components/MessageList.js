import React from 'react';
import { List } from '@material-ui/core';
import MessageItem from './MessageItem';

const MessageList = ({ messages, currentUser }) => {
  return (
    <List>
      {messages.map((message) => (
        <MessageItem
          message={message}
          currentUser={currentUser}
          key={message._id}
        ></MessageItem>
      ))}
    </List>
  );
};

export default MessageList;
