import React, { useState, useEffect } from 'react';
import { rooms as roomsActions, socket } from '../api';
import RoomForm from '../components/RoomForm';
import { buildHeaders } from '../utils';

const RoomsListContainer = ({ handleRoomSubmit, currentUser }) => {
  const [rooms, setRooms] = useState([]);
  const headers = buildHeaders(currentUser.access_token);

  useEffect(() => {
    roomsActions.findAll({ headers }).then(({ data }) => {
      setRooms(data);
    });
  }, []);

  const handleSubmit = (room) => {
    roomsActions.create({ name: room, headers }).then(({ data }) => {
      socket.emit('join', {
        room: data._id,
        token: currentUser.access_token
      });
      handleRoomSubmit(data);
    });
  };

  const handleSelected = (room) => {
    socket.emit('join', {
      room: room._id,
      token: currentUser.access_token
    });
    handleRoomSubmit(room);
  };

  return (
    <RoomForm
      rooms={rooms}
      handleSubmit={handleSubmit}
      handleSelected={handleSelected}
    />
  );
};

export default RoomsListContainer;
