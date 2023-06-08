import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { tokens } from "../theme";

const HomeCard = ({ name, image, category, price, loading,id }) => {
  ///  Theme 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 
  return (
    <div className="bg-slate-800 shadow-md p-2 hover:scale-105 transition-all  rounded min-w-[150px]">
      {name ? (
        <>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})} >
          <div className="w-40 min-h-[150px]">
            <img src={image} className="h-full hover:scale-105 transition-all w-full" />
          </div>
          <Typography variant="h5"
            fontWeight="bold"
            color ={colors.greenAccent[500]}
            sx={{ p: "15px 0px 4px 0" }}
          >
            {name}
          </Typography>
          <p className="text-center text-amber-400  font-medium">{category}</p>
          <p className="text-center  font-bold">
            <span>{price } {" "}</span>
            <span className="text-red-500">dh</span>
          </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
