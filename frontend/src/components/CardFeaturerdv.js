import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import "./HomeCard.css";
import { BsEyeFill } from "react-icons/bs";
import { GrNext } from "react-icons/gr";

const CardFeaturerdv = ({ image, name, price, category, subcategory, subcategory1, subcategory2, loading, id }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  // Rendez-vous vers
  const handleRendezVous = () => {
     navigate("/rendez-vous")
  }

  const isMobile = window.innerWidth < 768;

  return (
    <div>
      {
        isMobile ? 
        (
          <Link
          to={`/menu/${id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="h-40 flex flex-col justify-center items-center"
        >
          <img
            src={image}
            className={`h-[140px] transition-all w-4/5 `}
            alt={name}
            style={{borderRadius:"15px",border:"2px solid #333333"}}
          />
        </Link>
        ) 
        :
        (
          <div className="homecard bg-slate-100 shadow-md ml-[-70px] p-2 transition-all rounded w-60 h-75 flex flex-col justify-between mx-10"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          >
          
                <Link
                 to={`/menu/${id}`}
                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                 className="h-40 flex flex-col justify-center items-center"
                >
                   <img src={image} className={`h-[150px] transition-all w-full ${hovered ? "hover:scale-105" : ""}`} />         
                </Link>
                {
                  hovered && (
                    <div className="flex flex-col justify-between h-2/5">
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color="#C49A45"
                      sx={{ p: "15px 0px 4px 0" }}
                      className="text-center "
                    >
                       <div className="font-great-vibes text-2xl md:text-3xl">{name}</div>
                    </Typography>
                    <p className="text-slate-500 font-medium">{category}</p>
                    <p className="text-slate-500 font-medium">{subcategory}</p>
                    <p className="text-slate-500 font-medium">{subcategory1}</p>
                    <p className="text-slate-500 font-medium">{subcategory2}</p>
                    <p className="">
                      {typeof price === 'string' ? (
                        <span>
                          <span className="text-red-500 line-through font-italic">{parseFloat(price).toFixed(2)} dh </span>
                          <span className="text-[#0A0A0A]">{(parseFloat(price) * 0.8).toFixed(2)} dh </span>
                        </span>
                      ) : (
                        <span>Price not available</span>
                      )}
                    </p>
                    
                    <div className="py-2 flex justify-center items-center">
                      <button className="mr-8 rounded">
                        <Link
                          to={`/menu/${id}`}
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                          className="text-white"
                        >
                          <BsEyeFill size={24} color="#cfa756d8" />
                        </Link>
                      </button>
                      <button  
                        className="text-gray-500 rounded-lg bg-[#cfa756d8] hover:bg-white hover:scale-100 w-[120px] focus:outline-none  "
                        onClick = {handleRendezVous }
                      >
                         <div className="flex gap-2 h-[24px] pt-1 text-center">
                          <div
                          > 
                                <div className="ml-3 font-ms-gothic text-[#0A0A0A ] ">Rendez_vous
                               </div>
                          </div>
                             
                             <div className="h-5 flex items-center">
                             <GrNext style={{ height: "100%" }} />
                              </div>
                          </div>  
                      </button>
                    </div>
                  </div>
                  )
                }
          </div>
        )
      }
    </div>
    
  );
};

export default CardFeaturerdv;
