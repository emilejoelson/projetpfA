import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartItem } from "../redux/productSlide";
const  CardProducts = ({id,name,description,price,image,category})=> {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAcheter = () => {
        dispatch(
          addCartItem({
            _id: id,
            name: name,
            price: price,
            category: category,
            image: image,
          })
        );
      };
     const handleImage = () => {
         navigate(`/menu/${id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
     }
   const isMobile = window.innerWidth < 768;
  return (
    <div>
      {
        isMobile?
        (
      <div className="   rounded relative text-white h-[270px] hover:scale-105 cursor-pointer ">
        <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"190px", height:"92px",borderRadius:"0 0 20px 20px"}}>
          <div className="text-left ml-2 pt-1 font-bahnschrift">{name}</div> 
          <div className="text-left ml-2 mt-[-5px] font-ms-gothic" style={{ maxHeight: '50px', overflowY: 'auto' }}>
                {description}
          </div>
          {typeof price === 'string' ? (
                      <p className="text-left ml-2">{parseFloat(price).toFixed(2)} dh </p>
                  ) : (
                    <p>Prix non disponible</p>
                  )}
         </div>
         <div className="bg-black hover:bg-white hover:text-black w-[100px] absolute mt-[18.3em] ml-[6.5em] rdv" onClick={handleAcheter} >Acheter</div>
         <img src={image}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" onClick={handleImage}/>
      </div>
        )
         :
         (
          <div className="   rounded relative text-white h-[270px] hover:scale-105 cursor-pointer ">
            <div className="bg-white absolute text-black " style={{marginTop:"13em",width:"224px",height:"92px",borderRadius:"0 0 20px 20px"}}>
              <div className="text-left ml-2 pt-1 font-bahnschrift">{name}</div> 
              <div className="text-left ml-2 mt-[-5px] font-ms-gothic">{description} </div> 
              {typeof price === 'string' ? (
                          <p className="text-left ml-2">{parseFloat(price).toFixed(2)} dh </p>
                      ) : (
                        <p>Prix non disponible</p>
                      )}
             </div>
             <div className="bg-black hover:bg-white hover:text-black w-[100px] absolute mt-[18.2em] ml-[9.1em] rdv" onClick={handleAcheter} >Acheter</div>
             <img src={image}   alt="Service A" style={{borderRadius :"20px"}} className="  w-full h-full  transition-all duration-300" onClick={handleImage}/>
         </div>
         )
      }
        
    </div>
  );
}

export default CardProducts;
