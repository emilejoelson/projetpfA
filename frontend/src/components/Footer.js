import React ,{ useState } from "react"; 
import {
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "./../static/data";
import StartIcon from '@mui/icons-material/Start';
import DoneIcon from '@mui/icons-material/Done';
import Fiti from "./../assest/Fiti.png";
import Devis from "./../assest/images/devis.png";
import "./Footer.css";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Modalavis from "../page/Modal/Modalavis.js";

const openFacebookPage = () => {
  const facebookPageUrl = 'https://www.facebook.com/Fitifash212';
  window.location.href = facebookPageUrl;
};

const openLocationFitifash = () => {
  // Replace 'your_facebook_page_url' with the actual URL of the Facebook page
  const mapfitifash = 'https://www.google.com/maps/place/Fiti+Fash+et+Design/@30.4042763,-9.5234342,17z/data=!3m1!4b1!4m6!3m5!1s0xdb3c97a857bba73:0x74207ea84a458dfd!8m2!3d30.4042763!4d-9.5234342!16s%2Fg%2F11s6g0qsdz?entry=ttu';
  window.location.href = mapfitifash;
};

//Pour envoyer un email 
function initiateDiscussion(email) {
  const subject = encodeURIComponent("Discussion Topic");
  const body = encodeURIComponent("Hello,\n\nLet's discuss...");
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
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

// Open instagram
const openInstagram = () => {
  const instagramPageUrl = 'https://www.instagram.com/fiti_fash/';
  window.location.href = instagramPageUrl;
};
// Pour se diriger vers le top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // This provides a smooth scrolling effect
  });
}


