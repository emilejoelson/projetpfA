import React, { useEffect, useState } from 'react';
import "./Modal.css";
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { fetchTemoignages } from '../../redux/temoignageSlice';

const Modalavis = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [selectedServices, setSelectedServices] = useState([]);
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");
  const services = [
    'Shampoings et après-shampoings','Tresses', 'Coiffure de mariage', 'Cheveux attachés', 
    'Brushing', 'Permanentes','Lissages de cheveux', 'Services de maquillages', 'Box braids', 
    'Coiffure', 'Dreadlocks','Brushings','Cheveux frisés','Extensions de cheveux','Mèches',
    'Colorations capillaires','Coloration en dégradé','Repousse capilaillaire','Epilation à cire',
    'Traitement à la kératine','Balayage','Service non listé'
  ];

  const handleServiceClick = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(item => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const userData= useSelector(state => state.user);

  const handleSubmit = async () => {
    const formData = {
      user: userData._id, // Assuming _id is the user's ID
      text,
      rating,
      services: selectedServices,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/createtemoignage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        closeModal(); // Close the modal
      } else {
        console.error('Error creating testimonial');
      }
    } catch (error) {
      console.error('Error creating testimonial:', error);
    }
  };

  const temoignageData = useSelector(state => state.temoignage.temoignageList);
  useEffect(() => {
    dispatch(fetchTemoignages());
  }, [dispatch]);
  const isMobile = window.innerWidth < 768;
  return (
    <div>
      {
        isMobile?
        (
          <div className="fixed  inset-0 z-50  flex justify-center  items-center bg-gray-800  bg-opacity-50">
          <div className="bg-white p-6 modala rounded relative shadow-md  h-[600px] scroll-container max-h-[600px] overflow-y-auto  ">
             <div className="flex text-right "><button className="text-white bg-red-600 absolute h-[30px]   " style={{fontSize:"25px"}} onClick={closeModal}>X</button></div>
            <div className="f text-gray-400 text-lg m-8 pb-8 ">
                Fiti Fash 
            </div>
            <div className="flex ">
                <div>
                  < div display="flex" justifyContent="center" alignItems="center">
                  {userData.image ? (
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      src={userData.image} className="h-1/2 w-1/2"
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                    ) : (
                        <HiOutlineUserCircle  className="h-1/2 w-1/2"/>
                    )}
                  </div>
                </div>
                <div className="text-left">
                    <div className="text-black">
                    {userData.image ? (
                      <span>{userData.firstName+" "+ userData.lastName}</span>
                    ) : (
                       " "
                    )}
                    </div>
                    <div className="text-sm text-gray-400 ">
                        Post public <InfoIcon/>
                    </div>
                </div>
            </div>
             <form  className="text-left m-10 ">
                <textarea
                   type="text"
                   spellCheck="false"
                   className="h-[100px]  border border-gray-300 text-lg p-2 placeholder-gray-500 rounded w-full  text-gray-500"
                   placeholder="Ecrire ici votre experience ..."
                   value={text}
                   onChange={handleTextChange}
                >
                </textarea>
             </form>
            <div className="mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className={`start cursor-pointer ${
                    star <= rating ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
             <div className="text-lg text-gray-600 text-left mb-5">
                 <div className="font-bold">Quels services vous intéresse?</div> 
                  <div className="text-sm ">(Vous pouvez choisir plusieurs réponses)</div>
             </div>
            <div className="text-left">
            {services.map((service) => (
                <button
                  key={service}
                  onClick={() => handleServiceClick(service)}
                  className={`py-2 px-4 model ml-2 mt-1 text-sm ${
                    selectedServices.includes(service)
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-500 border-2 border-gray-300'
                  }`}
                >
                  {selectedServices.includes(service) ? '✓ ' : ''}
                  {service}
                </button>
              ))}
            </div>
             <div className="flex gap-6">
                <button
                  onClick={closeModal}
                  className="mt-4 flex-1 model  text-gray-500 py-2 px-4 border hover:bg-red-400 border-blue-500 rounded"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-blue-500 model text-white py-2 px-4 hover:bg-green-500 rounded"
                >
                  Envoyer
                </button>
             </div>
          </div>
          </div>
        )
         :
         (
          <div className="fixed  inset-0 z-50  flex justify-center  items-center bg-gray-800  bg-opacity-50">
          <div className="bg-white p-6 modala rounded relative shadow-md w-[600px] h-[600px] scroll-container max-h-[600px] overflow-y-auto  ">
             <button className="text-white bg-red-600 absolute w-[25px]  ml-[270px] mt-[0] "  onClick={closeModal}>X</button>
            <div className="f text-gray-400 text-lg m-8 pb-8 ">
                Fiti Fash 
            </div>
            <div className="flex ">
                <div>
                  < div display="flex" justifyContent="center" alignItems="center">
                  {userData.image ? (
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      src={userData.image} className="h-1/2 w-1/2"
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                    ) : (
                        <HiOutlineUserCircle  className="h-1/2 w-1/2"/>
                    )}
                  </div>
                </div>
                <div className="text-left">
                    <div className="text-black">
                    {userData.image ? (
                      <span>{userData.firstName+" "+ userData.lastName}</span>
                    ) : (
                       " "
                    )}
                    </div>
                    <div className="text-sm text-gray-400 ">
                        Post public <InfoIcon/>
                    </div>
                </div>
            </div>
             <form  className="text-left m-10 ">
                <textarea
                   type="text"
                   spellCheck="false"
                   className="h-[100px]  border border-gray-300 text-lg p-2 placeholder-gray-500 rounded w-full  text-gray-500"
                   placeholder="Ecrire ici votre experience ..."
                   value={text}
                   onChange={handleTextChange}
                >
                </textarea>
             </form>
            <div className="mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className={`start cursor-pointer ${
                    star <= rating ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
             <div className="text-lg text-gray-600 text-left mb-5">
                 <div className="font-bold">Quels services vous intéresse?</div> 
                  <div className="text-sm ">(Vous pouvez choisir plusieurs réponses)</div>
             </div>
            <div className="text-left">
            {services.map((service) => (
                <button
                  key={service}
                  onClick={() => handleServiceClick(service)}
                  className={`py-2 px-4 model ml-2 mt-1 text-sm ${
                    selectedServices.includes(service)
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-500 border-2 border-gray-300'
                  }`}
                >
                  {selectedServices.includes(service) ? '✓ ' : ''}
                  {service}
                </button>
              ))}
            </div>
             <div className="flex gap-6">
                <button
                  onClick={closeModal}
                  className="mt-4 flex-1 model  text-gray-500 py-2 px-4 border hover:bg-red-400 border-blue-500 rounded"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-blue-500 model text-white py-2 px-4 hover:bg-green-500 rounded"
                >
                  Envoyer
                </button>
             </div>
          </div>
          </div>
         )
      }
    </div>
   
  );
};

export default Modalavis;
