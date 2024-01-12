import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  dealdujourList: [],
  currentDealdujour: null,
  cartItemDeal: [],
};

export const dealdujourSlice = createSlice({
  name: "dealdujour",
  initialState,
  reducers: {
    setDataDealdujour: (state, action) => {
      state.dealdujourList = action.payload;
    },
    setCurrentDealdujour: (state, action) => {
      state.currentDealdujour = action.payload;
    },
    deleteDealdujour: (state, action) => {
      const productId = action.payload;
      state.dealdujourList = state.dealdujourList.filter(
        (product) => product._id !== productId
      );
    },
    addCartItemDeal: (state, action) => {
      const check = state.cartItemDeal.some(
        (el) => el._id === action.payload._id
      );
      if (check) {
        toast("Produit déjà ajouté ! ");
      } else {
        toast("Ajout avec succès ! ");
        const total = action.payload.price;
        state.cartItemDeal = [
          ...state.cartItemDeal,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },
 
  }
});

// Async action to fetch products from the backend
export const fetchDealdujour = () => {
  return (dispatch) => {
    dispatch(setDataDealdujour([])); // Clear the previous data before fetching

    fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getalldealdujour`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setDataDealdujour(data));
      })
      .catch((error) => {
        console.error("Error fetching dealdujour:", error);
      });
  };
};
// Async action to fetch the current dealdujour from the backend
export const fetchCurrentDealdujour = () => {
  return (dispatch) => {
    // Clear the previous data before fetching
    dispatch(setCurrentDealdujour(null));

    // Make a request to the backend endpoint
    fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getdealdujour`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.message) {
          console.log(data.message); // Log the message if no dealdujour is found
        } else {
          // If data is an object, wrap it in an array
          const dealdujourArray = Array.isArray(data) ? data : [data];
          dispatch(setCurrentDealdujour(dealdujourArray));
        }
      })
      .catch((error) => {
        console.error("Error fetching current dealdujour:", error);
      });
  };
};

export const {
  setDataDealdujour,
  setCurrentDealdujour,
  deleteDealdujour,
  addCartItemDeal
} = dealdujourSlice.actions;

export default dealdujourSlice.reducer;
