import {createSlice} from "@reduxjs/toolkit";


const initialState= {
    notificationList: [],
};


export const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers:{
         setDataNotification: (state,action) => {
            state.notificationList= action.payload 
         },
    }
})

export const {setDataNotification} = notificationSlice.actions;

export const fetchNotications = () => async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getinvoice`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(Data), // Not needed for GET request
      });
      const data = await response.json();
      dispatch(setDataNotification(data));
    } catch (error) {
      console.log('Erreur de récuperation de notification:', error);
    }
  };

export default notificationSlice.reducer;
