import React, { useState, useEffect } from 'react';
import { rooms as roomsActions, socket } from '../api';
import RoomForm from '../components/RoomForm';

const RoomsListContainer = ({ handleRoomSubmit }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    roomsActions.findAll().then(({ data }) => {
      setRooms(data);
    });
  }, []);

  const handleSubmit = (room) => {
    roomsActions.create({ name: room }).then(({ data }) => {
      socket.emit('join', {
        room: data._id
      });
      handleRoomSubmit(data);
    });
  };

  const handleSelected = (room) => {
    socket.emit('join', {
      room: room._id
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
