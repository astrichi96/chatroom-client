import React, { useState } from 'react';
import { TextField, IconButton, Select, MenuItem } from '@material-ui/core';
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
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleChange = (event) => {
    const roomSelectedId = event.target.value;
    const [roomSelected] = rooms.filter(({ _id }) => roomSelectedId === _id);
    handleSelected(roomSelected);
    setName(event.target.value);
  };

  const handleRoomChange = (event) => setRoom(event.target.value);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(room);
    setRoom('');
  };

  return (
    <DivStyled>
      <Title>Select the Chat room</Title>

      <form>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={name}
          onChange={handleChange}
        >
          <MenuItem value="" key={1}>
            <em>None</em>
          </MenuItem>
          {rooms.map((room) => (
            <MenuItem value={room._id} key={room._id}>
              {room.name}
            </MenuItem>
          ))}
        </Select>
      </form>

      <form onSubmit={onSubmit}>
        <TextField
          name="name"
          label="Room Name"
          value={room}
          onChange={handleRoomChange}
        />
        <IconButton type="submit" aria-label="delete" color="primary">
          <SendIcon />
        </IconButton>
      </form>
    </DivStyled>
  );
};

export default RoomForm;
