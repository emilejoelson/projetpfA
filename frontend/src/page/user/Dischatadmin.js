// Dischatadmin.js

import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, List, ListItem, TextField } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { fetchUsers } from '../../redux/userSlice';
import { createMessage, fetchMessages } from '../../redux/chatslide';

function Dischatadmin() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userList);
  const nameList = [...new Set(userData.map((el) => el.lastName))];
  const chatData = useSelector((state) => state.chat.messages);
  const error = useSelector((state) => state.chat.error);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchMessages());
  }, [dispatch]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return; // Don't send empty messages

    const messageData = {
      text: message,
      sender: 'admin',
    };
    dispatch(createMessage(messageData));
    setMessage('');
  };

  return (
    <Box ml="50px">
      <Grid container spacing={2}>
        {/* Left side - Users list */}
        <Grid item xs={3}>
          <Box
            height="70vh"
            sx={{
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: colors.primary[300],
              },
              // Add your custom styles here
              width: '250px',
              color: 'white',
              marginTop: '55px',
              marginRight: '10px',
              marginLeft: '1px',
              borderRadius: '4px',
            }}
          >
            <List component="nav">
              {userData.map((user) => (
                <ListItem
                  key={user._id}
                  button
                  onClick={() => handleUserClick(user)}
                  selected={selectedUser?._id === user._id}
                  sx={{
                    backgroundColor: selectedUser?._id === user._id ? colors.primary[100] : 'inherit',
                    borderRadius: '4px',
                    marginBottom: '4px',
                    padding: '8px 16px',
                    '&:hover': {
                      backgroundColor: colors.primary[100],
                    },
                  }}
                >
                  <div className="flex gap-5">
                    <div>
                      {user.image ? (
                        <img
                          alt="profile-user"
                          width="100px"
                          height="100px"
                          src={user.image}
                          className="h-[40px] w-[40px]"
                          style={{ cursor: 'pointer', borderRadius: '50%' }}
                        />
                      ) : (
                        <HiOutlineUserCircle className="h-1/2 w-1/2" />
                      )}
                    </div>
                    <div>{user.lastName}</div>
                  </div>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Right side - Chat interface */}
        <Grid item xs={9}>
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              backgroundColor: colors.primary[50],
              padding: '16px',
              borderRadius: '4px',
              width: '100%',
            }}
          >
            {/* Chat messages */}
            <Box
              p={2}
              bgcolor={colors.primary[500]}
              height="calc(75vh - 100px)"
              borderRadius="4px"
              overflow="auto"
              sx={{
                '& p': {
                  marginBottom: '8px',
                },
              }}
            >
              {/* Replace this with your actual chat messages */}
              {selectedUser && (
                <>
                  <p>Chat with {selectedUser.lastName}</p>
                  {chatData.map((msg) => (
                    <div
                      key={msg._id}
                      className={`message ${msg.sender === 'admin' ? 'sent' : 'received'}`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </>
              )}
            </Box>

            {/* Message input and send button */}
            {selectedUser && (
              <Box p={2} display="flex" alignItems="center" bgcolor={colors.primary[500]} borderRadius="4px">
                <TextField
                  value={message}
                  onChange={handleMessageChange}
                  label="Write a message"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSendMessage}
                  disabled={!message}
                  sx={{ ml: 2 }}
                >
                  Send
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dischatadmin;
