import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';

const DivStyled = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const NewMessage = ({ handleSubmit }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => setMessage(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(message);
    setMessage('');
  };

  return (
    <DivStyled>
      <form onSubmit={onSubmit}>
        <TextField
          id="filled-full-width"
          label="New message"
          variant="filled"
          color="secondary"
          value={message}
          onChange={handleInputChange}
        />
        <IconButton type="submit" aria-label="search" color="primary">
          <SendIcon />
        </IconButton>
      </form>
    </DivStyled>
  );
};

export default NewMessage;
