import React, { useState, useEffect } from 'react';
import { rooms as roomsActions, socket } from '../api';
import RoomForm from '../components/RoomForm';

const RoomsListContainer = ({ setRoom }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    roomsActions.findAll().then(({ data }) => {
      setRooms(data);
    });
  }, []);

  const handleSubmit = (room) => {
    roomsActions.create({ name: room }).then(({ data }) => {
      socket.emit('subscribe', {
        room: data._id
      });
      setRoom(data);
    });
  };

  const handleSelected = (room) => {
    socket.emit('subscribe', {
      room: room._id
    });
    setRoom(room);
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
