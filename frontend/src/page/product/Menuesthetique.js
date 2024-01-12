import React, { useRef, useState } from 'react';
import Footer from '../../components/Footer';
import db from "../../assest/images/cesthetique.jpg";
import dbpedicure from  "../../assest/images/dbpedicure.jpg";
import dbmanicure from  "../../assest/images/dbmanicure.jpg";
import "./Menuproduct.css";
import m1 from "../../assest/images/m1.jpg";
import m2 from "../../assest/images/m2.jpg";
import m3 from "../../assest/images/m3.jpg";
import m4 from "../../assest/images/m4.jpg";
import m5 from "../../assest/images/m5.jpg";
import p1 from "../../assest/images/p1.jpg";
import p2 from "../../assest/images/p2.jpg";
import p3 from "../../assest/images/p3.jpg";
import p4 from "../../assest/images/p4.jpg";
import p5 from "../../assest/images/p5.jpg";

import chomme from "../../assest/images/chomme.jpg";
import modehome1 from "../../assest/images/accessa.jpg";
import modefemme1 from "../../assest/images/accessc.jpg";
import pm1 from "../../assest/images/accesse.jpg";

import hf1 from "../../assest/images/goodhairstylewomen.gif";

import hh1 from "../../assest/images/haircut.gif";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

// Initialize Swiper modules
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

function Menuesthetique() {
  return (
    <div className="bg-white h-full">
    <div className="">
        .
    </div>
     <div className="ml-[10em] bg-slate-100 mt-10 h-[250px] mr-[10em]" style={{borderRadius:"12px",border:"10px solid #C49A45"}}>
        <img src={db} alt="Image product" style={{all:"unset", width:"100%"}} className="imgdb" />
     </div>
       
     <div className="rounded bg-gray-200 ml-20 mr-20 mt-10">
        <div className="pt-3 pb-3 font-[700] text-[#0A0A0A]  font-sans text-xl select-none rounded-t-md">Esthetique - Femme </div>
      </div>
      <div className="rounded bg-[#cfa756d8] ml-[6%] pb-2 mr-[6%] ">
        <div className="flex gap-2">
          <div className="rounded flex-1 ml-2   hover:scale-105 relative w-[27px] mt-2 hover-filter cursor-pointer">
            <img src ={dbpedicure} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
              <div>
                <p className="text-lg text-orange-600 font-sans font-bold pt-[75px] ">PEDICURE</p>
              </div>
    
            </div>
          </div>
          <div className="rounded flex-1  hover:scale-105 relative w-[27px] mt-2  hover-filter cursor-pointer">
            <img src ={dbmanicure} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
              <div>
                <p className="text-lg text-orange-600 font-sans font-bold pt-[75px] ">MANICURE</p>
              </div>
    
            </div>
          </div>
          <div className="rounded flex-1 mr-2  hover:scale-105 relative w-[27px] mt-2 hover-filter cursor-pointer">
          <img src ={chomme} alt="cfemme" style ={{borderRadius:"20px",width:"581px"}} />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
              <div>
                <p className="text-lg text-orange-600 font-sans font-bold pt-[75px] ">NAPPY</p>
              </div>
    
            </div>
          </div>

        </div>
      </div>
            

    
          {/* Toutes les coiffures*/}
      <div className="mt-10 ml-[6%] pb-3 mr-[6%] ">
      <div className="">
                <div className=" flex gap-2 c1 bg-[#cfa756d8]  pl-3 pr-3 pb-2 pt-3 ">
                    <div className="  flex-1 rounded relative text-white h-[270px] hover:scale-105 cursor-pointer ">
            
                       <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Manicure femme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les femmes déjà mariées </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                        </div>
                        <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                        <img src={m1}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1 rounded relative text-white hover:scale-105 cursor-pointer ">
                    <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Manicure femme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les femmes déjà mariées </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                        </div>
                        <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                        <img src={m2}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1  text-white relative rounded hover:scale-105 cursor-pointer">
                       <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Manicure femme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les femmes déjà mariées </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                        </div>
                        <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                       <img src={m3}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1 rounded relative text-white hover:scale-105 cursor-pointer ">
                    <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Manicure femme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les femmes déjà mariées </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                        </div>
                        <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                        <img src={m4}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1  text-white relative  rounded hover:scale-105 cursor-pointer">
                      <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Manicure femme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les femmes déjà mariées </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                        </div>
                        <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                       <img src={m5}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                </div>
                <div className=" flex gap-2  bg-[#cfa756d8]  pl-3 pr-3 ">
                    <div className="  flex-1 rounded relative text-white hover:scale-105 cursor-pointer h-[270px] mb-2">
                       <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pédicure Homme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les hommes déjà mariés </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                      </div>
                      <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                        <img src={p1}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1 rounded relative  text-white hover:scale-105 cursor-pointer  mb-2">
                     <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pédicure Homme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les hemmes déjà mariés </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                      </div>
                      <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                       <img src={p2}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1  text-white relative rounded hover:scale-105 cursor-pointer mb-2">
                    <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pédicure Homme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les hemmes déjà mariés </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                      </div>
                      <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                        <img src={p3}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1 rounded relative text-white hover:scale-105 cursor-pointer  mb-2">
                    <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pédicure Homme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les hemmes déjà mariés </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                      </div>
                      <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                      <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pédicure Homme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les hemmes déjà mariés </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                      </div>
                      <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                       <img src={p4}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1  text-white relative rounded hover:scale-105 cursor-pointer mb-2">
                    <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pédicure Homme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les hemmes déjà mariés </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                      </div>
                      <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                        <img src={p5}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                </div>
                <div className=" flex gap-2 c2 bg-[#cfa756d8] pl-3 pr-3 pb-3 ">
                    <div className="  flex-1 relative rounded text-white hover:scale-105 cursor-pointer h-[270px] ">
                    <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pedicure Femme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les femmes déjà mariés </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                      </div>
                      <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                         <img src={p2}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1 rounded relative text-white hover:scale-105 cursor-pointer">
                        <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                            <div className="text-left ml-2 pt-1 font-bahnschrift">Pedicure Homme 01</div> 
                            <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les hommes déjà mariés </div> 
                            <p className="text-left ml-2">44.00 Dhs</p>
                          </div>
                      <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                        <img src={m1}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1  text-white relative rounded hover:scale-105 cursor-pointer ">
                    <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pedicure Homme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les hemmes déjà mariés </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                      </div>
                      <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                      <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pedicure femme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les femmes déjà mariées </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                        </div>
                        <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                       <img src={p1}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1 rounded  text-white relative hover:scale-105 cursor-pointer">
                    <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pedicure Homme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les hommes déjà mariés </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                      </div>
                      <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                        <img src={m5}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                    <div className=" flex-1  text-white relative  rounded hover:scale-105 cursor-pointer ">
                    <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
                         <div className="text-left ml-2 pt-1 font-bahnschrift">Pedicure femme 01</div> 
                         <div className="text-left ml-2 mt-[-5px] font-ms-gothic">Pour les femmes déjà mariées </div> 
                         <p className="text-left ml-2">44.00 Dhs</p>
                        </div>
                        <div className="bg-[#c9a96af3] w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" >Rendez-vous</div>
                       <img src={p3}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                    </div>
                </div>
            </div>
      </div>
     <Footer/>
  </div>
  );
}

export default Menuesthetique;
