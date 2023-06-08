import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectConverflow,Pagination,Navigation}  from 'swiper';

import slide_image_1 from "../assest/images/img_1.png";
import slide_image_2 from "../assest/images/img_2.jpg";
import slide_image_3 from "../assest/images/img_3.png";
import slide_image_4 from "../assest/images/img_4.jpg";
import slide_image_5 from "../assest/images/img_5.jpg";
import slide_image_6 from "../assest/images/img_6.png";
import slide_image_7 from "../assest/images/img_7.png";

const MySlide = () => {
  return (
    <Swiper
                  
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  loop
                  centeredSlides
                  effect="coverflow"
                  grabCursor
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  
                  className="w-full h-full"
               >
                  <SwiperSlide  >
                      <img src={slide_image_1} className="  rounded" />
                  </SwiperSlide>
                  <SwiperSlide >
                      <img src={slide_image_2} className=" rounded " />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={slide_image_3} className=" rounded " />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={slide_image_4} className=" rounded " />
                  </SwiperSlide>
                  <SwiperSlide >
                      <img src={slide_image_5} className="  rounded " />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={slide_image_6} className=" rounded" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={slide_image_7} className=" rounded" />
                  </SwiperSlide>

                  <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow ">
                          <ion-icon name="arrow-back-outline">
                          </ion-icon>
                      </div> 
                      <div className="swiper-button-next slider-arrow">
                          <ion-icon name="arrow-forward-outline">
                          </ion-icon>
                      </div> 
                      <div className="swiper-pagination"></div>
                  </div>
               </Swiper>
  );
}

export default MySlide;

