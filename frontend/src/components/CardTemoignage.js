import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

const CardTemoignage = ({ username, userimage, text, rating, services, createdAt,telephone }) => {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: fr });

  const renderStars = () => {
    const stars = [];
    const numStars = Math.min(Math.max(rating, 0), 5);

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
      <div className="mt-[50px]">
        <div className="bg-white pb-3 cursor-pointer  w-[240px] h-[350px] p-4 rounded-lg shadow-md hover-shadow flex flex-col">
          <div className="flex gap-16">
            <div>
              <h3 className="text-md font-semibold mb-2">
                <span className="text-black font-bold">{username}</span>
              </h3>
            </div>
            <div className="mt-[-10px]  rounded-full w-50 h-50">
              <img
                alt="profile-user"
                src={userimage}
                className="cursor-pointer rounded-full"
                style={{ borderRadius: "200px",width:"100px",height:"100px" }}
              />
            </div>
          </div>
          <div className="description max-h-100 overflow-y-auto">
            <p className="text-gray-700 text-left mb-4">{text}</p>
          </div>
          <div className="text-green-400">{telephone}</div>
          <div className="font-sans text-[#cfa756d8] " style={{fontSize:"20px"}}>Services intéressants</div>
          <div className="description max-h-100 overflow-y-auto">
            <ul className="list-disc pl-6 text-gray-700 text-left mb-4">
              {services.map((service, index) => (
                <li key={index}>✓ {service}</li>
              ))}
            </ul>
          </div>
          <div className="flex-grow"></div>
          <div className="text-orange-600 flex">
            <div className="flex-1"> {renderStars()}</div>
            <div className="flex-1 text-gray-400 font-sans">{timeAgo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTemoignage;
