import React from 'react';
import MessageItem from './MessageItem';
import '../styles.css';

const MessageList = ({ messages, currentUser }) => {
  return (
    <div className="bubbleWrapper">
      {messages.map((message) => (
        <MessageItem
          message={message}
          currentUser={currentUser}
          key={message._id}
        />
      ))}
    </div>
  );
};

export default MessageList;
