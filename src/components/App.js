import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Button } from '@material-ui/core';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import MessageListContainer from '../containers/MessageList.container';
import NewMessageContainer from '../containers/NewMessage.container';
import RoomListContainer from '../containers/RoomsList.container';

import { users, socket } from '../api';

function App() {
  const [user, setUser] = useState({});
  const [room, setRoom] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);

  const steps = ['Create a new user', 'Select or create a new chatroom'];

  const handleSubmit = (username, password) => {
    users.login({ username, password }).then(({ data }) => {
      return setUser(data);
    });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleRegister = (username, password) => {
    users.signup({ username, password }).then(({ data }) => {
      return setUser(data);
    });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleRoomSubmit = (room) => {
    setRoom(room);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleDisconnect = () => {
    setRoom({});
    setUser({});
    setActiveStep(0);
    socket.disconnect();
    window.location.reload();
  };

  return (
    <div style={{ marginTop: '120px', textAlign: 'center' }}>
      <Paper
        style={{
          width: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingBottom: '3rem'
        }}
        elevation={2}
      >
        {!room._id && (
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}

        {activeStep === steps.length && user._id && room._id ? (
          <div>
            <h1 style={{ paddingTop: '20px' }}>
              {room.name}{' '}
              <Button onClick={handleDisconnect} color="primary">
                Left chatroom
              </Button>
            </h1>{' '}
            <MessageListContainer currentUser={user} currentRoom={room} />
            <NewMessageContainer currentUser={user} currentRoom={room} />
          </div>
        ) : (
          <div>
            {!user._id &&
              (!openRegisterForm ? (
                <LoginForm
                  handleSubmit={handleSubmit}
                  openRegisterForm={setOpenRegisterForm}
                />
              ) : (
                <RegisterForm
                  handleRegister={handleRegister}
                  openRegisterForm={setOpenRegisterForm}
                />
              ))}
            {activeStep === 1 && user._id && !room._id && (
              <RoomListContainer handleRoomSubmit={handleRoomSubmit} />
            )}
          </div>
        )}
      </Paper>
    </div>
  );
}

export default App;
