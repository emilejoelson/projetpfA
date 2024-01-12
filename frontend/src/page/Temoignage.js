import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useSelector, useDispatch } from 'react-redux';
import CardTemoignage from '../components/CardTemoignage';
import { fetchTemoignages } from '../redux/temoignageSlice';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Temoignage() {
  const swiperRef = React.useRef(null);
  const isPhone = window.innerWidth < 768;

  const handlePrevClick = () => {
    swiperRef.current?.swiper?.slidePrev();
  };
  
  const handleNextClick = () => {
    swiperRef.current?.swiper?.slideNext();
  };
  

  const temoignageData = useSelector(state => state.temoignage.temoignageList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemoignages());
  }, [dispatch]);

  const swiperParams = {
    spaceBetween: isPhone ? 20 : 10,
    slidesPerView: isPhone ? 1 : 4,
    loop: true,
    loopadditionalslides: 3,
    autoplay: { delay: 1000 }
  };

  const handleWhatsappClick = (telephone) => {
    if (isMobile) {
      // Open WhatsApp on iPhone
      const url = `https://wa.me/${telephone}`;
      window.open(url, '_blank');
    } else {
      // Open WhatsApp Web on PC
      const url = `https://web.whatsapp.com/send?phone=${telephone}`;
      window.open(url, '_blank');
    }
  };

  const isMobile = window.innerWidth < 768;
  return (
    <div className={`  ${isMobile ? 'w-[26em]' : 'w-[92em] bg-white'}`} style={{ borderRadius: isMobile ? "0px" : "12px" }} >
      <div className="relative">
        <div className={`absolute  ${isMobile ? 'left-[2em]':'left-[41em]'}  z-20  w-40`}>
          <button
            className="font-bold hover:bg-[#D4AF37] hover:scale-110 bg-[#8B7355] mb-20 text-black rounded-full"
            onClick={handlePrevClick}
          >
            <NavigateBeforeIcon
              sx={{
                color: "white",
                width: "25px", 
                height: "25px",
              }}
            />
          </button>
        </div>
        <div className={`absolute  ${isMobile ? 'left-[15em]':'left-[51em]'}   z-20 h-270 w-40`}>
          <button
            className="font-bold hover:bg-[#D4AF37] hover:scale-110 bg-[#8B7355] mb-20 text-black rounded-full"
            onClick={handleNextClick}
          >
            <NavigateNextIcon
              sx={{
                color: "white",
                width: "25px",
                height: "25px",
              }}
            />
          </button>
        </div>
        <div className="sm:ml-8 ml-[50px] sm:mr-8">
          <Swiper
            ref={swiperRef}
            {...swiperParams} // Pass the swiperParams object here
          >
            {temoignageData.map((temoignage) => (
              <SwiperSlide key={temoignage._id} onClick={() => handleWhatsappClick(temoignage.user?.telephone || 'N/A')}>
                <CardTemoignage
                  temoignageId={temoignage._id}
                  username={temoignage.user?.lastName || 'N/A'} // Use optional chaining and provide a default value
                  userimage={temoignage.user?.image || 'default-image-url'} // Use optional chaining and provide a default image URL
                  text={temoignage.text}
                  rating={temoignage.rating}
                  telephone={temoignage.user?.telephone || 'N/A'}
                  services={temoignage.services}
                  createdAt={temoignage.createdAt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Temoignage;
