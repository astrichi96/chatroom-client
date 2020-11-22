import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const LoginForm = ({ handleRegister, openRegisterForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    handleRegister(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ marginTop: '5px', marginBottom: '15px' }}>
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
          Sign up
        </Button>
      </form>
      <Button color="primary" onClick={() => openRegisterForm(false)}>
        I have a account
      </Button>
    </div>
  );
};

export default LoginForm;
