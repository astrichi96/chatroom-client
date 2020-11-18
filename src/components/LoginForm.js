import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import logo from '../logo.png';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'courier,arial,helvética;align-items 
`;

const LoginForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleFullnameChange = (event) => setFullname(event.target.value);

  const onSubmit = () => {
    handleSubmit(username, fullname);
    setUsername('');
    setFullname('');
  };

  return (
    <div>
      <Title>GET STARTED</Title>
      <p>Start in the new social APP</p>
      <img src={logo} alt="logo" />

      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          label="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          name="fullname"
          label="FullName"
          value={fullname}
          onChange={handleFullnameChange}
        />
        <IconButton type="submit" aria-label="delete">
          <SendIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default LoginForm;
