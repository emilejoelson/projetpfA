import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from './userSlice';
import productSliceReducer from "./productSlide";
import contactSliceReducer from "./contactSlice";
import moneySlideReducer from "./moneySlide";
import chatslideReducer from "./chatslide";
import temoignageReducer from "./temoignageSlice";
import notificationReducer from "./notificationSlide";
import thunk from "redux-thunk";
import  dealdujourReducer  from "./dealdujourSlide";
import deviSlideReducer from "./deviSlide";

export const store= configureStore({
    reducer: {
        user:userSliceReducer,
        product : productSliceReducer,
        contact: contactSliceReducer,
        money: moneySlideReducer,
        chat : chatslideReducer,
        temoignage :temoignageReducer,
        notification:notificationReducer,
        dealdujour:dealdujourReducer,
        devis: deviSlideReducer
    }
    ,
  middleware: [thunk], // Apply redux-thunk middleware
    
})