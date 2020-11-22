import React, { useState } from 'react';
import {
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Switch
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'courier,arial,helvética; 
`;

const DivStyled = styled.div`
  text-align: center important!;
  margin-top: 100px;
`;

const RoomForm = ({ handleSubmit, handleSelected, rooms = [] }) => {
  const [newRoom, setNewRoom] = useState(false);
  const [room, setRoom] = useState('');

  const handleChange = (room) => {
    handleSelected(room);
  };

  const handleRoomChange = (event) => setRoom(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(room);
    setRoom('');
  };

  return (
    <DivStyled>
      <Title>Select the Chat room</Title>

      <FormControlLabel
        control={
          <Switch
            checked={newRoom}
            onChange={() => setNewRoom(!newRoom)}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        }
        label="Create a new chatroom"
      />
      {!newRoom ? (
        <form
          style={{
            width: '25vw',
            backgroundColor: '#eeee',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <h2 style={{ paddingTop: '2px' }}>Available chatroom</h2>
          <List>
            {rooms.map((room) => (
              <ListItem
                onClick={() => handleChange(room)}
                button
                key={room._id}
              >
                <ListItemText primary={room.name} />
              </ListItem>
            ))}
          </List>
        </form>
      ) : (
        <form onSubmit={onSubmit}>
          <TextField
            name="name"
            label="Chatroom name"
            value={room}
            onChange={handleRoomChange}
          />
          <IconButton type="submit" aria-label="delete" color="primary">
            <SendIcon />
          </IconButton>
        </form>
      )}
    </DivStyled>
  );
};

export default RoomForm;
