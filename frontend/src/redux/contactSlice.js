import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";


const initialState= {
    fullname: "",
    email: "",
    telephone: "",
    sujet: "",
    message:"",
    _id: "",
    contactList: [],
    contactTotal : 0,
};


export const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
         setDataContact: (state,action) => {
            state.contactList= action.payload
            console.log("Les contacts sont : "+state)
         },
       
        addcontactRedux:(state,action) =>{
            console.log(action.payload.data)
            //state=action.payload.data
            state._id = action.payload.data._id;
            state.fullname = action.payload.data.fullname;
            state.email = action.payload.data.email;
            state.telephone = action.payload.data.telephone;
            state.message = action.payload.data.message;
        },
        updateContactTotal: (state, action) => {
          state.contactTotal = action.payload.contactTotal;
        },

    }
})

export const {addcontactRedux,setDataContact,updateContactTotal} = contactSlice.actions;

export const fetchContacts = () => async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getcontact`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(Data), // Not needed for GET request
      });
      const data = await response.json();
      dispatch(setDataContact(data));
    } catch (error) {
      console.log('Erreur de récuperation de Contact:', error);
    }
  };

  export const fetchcontactTotal = () => async (dispatch) => {
    
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/countcontact`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch total');
      }
  
      const data = await response.json();
      dispatch(updateContactTotal(data));
    } catch (error) {
      console.log('Erreur de récuperation de total de Contact:', error);
    }
  };

export default contactSlice.reducer;
