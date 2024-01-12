// chatslide.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetchMessagesSuccess: (state, action) => {
      state.messages = action.payload;
      state.error = null;
    },
    fetchMessagesFailure: (state, action) => {
      state.messages = [];
      state.error = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
      state.error = null;
    },
  },
});

export const {
  fetchMessagesSuccess,
  fetchMessagesFailure,
  addMessage,
} = chatSlice.actions;

export const fetchMessages = () => async (dispatch) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getmessages`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify(Data), // Not needed for GET request
        });
        const data = await response.json();
        dispatch(fetchMessagesSuccess(data));
  } catch (error) {
    dispatch(fetchMessagesFailure(error.message));
  }
};

export const createMessage = (messageData) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/createmessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });
    if (!response.ok) {
      throw new Error('Failed to create message');
    }
    const data = await response.json();
    dispatch(addMessage(data));
  } catch (error) {
    dispatch(fetchMessagesFailure(error.message));
  }
};

export default chatSlice.reducer;
