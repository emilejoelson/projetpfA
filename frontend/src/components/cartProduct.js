import React from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from "react-redux";
import { deleteCartItem,increaseQty,decreaseQty } from "../redux/productSlide";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
    const dispatch = useDispatch()
     ///  Theme 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="bg-slate-800 p-2 flex  gap-4 w-[59%] h-[14%] ml-[25%] rounded border border-slate-300">
      <div className=" w-[7%] bg-white rounded flex gap-2">
        <img src={image} className="h-full hover:scale-105 transition-all w-full h-full object-cover " />
      </div>
      <div className=" w-[13%]">
        <div className="text-center  py-3 ">
            <Typography variant="h5"
                  fontWeight="bold"
                  color ={colors.greenAccent[500]}
                  paddingTop="3px"
                >
                  {name}
            </Typography>
        </div>
      </div>
       <div className=" w-[13%] "> 
          <p className=" text-amber-400 py-3  font-bold ">{category}</p>
       </div>
       <div className=" w-[13%]">
          <h4 className=" font-bold py-4 text-base">
               {price}{" "}
            <span className="text-red-500 ">dh</span>
         </h4>
       </div>
       <div className="flex justify-between mt-0 w-[12%] ">
           <div className=" w-[93%] ">
              <button onClick={() =>dispatch(increaseQty(id))} className="bg-green-500 py-1 mt-2 rounded hover:bg-slate-400 p-1 ">
                <TbPlus />
              </button>

              <button className="font-semibold rounded bg-green-500 p-2 text-amber-400 h-[100%] w-[40%] ">{qty}</button>
              <button
                onClick={() =>dispatch(decreaseQty(id))}
                className="bg-green-500 py-1 mt-2 rounded hover:bg-slate-400 p-1 "
              >
                <TbMinus />
              </button>
           </div>
       </div>
       <div className=" w-[13%] text-green-400 py-3">
          <div className="bg-red-400 ml-[33%] w-[28.8%] mt-1.3 rounded-full text-amber-400 cursor-pointer text-slate-700 hover:text-red-500" onClick={()=>dispatch(deleteCartItem(id))}>
              <HighlightOffIcon
                sx={{ color: "white", fontSize: "26px" }}
                />
          </div>
       </div>
       <div className="font-bold  py-4 w-[13%] text-base">
          <div className=" ml-[0%] w-[100%]">
              <Typography
                  variant="h5"
                  fontWeight="bold"
                  color ={colors.greenAccent[500]}
                ><p className="text-amber-400" >{total}{" "} <span className="text-red-500">dh</span></p>
            </Typography>
          </div>
       </div>
      {/* <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
        
          <div className="cursor-pointer text-slate-700 hover:text-red-500" onClick={()=>dispatch(deleteCartItem(id))}>
            <DeleteIcon 
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          </div>
        </div>
        <p className=" text-amber-400  font-bold ">{category}</p>
        <p className=" font-bold text-base">
          <span>{price}{" "}</span>
          <span className="text-red-500 ">dh</span>
        </p>
        <div className="flex justify-between mt-0 ">
          <div className="flex gap-3 items-center">
            <button onClick={() =>dispatch(increaseQty(id))} className="bg-green-500 py-1 mt-2 rounded hover:bg-slate-400 p-1 ">
              <TbPlus />
            </button>
            <button className="font-semibold rounded bg-green-500 p-2 text-white h-[100%] w-[40%] ">{qty}</button>
            <button
              onClick={() =>dispatch(decreaseQty(id))}
              className="bg-green-500 py-1 mt-2 rounded hover:bg-slate-400 p-1 "
            >
              <TbMinus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <Typography
              fontWeight="bold"
              color ={colors.greenAccent[500]}
            >Total :</Typography>
            <p className="text-amber-400" >{total}{" "} <span className="text-red-500">dh</span></p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CartProduct;
