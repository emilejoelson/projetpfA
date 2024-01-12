import { useTheme } from "@emotion/react";
import {  Typography } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import {MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const FilterProduct = ({subcategory1,onClick,isActive}) => {
   ///  Theme 
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const isPhone = window.innerWidth < 768;
  return (
    <div onClick={onClick}>
      {"                        "}
      {
        isPhone?
        (<div>
           <div className="bg-slate-100 " style={{borderRadius:"15px"}}>
              <div className={`text-3xl w-full hover:scale-105 transition-all rounded-full hover:bg-orange-400  cursor-pointer ${isActive ? " bg-[#FFA500] text-white" : "bg-black "}`}>       
                  <div className="w-full flex flex-wrap items-center justify-center " >
                        <MdOutlineKeyboardDoubleArrowDown 
                        />
                  </div>
              </div>
              <div className=" flex flex-wrap items-center justify-center text-[#0A0A0A]">{subcategory1}</div>
            </div>
          </div>)
        :
        (
          <div>
            <div className=" flex justify-center  items-center">
              <div className={`text-3xl w-20 hover:scale-105 transition-all rounded-full hover:bg-orange-400  cursor-pointer ${isActive ? " bg-[#FFA500] text-white" : "bg-black "}`}>       
                  <div className="w-1/2 ml-[26%]" >
                        <MdOutlineKeyboardDoubleArrowDown 
                        />
                  </div>
              </div>
            </div>
    
          <div className=" flex items-center font-palatino" >
            <Typography variant="h5" 
                  color= {colors.grey[700]}
                  fontWeight="bold"

                  sx={{ m: "28px 0px 49px 0" }}

                  >{subcategory1}
              </Typography>
          </div>
          </div>
        )
      }
      
    
    </div>
  );
};

export default FilterProduct;
