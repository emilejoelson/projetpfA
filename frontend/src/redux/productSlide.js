import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";


const initialState = {
  productList: [],
  productListOnWeekAgo:[],
  cartItem: [],
};

export const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },

    setDataProductOnWeekAgo: (state, action) => {
      state.productListOnWeekAgo = [...action.payload];
    },

    addCartItem: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);
      if (check) {
        toast("Produit déjà ajouté ! ");
      } else {
        toast("Ajout avec succès ! ");
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },

    deleteCartItem: (state, action) => {
      toast("Suppression avec succès");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
    },

    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      if (index !== -1) { // Check if the item exists in the cart
        let qty = state.cartItem[index].qty;
        const qtyInc = ++qty;
        state.cartItem[index].qty = qtyInc;

        const price = state.cartItem[index].price;
        const total = price * qtyInc;

        state.cartItem[index].total = total;
      }
    },

    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
    
      // Check if the item exists in the cartItem array
      if (index !== -1 && state.cartItem[index]?.qty) {
        let qty = state.cartItem[index].qty;
        
        if (qty > 1) {
          const qtyDec = --qty;
          state.cartItem[index].qty = qtyDec;
    
          const price = state.cartItem[index].price;
          const total = price * qtyDec;
    
          state.cartItem[index].total = total;
        }
      }
    },
    

    //To delete product from the database
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.productList = state.productList.filter(
        (product) => product._id !== productId
      );
    },

    //To update the product from the database
    editProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.productList.findIndex(
        (product) => product._id === id
      );
      if (productIndex !== -1) {
        state.productList[productIndex] = {
          ...state.productList[productIndex],
          ...updatedProduct,
        };
      }
    },
  },
});

// Async action to fetch products from the backend
export const fetchProductsOnWeekAgo = () => {
  return (dispatch) => {
    dispatch(setDataProductOnWeekAgo([])); // Clear the previous data before fetching

    fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getproductonweekago`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setDataProductOnWeekAgo(data));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
};

export const {
  setDataProduct,
  setDataProductOnWeekAgo,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
  deleteProduct,
  editProduct,
} = productSlide.actions;

export default productSlide.reducer;