const Footer = () => {
  //To open the Modal avis 
const [modalVisible, setModalVisible] = useState(false);

const openModal = () => {
  setModalVisible(true);
};

const closeModal = () => {
  setModalVisible(false);
};

const services = ["Couture", "Esthétique", "Coiffure"];


const [formData, setFormData] = useState({
  fullname: '',
  email: '',
  telephone: '',
  ville: '',
  service: '',
  message: '',
});

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const { fullname, email, telephone, ville, service, message } = formData;

  if (fullname && email && telephone && ville && service && message) {
    try {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/addDevis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (fetchData.ok) {
        const fetchRes = await fetchData.json();
        console.log(fetchRes.message); // You may replace this with your preferred handling, such as showing a success message.
      } else {
        console.error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting the form:', error.message);
    }

    // Reset the form data after submission
    setFormData({
      fullname: '',
      email: '',
      telephone: '',
      ville: '',
      service: '',
      message: '',
    });
  } else {
    console.error('Enter the required fields'); // You may replace this with your preferred handling, such as showing an error message.
  }
};

const isMobile = window.innerWidth < 768;

  return (
    <div className="bg-slate-900 font-sans text-white">
       {
        isMobile?
          ( 
          <div className=" bg-slate-700">
            <div className="text-2xl  text-lg pt-4 ">
                Etes-vous de nouveau ? <span className="text-[#56d879]"><Link to ={"/singup"}>Inscrivez-vous</Link> </span>
              <br/>
              pour avoir des nouvels {" "}
               evennements et offres
            </div>
            <div className="flex gap-5  mt-4 ml-10 cursor-pointer" onClick={openWhatsappPage}>
                  <div className=""><PhoneIphoneIcon style={{fontSize :"34px"}}/></div>
                  <div className="text-gray-400 hover:text-[#C49A45]" style={{fontSize:"20px"}}>(+212)684-227815</div>
             </div>
             <div className="flex gap-5 ml-10 cursor-pointer" onClick={() => initiateDiscussion("fitidesign21@gmail.com")}>
                  <div className=""><EmailIcon style={{fontSize :"34px"}}/></div>
                 <div className="text-gray-400 hover:text-[#C49A45]" style={{fontSize:"20px"}}>fitidesign21@gmail.com</div>
              </div>
              <div className="flex ml-10 cursor-pointer gap-5"  onClick={openLocationFitifash}>
                    <div className=""><LocationOnIcon style={{fontSize :"34px"}}/></div>
                    <div className="text-gray-400 hover:text-[#C49A45]" style={{fontSize:"20px"}}>Av. Al Oulfa, Agadir </div>
              </div>
              <div className="flex gap-5 ml-10 cursor-pointer" onClick={openFacebookPage}>
                   <div className=""><FacebookIcon style={{fontSize :"34px"}}/></div>
                   <div className="text-gray-400 hover:text-[#C49A45]" style={{fontSize:"20px"}}>Fitifash212</div>
              </div>
              <div className="flex gap-5 ml-10 cursor-pointer" onClick={openInstagram}>
                    <div className=""><InstagramIcon style={{fontSize :"34px"}}/></div>
                    <div className="text-gray-400 hover:text-[#C49A45]" style={{fontSize:"20px"}}>Instagram</div>
              </div>
              <div className="flex gap-5 ml-10 cursor-pointer " onClick={openWhatsappPage}>
                  <div className=""><WhatsAppIcon style={{fontSize :"34px"}}/></div>
                  <div className="text-gray-400 hover:text-[#C49A45]" style={{fontSize:"20px"}}>Rendez-vous</div>
              </div>
              <div className=" bg-[#cfa756d8] mt-4 mb-3 text-[#0A0A0A] flex  h-[30px]  ">
                   <div className="flex-1" style={{fontSize:"20px"}}>Rédiger vos avis</div> 
                    <div className="flex-1  redavis  hover:bg-[#C49A45]  cursor-pointer w-[30px]" onClick={openModal} >
                     <StartIcon 
                        style={{fontSize :"30px"}}
                     /></div>
                {modalVisible && <Modalavis closeModal={closeModal} />}
              </div> 
              
              <div className="font-bold">DEMANDER VOTRE DEVIS</div>
                <div className="sm:block flex  mt-4 items-center justify-center cursor-pointer w-full">
                  <img src={Devis} alt="" style={{ width: "100px" }} />
                </div>
                <div>
                  <form className="w-full py-[40px] flex flex-col">
                    <div className="flex gap-2">
                      <div className="ml-2">
                        <label htmlFor="email">Nom Complet<span className="text-red-400">*</span></label>
                        <input
                          type={"text"}
                          id="fullname"
                          name="fullname"
                          className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
                          spellCheck="false"
                          value={formData.fullname}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mr-2">
                        <label htmlFor="email" className="ml-2">Email<span className="text-red-400">*</span></label>
                        <input
                          type={"email"}
                          id="email"
                          name="email"
                          className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
                          spellCheck="false"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="ml-2">
                        <label htmlFor="email">Téléphone<span className="text-red-400">*</span></label>
                        <input
                          type={"text"}
                          id="telephone"
                          name="telephone"
                          className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
                          spellCheck="false"
                          value={formData.telephone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mr-2">
                        <label htmlFor="email" className="ml-2">Ville<span className="text-red-400">*</span></label>
                        <input
                          type={"text"}
                          id="ville"
                          name="ville"
                          className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
                          spellCheck="false"
                          value={formData.ville}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="font-bold  ">PLUS D'INFORMATION</div>
                <form className="py-3 flex flex-col">
                  <label htmlFor='category' className="pt-2  ">Quel service vous intéresse ?</label>
                  <select className='rounded text-slate-300 bg-slate-500 p-1 my-1 pt-2 pb-2 mr-4 ml-4' id='category'
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="message" className="pt-2  ">Description de votre devis<span className="text-red-400">*</span></label>
                  <textarea rows={3} spellCheck="false" className='rounded ml-4 bg-slate-500 text-slate-300 mr-4 h-[125px] p-1 my-1 resize-none'
                    id="message"
                    name='message'
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </form>
                <div className="bg-green-600 mt-2   h-[30px]  flex  ">
                  <div className="flex-1" style={{ fontSize: "20px" }}>Valider</div>
                  <div className="flex-1 valider  hover:bg-green-500 cursor-pointer w-[30px]"
                    onClick={handleSubmit}
                  >
                    <DoneIcon
                      style={{ fontSize: "30px" }}
                    />
                  </div>
                </div>

          </div>
          )
           :
           (
            <div className="flex  bg-slate-700 gap-5 ">
       
            <div className=" ml-10 w-[42em] h-full mt-3 items-center justify-center ">
            <h1 className="text-2xl  text-lg ">
              Etes-vous de nouveau ? <span className="text-[#56d879]"><Link to ={"/singup"}>Inscrivez-vous</Link> </span>
              <br/>
              pour avoir des nouvels {" "}
               evennements et offres
               <div className="h-50 pt-4 text-lg  items-center justify-center  ">
                   <div className="flex gap-20">
                       <div className="flex gap-5 cursor-pointer" onClick={openWhatsappPage}>
                         <div className=""><PhoneIphoneIcon style={{fontSize :"34px"}}/></div>
                         <div className="text-gray-400 hover:text-[#C49A45]">(+212)684-227815</div>
                       </div>
                       <div className="flex gap-5 cursor-pointer" onClick={() => initiateDiscussion("fitidesign21@gmail.com")}>
                         <div className=""><EmailIcon style={{fontSize :"34px"}}/></div>
                         <div className="text-gray-400 hover:text-[#C49A45]">fitidesign21@gmail.com</div>
                       </div>
                   </div>
                   <div className="flex gap-20 mt-5 ">
                       <div className="flex gap-5 cursor-pointer"  onClick={openLocationFitifash}>
                         <div className=""><LocationOnIcon style={{fontSize :"34px"}}/></div>
                         <div className="text-gray-400 hover:text-[#C49A45]">Av. Al Oulfa, Agadir </div>
                       </div>
                       <div className="flex gap-5 cursor-pointer" onClick={openFacebookPage}>
                         <div className=""><FacebookIcon style={{fontSize :"34px"}}/></div>
                         <div className="text-gray-400 hover:text-[#C49A45]">Fitifash212</div>
                       </div>
                   </div>
                   <div className="flex gap-20 mt-5 ">
                       <div className="flex gap-5 cursor-pointer" onClick={openInstagram}>
                         <div className=""><InstagramIcon style={{fontSize :"34px"}}/></div>
                         <div className="text-gray-400 hover:text-[#C49A45]">Instagram</div>
                       </div>
                       <div className="flex gap-5 ml-[65px] cursor-pointer " onClick={openWhatsappPage}>
                         <div className=""><WhatsAppIcon style={{fontSize :"34px"}}/></div>
                         <div className="text-gray-400 hover:text-[#C49A45]">Rendez-vous</div>
                       </div>
                   </div>
               </div>
     
               <div className=" bg-[#cfa756d8] mt-5 mb-3 text-[#0A0A0A] flex rounded h-[30px]  ">
                   <div className="flex-1">Rédiger vos avis</div> 
                    <div className="flex-1  redavis  hover:bg-[#C49A45]  cursor-pointer w-[30px]" onClick={openModal}>
                     <StartIcon 
                        style={{fontSize :"30px"}}
                     /></div>
                     {modalVisible && <Modalavis closeModal={closeModal} />}
              </div> 
             </h1>
            </div>
            
            <div className="h-[300px] w-[700px] flex">
      <div className="flex-1 mt-3 pt-3 mb-3">
        <div className="font-bold">DEMANDER VOTRE DEVIS</div>
        <div className="sm:block flex ml-[120px] mt-5 items-center justify-center cursor-pointer w-full">
          <img src={Devis} alt="" style={{ width: '100px' }} />
        </div>
        <div>
          <form className="w-full py-[40px] flex flex-col">
            <div className="flex gap-2">
              <div className="ml-2">
                <label htmlFor="fullname">Nom Complet<span className="text-red-400">*</span></label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
                  spellCheck="false"
                  value={formData.fullname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mr-2">
                <label htmlFor="email" className="ml-2">Email<span className="text-red-400">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
                  spellCheck="false"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="ml-2">
                <label htmlFor="telephone">Téléphone<span className="text-red-400">*</span></label>
                <input
                  type="text"
                  id="telephone"
                  name="telephone"
                  className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
                  spellCheck="false"
                  value={formData.telephone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mr-2">
                <label htmlFor="ville" className="ml-2">Ville<span className="text-red-400">*</span></label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
                  spellCheck="false"
                  value={formData.ville}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 mt-3 mb-3">
        <div className="font-bold mt-3 ml-[-200px]">PLUS D'INFORMATION</div>
        <form className="py-3 flex flex-col">
          <label htmlFor='category' className="pt-2 ml-[-120px]">Quel service vous intéresse ?</label>
          <select
            className='rounded text-slate-300 bg-slate-500 p-1 my-1 pt-2 pb-2 mr-10 ml-2'
            id='category'
            name='service'
            value={formData.service}
            onChange={handleInputChange}
          >
            <option value="">Sélectionnez un service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <label htmlFor="message" className="pt-2 ml-[-120px]">Description de votre devis<span className="text-red-400">*</span></label>
          <textarea
            rows={4}
            spellCheck="false"
            className='rounded ml-2 bg-slate-500 text-slate-300 mr-10 h-[125px] p-1 my-1 resize-none'
            id="message"
            name='message'
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </form>
        <div className="bg-green-600 mt-2 ml-2 mr-10 h-[30px] rounded flex">
          <div className="flex-1 pt-1">Valider</div>
          <div className="flex-1 valider  hover:bg-green-500 cursor-pointer w-[30px]" onClick={handleSubmit}>
            <DoneIcon style={{ fontSize: '30px' }} />
          </div>
        </div>
      </div>
    </div>
           </div>
           )
       }
     

      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
        <img
            src= {Fiti}
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
            width={130}
            
          />
          <br />
          <p>L'acceuil et les éléments nécessaires pour créer de beaux produits.</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" onClick={openFacebookPage} />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            < WhatsAppIcon
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
              onClick ={openWhatsappPage}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Entreprise</h1>
          {footerProductLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-gray-400 hover:text-[#C49A45] duration-300 text-sm cursor-pointer leading-6"
                  href={link.link}
                  onClick={scrollToTop}
                >
                  {link.name}
                </a>
              </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Services</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-[#C49A45] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
                onClick={scrollToTop}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-[#C49A45] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
                onClick={scrollToTop}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Becodemy. Tous les droits sont réservés.</span>
        <span>Termes · Politique de confidentialité</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
