import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'courier,arial,helvética; 
`;

const LoginForm = ({ handleSubmit, openRegisterForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ marginTop: '5px', marginBottom: '15px' }}>
      <Title>GET STARTED</Title>
      <p>Start in the new social APP</p>

      <form style={{ marginTop: '3rem' }} onSubmit={onSubmit}>
        <TextField
          name="username"
          label="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          style={{ marginLeft: '10px' }}
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          style={{ marginTop: 'auto', marginButton: 'auto', marginLeft: '5px' }}
          variant="contained"
          type="submit"
          aria-label="delete"
          color="primary"
          size="large"
        >
          Login
        </Button>
      </form>

      <Button color="primary" onClick={() => openRegisterForm(true)}>
        Create account
      </Button>
    </div>
  );
};

export default LoginForm;
