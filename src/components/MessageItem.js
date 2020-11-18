import React from 'react';
import {
  ListItem,
  ListItemIcon,
  Avatar,
  ListItemText
} from '@material-ui/core';
import styled from 'styled-components';

import { handleAvatar } from '../utils';

const PersonalMessageText = styled(ListItemText)`
  text-align: right;
  align-self: center;
`;

const ListItemTextStyled = styled(ListItemText)`
  text-align: right;
  align-self: center;
  margin-left: 10px;
`;

const PersonalMessage = ({ text }) => {
  return (
    <ListItem>
      <PersonalMessageText primary={text} />
    </ListItem>
  );
};

const MessageItem = ({ message = {}, userloggedIn = { _id: '34356' } }) => {
  const { user, text } = message;

  return (
    <div>
      {user._id === userloggedIn._id ? (
        <PersonalMessage text={text}></PersonalMessage>
      ) : (
        <ListItem>
          <ListItemIcon>
            <Avatar>{handleAvatar(user.name)}</Avatar>
            <ListItemTextStyled primary={text} secondary={user.user} />
          </ListItemIcon>
        </ListItem>
      )}
    </div>
  );
};

export default MessageItem;
