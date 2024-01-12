import React, { useRef, useEffect, useState } from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import a from './../video/a.mp4';
import b from './../video/b.mp4';
import c from './../video/c.mp4';
import EmailIcon from '@mui/icons-material/Email';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AssistantIcon from '@mui/icons-material/Assistant';
import HistoryIcon from '@mui/icons-material/History';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';
import Category from './Category';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const VideoSlider = () => {
  const videoFiles = [a, b, c, a, b, c];
  const swiperRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [youtubeVideoUrl, setYoutubeVideoUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance.activeIndex === 0) {
        swiperInstance.setTranslate(swiperInstance.width * 0.2);
        swiperInstance.setTransition(0);
        swiperInstance.updateProgress();
        swiperInstance.updateSlidesClasses();
      }
    }
  }, []);

  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current.swiper;
    setCurrentVideoIndex(swiperInstance.activeIndex);
  };

  const handlePlayYoutubeVideo = () => {
    setYoutubeVideoUrl('https://youtu.be/ThFIcXlms70');
  };

  const handleCloseYoutubeVideo = () => {
    setYoutubeVideoUrl('');
  };

  const handleContact = () => {
    navigate('./contact');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openFacebookPage = () => {
    const facebookPageUrl = 'https://www.facebook.com/Fitifash212';
    window.location.href = facebookPageUrl;
  };

  const openInstagram = () => {
    const instagramPageUrl = 'https://www.instagram.com/fiti_fash/';
    window.location.href = instagramPageUrl;
  };

  const openWhatsappPage = () => {
    const phoneNumber = '+212640623201';
    const isMobileDevice = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    if (isMobileDevice) {
      const telLink = `tel:${phoneNumber}`;
      window.location.href = telLink;
    } else {
      const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
      window.open(whatsappURL, '_blank');
    }
  };

  function initiateDiscussion(email) {
    const subject = encodeURIComponent('Discussion Topic');
    const body = encodeURIComponent("Hello,\n\nLet's discuss...");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+212640623201";
  };
  const isMobile = window.innerWidth < 768;

  return (
    <div>
      {
        isMobile ?
         (
          <div className="mt-[125px] bg-yellow-600  ">
            <div className="video-slider-wrapper relative">
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={0}
          centeredSlides
          effect="coverflow"
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={false}
          pagination
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
        >
          {videoFiles.map((video, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="video-container">
                <video src={video} autoPlay muted={true} loop className="video-element rounded-lg shadow-md w-full" />
              </div>
              <div className="overlay-text absolute top-1/2 left-4 mt-0 transform -translate-y-1/2 text-white">
                <div className="msg absolute cursor-pointer font-palatino" onClick={handleContact} style={{ marginLeft: '60em' }}>
                  <div className="flex gap-3 w-[100px] " >
                    <div>
                      <EmailIcon style={{ fontSize: '70px' }} />
                    </div>
                    <div className="a bg-white text-slate-600 items-center justify-center p-2 mt-2 font-" style={{ fontSize: '30px', borderRadius: '0 10px 0 0' }}>Envoyez</div>
                  </div>
                  <div className="a bg-white text-slate-600 w-[205px] ml-2 pb-4" style={{ fontSize: '30px', borderRadius: '0 0 10px 10px' }}>nous un message</div>
                </div>
                <div className="vdo absolute flex gap-[10px] w-[170px] ml-[60em] mt-[300px] p-3 " style={{ border: '5px solid #374151', borderRadius: '10px' }}>
                  <div className="v font-sans mt-2" style={{ fontSize: '22px' }}>Voici la vidéo</div>
                  <div>
                    <div className="hover:scale-110 cursor-pointer" style={{ border: '3px solid #e53e3e', borderRadius: '50px' }} onClick={handlePlayYoutubeVideo}>
                      <PlayCircleFilledIcon style={{ fontSize: '40px', color: '#e53e3e' }} />
                    </div>
                  </div>
                </div>
                <div className="dd ml-10 bg-white w-[100px]">.</div>
                <p className="text-4xl md:text-6xl font-bold py-3 font-palatino text-white text-left ml-10">La maison All in One</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex mt-10 gap-5 ">
         <div
            className="flex-1 ml-5 bg-blue-500  cursor-pointer gap-7 p-2 w-[40px] hover:w-[150px] transition-all duration-300"
            style={{ borderRadius: '50px'  }}
            onClick={openFacebookPage}
          >
            <div className="transition-all  pl-0 pr-0 pl-10 duration-300">
              <FaFacebook className="text-white text-2xl" />
            </div>
          </div>

          <div
            className="flex-1 bg-purple-500  cursor-pointer gap-7 p-2 w-[40px] hover:w-[150px] transition-all duration-300"
            style={{ borderRadius: '50px'  }}
            onClick={openInstagram}
          >
            <div className="transition-all  pl-0 pr-0 pl-10 duration-300">
              <FaInstagram className="text-white text-2xl" />
            </div>
          </div>
          <div
            className="flex-1  bg-green-500  cursor-pointer gap-7 p-2 w-[40px] hover:w-[150px] transition-all duration-300"
            style={{ borderRadius: '50px'  }}
            onClick={openWhatsappPage}
          >
          
            <div className="transition-all  pl-0 pr-0 pl-10 duration-300">
              <FaWhatsapp className="text-white text-2xl" />
            </div>
          </div>
  
          <div
            className="flex-1 bg-red-500  cursor-pointer gap-7 p-2 w-[40px] hover:w-[150px] transition-all duration-300"
            style={{ borderRadius: '50px'  }}
            onClick={handlePhoneClick}
          >
            <div className="transition-all  pl-0 pr-0 pl-10 duration-300">
              <FaPhone className="text-white text-2xl" />
            </div>
          </div>
          <div
            className="flex-1 mr-5 bg-blue-800  cursor-pointer gap-7 p-2 w-[40px] hover:w-[150px] transition-all duration-300"
            style={{ borderRadius: '50px'  }}
            onClick={initiateDiscussion}
          >
            <div className="transition-all  pl-0 pr-0 pl-10 duration-300">
              <FaEnvelope className="text-white text-2xl" />
            </div>
          </div>
      </div>
      
                        
      <div className="bienvenu mt-5  font-script text-2xl ml-10 mr-10">
            Bienvenue chez notre entreprise e-commerce spécialisée dans la <a href="/menu_couture_officiel"><span className="text-gray-500 hover:text-[#c9a96af3] ">couture</span></a>, la <a href="/menu_coiffure_officiel"><span className="text-gray-500 hover:text-[#c9a96af3] ">coiffure</span></a> et la <a href="/menu_esthetique_officiel"><span className="text-gray-500 hover:text-[#c9a96af3] ">vente</span></a> de produits. Nous sommes là pour vous guider dans votre parcours numérique, que ce soit en matière de développement ou de transformation.
        </div>
        <div className="flex gap-5 ml-3 mt-5">
            <div>
                  <TaskAltIcon
                    sx={{
                          color: '#6B7280'
                        }}
                      />
                </div>
             <div className="text-[#0A0A0A] font-palatino">Explorez un Monde de Créativité Vestimentaire</div>
        </div>   
        <div className="flex gap-5 ml-3 mt-2">
            <div>
                  <TaskAltIcon
                    sx={{
                          color: '#6B7280'
                        }}
                      />
                </div>
             <div className="text-[#0A0A0A] font-palatino">Des Tendances qui définissent les Styles</div>
        </div>   
        <div className="flex gap-5 ml-3 mt-2">
            <div>
                  <TaskAltIcon
                    sx={{
                          color: '#6B7280'
                        }}
                      />
                </div>
             <div className="text-[#0A0A0A] font-palatino">Couture Exquise détail Impeccables</div>
        </div> 
        <div className="flex gap-5 ml-3 mt-2">
            <div>
                  <TaskAltIcon
                    sx={{
                          color: '#6B7280'
                        }}
                      />
                </div>
             <div className="text-[#0A0A0A] font-palatino">L'ésthétique à votre Portée</div>
        </div> 
        <div className=" items-center justify-center mt-10 gap-4 flex font-palatino" onClick={handleContact} >
          <div >
             
                      <EmailIcon style={{ fontSize: '50px' }} />
           </div>
          <div className=" bg-white text-slate-600 items-center justify-center p-2 mt-2 font-sans ">Envoyez nous un message</div>     
        </div>
        <div className="text-2xl items-cente justify-center text-[#333333] m-3 font-script">Voici une video de notre chaine youtube </div>
        <div className="  flex w-[21em] ml-10  " style={{ border: '5px solid #374151', borderRadius: '10px' }}>
                  <div className="v font-sans mt-2 flex-1" style={{ fontSize: '22px' }}>Vidéo</div>
                  <div>
                    <div className="hover:scale-110 cursor-pointer flex-1" style={{ border: '3px solid #e53e3e', borderRadius: '50px' }} onClick={handlePlayYoutubeVideo}>
                      <PlayCircleFilledIcon style={{ fontSize: '40px', color: '#e53e3e' }} />
                    </div>
                  </div>
        </div>
        {youtubeVideoUrl && (
        <div className="youtube-video-container absolute mt-[-10em]  w-full h-full z-50 flex items-center justify-center">
          <div className="w-full h-full ">
            <div className="relative bg-black" style={{ borderRadius: '15px' }}>
              <div className="bg-white">
                <button className="absolute top-2 right-5  text-red-400  text-2xl" onClick={handleCloseYoutubeVideo}>
                  X
                </button>
              </div>
              <ReactPlayer url={youtubeVideoUrl} controls width="100%" height="100%" style={{ border: '10px solid white', borderRadius: '15px' }} />
            </div>
          </div>
        </div>
      )}
    </div>
    
          
          )
          :
       (
      <div className="video-slider-container relative overflow-hidden">
      <div className="fixed top-[60px] z-[3] w-full"><Category/></div>
      <div className="fixed top-[200px] z-[5]">
        <div className="relative">
          <div
            className="social-link bg-blue-500 flex cursor-pointer gap-7 p-2 w-[40px] hover:w-[150px] transition-all duration-300"
            style={{ borderRadius: '0 50px 50px 0' }}
            onClick={openFacebookPage}
          >
            <div
              className="w-[0px] overflow-hidden transition-all flex-1 duration-300"
              style={{ width: 'auto' }}
            >
              <span className="hover:text-white">Facebook</span>
            </div>
            <div className="transition-all  ml-[-29px] pl-0 pr-0 pl-10 duration-300">
              <FaFacebook className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-[240px] z-[5]">
        <div className="relative">
          <div
            className="social-link bg-pink-500 flex cursor-pointer gap-7 p-2 w-[40px] hover:w-[150px] transition-all duration-300"
            style={{ borderRadius: '0 50px 50px 0' }}
            onClick={openInstagram}
          >
            <div
              className="w-[0px] overflow-hidden transition-all flex-1 duration-300"
              style={{ width: 'auto' }}
            >
              <span className="hover:text-white">Instagram</span>
            </div>
            <div className="transition-all  ml-[-29px] pl-0 pr-0 pl-10 duration-300">
              <FaInstagram className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-[280px] z-[5]">
        <div className="relative">
          <div
            className="social-link bg-green-500 flex cursor-pointer gap-7 p-2 w-[40px] hover:w-[150px] transition-all duration-300"
            style={{ borderRadius: '0 50px 50px 0' }}
            onClick={openWhatsappPage}
          >
            <div
              className="w-[0px] overflow-hidden transition-all flex-1 duration-300"
              style={{ width: 'auto' }}
            >
              <span className="hover:text-white">Whatsapp</span>
            </div>
            <div className="transition-all  ml-[-29px] pl-0 pr-0 pl-10 duration-300">
              <FaWhatsapp className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-[320px] z-[5]">
        <div className="relative">
          <div>
            <div
              onClick={handlePhoneClick}
              className="social-link bg-red-500 flex cursor-pointer gap-7 p-2 w-[40px] hover:w-[150px] transition-all duration-300"
              style={{ borderRadius: '0 50px 50px 0' }}
            >
              <div
                className="w-[0px] overflow-hidden transition-all flex-1 duration-300"
                style={{ width: 'auto' }}
              >
                <span className="hover:text-white">Telephone</span>
              </div>
              <div className="transition-all  ml-[-29px] pl-0 pr-0 pl-10 duration-300">
                <FaPhone className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-[360px] z-[5]">
        <div className="relative">
          <div
            className="social-link bg-blue-800 flex cursor-pointer gap-7 p-2 w-[40px] hover:w-[150px] transition-all duration-300"
            style={{ borderRadius: '0 50px 50px 0' }}
            onClick={() => initiateDiscussion('fitidesign21@gmail.com')}
          >
            <div
              className="w-[0px] overflow-hidden transition-all flex-1 duration-300"
              style={{ width: 'auto' }}
            >
              <span className="hover:text-white">Email</span>
            </div>
            <div className="transition-all  ml-[-29px] pl-0 pr-0 pl-10 duration-300">
              <FaEnvelope className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-[200px] z-[5] right-4 transform translate-x-1/2 flex flex-col">
        <div className="relative">
          <div  onClick={openFacebookPage} className="social-link bg-blue-500 flex cursor-pointer gap-7 p-2 w-[50px] transition-width duration-300 hover:w-[300px]" style={{ borderRadius: '50px 0 0 50px' }}>
            <div><FaFacebook className="text-white text-2xl" /></div>
            <div><span className="hover:text-white ">Facebook</span></div>
          </div>
        </div>
      </div>
      <div className="fixed top-[240px] right-4 z-[5] transform translate-x-1/2 flex flex-col">
        <div   onClick={openInstagram} className="social-link bg-pink-500 flex gap-7 cursor-pointer  p-2 w-[50px] transition-width duration-300 hover:w-[300px]" style={{ borderRadius: '50px 0 0 50px' }}>
          <div><FaInstagram className="text-white text-2xl" /></div>
          <div><span className="hover:text-white no-underline">Instagram</span></div>
        </div>
      </div>
      <div className="fixed top-[280px] right-4 z-[5] transform translate-x-1/2 flex flex-col">
        <div  onClick={openWhatsappPage}className="social-link bg-green-500 flex gap-7 cursor-pointer p-2 w-[50px] transition-width duration-300 hover:w-[300px]" style={{ borderRadius: '50px 0 0 50px' }}>
          <div><FaWhatsapp className="text-white text-2xl" /></div>
          <div><span className="hover:text-white no-underline">Whatsapp</span></div>
        </div>
      </div>
      <div className="fixed top-[320px] right-4 z-[5] transform translate-x-1/2 flex flex-col">
        <div >
          <div onClick={handlePhoneClick} className="social-link bg-red-500   flex gap-7 cursor-pointer  p-2 w-[50px] transition-width duration-300 hover:w-[300px]" style={{ borderRadius: '50px 0 0 50px' }}>
            <div><FaPhone className="text-white text-2xl" /></div>
            <div><span className="hover:text-white no-underline">Telephone</span></div>
          </div>
        </div>
      </div>
      <div className="fixed top-[360px] right-4 z-[5] transform translate-x-1/2 flex flex-col">
        <div className="social-link bg-blue-800 flex gap-7 cursor-pointer  p-2 w-[50px] transition-width duration-300 hover:w-[300px]" onClick={() => initiateDiscussion('fitidesign21@gmail.com')} style={{ borderRadius: '50px 0 0 50px' }}>
          <div><FaEnvelope className="text-white text-2xl" /></div>
          <div><span className="hover:text-white no-underline">Email</span></div>
        </div>
      </div>

      <div className="video-slider-wrapper relative">
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={0}
          centeredSlides
          effect="coverflow"
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={false}
          pagination
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
        >
          {videoFiles.map((video, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="video-container">
                <video src={video} autoPlay muted={true} loop className="video-element rounded-lg shadow-md w-full" />
              </div>
              <div className="overlay-text absolute top-1/2 left-4 mt-0 transform -translate-y-1/2 text-white">
                <div className="msg absolute cursor-pointer font-palatino" onClick={handleContact} style={{ marginLeft: '60em' }}>
                  <div className="flex gap-3 w-[100px] " >
                    <div>
                      <EmailIcon style={{ fontSize: '70px' }} />
                    </div>
                    <div className="a bg-white text-slate-600 items-center justify-center p-2 mt-2 font-" style={{ fontSize: '30px', borderRadius: '0 10px 0 0' }}>Envoyez</div>
                  </div>
                  <div className="a bg-white text-slate-600 w-[205px] ml-2 pb-4" style={{ fontSize: '30px', borderRadius: '0 0 10px 10px' }}>nous un message</div>
                </div>
                <div className="vdo absolute flex gap-[10px] w-[170px] ml-[60em] mt-[300px] p-3 " style={{ border: '5px solid #374151', borderRadius: '10px' }}>
                  <div className="v font-sans mt-2" style={{ fontSize: '22px' }}>Voici la vidéo</div>
                  <div>
                    <div className="hover:scale-110 cursor-pointer" style={{ border: '3px solid #e53e3e', borderRadius: '50px' }} onClick={handlePlayYoutubeVideo}>
                      <PlayCircleFilledIcon style={{ fontSize: '40px', color: '#e53e3e' }} />
                    </div>
                  </div>
                </div>
                <div className="dd ml-10 bg-white w-[100px]">.</div>
                <div className="text-4xl md:text-6xl font-bold py-3 font-palatino text-white text-left ml-10">La maison All in One</div>
                {/* Content to hide on small screens */}
                <div className="hidden md:block">
                  <div className="t flex gap-4 ml-[70px] text-1xl md:text-1xl font-bold py-3">
                    <div>
                      <TaskAltIcon
                        sx={{
                          color: '#cfa756d8'
                        }}
                      />
                    </div>
                    <div className="text-white-600 font-palatino">Explorez un Monde de Créativité Vestimentaire</div>
                  </div>
                  <div className="t flex gap-4 ml-[70px] text-1xl md:text-1xl font-bold py-3">
                    <div>
                      <TaskAltIcon
                        sx={{
                          color: '#cfa756d8'
                        }}
                      />
                    </div>
                    <div className="text-white-600 font-palatino">Des Tendances qui Redéfinissent le Style</div>
                  </div>
                  <div className="t flex gap-4 font-palatino ml-[70px] text-1xl md:text-1xl font-bold py-3">
                    <div>
                      <TaskAltIcon
                        sx={{
                          color: '#cfa756d8'
                        }}
                      />
                    </div>
                    <div className="text-white-600">Couture Exquise, Détails Impeccables</div>
                  </div>
                  <div className="t flex gap-4 ml-[70px] font-palatino text-1xl md:text-1xl font-bold py-3">
                    <div>
                      <TaskAltIcon
                        sx={{
                          color: '#cfa756d8'
                        }}
                      />
                    </div>
                    <div className="text-white-600">L'Esthétique à Votre Portée</div>
                  </div>
                </div>
                <div className="bienvenu mt-20 font-script text-2xl ml-20 mr-20">
                  Bienvenue chez notre entreprise e-commerce spécialisée dans la <a href="/menu_couture_officiel"><span className="text-gray-500 hover:text-[#c9a96af3] ">couture</span></a>, la <a href="/menu_coiffure_officiel"><span className="text-gray-500 hover:text-[#c9a96af3] ">coiffure</span></a> et la <a href="/menu_esthetique_officiel"><span className="text-gray-500 hover:text-[#c9a96af3] ">vente</span></a> de produits. Nous sommes là pour vous guider dans votre parcours numérique, que ce soit en matière de développement ou de transformation.
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {youtubeVideoUrl && (
        <div className="youtube-video-container absolute top-20 left-80 w-1/2 h-full z-50 flex items-center justify-center">
          <div className="w-1/2 h-1/2 ">
            <div className="relative bg-black" style={{ borderRadius: '15px' }}>
              <div className="bg-white">
                <button className="absolute top-2 right-5  text-red-400  text-2xl" onClick={handleCloseYoutubeVideo}>
                  X
                </button>
              </div>
              <ReactPlayer url={youtubeVideoUrl} controls width="100%" height="100%" style={{ border: '10px solid white', borderRadius: '15px' }} />
            </div>
          </div>
        </div>
      )}
    </div>
        )
      }
    </div>
    
  );
};

export default VideoSlider;
