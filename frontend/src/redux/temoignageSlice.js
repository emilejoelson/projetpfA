import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";


const initialState = {
  temoignageList: [],
};

export const temoignageSlice = createSlice({
  name: "temoignage",
  initialState,
  reducers: {
    setDataTemoignage: (state, action) => {
      state.temoignageList = action.payload;
    }
  },
});

// Async action to fetch products from the backend
export const fetchTemoignages = () => {
  return (dispatch) => {
    dispatch(setDataTemoignage([])); // Clear the previous data before fetching

    fetch(`${process.env.REACT_APP_SERVER_DOMIN}/gettemoignage`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setDataTemoignage(data));
      })
      .catch((error) => {
        console.error("Error fetching temoignages:", error);
      });
  };
};

export const {
  setDataTemoignage,
} = temoignageSlice.actions;

export default temoignageSlice.reducer;
