import React, { useState,useEffect} from 'react';
import Footer from '../components/Footer';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

import ecommerceImage from "./../assest/images/ecommerce.png";
import update from "./../assest/images/j.png";
import a from "./../assest/images/a.jpeg";
import b from "./../assest/images/b.jpg";
import c from "./../assest/images/c.JPG";
import d from "./../assest/images/d.jpg";
import e from "./../assest/images/e.jpg";
import f from "./../assest/images/f.jpg";
import g from "./../assest/images/g.jpg";
import h from "./../assest/images/h.jpeg";
import i from "./../assest/images/i.JPG";

import './About.css';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { AiOutlineSketch} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Modalavis from './Modal/Modalavis';
import StartIcon from '@mui/icons-material/Start';
import {  PhoneIphoneOutlined } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { fetchTemoignages } from '../redux/temoignageSlice';
const About = () => {
  const [scrollStarted, setScrollStarted] = useState(false);
  // All products
   const productData = useSelector((state) => state.product.productList);

 // console.log("ProductData: ", productData);

  useEffect(() => {
    // Start scrolling after a delay
    const timeout = setTimeout(() => {
      setScrollStarted(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

    //To open the Modal avis 
const [modalVisible, setModalVisible] = useState(false);

const openModal = () => {
  setModalVisible(true);
};

const closeModal = () => {
  setModalVisible(false);
};

//Rendez-vous sur whatsapp
const openWhatsappPage = () => {
  const phoneNumber = "+212684227815"; // Replace this with the desired WhatsApp number
  const isMobileDevice = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

  if (isMobileDevice) {
    // On mobile devices, open the user's default phone app with the WhatsApp number
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  } else {
    // On non-mobile devices (PC), open WhatsApp Web with the WhatsApp number
    const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  }
};

//Location de Fitifash
const openLocationFitifash = () => {
  // Replace 'your_facebook_page_url' with the actual URL of the Facebook page
  const mapfitifash = 'https://www.google.com/maps/place/Fiti+Fash+et+Design/@30.4042763,-9.5234342,17z/data=!3m1!4b1!4m6!3m5!1s0xdb3c97a857bba73:0x74207ea84a458dfd!8m2!3d30.4042763!4d-9.5234342!16s%2Fg%2F11s6g0qsdz?entry=ttu';
  window.location.href = mapfitifash;
};
const isMobile = window.innerWidth < 768;
const temoignageData = useSelector(state => state.temoignage.temoignageList);
const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const dispatch = useDispatch();
  console.log("Temoignages : ",temoignageData);

  useEffect(() => {
    dispatch(fetchTemoignages());
  }, [dispatch]);

  const previousTestimonial = () => {
    setCurrentTestimonialIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : temoignageData.length - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(prevIndex => (prevIndex < temoignageData.length - 1 ? prevIndex + 1 : 0));
  };

   // Check if there's a testimonial at the current index
   const testimonial = temoignageData[currentTestimonialIndex] || {};

   const timeAgo = testimonial.createdAt
     ? formatDistanceToNow(new Date(testimonial.createdAt), { addSuffix: true, locale: fr })
     : '';

  const renderStars = () => {
    const stars = [];
    const numStars = Math.min(Math.max(testimonial.rating, 0), 5);

    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= numStars ? 'star selected' : 'star';
      const starStyle = i <= numStars ? { color: '#F59E0B' } : { color: '#CBD5E0' };
      stars.push(
        <span key={i} className={starClassName} style={starStyle}>
          ★
        </span>
      );
    }

    return stars;
  };
  return (
    <div>
      {
        isMobile?
        (
        <div className="bg-white mt-[9em] ">
            <div className=" "><img src={ecommerceImage} alt="E-commerce" style={{ all: 'unset',maxWidth: '100%', height: 'auto' }} /></div>
            <div className="">
             <h1 className="lg:text-2xl items-center  justify-center text-3xl font-bold font-sans text-black md:mb-0 pt-5 lg:leading-normal  md:w-2/5">
               La maison All in One
             </h1>
           </div>
           <div className="mt-4 ml-4 mr-4">
                <img src="https://lh3.googleusercontent.com/p/AF1QipMppB58HMGVky3dCfFHOec2OYLyJebOWD5y4EX8=w1080-h608-p-no-v0" alt="Fitifash" style={{ borderRadius :"20px"}} />
           </div>
           <div className=" ml-4 align-top justify-start font-palatino text-[#0A0A0A] text-justify mt-4 mr-4">
                  <p>
                 Plongez dans un havre de sérénité et d'élégance où chaque expérience est taillée sur mesure pour vous, car nous savons que vous êtes unique. Notre salon réunit tous les aspects de la beauté, de la peau aux cheveux, offrant une expertise globale dans un parcours beauté idéalement conçu. Venez découvrir comment nous pouvons sublimer votre beauté tout en vous offrant des tenues sur mesure qui vous enchanteront.</p>
   
                   <br/>
                   <p> Notre dévouement pour les détails se manifeste dans la création de meubles et d'équipements sur mesure qui correspondent précisément à vos besoins. Nous sommes passionnés par l'excellence et sommes là pour vous offrir un service complet de conseil. Chaque pièce que nous créons reflète votre individualité, et notre équipe est là pour garantir votre satisfaction à chaque étape. Choisissez de travailler avec des professionnels qui valorisent votre unicité et donnent vie à vos rêves avec précision.</p>                
            </div>
            <div className="">
              <h1 className="lg:text-2xl items-center  justify-center text-3xl font-bold font-sans text-black md:mb-0 pt-5 lg:leading-normal  md:w-2/5">
                Callérie
              </h1>
            </div>
            <div className="flex-1">
                   <div className=" flex gap-2   pl-3 pr-3 pb-2 pt-3 ">
                       <div className="  flex-1 rounded  text-white h-[150px] hover:scale-105 cursor-pointer ">
                           <img src={a}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1 rounded text-white hover:scale-105 cursor-pointer ">
                           <img src={b}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1  text-white rounded hover:scale-105 cursor-pointer">
                          <img src={c}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                   </div>
                   <div className=" flex gap-2   pl-3 pr-3 ">
                       <div className="  flex-1 rounded  text-white hover:scale-105 cursor-pointer h-[150px] mb-2">
                           <img src={d}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1 rounded  text-white hover:scale-105 cursor-pointer  mb-2">
                          <img src={e}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1  text-white rounded hover:scale-105 cursor-pointer mb-2">
                           <img src={f}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                   </div>
                   <div className=" flex gap-2 pl-3 pr-3 pb-3 ">
                       <div className="  flex-1 rounded text-white hover:scale-105 cursor-pointer h-[150px] ">
                            <img src={g}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1 rounded  text-white hover:scale-105 cursor-pointer">
                           <img src={h}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1  text-white rounded hover:scale-105 cursor-pointer ">
                          <img src={i}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                   </div>
            </div>
            <div className="bg-black pt-2 pr-2 rounded h-[380px] items-center  font-bold justify-center ">
                  <div className=" ml-2  hover:scale-105 cursor-pointer">
                     <img src={update}   alt="Service A" style={{width:"360px",borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                 </div>
             </div>
             <div className="  bg-slate-100 pt-3">
                       <div className=" flex items-center justify-center font-palatino">
                           <p className="text-[#0A0A0A] text-lg">Publié le 3 avr.2023</p>   
                      </div>
                          <br/>
                          <br/>
                           <p className="text-[#0A0A0A] ">#𝐏𝐑𝐎𝐌𝐎𝐓𝐈𝐎𝐍 𝐒𝐏𝐄́𝐂𝐈𝐀𝐋𝐄 𝐑𝐀𝐌𝐀𝐃𝐀𝐍 🌙🕌🌙</p>
                           <p className="text-left text-[#333333] ml-4">Succombez à la tentation de notre promo Ramadan.</p>
                           <p className=" text-left text-[#333333] ml-5">UNE PROMOTION CHOC ! DU JAMAIS VUE !</p>
                           <br/>
                            <br/>
                            <p className=" font-script text-lg text-left text-[#0A0A0A] pl-7">𝐂𝐨𝐮𝐩𝐞 + 𝐛𝐚𝐫𝐛𝐞 + 𝐒𝐮𝐫𝐩𝐫𝐢𝐬𝐞 𝐨𝐟𝐟𝐞𝐫𝐭𝐞 𝐚̀ 𝐬𝐞𝐮𝐥𝐞𝐦𝐞𝐧𝐭 𝟏𝟓 𝐝𝐡</p>
                            <p className="text-sm  text-[#333333] ">Offre valable durant tout le mois de ramadan 😇</p>

                            <div className="ml-1 mr-1 rounded mt-10 bg-black hover:scale-105 cursor-pointer" >
                                <div className="flex ml-5 pt-5 gap-10 cursor-pointer hover:text-italic hover:text-white " onClick={openWhatsappPage} >
                                    <div className=""><PhoneIphoneOutlined style={{fontSize :"34px"}}/></div>
                                    <div className="">+212 684 227 815</div>
                                </div>
                                <div className="flex ml-5 gap-10 mt-4 pb-5 cursor-pointer hover:text-white" onClick={openLocationFitifash}>
                                    <div className=""><LocationOnIcon style={{fontSize :"34px"}}/></div>
                                    <div className="">Av. Al Oulfa, Tilila (Agadir 80000)</div>
                                </div>
                            </div>
                            <div className="pt-3 pb-3">
                              <h1 className="lg:text-2xl text-3xl font-bold font-sans text-black md:mb-0 pt-5 lg:leading-normal  md:w-2/5">
                                <span>Quels sont </span> les privilèges de notre part{" ?"}
                              </h1>
                            </div>
                            <div className="flex flex-col gap-5 pr-4 pl-4 ">
                              <div>
                                <TaskAltIcon size={30} sx={{ color: "blue" }} />
                              </div>
                              <div className="font-bold font-sans text-gray-600">Diversification des Opportunités de Marché</div>
                              <div className="align-top justify-start   font-palatino text-[#0A0A0A] text-justify ">
                                En offrant une gamme complète de catégories, de la couture aux produits de beauté, Fitifash bénéficie d'une diversification des opportunités de marché, lui permettant de toucher un large éventail de clients potentiels.
                              </div>
                            </div>
                            <div className="flex flex-col pr-4 pl-4 gap-4 ">
                                <div>
                                  <TaskAltIcon sx={{ color: "blue" }} />
                                </div>
                                <div className="font-bold font-sans text-gray-600">Positionnement concurrentiel renforcé</div>
                                <div className="align-top justify-start font-palatino text-[#0A0A0A] text-justify">
                                  Grâce à ses sous-catégories variées telles que prêt-à-porter, coiffure et produits de beauté, Fitifash peut se positionner favorablement sur plusieurs fronts concurrentiels, attirant ainsi une clientèle variée et fidèle.
                                </div>
                             </div>
                             <div className="flex flex-col pr-4 pl-4">
                                <div>
                                  <TaskAltIcon sx={{ color: "blue" }} />
                                </div>
                                <div className="font-bold font-sans text-gray-600">Opportunités de vente croisée et incitative</div>
                                <div className="align-top justify-start font-palatino text-[#0A0A0A] text-justify">
                                  Les multiples catégories et sous-catégories au sein de Fitifash ouvrent la voie à des stratégies de vente croisée et incitative, permettant à l'entreprise de proposer des produits et services complémentaires, ce qui peut augmenter la valeur moyenne des transactions et stimuler les ventes globales.
                                </div>
                              </div>
                              <div className="flex flex-col pr-4 pl-4 mb-5 ">
                                <div>
                                  <TaskAltIcon sx={{ color: "blue" }} />
                                </div>
                                <div className="font-bold font-sans text-gray-600">Opportunités de vente croisée et incitative</div>
                                <div className="align-top justify-start font-palatino text-[#0A0A0A] text-justify">
                                Les multiples catégories et sous-catégories au sein de Fitifash ouvrent la voie à des stratégies de vente croisée et incitative, permettant à l'entreprise de proposer des produits et services complémentaires, ce qui peut augmenter la valeur moyenne des transactions et stimuler les ventes globales.
                                </div>
                              </div>
                               <div className="flex-1 ">
                                  <div>
                                    <h1 className="lg:text-2xl text-3xl font-sans text-[#0A0A0A] font-bold  md:mb-0 mb-3 lg:leading-normal  md:w-2/5">
                                        Temoignages
                                    </h1>
                                  </div>
                                  <div className='flex gap-2  mt-2 items-center justify-center'>
                                    <button className="font-bold hover:bg-[#D4AF37] bg-[#8B7355] mb-20 text-black rounded-full   "  onClick={previousTestimonial}>
                                        <NavigateBeforeIcon
                                          sx = {{
                                            color : "white",
                                            width :"25px",
                                            height :"25px"
                                            
                                          }}
                                        />
                                    </button>
                                    <div className='mb-10 relative flex w-[300px] bg-white h-[250px] '>
                                          <div className="absolute z-30 mt-[100px] ml-[95px] ">
                                            <AiOutlineSketch size={30} color="blue "/></div>
                                            {testimonial.user && (<div className="w-[200px] ml-2 mt-4 justify-center ">
                                            <div className='w-[110px] h-[110px] rounded-full bg-blue-100'>
                                            <img src={testimonial.user.image} alt="User Profile" 
                                              style={{borderRadius:"110px",width:"110px",height:"110px"}}
                                            />
                                            </div>
                                            {testimonial.user && ( <div className="text-[#0A0A0A] font-semibold text-sm text-gray-600 mt-3">{testimonial.user.lastName}</div>)}
                                        </div>)}
                                        <div className='flex-1  p-4'>
                                            <div className='text-sm items-center justify-center w-[40px] font-semibold text-gray-600 ml-4'>{renderStars()}</div> 
                                            <div className=' mt-2 font-sans text-sm text-[#0A0A0A] h-[130px] align-top rounded p-2 justify-start text-justify bg-gray-100'  style={{ overflowY: 'auto', maxHeight: '130px' }}>
                                            {testimonial.text}
                                            <br/>
                                            <div className="font-sans text-[#cfa756d8] " style={{fontSize:"15px"}}>Services intéressants</div>
                                            <div className="description max-h-100 overflow-y-auto">
                                                  {testimonial.services && Array.isArray(testimonial.services) && testimonial.services.length > 0 ? (
                                                    <ul className="list-disc pl-6 text-gray-700 text-left mb-4">
                                                      {testimonial.services.map((service, index) => (
                                                        <li key={index}>✓ {service}</li>
                                                      ))}
                                                    </ul>
                                                  ) : (
                                                    <p>No services provided.</p>
                                                  )}
                                                </div>
                                                
                                            </div>
                                            
                                            <div className="flex text-left ml-[50px] mb-2 mt-2 text-gray-400 font-sans" style={{fontSize:"12px"}}>{timeAgo}</div>

                                        </div>
                                        <div className="bg-black  absolute mt-[16em] flex w-full  h-[30px]  ">
                                            <div className="flex-1 text-lg">Rédiger vos avis</div> 
                                            <div className="flex-1  redavis  hover:bg-[#0A0A0A] cursor-pointer w-[30px]" onClick={openModal}>
                                                <StartIcon
                                                  style={{fontSize :"30px"}}
                                                /></div>
                                                {modalVisible && <Modalavis closeModal={closeModal} />}
                                        </div>
                                    </div>
                                    
                                    <button className="font-bold  hover:bg-[#D4AF37] bg-[#8B7355] mb-20 text-black rounded-full  "  onClick={nextTestimonial}>
                                        <NavigateNextIcon
                                            sx = {{
                                              color : "white",
                                              width :"25px",
                                              height :"25px"
                                              
                                            }}
                                        />
                                    </button>
                                  </div>
                      
                               </div>
                              <div className="flex-1" >
                                  <div>
                                    <h1 className="lg:text-2xl text-3xl py-2 font-sans text-[#0A0A0A] font-bold  md:mb-0 mb-3 lg:leading-normal  md:w-2/5">
                                        Coordonnées
                                    </h1>
                                  </div>
                                    <div className=" m-1">
                                      <div className='flex gap-4  bg-white m-1 h-[260px] ' onClick={openLocationFitifash}>
                                          <iframe
                                            title="Fitifash "
                                            src="https://maps.google.com/maps?q=Fiti%20Fash%20et%20Design&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                            id="gmap_canvas"
                                            frameBorder="0"
                                            scrolling="no"
                                            className="w-full h-full"
                                          >
                                          </iframe>
                                      </div>
                                    </div>
                                  <div className="flex ml-2 gap-5 mt-4 pb-1 text-[#333333] cursor-pointer hover:text-[#D4AF37]" onClick={openLocationFitifash}>
                                        <div className=""><LocationOnIcon style={{fontSize :"34px"}}/>
                                        </div>
                                        <div className="">Av. Al Oulfa, Tilila (Agadir 80000)</div>
                                  </div>
                              </div>
                              <div className="flex-1 pr-2 pt-4  pl-2">
                                  <h1 className="lg:text-2xl text-3xl py-4 font-sans text-[#0A0A0A] font-bold ml-2 md:mb-0 mb-2 lg:leading-normal  md:w-2/5">
                                        Comment Cultiver une Fidélité Durable avec Fitifash ?
                                  </h1>
                                  <div className="align-top justify-start font-palatino pt-2 pb-2 text-[#0A0A0A] text-justify">
                                  L'engagement de Fitifash envers l'excellence trouve son essence dans une gamme de services diversifiée, couvrant des catégories allant de la vente de produits à la coiffure, en passant par la couture et les biens immobiliers.
                        
                        Au cœur de cet engagement se trouve notre approche du professionnalisme. Chaque service que nous offrons est guidé par un processus rigoureux. Nos prestataires, triés sur le volet, ont été évalués minutieusement, tant pour leurs compétences que pour leur expérience professionnelle, garantissant ainsi une prestation conforme à nos normes élevées.
                                  </div>
                              </div>
                              <div className="flex-1 pr-2 pt-4  pl-2">
                                  <h1 className="lg:text-2xl text-3xl py-3 font-sans text-[#0A0A0A] font-bold ml-2 md:mb-0 mb-2 lg:leading-normal  md:w-2/5">
                                  Comment réussir avec Fitifash ?
                                  </h1>
                                  <div className="align-top justify-start font-palatino  pt-2 pb-2 text-[#0A0A0A] text-justify">
                                  Segmenter la clientèle : Identifiez les différents besoins de la clientèle en fonction des services proposés, en mettant l'accent sur des services populaires tels que "Tresses", "Coiffure de mariage" et "Lissages de cheveux".
   
   Offrir des promotions ciblées : Créez des offres spéciales, des réductions ou des forfaits pour attirer les clients, en mettant en avant les services les plus demandés.
   
   Mise en avant de l'expertise : Mettez en avant l'expertise de vos coiffeurs et maquilleurs pour rassurer les clients et montrer la qualité de vos services.
   
   Utilisation des médias sociaux : Utilisez les médias sociaux pour partager des photos avant/après, des témoignages de clients satisfaits, et des tutoriels de coiffure ou de maquillage.
   
   Programme de fidélisation : Mettez en place un programme de fidélisation pour récompenser les clients réguliers avec des remises ou des avantages spéciaux.
   
   Service client exceptionnel : Assurez-vous que le service client est impeccable, en répondant rapidement aux questions et préoccupations des clien
 
                                  </div>
                              </div>          
                </div>
                <Footer/>
        </div>
          
        )
         :
         (
         <div className="">
     
         <div className=" "><img src={ecommerceImage} alt="E-commerce" style={{ all: 'unset',maxWidth: '100%', height: 'auto' }} /></div>
         <div className="bg-white w-full text-black ">
           <div className="">
             <h1 className="lg:text-2xl items-center  justify-center text-3xl font-bold font-sans text-[#C49A45] md:mb-0 pt-5 lg:leading-normal  md:w-2/5">
               La maison All in One
             </h1>
           </div>
           <div className="flex gap-10 ml-10 mt-10">
               <div className="bg-[#C49A45]" style={{borderRadius:"20px"}}>
                 <div className="p-5">
                     <img src="https://lh3.googleusercontent.com/p/AF1QipMppB58HMGVky3dCfFHOec2OYLyJebOWD5y4EX8=w1080-h608-p-no-v0" alt="Fitifash" style={{ width:"200em",borderRadius :"20px"}} />
                 </div>
               </div>
               <div className=" ml-10 align-top justify-start font-palatino text-[#0A0A0A] text-justify mt-5 mr-10">
                  <p>
                 Plongez dans un havre de sérénité et d'élégance où chaque expérience est taillée sur mesure pour vous, car nous savons que vous êtes unique. Notre salon réunit tous les aspects de la beauté, de la peau aux cheveux, offrant une expertise globale dans un parcours beauté idéalement conçu. Venez découvrir comment nous pouvons sublimer votre beauté tout en vous offrant des tenues sur mesure qui vous enchanteront.</p>
   
                   <br/>
                   <p> Notre dévouement pour les détails se manifeste dans la création de meubles et d'équipements sur mesure qui correspondent précisément à vos besoins. Nous sommes passionnés par l'excellence et sommes là pour vous offrir un service complet de conseil. Chaque pièce que nous créons reflète votre individualité, et notre équipe est là pour garantir votre satisfaction à chaque étape. Choisissez de travailler avec des professionnels qui valorisent votre unicité et donnent vie à vos rêves avec précision.</p>                
               </div>
           </div>
   
         </div>
         <div className="bg-white  text-black ">
           <div className="">
             <h1 className="lg:text-2xl items-center justify-center text-3xl font-bold font-sans text-[#C49A45] md:mb-0 pt-5 lg:leading-normal  md:w-2/5">
               Gallérie
             </h1>
           </div>
           <div className="flex gap-2 ml-10 mt-10 mr-5">
                  <div className="bg-[#e2dccf52] ">
                     <div className="bg-[#cfa756d8] pt-3 m-3 rounded h-[400px] items-center  font-bold justify-center ">
                       <div className="mt-2 ml-3  hover:scale-105 cursor-pointer">
                         <img src={update}   alt="Service A" style={{width:"360px",borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                     </div>
                     <div className=" w-[400px] m-3 ">
                       <div className="items-center justify-center font-palatino">
                           <p className="text-[#C49A45] text-lg">Publié le 3 avr.2023</p>
                            <br/>
                            <br/>
                           <p>#𝐏𝐑𝐎𝐌𝐎𝐓𝐈𝐎𝐍 𝐒𝐏𝐄́𝐂𝐈𝐀𝐋𝐄 𝐑𝐀𝐌𝐀𝐃𝐀𝐍 🌙🕌🌙</p>
                           <p className="text-left pl-7 pr-4">Succombez à la tentation de notre promo Ramadan.</p>
                           <p className="pl-7 text-left">UNE PROMOTION CHOC ! DU JAMAIS VUE !</p>
                            <br/>
                            <br/>
                            <p className=" font-script text-lg text-left pl-7">𝐂𝐨𝐮𝐩𝐞 + 𝐛𝐚𝐫𝐛𝐞 + 𝐒𝐮𝐫𝐩𝐫𝐢𝐬𝐞 𝐨𝐟𝐟𝐞𝐫𝐭𝐞 𝐚̀ 𝐬𝐞𝐮𝐥𝐞𝐦𝐞𝐧𝐭 𝟏𝟓 𝐝𝐡</p>
                            <p className="text-sm ">Offre valable durant tout le mois de ramadan 😇</p>
   
                            <div className="ml-5 mr-5 rounded mt-10 bg-[#c9a96af3] hover:scale-105 cursor-pointer" >
                                <div className="flex ml-5 pt-5 gap-10 cursor-pointer hover:text-italic hover:text-white " onClick={openWhatsappPage} >
                                    <div className=""><PhoneIphoneOutlined style={{fontSize :"34px"}}/></div>
                                    <div className="">+212 684 227 815</div>
                                </div>
                                <div className="flex ml-5 gap-10 mt-4 pb-5 cursor-pointer hover:text-white" onClick={openLocationFitifash}>
                                    <div className=""><LocationOnIcon style={{fontSize :"34px"}}/></div>
                                    <div className="">Av. Al Oulfa, Tilila (Agadir 80000)</div>
                                </div>
                            </div>
                      </div>
                     </div>
                 </div>
               <div className="flex-1">
                   <div className=" flex gap-2 bg-[#cfa756d8]  pl-3 pr-3 pb-2 pt-3 ">
                       <div className="  flex-1 rounded  text-white h-[270px] hover:scale-105 cursor-pointer ">
                           <img src={a}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1 rounded text-white hover:scale-105 cursor-pointer ">
                           <img src={b}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1  text-white rounded hover:scale-105 cursor-pointer">
                          <img src={c}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                   </div>
                   <div className=" flex gap-2  bg-[#cfa756d8]  pl-3 pr-3 ">
                       <div className="  flex-1 rounded  text-white hover:scale-105 cursor-pointer h-[270px] mb-2">
                           <img src={d}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1 rounded  text-white hover:scale-105 cursor-pointer  mb-2">
                          <img src={e}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1  text-white rounded hover:scale-105 cursor-pointer mb-2">
                           <img src={f}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                   </div>
                   <div className=" flex gap-2 bg-[#cfa756d8] pl-3 pr-3 pb-3 ">
                       <div className="  flex-1 rounded text-white hover:scale-105 cursor-pointer h-[270px] ">
                            <img src={g}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1 rounded  text-white hover:scale-105 cursor-pointer">
                           <img src={h}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                       <div className=" flex-1  text-white rounded hover:scale-105 cursor-pointer ">
                          <img src={i}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" />
                       </div>
                   </div>
               </div>
               
           </div>
   
         </div>
         <div className="bg-white  text-black ">
           <div className="pt-5 pb-5">
             <h1 className="lg:text-2xl text-3xl font-bold font-sans text-[#C49A45] md:mb-0 pt-5 lg:leading-normal  md:w-2/5">
               <span>Quels sont </span> les privilèges de notre part{" ?"}
             </h1>
           </div>
           
           <div className="flex gap-10 ml-10 mt-5 mr-10">
             <div className="flex flex-col gap-5 w-[1000px] ">
               <div>
                 <TaskAltIcon size={30} sx={{ color: "blue" }} />
               </div>
               <div className="font-bold font-sans text-gray-600">Diversification des Opportunités de Marché</div>
               <div className="align-top justify-start   font-palatino text-[#0A0A0A] text-justify ">
                 En offrant une gamme complète de catégories, de la couture aux produits de beauté, Fitifash bénéficie d'une diversification des opportunités de marché, lui permettant de toucher un large éventail de clients potentiels.
               </div>
             </div>
             <div className="ml-10 flex flex-col gap-5 w-[1000px]">
               <div>
                 <TaskAltIcon sx={{ color: "blue" }} />
               </div>
               <div className="font-bold font-sans text-gray-600">Positionnement concurrentiel renforcé</div>
               <div className="align-top justify-start font-palatino text-[#0A0A0A] text-justify">
                 Grâce à ses sous-catégories variées telles que prêt-à-porter, coiffure et produits de beauté, Fitifash peut se positionner favorablement sur plusieurs fronts concurrentiels, attirant ainsi une clientèle variée et fidèle.
               </div>
             </div>
             <div className="ml-10 flex flex-col gap-5 w-[1000px]">
               <div>
                 <TaskAltIcon sx={{ color: "blue" }} />
               </div>
               <div className="font-bold font-sans text-gray-600">Opportunités de vente croisée et incitative</div>
               <div className="align-top justify-start font-palatino text-[#0A0A0A] text-justify">
                 Les multiples catégories et sous-catégories au sein de Fitifash ouvrent la voie à des stratégies de vente croisée et incitative, permettant à l'entreprise de proposer des produits et services complémentaires, ce qui peut augmenter la valeur moyenne des transactions et stimuler les ventes globales.
               </div>
             </div>
             <div className="flex flex-col gap-5 w-[1000px] mb-10 ">
               <div>
                 <TaskAltIcon sx={{ color: "blue" }} />
               </div>
               <div className="font-bold font-sans text-gray-600">Opportunités de vente croisée et incitative</div>
               <div className="align-top justify-start font-palatino text-[#0A0A0A] text-justify">
               Les multiples catégories et sous-catégories au sein de Fitifash ouvrent la voie à des stratégies de vente croisée et incitative, permettant à l'entreprise de proposer des produits et services complémentaires, ce qui peut augmenter la valeur moyenne des transactions et stimuler les ventes globales.
               </div>
             </div>
           </div>
   
   
         </div>
        
        <div className=" bg-gray-100 flex ">
            <div className="flex-1 ">
               <div>
                 <h1 className="lg:text-2xl text-3xl py-10 font-sans text-[#C49A45] font-bold ml-[30%] md:mb-0 mb-6 lg:leading-normal  md:w-2/5">
                     Temoignages
                 </h1>
               </div>
               <div className='flex gap-4  mt-5 items-center justify-center'>
                 <button className="font-bold hover:bg-[#D4AF37] bg-[#8B7355] mb-20 text-black rounded-full"  onClick={previousTestimonial}>
                     <NavigateBeforeIcon
                       sx = {{
                         color : "white",
                         width :"25px",
                         height :"25px"
                         
                       }}
                     />
                 </button>
                 <div className='mb-20 relative flex w-[500px] bg-white h-[250px] '>
                       <div className="absolute z-30 mt-[150px] ml-[150px] ">
                         <AiOutlineSketch size={30} color="blue "/></div>
                         {testimonial.user && (
                            <div className="w-[200px] ml-10 mt-8 justify-center">
                              <div className='w-[150px] h-[150px] rounded-full bg-blue-100'>
                                <img src={testimonial.user.image} alt="User Profile" 
                                  style={{borderRadius:"150px",width:"150px",height:"150px"}}
                                />
                              </div>
                            </div>
                          )}
                     <div className='flex-1  p-2'>
                     {testimonial.user && (<div className='text-sm flex text-left ml-5  font-semibold text-gray-600'>{testimonial.user.lastName}</div>)}
                         <div className='mr-3  mt-2 font-sans text-sm text-[#0A0A0A] h-[130px] align-top rounded p-2 justify-start text-justify bg-gray-100'  style={{ overflowY: 'auto', maxHeight: '130px' }}>
                             {testimonial.text}
                             <br/>
                             <div className="font-sans text-[#cfa756d8] " style={{fontSize:"20px"}}>Services intéressants</div>
                             <div className="description max-h-100 overflow-y-auto">
                                  {testimonial.services && Array.isArray(testimonial.services) && testimonial.services.length > 0 ? (
                                    <ul className="list-disc pl-6 text-gray-700 text-left mb-4">
                                      {testimonial.services.map((service, index) => (
                                        <li key={index}>✓ {service}</li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p>No services provided.</p>
                                  )}
                                </div>

                         </div>
                         <div className="text-black flex text-left ml-2 mt-2 ">{renderStars()}</div>
                         <div className="flex text-left ml-[150px] text-gray-400 font-sans" style={{fontSize:"12px"}}>{timeAgo}</div>
                     </div>
                     <div className="bg-[#cfa756d8]  absolute mt-8 flex w-full mt-[220px] h-[30px]  ">
                         <div className="flex-1 text-lg">Rédiger vos avis</div> 
                         <div className="flex-1  redavis  hover:bg-[#C49A45] cursor-pointer w-[30px]" onClick={openModal}>
                             <StartIcon
                               style={{fontSize :"30px"}}
                             /></div>
                             {modalVisible && <Modalavis closeModal={closeModal} />}
                     </div>
                 </div>
                 <button className="font-bold  hover:bg-[#D4AF37] bg-[#8B7355] mb-20 text-black rounded-full "  onClick={nextTestimonial}>
                     <NavigateNextIcon
                         sx = {{
                           color : "white",
                           width :"25px",
                           height :"25px"
                           
                         }}
                     />
                 </button>
               </div>
   
            </div>
            <div className="flex-1" >
               <div>
                 <h1 className="lg:text-2xl text-3xl py-10 font-sans text-[#C49A45] font-bold ml-[30%] md:mb-0 mb-6 lg:leading-normal  md:w-2/5">
                     Coordonnées
                 </h1>
               </div>
                <div className="bg-[#cfa756d8] m-5">
                   <div className='flex gap-4  bg-white m-3 mt-3 h-[260px] ' onClick={openLocationFitifash}>
                       <iframe
                         title="Fitifash "
                         src="https://maps.google.com/maps?q=Fiti%20Fash%20et%20Design&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                         id="gmap_canvas"
                         frameBorder="0"
                         scrolling="no"
                         className="w-full h-full"
                       >
                       </iframe>
                   </div>
                </div>
               <div className="flex ml-5 gap-10 mt-4 pb-5 text-[#333333] cursor-pointer hover:text-[#D4AF37]" onClick={openLocationFitifash}>
                    <div className=""><LocationOnIcon style={{fontSize :"34px"}}/>
                    </div>
                     <div className="">Av. Al Oulfa, Tilila (Agadir 80000)</div>
               </div>
            </div>
        </div>
   
        <div className="bg-white">
           <div>
             <div>
                   <h1 className="lg:text-2xl text-3xl py-10 font-sans text-[#C49A45] font-bold ml-[30%] md:mb-0 mb-6 lg:leading-normal  md:w-2/5">
                       Nos produits actuels
                   </h1>
                 </div>
             </div>
               <div className="images-container bg-slate-100 h-30">
                 <div className="scroller-container">
                   <div className={`images-wrapper ${scrollStarted ? "scroll" : ""}`}>
                       {productData.map((product, index) => (
                       <img key={index} src={product.image} style={{all:"unset",width:"60px"}} alt={`Image ${index + 1}`} />
                     ))}
                   </div>
                </div>
             </div>
        </div>
        <div className="flex gap-10 bg-white text-black">
           <div className="flex-1 pr-20 pt-10  pl-10">
             <h1 className="lg:text-2xl text-3xl py-10 font-sans text-[#C49A45] font-bold ml-[30%] md:mb-0 mb-6 lg:leading-normal  md:w-2/5">
                  Comment Cultiver une Fidélité Durable avec Fitifash ?
             </h1>
             <div className="align-top justify-start font-palatino text-[#0A0A0A] text-justify">
             L'engagement de Fitifash envers l'excellence trouve son essence dans une gamme de services diversifiée, couvrant des catégories allant de la vente de produits à la coiffure, en passant par la couture et les biens immobiliers.
   
   Au cœur de cet engagement se trouve notre approche du professionnalisme. Chaque service que nous offrons est guidé par un processus rigoureux. Nos prestataires, triés sur le volet, ont été évalués minutieusement, tant pour leurs compétences que pour leur expérience professionnelle, garantissant ainsi une prestation conforme à nos normes élevées.
             </div>
           </div>
           <div className="flex-1">
             <div className="border border-gray-300 p-4 mr-10">Image</div>
           </div>
       </div>
       <div className="flex gap-10 bg-white text-black">
           <div className="flex-1 pr-20 pt-10 ml-10">
               <div className="border border-gray-300 p-4">Image</div>
           </div>
           <div className="flex-1 pr-20 pt-10  pr-10">
             <h1 className="lg:text-2xl text-3xl py-10 font-sans text-[#C49A45] font-bold ml-[30%] md:mb-0 mb-6 lg:leading-normal  md:w-2/5">
                  Comment réussir avec Fitifash ?
             </h1>
             <div className="align-top justify-start font-palatino text-[#0A0A0A] text-justify pb-10">
             Segmenter la clientèle : Identifiez les différents besoins de la clientèle en fonction des services proposés, en mettant l'accent sur des services populaires tels que "Tresses", "Coiffure de mariage" et "Lissages de cheveux".
   
   Offrir des promotions ciblées : Créez des offres spéciales, des réductions ou des forfaits pour attirer les clients, en mettant en avant les services les plus demandés.
   
   Mise en avant de l'expertise : Mettez en avant l'expertise de vos coiffeurs et maquilleurs pour rassurer les clients et montrer la qualité de vos services.
   
   Utilisation des médias sociaux : Utilisez les médias sociaux pour partager des photos avant/après, des témoignages de clients satisfaits, et des tutoriels de coiffure ou de maquillage.
   
   Programme de fidélisation : Mettez en place un programme de fidélisation pour récompenser les clients réguliers avec des remises ou des avantages spéciaux.
   
   Service client exceptionnel : Assurez-vous que le service client est impeccable, en répondant rapidement aux questions et préoccupations des clien
                 </div>
           </div>
       </div>
     <div></div>
         <Footer />
       </div>)
      }
    </div>
    
  );
}

export default About;
