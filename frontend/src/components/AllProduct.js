import React, { useEffect, useState,useRef} from "react";
import { useSelector } from "react-redux";
import CardFeature from "./CardFeature";
import FilterProduct from "./FilterProduct";
import { Typography } from "@mui/material";
import CardFeaturerdv from "./CardFeaturerdv";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./AllProduct.css"; // Import the CSS file
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const subcategory1List = [...new Set(productData
    .filter((el) => el.category && el.category.toLowerCase() !== "fitidesign" && el.subcategory1)
    .map((el) => el.subcategory1))];

  const [filterby, setFilterBy] = useState("");
  const [filteredData, setFilteredData] = useState(productData);

  useEffect(() => {
    setFilteredData(productData);
  }, [productData]);

  const handleFilter = (subcategory1, isProduct) => {
    setFilterBy(subcategory1);
    if (isProduct) {
      const filter = productData.filter(
        (el) => 
              el.subcategory1 &&
              el.subcategory1.toLowerCase() === subcategory1.toLowerCase() &&
              el.subcategory.toLowerCase() === "produits"
      );
      setFilteredData(filter);
    } else {
      const filter = productData.filter(
        (el) =>
          el.subcategory1 &&
          el.subcategory1.toLowerCase() === subcategory1.toLowerCase() &&
          (  el.subcategory && el.subcategory.toLowerCase() !== "produits" || el.subcategory1 &&
            el.subcategory1.toLowerCase() !== "produits")
      );
      setFilteredData(filter);
    }
  };

  const loadingArrayFeature = new Array(10).fill(null);

  const swiperRef = useRef(null); 

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

 const isPhone = window.innerWidth < 768;

  return (
    <div className={ `allproduct bg-yellow-600   ml-${isPhone ?0 : 10}  mr-${isPhone ?0 : 10} `}
      style={{borderRadius:"10px"}}
    >
      <Typography
        variant="h2"
        color="#0A0A0A"
        fontWeight="bold"
        sx={{ m: "28px 0px 29px 0" ,pt:isPhone? "5px":"20px"}}
      >
      <span className="dashed-text font-bold font-palatino text-slate-100" style={{ fontSize: isPhone ? "16px" : "27px" }}>{heading}</span>
      {isPhone ?
        ("")
         :
         (
          <span
        className={`ml-[470px] text-slate-100 bg-slate-900 w-[300px] h-[40px] flex items-center justify-center pt-[5px] font-bold font-sans cursor-pointer hover:text-slate-900 rounded hover:bg-yellow-600`}
        style={{ fontSize: '20px' }}
      >
        Tous les meilleurs
      </span>
         )}

      </Typography>
     {
      isPhone ?
      ( <div>
        <div className=" grid grid-cols-3 bg-yellow-600 gap-4 ml-4 mr-4 flex flex-wrap items-center justify-center overflow-hidden scrollbar-none">
          {subcategory1List[0] ? (
            subcategory1List.map((el) => {
              return (
                <FilterProduct
                  subcategory1={el}
                  key={el}
                  isActive={el.toLowerCase() === filterby.toLowerCase()}
                  onClick={() => handleFilter(el, el.toLowerCase() === "produits")}
                />
              );
            })
          ) : (
            <div className="min-h-[150px] flex justify-center items-center">
              <p>Chargement...</p>
            </div>
          )}
        </div>
        </div>

      )
      :
      (
        <div className="filterproduct flex bg-gradient-to-r from-white to-slate-50   pt-10 gap-4 justify-center overflow-hidden scrollbar-none">
        {subcategory1List[0] ? (
          subcategory1List.map((el) => {
            return (
              <FilterProduct
                subcategory1={el}
                key={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilter(el,el.toLowerCase() === "produits")}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Chargement...</p>
          </div>
        )}
      </div>
      )
     }

<div className={` ${isPhone ? 'bg-yellow-600' : ''} py-[1%] relative ${isPhone ? 'px-4' : ''}`} style={{ borderRadius: "0 0 10px 10px" }}>
  <div className="absolute pt-[75px] left-0 z-[2] h-[180px] w-[40px]">
    <button
      className="font-bold hover:bg-[#D4AF37] hover:scale-110 bg-[#8B7355] mb-20 text-black rounded-full"
      onClick={handlePrevClick}
    >
      <NavigateBeforeIcon
        sx={{
          color: "white",
          width: "25px",
          height: "25px",
        }}
      />
    </button>
  </div>
  <div className="absolute pt-[75px] nexts right-0 z-[2] h-[180px] w-[40px]">
    <button
      className="font-bold hover:bg-[#D4AF37] hover:scale-110 bg-[#8B7355] mb-20 text-black rounded-full"
      onClick={handleNextClick}
    >
      <NavigateNextIcon
        sx={{
          color: "white",
          width: "25px",
          height: "25px",
        }}
      />
    </button>
  </div>
    <div className="sm:ml-8 sm:mr-8 ">
      <Swiper
       ref={swiperRef}
       spaceBetween={isPhone ? -10 : 200}
       slidesPerView={isPhone ? 3 : 5}
       loop={true}
       loopadditionalslides={3} // Use loopedSlides instead of loopAdditionalSlides
       autoplay={{ delay: 1000 }}
      >
        
        {filteredData[0] ? (
          filteredData.map((el) => (
            <SwiperSlide key={el._id}>
            <div className={`${isPhone ? 'w-[100%]' : 'w-[13%]'}`}>
              {el.category && el.category.toLowerCase() === "fitifash" && (
                <>
                  {el.subcategory && el.subcategory.toLowerCase() === "produits" ? (
                    <CardFeature
                      id={el._id}
                      image={el.image}
                      name={el.name}
                      subcategory={el.subcategory}
                      price={el.price}
                    />
                  ) : (
                    <CardFeaturerdv
                      id={el._id}
                      image={el.image}
                      name={el.name}
                      subcategory={el.subcategory}
                      price={el.price}
                    />
                  )}
                </>
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

       <div className="pt-5 pb-5 text-[#353535]">
        {isPhone?"":(" &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")}
       
        </div>
    </div>
  );
};

export default AllProduct;
