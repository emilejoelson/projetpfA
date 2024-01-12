import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import AllProduct from "../components/AllProduct";
import './Home.css'; 
import "./About.css";
import { Link } from "react-router-dom";
import relooking from "./../assest/images/relooking.png";
import couture from "./../assest/images/couture.png";
import esthetique from "./../assest/images/esthétiquea.jpg";
import offer from "./../assest/images/offer.png";
import imagebusiness from "./../assest/images/imagebusiness.jpg";
//Image esthétiqueu
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Typography, useMediaQuery } from "@mui/material";
import Footer from "../components/Footer";
import {  useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import CallIcon from '@mui/icons-material/Call';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import srvc from "./service.png";

// Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Entreprise from "../components/Entreprise";
import { fetchProductsOnWeekAgo } from "../redux/productSlide";
import CardFeaturerdv from "../components/CardFeaturerdv";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

import modehome1 from "./../assest/images/ModeHomme.gif";
import modehome2 from "./../assest/images/ModeHommy.gif";
import modefemme1 from "./../assest/images/ModeFemme.gif";
import modefemme2 from "./../assest/images/Modefemmy.gif";
import pm1 from "./../assest/images/Menicure&Pedicure.gif";
import pm2 from "./../assest/images/pedicure&manicure.gif";
import c1 from "./../assest/images/couture.gif";
import c2 from "./../assest/images/couture1.gif";
import hf1 from "./../assest/images/goodhairstylewomen.gif";
import hf2 from "./../assest/images/hairstylegirl.gif";
import hh1 from "./../assest/images/haircut.gif";
import hh2 from "./../assest/images/haircut1.gif";

import offre01 from "./../assest/images/offre01.gif";
import offre02 from "./../assest/images/offre02.jpg";
import offre03 from "./../assest/images/offre03.png";
import offre04 from "./../assest/images/offre04.png";
import offre05 from "./../assest/images/offre05.jpg";

import ecommerceImage from "./../assest/images/ecommerce.png";
import Heart from "../components/Heart";

import '../components/Heart.css';
import hchomme from './../assest/images/hchomme.jpg';
import hpdm from './../assest/images/hpedicuremanicure.jpg';
import toast from "react-hot-toast";
import Temoignage from "./Temoignage";
import { addCartItemDeal, fetchCurrentDealdujour } from "../redux/dealdujourSlide";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


const imag = [
  { src: offre01, url: "http://localhost:3000/menu_couture_officiel" },
  { src: offre02, url: "http://localhost:3000/menu_coiffure_officiel" },
  { src: offre03, url: "http://localhost:3000/menu_esthetique_officiel" },
  { src: offre04, url: "http://localhost:3000/offre_g%C3%A9n%C3%A9rale_officielle" },
  { src: offre05, url: "http://localhost:3000/menu_couture_officiel" },
]; 


const Home = () => {
  const dispatch = useDispatch();
  const shopIconRef = useRef(null);
  const productData = useSelector(state => state.product.productList);
  const productDataDealdujour = useSelector(state => state.dealdujour.currentDealdujour);
  
  
  const handleAddCartProduct = () => {
    dispatch(
      addCartItemDeal({
        _id: productDataDealdujour[0]?._id,
        name: productDataDealdujour[0]?.name,
        category: productDataDealdujour[0]?.category,
        image: productDataDealdujour[0]?.image,
        price: productDataDealdujour[0]?.price,
        description:productDataDealdujour[0]?.description
      })
    );
  };

  const productDataOnWeekAgo = useSelector(state => state.product.productListOnWeekAgo);
  const swiperRef = React.useRef(null);
  useEffect(() => {
    dispatch(fetchProductsOnWeekAgo());
    dispatch(fetchCurrentDealdujour());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showScrollUp, setShowScrollUp] = useState(false);
 const [showScrollDown, setShowScrollDown] = useState(true);

  const [currentImage, setCurrentImage] = useState(0);
  const images = productData.map(el => el.image);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);
  
  const loadingArrayFeature = new Array(10).fill(null);

  const history = useNavigate();

  const [dataFiltere, setDataFiltere] = useState([]);

  useEffect(() => {
    setDataFiltere(productData);
  }, [productData]);


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


  // About the gif
  const [currentGifHomeMode, setCurrentGifHomeMode] = useState(modehome1);
  const [currentGifFemmeMode, setCurrentGifFemmeMode] = useState(modefemme1);
  const [currentGifpm, setCurrentGifpm] = useState(pm1);
  const [currentGifcouture, setCurrentGifcouture] = useState(c1);
  const [currentGifhf, setCurrentGifhf] = useState(hf1);
  const [currentGifhh, setCurrentGifhh] = useState(hh1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifHomeMode(prevGif => prevGif === modehome1 ? modehome2 : modehome1);
      setCurrentGifFemmeMode(prevGif => prevGif === modefemme1 ? modefemme2 : modefemme1);
      setCurrentGifpm(prevGif => prevGif === pm1 ? pm2 : pm1);
      setCurrentGifcouture(prevGif => prevGif === c1 ? c2 : c1);
      setCurrentGifhf(prevGif => prevGif === hf1 ? hf2 : hf1);
      setCurrentGifhh(prevGif => prevGif === hh1 ? hh2 : hh1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  // Your product data here
  const homeProductCartListArrivageProduits = productDataOnWeekAgo.filter(
    (product) => product.subcategory && product.subcategory.toLowerCase() === 'produits'
  );

  const homeProductCartListArrivageNonproduits = productDataOnWeekAgo.filter(
    (product) => product.subcategory && product.subcategory.toLowerCase() !== 'produits'
  );

  
  // Combine both product arrays and loading placeholders if no products
  const combinedData = homeProductCartListArrivageProduits.concat(
    homeProductCartListArrivageNonproduits
  );

  const handlePhoneClick = () => {
    window.location.href = "tel:+212640623201";
  };

  const handleOffer = () => {
    // Redirect to the login page
    history('/offre_générale_officielle');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleShoppingBasket = () => {
     history('/menu_produit_officiel');
     window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleCoiffure = () => {
    history('/menu_coiffure_officiel');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const handleEsthetique = () => {
    history('/menu_esthetique_officiel');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  const handleCouture = () => {
    history('/menu_couture_officiel');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleCoifHomme = ( ) => {
     history('/produit/officiel/coiffure_homme');
     window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const handleCoifFemme = ( ) => {
     history('/produit/officiel/coiffure_femme');
     window.scrollTo({ top: 0, behavior: "smooth" });

  }
  //Slide offre
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    // Increment the current index, and loop back to 0 if it exceeds the array length.
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imag.length);
  }, 5000);

  return () => {
    clearInterval(interval);
  };
}, []);

const goToPrevious = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + imag.length) % imag.length);
};

const goToNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % imag.length);
};

