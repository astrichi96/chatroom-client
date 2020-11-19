import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import logo from '../logo.png';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'courier,arial,helvética; 
`;

const DivStyled = styled.div`
  text-align: center important!;
  margin-top: 100px;
`;

const LoginForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => setUsername(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(username);
    setUsername('');
  };

  return (
    <DivStyled>
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
        <IconButton type="submit" aria-label="delete" color="primary">
          <SendIcon />
        </IconButton>
      </form>
    </DivStyled>
  );
};

export default LoginForm;
