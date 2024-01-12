import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";


// Load the initial state from local storage if available
const initialState = localStorage.getItem("loginInfo")
  ? JSON.parse(localStorage.getItem("loginInfo"))
  : {
      email: "",
      firstName: "",
      image: "",
      lastName: "",
      _id: "",
      userList: [],
      userlocalList:[],
      clientTotal: 0,
      userlocalTotal:0,
      totalPrice:0,
      retraitTotal:0
    };

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
         setDataUser: (state,action) => {
            state.userList= action.payload
            console.log("Les users sont : "+state)
         },
         setDataUserlocal: (state,action) => {
          state.userlocalList= action.payload
          console.log("Les users sont : "+state)
       },
        loginRedux:(state,action) =>{
            console.log(action.payload.data)
            //state=action.payload.data
            state._id = action.payload.data._id;
            state.firstName = action.payload.data.firstName;
            state.lastName = action.payload.data.lastName;
            state.email = action.payload.data.email;
            state.image = action.payload.data.image;
            // Save the updated state in local storage
          localStorage.setItem("loginInfo", JSON.stringify(state));
        },
        logoutRedux:(state,action) =>{
           // console.log(action.payload.data)
            //state=action.payload.data
            state._id = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.image = "";
             // Remove the login information from local storage
           localStorage.removeItem("loginInfo");
        },
        ///To delete  user from database
        deleteUser: (state, action) => {
          const userId = action.payload;
          state.userList = state.userList.filter((user) => user._id !== userId);
        },
        updateClientTotal: (state, action) => {
          state.clientTotal = action.payload.clientTotal;
        },
        updateClientlocalTotal:(state,action) => {
           state.userlocalTotal = action.payload.userlocalTotal;
        },
        updateCountPriceClientlocal :(state,action) => {
          state.totalPrice = action.payload.totalPrice;
        },
        updateCountRetrait :(state,action) => {
          state.retraitTotal = action.payload.retraitTotal;
        }


    }
})

export const {loginRedux,logoutRedux,setDataUser,setDataUserlocal, deleteUser,updateClientTotal,updateClientlocalTotal,updateCountPriceClientlocal,updateCountRetrait} = userSlice.actions;

export const fetchUsers = () => async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getuser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(Data), // Not needed for GET request
      });
      const data = await response.json();
      dispatch(setDataUser(data));
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  export const fetchUserlocals = () => async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getuserlocal`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(Data), // Not needed for GET request
      });
      const data = await response.json();
      dispatch(setDataUserlocal(data));
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  export const fetchclientTotal = () => async (dispatch) => {
    
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/countclient`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch total');
      }
  
      const data = await response.json();
      dispatch(updateClientTotal(data));
    } catch (error) {
      console.log('Erreur de récuperation de total de Client:', error);
    }
  };
  export const fetchclientlocalTotal = () => async (dispatch) => {
    
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/countuserlocal`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch total');
      }
  
      const data = await response.json();
      dispatch(updateClientlocalTotal(data));
    } catch (error) {
      console.log('Erreur de récuperation de total de Client:', error);
    }
  };

  export const fetchCountPriceClientlocal = () => async (dispatch) => {
    
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/calculatetotalpriceuserlocal`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch total');
      }
  
      const data = await response.json();
      dispatch(updateCountPriceClientlocal(data));
    } catch (error) {
      console.log('Erreur de récuperation de total de Client:', error);
    }
  };

  export const fetchCountRetrait = () => async (dispatch) => {
    
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/calculatetotalretrait`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch total');
      }
  
      const data = await response.json();
      dispatch(updateCountRetrait(data));
    } catch (error) {
      console.log('Erreur de récuperation de total de Client:', error);
    }
  };
export default userSlice.reducer;