const handleImageClick = () => {
  // Get the current image's URL and navigate to it within the same tab.
  window.location.href = imag[currentIndex].url;
};

//UP AND DOWN
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

// Define the media query 
const isMobile = useMediaQuery("(max-width: 1200px)"); // Define your breakpoint for mobile

  // Define the number of slides per view based on the screen size
  const slidesPerView = isMobile ? 2 : 5;

  // Define the spaceBetween based on the screen size
  const spaceBetween = isMobile ? 10 : 40;
  const isPhone = window.innerWidth < 768;

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCoiffureHomme = () => {
    navigate('/Fitifash/Esth%C3%A9tique/Coiffure/Homme');
      window.scrollTo({ top: 0, behavior: "smooth" });
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

//Pour les coiffures femmes
const handleCoiffureFemme = () => {
  navigate('/Fitifash/Esthétique/Coiffure/Damme');
  window.scrollTo({ top: 0, behavior: "smooth" });
}



const handleModeHomme = () => {
  navigate('/categorie_officiel_fitifash/homme');
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const handleModeFemme = () => {
  navigate('/categorie_officiel_fitifash/femme');
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const handlePedicureManicure = () => {
  navigate('/categorie_officiel_fitifash/pédicure');
  window.scrollTo({ top: 0, behavior: "smooth" });
}
const handleCouturecat = () => {
  navigate('/categorie_officiel_fitifash/couture');
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const handleAbout = () => {
  navigate('/about');
  window.scrollTo({ top: 0, behavior: "smooth" });
}


const handleSubmit = async (e) => {
  e.preventDefault();

  const { fullname, email, telephone, sujet,message } = formData;

  if (fullname && email && telephone && sujet && message) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/addcontact`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const dataRes = await fetchData.json();
      toast(dataRes.message);

      setFormData(() => {
        return {
          fullname: "",
          email: "",
          telephone: "",
          sujet: "",
          message: ""
        };
      });
    
  } else {
    alert("Remplir le champ vide");
  }
};

  return (
    <div>
    <div >
       <Entreprise/>
    </div>
    <div>
       {
        isPhone ?
        (
          <div className="bg-yellow-600  relative">
             <div className="pt-5">
                  <h3 className="text-2xl md:text-4xl font-script text-[#353535] font-bold py-3">
                    Nous offrons de nombreux services {" "}
                    <br/>
                    <span >et produits de qualités </span>
                  </h3>
              </div>
              <div className={`pt-[50px]  absolute cursor-pointer ml-5 heart font-script hover:text-[#0A0A0A] ${
                    isHovered ? 'hover:scale-110' : ''
                  }`}
                  style={{
                    backgroundImage: `url(${hchomme})`, // Verify the image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isHovered ? 1 : 0, // Set opacity based on isHovered state
                  }}
                  onClick={handleCoiffureHomme}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className={`transition-opacity text-[#FFD700] ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    Coiffure Homme
                  </p>
                </div>
                <div className={`pt-[50px] absolute cursor-pointer ml-[40px] heartk font-script hover:text-[#0A0A0A] ${
                    isHovered ? 'hover:scale-110' : ''
                  }`}
                  style={{
                    backgroundImage: `url(${hpdm})`, // Verify the image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isHovered ? 1 : 0, // Set opacity based on isHovered state
                  }}
                  onClick={handlePedicureManicure}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className={`transition-opacity  text-[#FFD700] ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    Pédicure Manicure
                  </p>
                </div>
              <div className=" flex cercle items-center justify-center">
                <div className=" relative items-center justify-center bg-slate-900 z-[1]  border-5 border-solid border-[#D4AF37]"
                  style={{width:"300px",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",
                        overflow:"hidden",marginTop:"6em",borderRadius:"50%",
                        border:"15px solid #0A0A0A "
                }}
                  > 
                      <div className="circle cursor-pointer ">
                        
                      </div>
                </div>
              </div>
              <div className={`pt-[50px] absolute cursor-pointer ml-[40px] hearta font-script hover:text-[#0A0A0A] ${
                    isHovered ? 'hover:scale-110' : ''
                  }`}
                  style={{
                    backgroundImage: `url(${hpdm})`, // Verify the image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isHovered ? 1 : 0, // Set opacity based on isHovered state
                  }}
                  onClick={handleCoiffureFemme}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className={`transition-opacity text-[#FFD700] ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    Coiffure Femme
                  </p>
                </div>
                <div className={`pt-[50px] absolute cursor-pointer ml-[40px] heartak font-script hover:text-[#0A0A0A] ${
                    isHovered ? 'hover:scale-110' : ''
                  }`}
                  style={{
                    backgroundImage: `url(${hpdm})`, // Verify the image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isHovered ? 1 : 0, // Set opacity based on isHovered state
                  }}
                  onClick={handleCouture}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className={`transition-opacity text-[#FFD700] ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    Couture
                  </p>
                </div>
                {/*Offre */}
                <div className =" text-2xl font-bold mt-20 font-great-vibes text-[#0A0A0A] " style={{fontSize:"40px"}}>
                   Offre spéciale
                </div>
                <div className=" flex gap-4 rounded mt-5 h-[150px] ">
                           <div className=" w-[430px] font-sans text-2xl md:text-5xl pt-0 text-white rounded bg-gradient-to-r font-bold cursor-pointer items-center justify-center from-slate-600 to-pink-100"
                            
                           >
                               <div className="absolute" style={{marginTop:"90px",backgroundColor:"#cfa756d8"}}>
                                <button onClick={goToPrevious}>
                                    <NavigateBeforeIcon
                                      sx={{
                                        color: "white",
                                        width: "25px",
                                        height: "25px",
                                      }}
                                    />
                                </button>
                               </div>
                               <div className="absolute" style={{marginTop:"90px",marginLeft:"10.2em",backgroundColor:"#cfa756d8"}}>
                                <button onClick={goToNext}>
                                    <NavigateNextIcon
                                      sx={{
                                        color: "white",
                                        width: "25px",
                                        height: "25px",
                                      }}
                                    />
                                </button>
                               </div>
                              
                                  <img
                                    src={imag[currentIndex].src}
                                    alt={`Service ${currentIndex + 1}`}
                                    style={{ borderRadius: "5px" }}
                                    onClick={handleImageClick}
                                    className="w-full h-full transition-all duration-300"
                                  />                             
                           </div>
                          <div className="bg-slate-50  rounded"> 
                             <div className="inscrit items-center text-[#0A0A0A] justify-center font-palatino font-bold"> 
                                 Welcome to Fitifash                       
                             </div>
                              <p className="text-slate-900">- - - - - - -</p>
                              <div className=" mt-1">
                                <div className="  flex-1  rounded font-bold   text-white  items-center p-1 justify-center  "> <button className="sing h-[25px] bg-gradient-to-r from-amber-800 to-orange-500 pl-2
                                  pr-2" > <a href="singup">S'inscrire</a></button></div>
                                <div className="  flex-1  singa rounded  text-[#0A0A0A] items-center p-1 justify-center p-1  "><button  ><a href="login">Se connecter</a></button></div>
                              </div>
                          </div>
                </div>
                {/*Deal du jour */}
                <div className="dea bg-gradient-to-r from-slate-600 to-pink-100   h-[220px] mt-3 md:flex md:items-center md:space-x-3">
                          <div className="text-slate-800 p-4 justify-center w-full rounded md:w-1/2">
                            <span className="italic font-bold font-great-vibes text-1xl text-[#333333] md:text-2xl" style={{ fontSize: "50px" }}>
                              <span className="text-yellow-400">Deal</span> du Jour
                            </span>
                            <br />
                            <span className="font-arial-narrow">Produit de qualité. Prix incroyable</span>
                          </div>
    
                          <div className="md:w-1/2">
                          {productDataDealdujour && (
                               <div className="deal hover:scale-105 relative cursor-pointer ml-[-15px]  mr-4  bg-red h-[170px]">
                              <div className="dprix bg-orange-600 absolute font-bold text-slate-50 w-[50px]">-20%</div>
                              < Link to={`/menu_deal_du_jour/${productDataDealdujour[0]?._id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  
                              <img src={productDataDealdujour[0]?.image} alt="Service A" className="imaga w-full h-full transition-all duration-300" />
                             
                              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                                <div>
                                  <p className="text-lg font-bold pt-4 text-[#0A0A0A]">TOP !!!</p>
                                  <p className="text-sm text-black pt-[20px] font-sans">{productDataDealdujour[0]?.name}</p>
                                  <p className="text-sm text-slate-500 font-palatino">{productDataDealdujour[0]?.description}</p>
                                </div>
                              </div>
                              </Link>
                              <div className="mt-[-20px] ml-[280px] ">
                              <div className=" bg-orange-600 absolute  text-slate-50 w-[50px] " onClick={handleAddCartProduct}>Acheter</div>
                              </div>
                            </div>
                  
                          )}
                          </div>
                  </div>
                  {/*Nouvelle collection et tendance */}
                  <div className=" relative  z-[0]  items-center  transition-all rounded h-[90%] ">
                    <div className="">
                        <Typography
                          variant="h2"
                          color="#0A0A0A"
                          fontWeight="bold"
                          fontFamily="sans"
                          sx={{ m: '28px 0px 29px 0', p: '20px 0px 0px 0' }}
                        >
                                  Nouvelles collections et tendances
                        </Typography>
                    </div>
            
                    <div className="sm:ml-8 sm:mr-8">
                      <Swiper
                      ref={swiperRef}
                      spaceBetween={-10}
                      slidesPerView={3}
                      loop={true}
                      loopadditionalslides={3} // Use loopedSlides instead of loopAdditionalSlides // Add this line
                      autoplay={{ delay: 1000 }}
                    >
                      {combinedData[0] ? (
                        combinedData.map((el) => (
                          <SwiperSlide key={el._id}>
                            <div className="">
                              {el.subcategory && el.subcategory.toLowerCase() === "produits" ? (
                                <CardFeature
                                  id={el._id}
                                  image={el.image}
                                  name={el.name}
                                  subcategory={el.subcategory}
                                  price={el.price}
                                />
                              ) 
                                : 
                              (
                                <CardFeaturerdv
                                  id={el._id}
                                  image={el.image}
                                  name={el.name}
                                  subcategory={el.subcategory}
                                  price={el.price}
                                />
                              )}
                            </div>
                          </SwiperSlide>
                        ))
                      ) : (
                        loadingArrayFeature.map((el, index) => (
                          <SwiperSlide key={index + "loading"}>
                            <CardFeaturerdv loading="Chargement..." />
                          </SwiperSlide>
                        ))
                      )}
                      </Swiper>
                    </div> 
                 
                 </div>

                {/*Menu */}
                  <div className=" mt-[50px] bg-slate-100   items-center justify-center">
                  <div className=" relative  flex flex-wrap items-center justify-center gap-5 bg-slate-100  ">
                    
                    <div>
                      <div  onClick={handlePhoneClick} className="w-[100px] h-[100px]  mt-3  hover:scale-105 relative rounded-full bg-green-300 flex justify-center items-center cursor-pointer">
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
                    
                    <div className="mt-3">
                      <div onClick={handleShoppingBasket} className="w-[100px] h-[100px]  hover:scale-110  relative rounded-full bg-[#d39314fb] flex justify-center items-center cursor-pointer">
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
                      <div onClick={handleCoiffure} className="w-[100px] h-[100px]  hover:scale-105 rounded-full cursor-pointer bg-yellow-800  flex justify-center items-center cursor-pointer">
                        <div className="coiffure absolute bg-yellow-500 flex justify-center items-center" 
                        style={{fontSize:"16px",width:"70px"}}
                        >
                          Coiffure
                        </div>
                      </div>
                    </div>
                    <div className="mt-3" >
                      <div onClick={handleEsthetique} className="w-[100px] h-[100px]  hover:scale-105 relative rounded-full bg-yellow-600 flex justify-center items-center cursor-pointer">
                        <img src={relooking} alt="Esthetique" className=" imgesthetique w-1/2 h-1/2  transition-all duration-300" />
                      </div>
                    </div>
                    <div className=" mt-3 mb-3 " >
                      <div onClick={handleCouture} className="w-[100px] h-[100px]  hover:scale-105 relative rounded-full bg-yellow-700 flex justify-center items-center cursor-pointer">
                        <img src={couture} alt="Couture" className=" w-1/2 h-1/2  transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                  </div>
                
                {/*Catégories */}
                <div className="  bg-black  mt-10" >
                    <div className=" pt-3 pb-3 font-[700] text-[#C49A45]  font-sans text-xl select-none rounded-t-md">Nos catégories</div>
                </div>
                <div className="bg-yellow-600 " style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                    <div onClick={handleModeHomme} className="category hover:scale-110 relative ml-3 w-[100px] mt-3 h-[120px] hover-filter cursor-pointer">
                        <img src={currentGifHomeMode} alt="MODE HOME" className=" w-full h-full transition-all duration-300" style={{borderRadius:"12px",border:"2px solid #0A0A0A "}} />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                            <div>
                                <p className="text-lg text-orange-600 font-sans font-bold pt-[40px]" style={{fontSize:"12px"}}>MODE HOMME</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleModeFemme} className="category hover:scale-110 relative w-[100px] mt-3 h-[120px] hover-filter cursor-pointer">
                        <img src={currentGifFemmeMode} alt="MODE FEMME" className="imag w-full h-full transition-all duration-300" style={{borderRadius:"12px",border:"2px solid #0A0A0A "}}/>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                            <div>
                                <p className="text-lg text-orange-600 font-sans font-bold pt-[40px]" style={{fontSize:"12px"}}>MODE FEMME</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={handlePedicureManicure} className="category hover:scale-110 relative w-[100px] mt-3 h-[120px] hover-filter cursor-pointer">
                        <img src={currentGifpm} alt="MANICURE & PEDICURE" className="imag w-full h-full transition-all duration-300" style={{borderRadius:"12px",border:"2px solid #0A0A0A "}}/>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                            <div>
                                <p className="text-lg text-orange-600 font-sans font-bold pt-[30px]" style={{fontSize:"12px"}}>MANICURE & PEDICURE</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleCouturecat} className="category hover:scale-110 relative ml-3 w-[100px] mt-3 h-[120px] hover-filter cursor-pointer">
                        <img src={currentGifcouture} alt="COUTURE" className="imag w-full h-full transition-all duration-300"style={{borderRadius:"12px",border:"2px solid #0A0A0A "}} />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                            <div>
                                <p className="text-lg text-orange-600 font-sans font-bold pt-[40px]" style={{fontSize:"12px"}}>COUTURE</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleCoifHomme} className="category hover:scale-110 relative w-[100px] mt-3 h-[120px] hover-filter cursor-pointer">
                        <img src={currentGifhh} alt="COIFFURE HOMME" className="imag w-full h-full transition-all duration-300" style={{borderRadius:"12px",border:"2px solid #0A0A0A "}} />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                            <div>
                                <p className="text-lg text-orange-600 font-sans font-bold pt-[20px]" style={{fontSize:"12px"}}>COIFFURE HOMME</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleCoifFemme} className="category hover:scale-110 mb-10 relative w-[100px] mt-3 h-[120px] hover-filter cursor-pointer">
                        <img src={currentGifhf} alt="COIFFURE FEMME" className="imag w-full h-full transition-all duration-300" />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white" style={{borderRadius:"12px",border:"2px solid #0A0A0A "}}>
                            <div>
                                <p className="text-lg text-orange-600 font-sans font-bold pt-[20px]" style={{fontSize:"12px"}}>COIFFURE FEMME</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[-80px] ">
                  <AllProduct heading="TOUS LES PRODUITS"/>
                </div>
                <div className="flex items-center justify-center" > <div className="dashed-text font-bold font-palatino" style={{fontSize:"17px",marginTop:"-120px"}} > A PROPOS DE NOUS</div></div>
                <div className="flex gap-[60px] ">
                    <div className=" w-[150px] ml-3 font-sans text-slate-900 font-bold" style={{fontSize:"25px"}} >
                         La Maison All In One
                    </div>
                    <div onClick={handleAbout} className=" bg-slate-900 w-[200px] mr-4 h-[40px] pt-[5px] font-bold font-sans  cursor-pointer hover:text-slate-900 rounded hover:bg-[#FFD700]  flex text-items justify-center  "
                      style={{fontSize:"20px"}}
                    >
                         Plus d'info
                    </div>
                </div>
                <div className="font-palatino ml-4 align-top justify-start text-justify mr-4 text-[#353535] ">
                   Plongez dans un havre de sérénité et d'élégance où chaque expérience est taillée sur mesure pour vous, car nous savons que vous êtes unique. Notre salon réunit tous les aspects de la beauté, de la peau aux cheveux, offrant une expertise globale dans un parcours beauté idéalement conçu. Venez découvrir comment nous pouvons sublimer votre beauté tout en vous offrant des tenues sur mesure qui vous enchanteront.
                   Notre dévouement pour les détails se manifeste dans la création de meubles et d'équipements sur mesure qui correspondent précisément à vos besoins. Nous sommes passionnés par l'excellence et sommes là pour vous offrir un service complet de conseil. Chaque pièce que nous créons reflète votre individualité, et notre équipe est là pour garantir votre satisfaction à chaque étape. 
                  </div>
                  <div onClick={handleAbout} className="flex-1 mt-6 ml-4 mr-4 cursor-pointer hover:scale-105 ">
                      <img src = {ecommerceImage} style={{borderRadius:"1px"}} />
                   </div>
                   <div className="flex items-center justify-center">
                     <div className="dashed-text font-bold font-palatino" style={{fontSize:"17px"}}> TEMOIGNAGES</div> 
                  </div>
                  <div className="flex items-center justify-center">
                    <div className=" bg-slate-900 w-[200px] h-[40px] pt-[5px] font-bold font-sans  cursor-pointer hover:text-slate-900 rounded hover:bg-[#FFD700]  flex text-items justify-center  "
                        style={{fontSize:"20px"}}
                      >
                          Les clients satisfaits
                      </div>
                  </div>
                  <div>
                    <Temoignage/>
                  </div>
                  <div className="grid grid-cols-1 bg-black gap-4 mt-10 pb-10">
                      <div className="">
                        <div className="dashed" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}></div>
                        <div className="mt-2 font-sans font-bold text-2xl md:text-3xl" style={{ fontSize: "30px" }}>
                          Clients heureux
                        </div>
                        <div className="font-poppins font-bold text-3xl md:text-4xl" style={{ fontSize: "40px" }}>
                          10
                        </div>
                      </div>
                      <div className="">
                        <div className="dashed"  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}></div>
                        <div className="mt-2 font-sans font-bold text-2xl md:text-3xl" style={{ fontSize: "30px" }}>
                          Projets Achevés
                        </div>
                        <div className="font-poppins font-bold text-3xl md:text-4xl" style={{ fontSize: "40px" }}>
                          15
                        </div>
                      </div>
                      <div className="">
                        <div className="dashed"  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}></div>
                        <div className="mt-2 font-sans font-bold text-2xl md:text-3xl" style={{ fontSize: "30px" }}>
                          Contacts reçu
                        </div>
                        <div className="font-poppins font-bold text-3xl md:text-4xl" style={{ fontSize: "40px" }}>
                          34
                        </div>
                      </div>
                      <div className="">
                        <div className="dashed"  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}></div>
                        <div className="mt-2 font-sans font-bold text-2xl md:text-3xl" style={{ fontSize: "30px" }}>
                          Stock
                        </div>
                        <div className="font-poppins font-bold text-3xl md:text-4xl" style={{ fontSize: "40px" }}>
                          +105
                        </div>
                      </div>
                      <div className="dashed"  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}></div>
                   </div>
                   <div style={{ position: "relative" }}>
                      <img src={imagebusiness} alt="Joelson" style={{ borderRadius: "1px" }} />
                      <div className="flex text-left font-great-vibes" style={{ position: "absolute",width:"300px", top: "1em", left: "2em", padding: "5px",fontSize:"29px" }} >
                          Contactez nous !
                          Fitifash est à votre disposition.
                      </div>
                  </div>
                  <div >
                    <form
                      className='m-auto w-full max-w-md shadow   flex flex-col p-3 text-yellow-500 bg-white '
                      onSubmit={handleSubmit}
                    >
                      <Typography
                        variant="h3"
                        sx={{ color: "#0A0A0A" }}
                        
                      >
                        <div className="font-sans ">Envoyer nous votre message</div>
                      </Typography>
                    
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Nom et prénom ..."
                        className=' mt-2 h-10 pl-5 w-full text-[#0A0A0A] bg-white p-1 my-1'
                        spellCheck="false"
                        value={formData.fullname}
                        onChange={handleChange}
                        style={{borderRadius:"50px",border:"2px solid #0A0A0A "}}
                      />
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email ..."
                        className=' mt-2 h-10 pl-5 text-[#0A0A0A] bg-white p-1 my-1'
                        spellCheck="false"
                        value={formData.email}
                        onChange={handleChange}
                        style={{borderRadius:"50px",border:"2px solid #0A0A0A "}}
                      />
                      <input
                        type="text"
                        placeholder="Telephone ..."
                        className=' h-10 pl-5 mt-2 text-[#0A0A0A] bg-white p-1 my-1'
                        name="telephone"
                        spellCheck="false"
                        value={formData.telephone}
                        onChange={handleChange}
                        style={{borderRadius:"50px",border:"2px solid #0A0A0A "}}
                      />
                      <input
                        type="text"
                        placeholder="Sujet ..."
                        className=' h-10 mt-2 pl-5 text-[#0A0A0A] bg-white p-1 my-1'
                        name="sujet"
                        spellCheck="false"
                        value={formData.sujet}
                        onChange={handleChange}
                        style={{borderRadius:"50px",border:"2px solid #0A0A0A "}}
                      />
                      <textarea
                        rows={6}
                        placeholder="Message ..."
                        className='pl-5 mt-2 text-[#0A0A0A] bg-white p-1 my-1 resize-none'
                        id="message"
                        name="message"
                        spellCheck="false"
                        value={formData.message}
                        onChange={handleChange}
                        style={{borderRadius:"12px",border:"2px solid #0A0A0A "}}
                      />

                      <button
                        type="submit"
                        className='mt-2 hover:bg-white bg-[#0A0A0A]  text-white text-lg font-medium my-2 drop-shadow'
                        style={{borderRadius:"50px"}}
                      >
                        Envoyer
                      </button>
                    </form>
                  </div>
                  <div>
                      <Footer/>
                  </div>
          </div>
        )
         :
        (
       <div className="bg-yellow-600  home "
        onMouseEnter={() => setShowScrollUp(false)}
        onMouseLeave={() => setShowScrollUp(true)}
       
        >
          <div className="offer absolute z-[2] cursor-pointer" onClick={handleOffer}>
             <img src={offer} alt="Offre" style ={{width:"150px"}} className="offre"/>
          </div>
          <div className=" offert absolute   ml-[60em] mt-[5em]   z-[1] items-center justify-center">
            <div className=" bg-yellow-600 hover:scale-110 rounded text-black  h-[600px] relative w-[35em] p-4  justify-center">
                        <div className=" flex gap-4 rounded  h-[150px] ">
                           <div className=" w-[430px] font-sans text-2xl md:text-5xl pt-0 text-white rounded bg-gradient-to-r font-bold cursor-pointer items-center justify-center from-slate-600 to-pink-100"
                            
                           >
                               <div className="absolute" style={{marginTop:"90px",backgroundColor:"#cfa756d8"}}>
                                <button onClick={goToPrevious}>
                                    <NavigateBeforeIcon
                                      sx={{
                                        color: "white",
                                        width: "25px",
                                        height: "25px",
                                      }}
                                    />
                                </button>
                               </div>
                               <div className="absolute" style={{marginTop:"90px",marginLeft:"6em",backgroundColor:"#cfa756d8"}}>
                                <button onClick={goToNext}>
                                    <NavigateNextIcon
                                      sx={{
                                        color: "white",
                                        width: "25px",
                                        height: "25px",
                                      }}
                                    />
                                </button>
                               </div>
                              
                                  <img
                                    src={imag[currentIndex].src}
                                    alt={`Service ${currentIndex + 1}`}
                                    style={{ borderRadius: "5px" }}
                                    onClick={handleImageClick}
                                    className="w-full h-full transition-all duration-300"
                                  />                             
                           </div>
                          <div className="bg-slate-50  rounded"> 
                             <div className="inscrit items-center justify-center font-palatino font-bold"> 
                                 Welcome to Fitifash                       
                             </div>
                              <p className="text-slate-900">- - - - - - -</p>
                              <div className=" mt-1">
                                <div className="  flex-1  rounded font-bold   text-white  items-center p-1 justify-center  "> <button className="sing h-[25px] bg-gradient-to-r from-amber-800 to-orange-500 pl-2
                                  pr-2" > <a href="singup">S'inscrire</a></button></div>
                                <div className="  flex-1  singa rounded   items-center p-1 justify-center p-1  "><button  ><a href="login">Se connecter</a></button></div>
                              </div>
                          </div>
                          
                        </div>
    
                        <div className="dea bg-gradient-to-r from-slate-600 to-pink-100  rounded h-[220px] mt-3 md:flex md:items-center md:space-x-3">
                          <div className="text-slate-800 p-4 justify-center w-full rounded md:w-1/2">
                            <span className="italic font-bold font-great-vibes text-1xl text-[#333333] md:text-2xl" style={{ fontSize: "50px" }}>
                              <span className="text-yellow-400">Deal</span> du Jour
                            </span>
                            <br />
                            <span className="font-arial-narrow">Produit de qualité. Prix incroyable</span>
                          </div>
    
                          <div className="md:w-1/2">
                          {productDataDealdujour && (
                             <div className="deal hover:scale-105 relative cursor-pointer ml-[-15px]  mr-4  bg-red h-[170px]">
                              <div className="dprix bg-orange-600 absolute font-bold text-slate-50 w-[50px]">-20%</div>
                              < Link to={`/menu_deal_du_jour/${productDataDealdujour[0]?._id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                              <img src={productDataDealdujour[0]?.image} alt="Service A" className="imaga w-full h-full transition-all duration-300" />
                             
                              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                                <div>
                                  <p className="text-lg font-bold pt-4 text-[#0A0A0A]">TOP !!!</p>
                                  <p className="text-sm text-black pt-[20px] font-sans">{productDataDealdujour[0]?.name}</p>
                                  <p className="text-sm text-slate-500 font-palatino">{productDataDealdujour[0]?.description}</p>
                                </div>
                              </div>
                              </Link>
                              <div className=" dacheter bg-black absolute cursor-pointer font-arial-narrow text-slate-50 w-[50px]" onClick={handleAddCartProduct}>Acheter</div>
                            </div>
                            
                          )}
                          </div>
                        </div>
    
    
                        
            </div>
          </div>
          
         
          <div className=" ">
           
            <div className="md:flex "
            >
              <div className="md:w-[60%]">
                <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">

                 </div>
                <div className=" ">
                  <h3 className="text-2xl md:text-4xl font-script text-slate-100 font-bold py-3">
                    Nous offrons de nombreux services {" "}
                    <br/>
                    <span >et produits de qualités </span>
                  </h3>
                </div>
                 <br/>     
                 <div className="absolute coeur mt-[-50px] z-[0]  ">
                      <Heart/>
                 </div>
                 <div className=" relative circle-container bg-slate-900 z-[1]  border-5 border-solid border-[#D4AF37]" 
                 >
                    <div className="circle cursor-pointer ">
                      <img src={srvc} alt="service"/>
                    </div>
                </div>
              </div>
    
            </div>
            {/**Nouvelles collections et tendances */}
            <div className="newproduct relative  mt-[5em] mt-[40px] z-[0]  items-center  transition-all rounded h-[90%] ">
               <div className="dashed-text font-bold text-slate-100 font-palatino" style={{fontSize:"25px"}} >
                  
                            NOUVELLES COLLECTIONS ET TENDANCES
               </div>
               <div className=" bg-slate-900 w-[300px] ml-[500px] mb-10 h-[40px] pt-[5px] font-bold font-sans  cursor-pointer hover:text-slate-900 rounded hover:bg-yellow-600  flex text-items justify-center  "
                      style={{fontSize:"20px"}}
                    >
                        Les nouvels Arrivages
                 </div>
                <div className="sm:ml-8 sm:mr-8">
                  <Swiper
                 ref={swiperRef}
                 spaceBetween={spaceBetween}
                 slidesPerView={slidesPerView}
                 loop={true}
                 loopadditionalslides={3}// Add this line
                 autoplay={{ delay: 1000 }}
                >
                  {combinedData[0] ? (
                    combinedData.map((el) => (
                      <SwiperSlide key={el._id}>
                        <div className="ml-[70px] z-[5] shadow-md hover-shadow ">
                          {el.subcategory && el.subcategory.toLowerCase() === "produits" ? (
                            <CardFeature
                              id={el._id}
                              image={el.image}
                              name={el.name}
                              subcategory={el.subcategory}
                              price={el.price}
                            />
                          ) 
                            : 
                          (
                            <CardFeaturerdv
                              id={el._id}
                              image={el.image}
                              name={el.name}
                              subcategory={el.subcategory}
                              price={el.price}
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    loadingArrayFeature.map((el, index) => (
                      <SwiperSlide key={index + "loading"}>
                        <CardFeaturerdv loading="Chargement..." />
                      </SwiperSlide>
                    ))
                  )}
                  </Swiper>
                </div>
            </div>
       
             <div className="newproducta ro flex  bg-slate-100 gap-4  ml-[16%] mr-[16%]  h-[200px] mt-8 items-center justify-center" style={{ borderRadius: "100px" }}>
              <button className="font-bold hover:bg-gray-400 mb-1 text-black rounded-full bg-slate-500">
                <NavigateBeforeIcon
                  sx={{
                    color: "white",
                    width: "25px",
                    height: "25px",
                  }}
                />
              </button>
              <div className="mb-20 relative mt-20 flex flex-wrap z-[2] gap-2  pb-2 ">
                <div>
                  <div onClick={handlePhoneClick} className="w-[150px] z-[2] mt-3 h-[150px] hover:scale-105 relative rounded-full bg-green-300 flex justify-center items-center cursor-pointer">
                    <div className="icon-container">
                      <CallIcon
                        className="shaking-icon"
                        style={{
                          fontSize: "70px",
                          justifyContent: "center",
                        }}
                      />
                    </div>
                  </div>
                </div>
                  <div onClick={handleShoppingBasket} className="w-[150px] z-[2]  h-[150px] mt-3 hover:scale-110  relative rounded-full bg-[#d39314fb] flex justify-center items-center cursor-pointer">
                    <div className="icon-container">
                      <ShoppingBasketIcon
                        ref={shopIconRef}
                        className="shop-icon"
                        style={{
                          fontSize: "70px",
                          justifyContent: "center",
                        }}
                      />
                    </div>
      
                </div>
                <div className="mt-3 z-[2] " onClick={handleCoiffure}>
                  <div className="w-[150px] h-[150px] hover:scale-105 rounded-full cursor-pointer bg-yellow-800  flex justify-center items-center cursor-pointer">
                    <div className="coiffure absolute bg-yellow-500 flex justify-center items-center">
                      Coiffure
                    </div>
                  </div>
                </div>
                <div className="mt-3 z-[2]" onClick={handleEsthetique}>
                  <div className="w-[150px] h-[150px] hover:scale-105 relative rounded-full bg-yellow-600 flex justify-center items-center cursor-pointer">
                    <img src={relooking} alt="Esthetique" className=" imgesthetique w-1/2 h-1/2  transition-all duration-300" />
                  </div>
                </div>
                <div className="mt-3 z-[2] " onClick={handleCouture}>
                  <div className="w-[150px] h-[150px] hover:scale-105 relative rounded-full bg-yellow-700 flex justify-center items-center cursor-pointer">
                    <img src={couture} alt="Couture" className=" w-1/2 h-1/2  transition-all duration-300" />
                  </div>
                </div>
              </div>
              <button className="font-bold hover:bg-gray-400 mb-1 text-black rounded-full bg-slate-500">
                <NavigateNextIcon
                  sx={{
                    color: "white",
                    width: "25px",
                    height: "25px",
                  }}
                />
              </button>
              </div>
    
              {/**Nos catégories */}
               <div className="  bg-black ml-[3%] mr-[3%] mt-10" style={{borderRadius:"10px 10px 0 0 "}}>
                    <div className=" pt-3 pb-3 font-[700] text-[#C49A45]  font-sans text-xl select-none rounded-t-md">Nos catégories</div>
               </div>
               <div className=" bg-slate-100 ml-[3%]  pb-4 mr-[3%]" style={{borderRadius:"0 0 10px 10px "}}>
                     <div className="flex">
                        <div onClick={handleModeHomme} className=" category flex-1 ml-4 hover:scale-110 relative w-[27px] mt-3 h-[200px] hover-filter  cursor-pointer">
                          <img src={currentGifHomeMode} alt="Service A" className=" imag w-full h-full  transition-all duration-300" />
                              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                                  <div>
                                      <p className="text-lg text-orange-600 font-sans font-bold pt-[75px] ">MODE HOME</p>
                                  </div>
                              </div>
                          </div>
                          <div onClick={handleModeFemme} className=" category flex-1 ml-4 hover:scale-110 relative w-[27px] mt-3 h-[200px] hover-filter   cursor-pointer">
                          <img src={currentGifFemmeMode} alt="Service A" className=" imag w-full h-full  transition-all duration-300" />
                              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                                  <div>
                                      <p className="text-lg text-orange-600 font-sans font-bold pt-[75px] ">MODE FEMME</p>
                                  </div>
                              </div>
                          </div>
                          <div onClick={handlePedicureManicure} className=" category flex-1 ml-4 hover:scale-110 relative w-[27px] mt-3 h-[200px] hover-filter  cursor-pointer">
                          <img src={currentGifpm} alt="Service A" className=" imag w-full h-full  transition-all duration-300" />
                              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                                  <div>
                                      <p className="text-lg text-orange-600 font-sans font-bold pt-[75px] ">MANICURE & PEDICURE</p>
                                  </div>
                              </div>
                          </div>
                          <div onClick={handleCouturecat} className=" category flex-1 ml-4  hover:scale-110 relative w-[27px] mt-3 h-[200px] hover-filter  cursor-pointer">
                          <img src={currentGifcouture} alt="Service A" className=" imag w-full h-full  transition-all duration-300" />
                              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                                  <div> 
                                      <p className="text-lg text-orange-600 font-sans font-bold pt-[75px] ">COUTURE</p>
                                  </div>
                              </div>
                          </div>
                          <div onClick={handleCoifHomme} className=" category flex-1 ml-4 hover:scale-110 relative w-[27px] mt-3 h-[200px] hover-filter  cursor-pointer">
                              <img src={currentGifhh} alt="Service A" className=" imag w-full h-full  transition-all duration-300" />
                              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                                  <div>
                                      <p className="text-lg text-orange-600 font-sans font-bold pt-[75px] ">COIFFURE HOMME</p>
                                      
                                  </div>
                              </div>
                          </div>
                          <div onClick={handleCoifFemme} className=" category flex-1 ml-4 mr-4 hover:scale-110 relative w-[27px] mt-3 h-[200px] hover-filter   cursor-pointer">
                          <img src={currentGifhf} alt="Service A" className=" imag w-full h-full  transition-all duration-300" />
                              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
                                  <div>
                                      <p className="text-lg text-orange-600 font-sans font-bold pt-[75px] ">COIFFURE FEMME</p>
                                  </div>
                              </div>
                          </div>
                      </div>
               </div>
            <div>
              <AllProduct heading={"TOUS LES PRODUITS"} />
            </div>
            <div className="flex ml-[3%] mr-[3%]  ">
                <div className=" flex-1 text-left mt-[-60px]  ">
                  <div className="flex items-center justify-center"> <div className="dashed-text font-bold font-palatino" style={{fontSize:"27px"}}> A PROPOS DE NOUS</div> </div>
                 <div className="flex gap-[270px] ">
                    <div className=" w-[150px] font-sans text-slate-900 font-bold" style={{fontSize:"25px"}} >
                        La Maison All In One
                    </div>
                    <div onClick={handleAbout} className=" bg-slate-900 w-[200px] h-[40px] pt-[5px] mr-10 font-bold font-sans  cursor-pointer hover:text-slate-900 rounded hover:bg-yellow-600  flex text-items justify-center  "
                      style={{fontSize:"20px"}}
                    >
                        Plus d'info
                    </div>
                  </div>
                  <div className="font-palatino align-top justify-start text-justify mr-10 text-[#353535] ">
                  Plongez dans un havre de sérénité et d'élégance où chaque expérience est taillée sur mesure pour vous, car nous savons que vous êtes unique. Notre salon réunit tous les aspects de la beauté, de la peau aux cheveux, offrant une expertise globale dans un parcours beauté idéalement conçu. Venez découvrir comment nous pouvons sublimer votre beauté tout en vous offrant des tenues sur mesure qui vous enchanteront.


Notre dévouement pour les détails se manifeste dans la création de meubles et d'équipements sur mesure qui correspondent précisément à vos besoins. Nous sommes passionnés par l'excellence et sommes là pour vous offrir un service complet de conseil. Chaque pièce que nous créons reflète votre individualité, et notre équipe est là pour garantir votre satisfaction à chaque étape. 


                  </div>
                </div>
                <div onClick={handleAbout} className="flex-1 cursor-pointer hover:scale-105 ">
                    <img src = {ecommerceImage} style={{borderRadius:"15px"}} />
                </div>
            </div>
            <div className="flex ml-[3%] mr-[3%] mt-[60px] ">
                <div className=" flex-1 text-left mt-[-60px]  ">
                  <div className="flex items-center justify-center">
                     <div className="dashed-text font-bold font-palatino" style={{fontSize:"27px"}}> TEMOIGNAGES</div> 
                  </div>
                 <div className="flex gap-[335px] items-center justify-center mb-10 ">
                    <div className=" bg-slate-900 w-[300px] h-[40px] pt-[5px] font-bold font-sans  cursor-pointer hover:text-slate-900 rounded hover:bg-yellow-600  flex text-items justify-center  "
                      style={{fontSize:"20px"}}
                    >
                        Les clients satisfaits
                    </div>
                </div>
                  <div>
                    <Temoignage/>
                  </div>
                </div>
            </div>
            <div className="flex  mt-10 gap-[100px] bg-black pb-10 ">
                    <div className=" text-left ml-[100px] ">
                           <div className="dashed "></div>
                           <div className=" mt-[-20px] font-sans font-bold " style={{fontSize:"25px"}}>Clients heureux</div>
                           <div className="font-poppins font-bold"  style={{fontSize:"40px"}}>10</div>
                    </div>
                    <div className=" text-left ml-[100px] ">
                           <div className="dashed "></div>
                           <div className=" mt-[-20px] font-sans font-bold " style={{fontSize:"25px"}}>Projets Achevés</div>
                           <div className="font-poppins font-bold"  style={{fontSize:"40px"}}>15</div>
                    </div>
                    <div className=" text-left ml-[100px] ">
                           <div className="dashed "></div>
                           <div className=" mt-[-20px] font-sans font-bold " style={{fontSize:"25px"}}>Contacts reçu</div>
                           <div className="font-poppins font-bold"  style={{fontSize:"40px"}}>34</div>
                    </div>
                    <div className=" text-left ml-[100px] ">
                           <div className="dashed "></div>
                           <div className=" mt-[-20px] font-sans font-bold " style={{fontSize:"25px"}}>Stock</div>
                           <div className="font-poppins font-bold"  style={{fontSize:"40px"}}>+105</div>
                    </div>
             </div>
             <div style={{ position: "relative" }}>
                <img src={imagebusiness} alt="Joelson" style={{ borderRadius: "1px" }} />
                <div className="flex text-left font-great-vibes" style={{ position: "absolute",width:"350px", top: "2em", left: "3em", padding: "5px",fontSize:"60px" }} >
                    Contactez nous !
                    Fitifash est à votre disposition.
                </div>
                <div className=" absolute mt-10	 " style={{ top: "-5em", left: "60em"}} >
                  <form
                    className='m-auto w-full max-w-md shadow   flex flex-col p-3 text-yellow-500 bg-white '
                    onSubmit={handleSubmit}
                    style={{borderRadius:"20px"}}
                  >
                    <Typography
                      variant="h1"
                      sx={{ color: "#0A0A0A" }}
                      
                    >
                      <div className="font-sans ">Envoyer nous votre message</div>
                    </Typography>
                  
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Nom et prénom ..."
                      className=' mt-2 h-10 pl-5 w-full text-[#0A0A0A] bg-white p-1 my-1'
                      spellCheck="false"
                      value={formData.fullname}
                      onChange={handleChange}
                      style={{borderRadius:"50px",border:"2px solid #0A0A0A "}}
                    />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email ..."
                      className=' mt-2 h-10 pl-5 text-[#0A0A0A] bg-white p-1 my-1'
                      spellCheck="false"
                      value={formData.email}
                      onChange={handleChange}
                      style={{borderRadius:"50px",border:"2px solid #0A0A0A "}}
                    />
                    <input
                      type="text"
                      placeholder="Telephone ..."
                      className=' h-10 pl-5 mt-2 text-[#0A0A0A] bg-white p-1 my-1'
                      name="telephone"
                      spellCheck="false"
                      value={formData.telephone}
                      onChange={handleChange}
                      style={{borderRadius:"50px",border:"2px solid #0A0A0A "}}
                    />
                    <input
                      type="text"
                      placeholder="Sujet ..."
                      className=' h-10 mt-2 pl-5 text-[#0A0A0A] bg-white p-1 my-1'
                      name="sujet"
                      spellCheck="false"
                      value={formData.sujet}
                      onChange={handleChange}
                      style={{borderRadius:"50px",border:"2px solid #0A0A0A "}}
                    />
                    <textarea
                      rows={6}
                      placeholder="Message ..."
                      className='pl-5 mt-2 text-[#0A0A0A] bg-white p-1 my-1 resize-none'
                      id="message"
                      name="message"
                      spellCheck="false"
                      value={formData.message}
                      onChange={handleChange}
                       style={{borderRadius:"12px",border:"2px solid #0A0A0A "}}
                    />

                    <button
                      type="submit"
                      className='mt-2 hover:bg-white bg-[#0A0A0A]  text-white text-lg font-medium my-2 drop-shadow'
                      style={{borderRadius:"50px"}}
                    >
                      Envoyer
                    </button>
                  </form>
                </div>
            </div>

        
          </div>
          {/*Bodin  */}
          <div className="fixed right-1 "> 
             <div className="text-white bg-green-400">Facebook</div>
             <div className="text-white bg-green-400">Whatsapp</div>
          </div>
          {showScrollDown && (
            <div className="fixed bottom-5 right-5 cursor-pointer z-[3]" onClick={scrollToBottom} style={{backgroundColor:"black",borderRadius:"50%"}}>
              <ArrowDownwardIcon fontSize="large"
                style={{color:"#cfa756d8"}}
              />
            </div>
          )}
       {showScrollUp && (
            <div className="fixed bottom-5 right-5 cursor-pointer z-[3]" onClick={scrollToTop} style={{backgroundColor:"black",borderRadius:"50%"}}>
              <ArrowUpwardIcon fontSize="large" 
               style={{color:"#cfa756d8"}}
              />
            </div>
          )}
          <Footer />
        </div>)
       }
    </div>
    
    </div>
  );
};

export default Home;
