import React from 'react';
import BotImage from '../utils/robot.svg';
import { Avatar } from '@material-ui/core';

import { handleAvatar } from '../utils';

const PersonalMessage = ({ text }) => {
  return (
    <div class="bubbleWrapper">
      <div class="inlineContainer own">
        <div class="ownBubble own">{text}</div>
      </div>
    </div>
  );
};

const MessageItem = ({ message = {}, currentUser = {} }) => {
  const { user, text } = message;

  return (
    <div>
      {user._id === currentUser._id ? (
        <PersonalMessage text={text}></PersonalMessage>
      ) : (
        <div class="bubbleWrapper">
          <div className="inlineContainer">
            {user.code === 'BOT' ? (
              <img alt="bot" class="inlineIcon" src={BotImage} />
            ) : (
              <Avatar
                style={{
                  width: '25px',
                  height: '25px',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  fontSize: '12px'
                }}
              >
                {handleAvatar(user.username)}
              </Avatar>
            )}

            <div
              className={
                user.code === 'BOT' ? 'botBubble' : 'otherBubble other'
              }
            >
              {user.code === 'BOT' && (
                <div className="botUser">{user.username}</div>
              )}
              {text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageItem;
