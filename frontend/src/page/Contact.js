import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import {AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Footer from '../components/Footer';
import { toast } from 'react-hot-toast';

const Contact= () =>{
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

  //Location de Fitifash
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
// 

 const isMobile = window.innerWidth < 768;
  return (
    <div>
      {isMobile?
       (
        <div className='bg-[#FFD700]'>
           <div className="mt-[9em] ">
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
          <Footer/>
        </div>
        
       )
      :
      (
        <div className="font-sans">
      <div className=" absolute  h-[550px] z-30 w-[40%] rounded mt-10	bg-slate-50  ml-[50%] mt-[10%] ">
      <form
          className='m-auto w-full max-w-md rounded shadow   flex flex-col p-3 text-yellow-500 bg-slate-50'
          onSubmit={handleSubmit}
        >
          <Typography
            variant="h1"
            sx={{ color: "#C49A45" }}
            
          >
            <div className="font-script">Envoyer nous votre message</div>
          </Typography>
         
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Nom et prénom ..."
            className='rounded mt-2 h-10 pl-5 w-full text-[#0A0A0A] bg-white p-1 my-1'
            spellCheck="false"
            value={formData.fullname}
            onChange={handleChange}
            style={{borderRadius:"20px",border:"2px solid #8B7355 "}}
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email ..."
            className='rounded mt-2 h-10 pl-5 text-[#0A0A0A] bg-white p-1 my-1'
            spellCheck="false"
            value={formData.email}
            onChange={handleChange}
            style={{borderRadius:"12px",border:"2px solid #8B7355 "}}
          />
          <input
            type="text"
            placeholder="Telephone ..."
            className=' rounded h-10 pl-5 mt-2 text-[#0A0A0A] bg-white p-1 my-1'
            name="telephone"
            spellCheck="false"
            value={formData.telephone}
            onChange={handleChange}
            style={{borderRadius:"12px",border:"2px solid #8B7355 "}}
          />
          <input
            type="text"
            placeholder="Sujet ..."
            className=' rounded h-10 mt-2 pl-5 text-[#0A0A0A] bg-white p-1 my-1'
            name="sujet"
            spellCheck="false"
            value={formData.sujet}
            onChange={handleChange}
            style={{borderRadius:"12px",border:"2px solid #8B7355 "}}
          />
          <textarea
            rows={6}
            placeholder="Message ..."
            className='rounded  pl-5 mt-2 text-[#0A0A0A] bg-white p-1 my-1 resize-none'
            id="message"
            name="message"
            spellCheck="false"
            value={formData.message}
            onChange={handleChange}
            style={{borderRadius:"12px",border:"2px solid #8B7355 "}}
          />

          <button
            type="submit"
            className='rounded mt-2 hover:bg-[#8B7355] bg-[#cfa756d8] text-white text-lg font-medium my-2 drop-shadow'
            style={{borderRadius:"12px"}}
          >
            Envoyer
          </button>
        </form>
      </div>
       

        <div className="  p-2 md:p-4   bg-gradient-to-r from-slate-100 to-slate-50" 
           
        >
           <div className='md:flex'>
              <div className='md:w-1/2'>
                <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
                </div>
                      <div >
                          <h2 className='text-4xl md:text-7xl font-bold py-3'> 

                            <Box m="20px">
                                <Typography variant="h1" sx={{ 
                                  fontWeight: 'bold',
                                   
                                  }}>
                                      <div className="font-great-vibes text-yellow-400">Contactez nous</div>   
                                  </Typography> 
                          </Box>
                        
                          
                          </h2>
                      </div>
                      
             </div>
             
          </div>
        </div>
            
            
       <div className="  w-full h-[550px] bg-white ">
            <div className="ml-[10%] py-[5%] gap-10 ">
                  <div className="flex gap-10 cursor-pointer text-[#0A0A0A] hover:text-italic  " onClick={openWhatsappPage}>
                        <div>
                                    <AiOutlinePhone
                                          size={30}
                                         
                                    />
                         </div>
                         <div className="text-2xl">
                               (+212)684-227815
                        </div>
                  </div>
                  <div className="flex gap-10 py-20 cursor-pointer text-[#0A0A0A] hover:text-italic " onClick={initiateDiscussion}>
                              <div>
                                    <AiOutlineMail
                                                size={30}
                                                
                                    />
                              </div>
                              <div className="text-2xl">
                              fitidesign21@gmail.com
                              </div> <br/>
                  </div>
                        <div className="flex gap-10 cursor-pointer text-[#0A0A0A] hover:text-italic " onClick={openLocationFitifash}>
                              <div>
                                    <GoLocation
                                    size={32}
                                   
                                    />
                              </div>
                              <div className="text-2xl pr-[70%] pl-2 ">
                              Avenue Al Oulfa ,Agadir 80000,Maroc
                              </div>
                        </div>
                        </div>
       </div>
      
            

        <div className="  bg-slate-400 w-full h-[400px] "
            style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height:'200px'
                 
            }}
        >
            <div className="w-full h-[200px]">
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
            
            <div>
            </div>
            <div>
                  <Footer/>
            </div>
    </div>
      )}
    </div>
    
  );
}

export default Contact;
