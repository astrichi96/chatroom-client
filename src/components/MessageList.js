import React from 'react';
import { List } from '@material-ui/core';
import MessageItem from './MessageItem';

const MessageList = ({ messages }) => {
  return (
    <List>
      {messages.map((message) => (
        <MessageItem message={message} key={message._id}></MessageItem>
      ))}
    </List>
  );
};

export default MessageList;
