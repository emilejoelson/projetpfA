import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";


const initialState= {
    devisList: [],
};


export const deviSlide = createSlice({
    name:"devis",
    initialState,
    reducers:{
         setDataDevis: (state,action) => {
            state.devisList= action.payload
            console.log("Les contacts sont : "+state)
         }

    }
})

export const {setDataDevis} = deviSlide.actions;

export const fetchDevis = () => async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getdevis`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(Data), // Not needed for GET request
      });
      const data = await response.json();
      dispatch(setDataDevis(data));
    } catch (error) {
      console.log('Erreur de récuperation de Contact:', error);
    }
  };

export default deviSlide.reducer;
