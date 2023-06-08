import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
}; 

export const productSlide = createSlice({
    name: "product",
    initialState,
    reducers:{
         setDataProduct: (state,action) => {
       //     console.log(action);
            state.productList= [...action.payload]
            console.log(" Les produits sont :  " +state.productList)
        },


        addCartItem : (state,action) => {
            //console.log(action)
            //const index = state.cartItem.findIndex((el) => el._id === action.payload);
            const check= state.cartItem.some( el =>el._id ==action.payload._id)
            //console.log(check)
            if(check){
                toast("Produit déjà ajouté ! ")
            }
            else{
                toast("Ajout avec succès ! ")
                const total=action.payload.price
                state.cartItem = [
                    ...state.cartItem,
                    {...action.payload,qty:1,total:total},
                ]
            }
           
        },
        deleteCartItem: (state, action) => {
            toast("Suppression avec succès");
           // console.log("Joelson - - -> "+action.payload)
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
           state.cartItem.splice(index, 1);
            console.log(index);
          },
          increaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            const qtyInc = ++qty;
            state.cartItem[index].qty = qtyInc;
      
            const price = state.cartItem[index].price;
            const total = price * qtyInc;
      
            state.cartItem[index].total = total;
          },
          decreaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            if (qty > 1) {
              const qtyDec = --qty;
              state.cartItem[index].qty = qtyDec;
      
              const price = state.cartItem[index].price;
              const total = price * qtyDec;
      
              state.cartItem[index].total = total;
            }
          },
          
          ///To delete product from database
          deleteProduct: (state, action) => {
            const productId = action.payload;
            state.productList = state.productList.filter((product) => product._id !== productId);
          },

          //To update the product from database
          editProduct: (state, action) => {
            const { id, updatedProduct } = action.payload;
            const productIndex = state.products.findIndex((product) => product._id === id);
            if (productIndex !== -1) {
              state.products[productIndex] = { ...state.products[productIndex], ...updatedProduct };
            }
          },


        }
    
})

       
export const {setDataProduct,addCartItem,deleteCartItem,increaseQty,decreaseQty,deleteProduct,editProduct} = productSlide.actions

export default productSlide.reducer