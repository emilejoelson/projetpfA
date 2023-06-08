import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";


const initialState= {
    email: "",
    firstName: "",
    image: "",
    lastName: "",
    _id: "",
    userList: [],
};


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
         setDataUser: (state,action) => {
            state.userList= action.payload
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
        },
        logoutRedux:(state,action) =>{
           // console.log(action.payload.data)
            //state=action.payload.data
            state._id = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.image = "";
        },
        ///To delete  user from database
        deleteUser: (state, action) => {
          const userId = action.payload;
          state.userList = state.userList.filter((user) => user._id !== userId);
        },

    }
})

export const {loginRedux,logoutRedux,setDataUser,deleteUser} = userSlice.actions;

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

export default userSlice.reducer;
