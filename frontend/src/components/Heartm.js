import React, { useState, useEffect, useRef } from 'react';
import './Heart.css'; // Make sure this CSS file is correctly located

import hchomme from './../assest/images/hchomme.jpg';
import hcfemme from './../assest/images/hcfemme.jpg';
import hpdm from './../assest/images/hpedicuremanicure.jpg';
import hcouture from './../assest/images/hcouture.jpg';
import { useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CallIcon from '@mui/icons-material/Call';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import relooking from "./../assest/images/relooking.png";
import couture from "./../assest/images/couture.png";

function Heartm() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const shopIconRef = useRef(null);

//Pour les coiffures femmes
const handleCoiffureFemme = () => {
    navigate('/Fitifash/Esthétique/Coiffure/Damme')
 }

 const handleCouture = () => {
  navigate('/menu_couture_officiel')
 }

 const handlePedicureManicure = () => {
  navigate('/Fitifash/Esthétique/Pédicure%20et%20manicure');
 }


  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovered((prevIsHovered) => !prevIsHovered);
    }, 1000); // Toggle every 2 seconds (2000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isMobile = window.innerWidth < 768;

  
  function startAnimation() {
    if (shopIconRef.current) {
      shopIconRef.current.style.animation = 'none';
      void shopIconRef.current.offsetWidth;
      shopIconRef.current.style.animation = 'shopAnimation 1.5s 0.5s infinite';
    }
  }

  useEffect(() => {
    startAnimation();
    const interval = setInterval(startAnimation, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[200px]">
      {isMobile && (
        <div className=" bg-slate-100   items-center justify-center">
        <div className=" relative  flex flex-wrap items-center justify-center gap-5 bg-slate-100  ">
          <div className="w-[100px] h-[100px] mt-3 hover:scale-105 relative rounded-full bg-[#706040d8] cursor-pointer flex justify-center items-center cursor-pointer">
            <div className="WifiCalling3Icon ">
              <RestaurantIcon
                style={{
                  fontSize: "40px",
                  justifyContent: "center",
                }}
              />
            </div>
          </div>
          <div>
            <div  className="w-[100px] h-[100px]  mt-3  hover:scale-105 relative rounded-full bg-green-300 flex justify-center items-center cursor-pointer">
              <div className="icon-container">
                <CallIcon
                  className="shaking-icon"
                  style={{
                    fontSize: "40px",
                    justifyContent: "center",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-[100px] h-[100px] mt-3  hover:scale-105 rounded-full cursor-pointer bg-[#966b14fb] bg-yellow-500 flex justify-center items-center cursor-pointer">
            <div className=" icon-container1 ">
              <AirportShuttleIcon
                className="livraison-icon"
                style={{
                  fontSize: "40px",
                  justifyContent: "center",
                }}
              />
            </div>
          </div>
          <div className="mt-3">
            <div className="w-[100px] h-[100px]  hover:scale-110  relative rounded-full bg-[#d39314fb] flex justify-center items-center cursor-pointer">
              <div className="icon-container">
                <ShoppingBasketIcon
                  ref={shopIconRef}
                  className="shop-icon"
                  style={{
                    fontSize: "40px",
                    justifyContent: "center",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-3 ">
            <div className="w-[100px] h-[100px]  hover:scale-105 rounded-full cursor-pointer bg-yellow-800  flex justify-center items-center cursor-pointer">
              <div className="coiffure absolute bg-yellow-500 flex justify-center items-center" 
               style={{fontSize:"16px",width:"70px"}}
              >
                Coiffure
              </div>
            </div>
          </div>
          <div className="mt-3" >
            <div className="w-[100px] h-[100px]  hover:scale-105 relative rounded-full bg-yellow-600 flex justify-center items-center cursor-pointer">
              <img src={relooking} alt="Esthetique" className=" imgesthetique w-1/2 h-1/2  transition-all duration-300" />
            </div>
          </div>
          <div className=" mt-3 mb-10 " >
            <div className="w-[100px] h-[100px]  hover:scale-105 relative rounded-full bg-yellow-700 flex justify-center items-center cursor-pointer">
              <img src={couture} alt="Couture" className=" w-1/2 h-1/2  transition-all duration-300" />
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Heartm;
