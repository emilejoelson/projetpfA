import React, { useRef, useState } from 'react';
import Footer from '../../components/Footer';
import db from "../../assest/images/coiffurerp.jpg";
import "./Menuproduct.css";

import cfemme from "../../assest/images/cfemme.jpg";
import chomme from "../../assest/images/chomme.jpg";
import modehome1 from "../../assest/images/accessa.jpg";
import modefemme1 from "../../assest/images/accessc.jpg";
import pm1 from "../../assest/images/accesse.jpg";
import c1 from "../../assest/images/couture.gif";
import hf1 from "../../assest/images/goodhairstylewomen.gif";
import hh1 from "../../assest/images/haircut.gif";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardCoutures from '../../components/CardCoutures';

// Initialize Swiper modules
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

function Menucoiffure() {
   const navigate = useNavigate();
  const handleModeHomme = () => {
    navigate('/Fitifash/Esthétique/Coiffure/Homme');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  const handleModeFemme = () => {
    navigate('/Fitifash/Esthétique/Coiffure/Damme');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const isMobile = window.innerWidth < 768;

  const productData = useSelector(state => state.product.productList);
  const coiffureServices = productData.filter(product => product.subcategory1 && product.subcategory1.toLowerCase() === 'coiffure');

  return (
    <div>
      {
        isMobile?
        (
          <div className="mt-[9em] bg-white h-full ">
              <div className=" bg-slate-100 mt-10  " style={{border:"10px solid #C49A45"}}>
                <img src={db} alt="Image product" style={{all:"unset", width:"100%"}} className="imgdb" />
            </div>
            <div className=" bg-gray-100  mt-10">
              <div className="pt-3 pb-3 font-[700] text-[#0A0A0A]  font-sans text-xl select-none rounded-t-md">Coiffure - Homme & Femme </div>
            </div>
            <div className="bg-gray-100 ">
              <div className="flex gap-3 pb-2">
                <div onClick={handleModeFemme} className="rounded flex-1 ml-2   hover:scale-105 relative w-[27px] mt-2   hover-filter cursor-pointer">
                  <img src ={cfemme} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
                </div>

                <div onClick={handleModeHomme} className="rounded flex-1 mr-2  hover:scale-105 relative w-[27px] mt-2   hover-filter cursor-pointer">
                <img src ={chomme} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
                </div>

              </div>
            </div>
              {/* Toutes les coutures*/}
            <div className="mt-10  mb-10 pb-3 pl-1 pr-1 grid grid-cols-2  gap-2">
                {coiffureServices.map(el => (
                  <div key={el._id} className="w-full"> 
                    <CardCoutures
                      id = {el._id}
                      name={el.name}
                      description={el.description}
                      price={el.price}
                      image={el.image}
                    />
                  </div>
                ))}
            </div>
            <Footer/>
          </div>
        )
         :
         (
          <div className="bg-white h-full">
            <div className="">
                .
            </div>
          <div className="ml-[10em] bg-slate-100 mt-10 h-[250px] mr-[10em]" style={{borderRadius:"12px",border:"10px solid #C49A45"}}>
              <img src={db} alt="Image product" style={{all:"unset", width:"100%"}} className="imgdb" />
          </div>
            
          <div className="rounded bg-gray-100 ml-20 mr-20 mt-10">
              <div className="pt-3 pb-3 font-[700] text-[#0A0A0A]  font-sans text-xl select-none rounded-t-md">Coiffure - Homme & Femme </div>
            </div>
            <div className="rounded bg-slate-100 ml-[6%] pb-2 mr-[6%] ">
              <div className="flex gap-2">
                <div onClick={handleModeFemme} className="rounded flex-1 ml-2   hover:scale-105 relative w-[27px] mt-2  h-[325px] hover-filter cursor-pointer">
                  <img src ={cfemme} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                    <div>
                      <p className="text-lg text-black font-sans font-bold pt-[75px] ">MODE FEMME</p>
                    </div>
          
                  </div>
                </div>

                <div onClick={handleModeHomme} className="rounded flex-1 mr-2  hover:scale-105 relative w-[27px] mt-2  h-[325px] hover-filter cursor-pointer">
                <img src ={chomme} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                    <div>
                      <p className="text-lg text-black font-sans font-bold pt-[75px] ">MODE HOMME</p>
                    </div>
          
                  </div>
                </div>

              </div>
            </div>
            

    
          {/* Toutes les coiffures*/}
          <div className="mt-10 ml-[6%] mb-10 pb-3 mr-[6%] grid grid-cols-5  gap-4">
              {coiffureServices.map(el => (
                <div key={el._id} className="w-full"> 
                  <CardCoutures
                    id = {el._id}
                    name={el.name}
                    description={el.description}
                    price={el.price}
                    image={el.image}
                  />
                </div>
              ))}
            </div>
     <Footer/>
    </div>
         )
      }
    </div>
    
  );
}

export default Menucoiffure;
