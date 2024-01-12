import React from 'react';
import { Link } from 'react-router-dom';

const CardFeaturedeal = ({ id, image, name, description }) => {
  return (
    <div className="md:w-1/2">
      <Link to={`/menu_deal_du_jour/${id}`}>
        <div className="deal hover:scale-105 relative cursor-pointer ml-[-15px] mr-4 bg-red h-[170px]">
          <div className="dprix bg-orange-600 absolute font-bold text-slate-50 w-[50px]">-20%</div>
          <img src={image} alt="Service A" className="imaga w-full h-full transition-all duration-300" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 text-white">
            <div>
              <p className="text-lg font-bold pt-4 text-[#0A0A0A]">TOP !!!</p>
              <p className="text-sm text-black pt-[20px] font-sans">{name}</p>
              <p className="text-sm text-slate-500 font-palatino">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardFeaturedeal;
