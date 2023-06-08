import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem,increaseQty } from "../redux/productSlide";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch()

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem({
      _id : id,
      name : name,
      price : price,
      category : category,
      image : image
    }))
  };

   ///  Theme 
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

  return (
    <div className="bg-slate-800 shadow-md p-2 hover:scale-105 transition-all rounded min-w-[150px]  ">
  {/* bg-slate-800 shadow-md p-2 rounded min-w-[150px] */}
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="hover:scale-105 transition-all h-full" />
            </div>
            <Typography variant="h4"
                fontWeight="bold"
                color ={colors.greenAccent[500]}
                sx={{ p: "15px 0px 4px 0" }}
            >
              {name}
            </Typography>
            <p className=" text-slate-500  font-medium">{category}</p>
            <p className=" font-bold">
              <span>{price}{" "}</span>
              <span className="text-red-500">dh</span>
            </p>
            {/* bg-sky-900 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px] */}
          </Link>
          <div className="py-2">
               
              <button className="mr-8  rounded w-7">
              <Link
                  to={`/menu/${id}`}
                  onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
              >
                  <BsEyeFill 
                    size={24}
                    color="rgb(255 255 255 / 83%)"
                  />
                </Link>
              
              </button>
             
              <button
                
                onClick={handleAddCartProduct}
              >
                <AiOutlineShoppingCart
                   size={24}
                   color="rgb(255 255 255 / 83%)"
                />
              </button>
          </div>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
