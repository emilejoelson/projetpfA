import React, { useState, useEffect } from 'react';
import './Heart.css';
import hchomme from './../assest/images/hchomme.jpg';
import hcfemme from './../assest/images/hcfemme.jpg';
import hpdm from './../assest/images/hpedicuremanicure.jpg';
import hcouture from './../assest/images/hcouture.jpg';
import { useNavigate } from 'react-router-dom';

function Heart() {
  const [isHovered, setIsHovered] = useState(false);
   const navigate = useNavigate();

   //Pour les coiffures hommes
   const handleCoiffureHomme = () => {
     navigate('/Fitifash/Esth%C3%A9tique/Coiffure/Homme');
     window.scrollTo({ top: 0, behavior: "smooth" });
   }
   
   //Pour les coiffures femmes
   const handleCoiffureFemme = () => {
      navigate('/Fitifash/Esthétique/Coiffure/Damme');
      window.scrollTo({ top: 0, behavior: "smooth" });
   }

   const handleCouture = () => {
    navigate('/menu_couture_officiel');
    window.scrollTo({ top: 0, behavior: "smooth" });
   }

   const handlePedicureManicure = () => {
    navigate('/Fitifash/Esthétique/Pédicure%20et%20manicure');
    window.scrollTo({ top: 0, behavior: "smooth" });
   }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        const elements = document.querySelectorAll('.heart, .hearta');
        if (elements.length > 0) {
          const lastElement = elements[elements.length - 1];
          const parent = lastElement.parentElement;
          if (parent) {
            parent.removeChild(lastElement);
            parent.insertBefore(lastElement, elements[0]);
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div
      className="flex  gap-[100px] w-[68em] mt-10 bg-transparent ml-[5.5em] h-[600px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pt-[50px] cursor-pointer  hover:scale-110 ml-5 heart font-script hover:text-[#0A0A0A] "
        style={{
          backgroundImage: `url(${hchomme})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={handleCoiffureHomme}
      >
        <p className={`transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          Coiffure Homme
        </p>
      </div>
      <div
        className="pt-[50px] cursor-pointer hover:scale-110 hearta font-script hover:text-[#0A0A0A] "
        style={{
          backgroundImage: `url(${hpdm})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={handlePedicureManicure}
      >
        <p className={`transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          Pédicure Menicure
        </p>
      </div>
      <div
        className="pt-[50px] cursor-pointer hover:scale-110 heart font-script hover:text-[#0A0A0A] "
        style={{
          backgroundImage: `url(${hcfemme})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={handleCoiffureFemme}
      >
        <p className={`transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          Coiffure Femme
        </p>
      </div>
      <div
        className="pt-[55px] cursor-pointer hover:scale-110 hearta font-script hover:text-[#0A0A0A]"
        style={{
          backgroundImage: `url(${hcouture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={handleCouture}
      >
        <p className={`transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          Couture
        </p>
      </div>
    </div>
  );
}

export default Heart;
