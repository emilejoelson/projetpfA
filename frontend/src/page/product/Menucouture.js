import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import dbcouture from  "../../assest/images/dbcouture.jpg";
import "./Menuproduct.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import modehome1 from "../../assest/images/accessa.jpg";
import modefemme1 from "../../assest/images/accessc.jpg";
import pm1 from "../../assest/images/accesse.jpg";

import coutureHomme  from "../../assest/images/couturehomme.jpg";
import coutureFemme  from "../../assest/images/couturefemme.jpg";

import hf1 from "../../assest/images/goodhairstylewomen.gif";

import hh1 from "../../assest/images/haircut.gif";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardCoutures from '../../components/CardCoutures';

// Initialize Swiper modules
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

function Menucouture() {
  
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);
    const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }

    if (window.innerHeight + window.scrollY < document.body.scrollHeight - 100) {
      setShowScrollDown(true);
    } else {
      setShowScrollDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleCoutureHomme = () => {
    navigate('/Fitifash/Coutures/Homme');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const handleCoutureFemme = () => {
    navigate('/Fitifash/Coutures/Femme');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const isMobile = window.innerWidth < 768;

  const productData = useSelector(state => state.product.productList);
  const couturesServices = productData.filter(product => product.subcategory && product.subcategory.toLowerCase() === 'coutures');

  return (
      <div>
        {isMobile?
        (
          <div className="mt-[9em] bg-white h-full ">
            <div className=" bg-slate-100 mt-10  " style={{border:"10px solid #C49A45"}}>
                <img src={dbcouture} alt="Image product" style={{all:"unset", width:"100%"}} className="imgdb" />
            </div>
            <div className=" bg-gray-100  mt-10">
              <div className="pt-3 pb-3 font-[700] text-[#0A0A0A]  font-sans text-xl select-none rounded-t-md">Couture - Homme & Femme </div>
            </div>
            <div className=" bg-gray-100  ">
              <div className="flex gap-3  ">
                <div onClick={handleCoutureHomme} className="rounded flex-1 ml-2  hover:scale-105 relative w-[27px] mt-2 hover-filter cursor-pointer">
                  <img src ={coutureHomme} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                    <div>
                      <p className="text-lg text-orange-600 font-sans font-bold pt-[30px] ">COUTURE HOMME</p>
                    </div>
          
                  </div>
                </div>
                <div onClick={handleCoutureFemme} className="rounded flex-1  mr-2 mb-2  hover:scale-105 relative w-[27px] mt-2 hover-filter cursor-pointer">
                  <img src ={coutureFemme} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                    <div>
                      <p className="text-lg text-orange-600 font-sans font-bold pt-[30px] ">COUTURE FEMME</p>
                    </div>
          
                  </div>
                </div>

              </div>
            </div>
            {/* Toutes les coutures*/}
          <div className="mt-10  mb-10 pb-3 pl-1 pr-1 grid grid-cols-2  gap-2">
              {couturesServices.map(el => (
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
          <div className="bg-white h-full"
            onMouseEnter={() => setShowScrollUp(true)}
            onMouseLeave={() => setShowScrollUp(false)}
            >
            <div className="">
                .
            </div>
            <div className="ml-[10em] bg-slate-100 mt-10 h-[250px] mr-[10em]" style={{borderRadius:"12px",border:"10px solid #C49A45"}}>
                <img src={dbcouture} alt="Image product" style={{all:"unset", width:"100%"}} className="imgdb" />
            </div>
       
     <div className="rounded bg-gray-100 ml-20 mr-20 mt-10">
        <div className="pt-3 pb-3 font-[700] text-[#0A0A0A]  font-sans text-xl select-none rounded-t-md">Couture - Homme & Femme </div>
      </div>
      <div className="rounded bg-slate-100 ml-[6%] pb-2 mr-[6%] ">
        <div className="flex gap-3">
          <div  onClick={handleCoutureHomme}  className="rounded flex-1 ml-2  hover:scale-105 relative w-[27px] mt-2 hover-filter cursor-pointer">
            <img src ={coutureHomme} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
              <div>
                <p className="text-lg text-black font-sans font-bold pt-[75px] ">COUTURE HOMME</p>
              </div>
    
            </div>
          </div>
          <div  onClick={handleCoutureFemme} className="rounded flex-1  mr-2  hover:scale-105 relative w-[27px] mt-2 hover-filter cursor-pointer">
            <img src ={coutureFemme} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
              <div>
                <p className="text-lg text-black font-sans font-bold pt-[75px] ">COUTURE FEMME</p>
              </div>
    
            </div>
          </div>

        </div>
      </div>
            

    
          {/* Toutes les coutures*/}
          <div className="mt-10 ml-[6%] mb-10 pb-3 mr-[6%] grid grid-cols-5  gap-4">
              {couturesServices.map(el => (
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
      {showScrollUp && (
        <div className="fixed bottom-5 right-5 cursor-pointer" onClick={scrollToTop} style={{backgroundColor:"black",borderRadius:"50%"}}>
          <ArrowUpwardIcon fontSize="large" 
           style={{color:"#cfa756d8"}}
          />
        </div>
      )}
      {showScrollDown && (
        <div className="fixed bottom-5 right-5 cursor-pointer" onClick={scrollToBottom} style={{backgroundColor:"black",borderRadius:"50%"}}>
          <ArrowDownwardIcon fontSize="large"
            style={{color:"#cfa756d8"}}
          />
        </div>
      )}
     <Footer/>
          </div>
        )
        }
      </div>
    
  );
}

export default Menucouture;
