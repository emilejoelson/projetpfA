import React from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlide";

import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const CartProduct = ({ id, name, image, qty, total, price }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = window.innerWidth < 768;

  const handleIncreaseQty = () => {
      dispatch(increaseQty(id));
  
  };

  const handleDecreaseQty = () => {
      dispatch(decreaseQty(id));
  };

  const handleDeleteCartItem = () => {
      dispatch(deleteCartItem(id));
  };
  return (
    <div>
      {
        isMobile?
        (
          <div className="bg-white  flex gap-6 rounded ">
            <div className=" w-[7%] flex-1 bg-white rounded flex gap-2">
              <img src={image} style={{all:"unset",width:"60px",height:"60px"}} className=" hover:scale-105  " />
            </div>

            <div className="  flex-1 mt-2  w-[250px]  ">
              {typeof price === 'string' ?
              ( <h4 className="  text-[#0A0A0A] text-base">
                  <span className=" "> {parseFloat(price).toFixed(2)} dh </span>
                </h4>
               ) 
                :
               (
                <span>Price not available</span>
               ) }
                
            </div>
            <div className="   flex-1">
                    <div onClick={handleIncreaseQty} className="bg-green-500 flex items-center justify-center rounded hover:bg-slate-400 ">
                      <TbPlus />
                    </div>
                    <div className="font-semibold rounded bg-[#cfa756d8] p-2 text-[#0A0A0A]  ">{qty}</div>
                    <div
                      onClick={handleDecreaseQty}
                      className="bg-red-500 flex items-center justify-center rounded hover:bg-slate-400 "
                    >
                      <TbMinus />
                    </div>
            </div>
            <div className=" flex-1  ">
                <div className="bg-red-600 mt-3  rounded-full text-amber-400 cursor-pointer text-slate-700 hover:text-red-500" onClick={handleDeleteCartItem}>
                    <HighlightOffIcon
                      sx={{ color: "white", fontSize: "26px" }}
                      />
                </div>
            </div>
            <div className="  flex-1 text-base">
                <div className=" mt-2  ml-[0%] w-[100%]">
                    <Typography
                        variant="h5"
                        color ={colors.greenAccent[500]}
                      >
                        <p className="text-[#0A0A0A]" >{parseFloat(total).toFixed(2)} <span className="">dh</span></p>
                  </Typography>
                </div>
            </div>
          </div>
        )
         :
         (
          <div className="bg-white p-2 flex  gap-4 w-[59%] h-[14%] ml-[25%] rounded ">
            <div className=" w-[7%] bg-white rounded flex gap-2">
              <img src={image} style={{all:"unset",width:"60px",height:"60px"}} className=" hover:scale-105  " />
            </div>
            <div className=" w-[13%]">
              <div className="text-center  py-3 ">
                  <Typography variant="h5"
                        fontWeight="bold"
                      
                        paddingTop="3px"
                      >
                        <span p className=" text-[#0A0A0A] py-3  font-bold font-great-vibes " style={{fontSize:"25px"}}>{name}</span>
                  </Typography>
              </div>
            </div>
            <div className=" w-[13%]">
                <h4 className=" font-bold py-4 text-[#0A0A0A] text-base">
                    { typeof price === "string" ?
                       (<span>{parseFloat(price).toFixed(2)} dh</span> )
                        :
                       ("Prix not disponible")}
              </h4>
            </div>
            <div className="flex justify-between mt-0 w-[12%] ">
                <div className=" w-[93%] ">
                    <button
                      onClick={handleDecreaseQty}
                      className="bg-red-500 py-1  mt-2 rounded hover:bg-slate-400 p-1 "
                    >
                      <TbMinus />
                    </button>
                    <button className="font-semibold rounded bg-[#cfa756d8] p-2 text-[#0A0A0A]  h-[100%] w-[40%] ">{qty}</button>
                    <button onClick={handleIncreaseQty} className="bg-green-500 py-1 mt-2  rounded hover:bg-slate-400 p-1 ">
                      <TbPlus />
                    </button>
                </div>
            </div>
            <div className=" w-[13%] text-green-400 py-3">
                <div className="bg-red-600 ml-[33%] w-[28.8%] mt-1.3 rounded-full text-amber-400 cursor-pointer text-slate-700 hover:text-red-500" onClick={handleDeleteCartItem}>
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

                      > 
                     <p className="text-[#0A0A0A]" >{parseFloat(total).toFixed(2)} dh</p>
                  </Typography>
                </div>
            </div>
          </div>
         )
      }
    </div>
    
  );
};

export default CartProduct;
