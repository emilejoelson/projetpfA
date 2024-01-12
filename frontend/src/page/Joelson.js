import React, { useEffect, useRef, useState } from "react";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import AllProduct from "../components/AllProduct";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectConverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../assest/images/img_1.png";
import slide_image_2 from "../assest/images/img_2.jpg";
import slide_image_3 from "../assest/images/img_3.png";
import slide_image_4 from "../assest/images/img_4.jpg";
import slide_image_5 from "../assest/images/img_5.jpg";
import slide_image_6 from "../assest/images/img_6.png";
import slide_image_7 from "../assest/images/img_7.png";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];
  const [hoveredCategory, setHoveredCategory] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoryHover = (event, category) => {
    setSelectedCategory(category);
    setHoveredCategory(category);
    const subCategories = productData
      .filter((el) => el.category.toLowerCase() === category.toLowerCase())
      .map((el) => el.subcategory);
    const uniqueSubCategories = [...new Set(subCategories)]; // Remove duplicate subcategories
    setSubCategories(uniqueSubCategories);
    setAnchorEl(event.currentTarget);
  };

  const handleCategoryLeave = () => {
    setSelectedCategory("");
    setHoveredCategory("");
    setAnchorEl(null);
  };

  // Slide
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Filter data display
  const [dataFilter, setDataFilter] = useState([]);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(filter);
    setFilterBy(category);
  };

  const homeProductCardList = productData.slice(1, 5);

  const homeProductCartListArrivage = productData.filter(
    (el) => el.category === "Nouvel Arrivage"
  );

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  // Slide functions
  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div>
      <div className="p-2 md:p-4">
        <div className="md:flex">
          <div className="md:w-[60%]">
            <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
              {/* <p className="text-sm font-medium text-slate-900">Bike Delivery</p> */}
              {/* <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"  className="h-7"/> */}
            </div>
            <h2 className="text-4xl md:text-7xl font-bold py-3">
              Soyez La Bienvenue{" "}
              <span className="text-red-600 text-">Chez Nous </span>
            </h2>

            <div className="h-[70%] w-[99%] flex gap-4 ml-[10%] rounded">
              <div className="ml-10 bg-slate-900  w-60 mt-10 rounded">
                <div className="mt-10">
                  <Typography variant="h3">Categories</Typography>
                </div>
                <div className="bg-slate-900 mt-10">
                  {categoryList[0] ? (
                    categoryList.map((category, index) => {
                      const isHovered = hoveredCategory === category;
                      return (
                        <div
                          className= {`flex gap-4 justify-center cursor-pointer ${
                            isHovered ? "text-green-400" : ""
                          }`}
                          key={index}
                          onMouseEnter={(e) => handleCategoryHover(e, category)}
                          onMouseLeave={handleCategoryLeave}
                          onClick={() => handleFilterProduct(category)}
                        >
                          <div className="rounded w-full ">
                            <button className="py-4 h-10">{category}</button>
                          </div>
                          <Menu
                            open={selectedCategory === category && Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={() => setAnchorEl(null)}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "left",
                            }}
                          >
                            <MenuItem>
                              <Typography variant="h4">
                                Subcategories
                              </Typography>
                            </MenuItem>
                            {subCategories.length > 0 ? (
                              subCategories.map((subcategory, index) => (
                                <MenuItem key={index}>{subcategory}</MenuItem>
                              ))
                            ) : (
                              <MenuItem>No subcategories found.</MenuItem>
                            )}
                          </Menu>
                        </div>
                      );
                    })
                  ) : (
                    <div className="min-h-[150px] flex justify-center items-center">
                      <p>Chargement...</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded w-[68%] ml-20 mt-10 h-[55%] rounded ">
                <img
                  src={images[currentImage]}
                  alt="Slideshow"
                  className="h-[265px] w-full rounded"
                />
                <br />
                <Typography variant="h2" className="bg-slate-500  p-2 rounded">
                  Nos produits actuels
                </Typography>
              </div>
            </div>
          </div>

          <div className="md:w-1/3  ml-[10%] flex flex-wrap gap-5 p-4  mr-[2%] justify-center">
            {homeProductCardList[0] ? (
              homeProductCardList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            ) : (
              loadingArray.map((el, index) => {
                return (
                  <HomeCard
                    key={index + "loading"}
                    loading={"Chargement..."}
                  />
                );
              })
            )}
          </div>
        </div>

        <div className="bg-slate-800 rounded w-[90%] h-[500px] ml-[5%]">
          <div>
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "28px 0px 29px 0", p: "20px 0px 0px 0" }}
            >
              Nouvel Arrivage
            </Typography>
          </div>
          <Box mb="30px">
            <button
              onClick={prevProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="  gap-5 bg-slate-300 hover:bg-slate-400 text-lg p-1  rounded "
            >
              <GrNext />
            </button>
          </Box>
          <div className="bg-sky-900 w-[90%] rounded h-[65%] ml-[5%]">
            <div
              className="flex gap-5  w-[90%] ml-[5%] py-10 overflow-hidden scrollbar-none scroll-smooth transition-all"
              ref={slideProductRef}
            >
              {homeProductCartListArrivage[0] ? (
                homeProductCartListArrivage.map((el) => {
                  return (
                    <CardFeature
                      key={el._id + "vegetable"}
                      id={el._id}
                      name={el.name}
                      category={el.category}
                      price={el.price}
                      image={el.image}
                    />
                  );
                })
              ) : (
                loadingArrayFeature.map((el, index) => (
                  <CardFeature
                    loading="Chargement..."
                    key={index + "cartLoading"}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div>
          <AllProduct heading={"Tous les produits"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
