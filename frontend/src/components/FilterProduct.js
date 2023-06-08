import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { tokens } from "../theme";
import {MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const FilterProduct = ({category,onClick,isActive}) => {
   ///  Theme 
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
  return (
    <div onClick={onClick}>
      {"                        "}
      <div className=" flex justify-center  items-center">
          <div className={`text-3xl w-20 hover:scale-105 transition-all rounded-full hover:bg-yellow-400  cursor-pointer ${isActive ? "bg-green-600 text-white" : "bg-blue-600 "}`}>       
              <div className="w-1/2 ml-[26%]" >
                    <MdOutlineKeyboardDoubleArrowDown 
                    />
              </div>
          </div>
      </div>
    
       <div className=" flex items-center" >
        <Typography variant="h5" 
              color= {colors.greenAccent[400]} 
              fontWeight="bold"

              sx={{ m: "28px 0px 49px 0" }}

              >{category}
          </Typography>
       </div>
    
    </div>
  );
};

export default FilterProduct;
