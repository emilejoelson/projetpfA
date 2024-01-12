import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import {FaTimes} from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Typography } from "@mui/material";
import DropDown from "./DropDown";
import Fiti from "./../assest/Fiti.png";
import { IoIosArrowDown } from "react-icons/io";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const [searchResultsFound, setSearchResultsFound] = useState(true);
  const [selectedSearchTermId, setSelectedSearchTermId] = useState(null);
  const [dropDown, setDropDown] = useState(false);

  const productData = useSelector((state) => state.product.productList);

  const [query, setQuery] = useState("");

  const keys = ["name", "category","subcategory","subcategory1","subcategory2","price"];

  const recherche = productData.filter((product) =>
    keys.some(
      (key) =>
        product[key] &&
        product[key].toLowerCase().includes(query.toLowerCase())
    )
  );

  const filteredRecherche = recherche.filter(
    (product) => product.category !== "FitiDesign"
  );

  useEffect(() => {
    setSearchResultsFound(recherche.length > 0);
  }, [recherche]);

  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Déconnexion avec succès");
  };

  const cartItemProduct = useSelector((state) => state.product.cartItem) || [];
  const cartItemDealdujour = useSelector((state) => state.dealdujour.cartItemDeal) || [];
  const cartItemNumber = (cartItemProduct.length || 0)+(cartItemDealdujour.length || 0);


  const navigate = useNavigate();

  const handleHomme = () => {
    navigate("/");
  };

  const handleClear = () => {
    setQuery("");
  };

  const handleSearch = () => {
    if (query) {
      navigate(`/categorie_officiel_fitifash/${query}`);
      setQuery("");
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  const handleSearchResultClick = (el) => {
    setSelectedSearchTermId(el._id);
    navigate(`/menu/${el._id}`);
    setQuery("");
  };

  const isMobile = window.innerWidth < 768; // Define your mobile breakpoint here
  const [isMenuOpen, setIsMenuOpen] = useState(true);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header
      className={`z-50 fixed shadow-md w-full h-auto md:h-[74px] px-2 md:px-4 bg-slate-900 ${
        active ? "h-auto md:h-[73px]" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="cursor-pointer" onClick={handleHomme}>
          <img src={Fiti} style={{ width: "100%", height: "50px" }} />
        </div>
        <div className="sfiti mt-2 md:mt-0 ml-0 md:ml-[0.1%] text-center  cursor-pointer" onClick={handleHomme}>
          <sup>
            <Typography variant="h4">
              <span className="font-great-vibes text-[#C49A45]">
                F<span className="text-white">iti,</span>F
                <span className="text-white">ash</span>
              </span>
              <span className="text-5">{" "}</span>
            </Typography>
          </sup>
        </div>

        <div className="md:flex items-center">
          {isMobile && (
            <div className="cursor-pointer" onClick={toggleMenu}>
              { isMenuOpen ?<BiMenuAltLeft size={26} style={{ position: "absolute", top:3, left: 3 }} /> :
              (
                <div>
                <FaTimes size={26} style={{ position: "absolute", top:3, left: 3 }} />
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Accueil
                  </Link>
                  <Link to={"about"} className="px-2 py-1">
                    À propos de nous
                  </Link>
                  <Link to={"menu/6442d476cba400072acc8c31"} className="px-2 py-1">
                    Menu
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link>
                  <div className="px-2 py-1" onClick={toggleDropDown}>
                    <div>
                      <BiMenuAltLeft size={26} style={{ position: "absolute", top: 220, left: 120 }} /> Categories
                    </div>
                </div>
                </nav>
              </div>
              )
               
               }
            </div>
          )}
          

          {isMobile ? (
            <div className={`w-full ${dropDown ? "" : "hidden"}`}>
              {dropDown && <DropDown setDropDown={setDropDown} />}
            </div>
          ) : (
            <div className="hidden md:block relative mr-[60px] m  h-[60px] mt-2 md:mt-0 w-[200px]">
              {/* Categories dropdown for desktop */}
              <BiMenuAltLeft size={26} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] bg-slate-800 w-full flex justify-between items-center pl-10  font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? <DropDown setDropDown={setDropDown} /> : null}
            </div>
          )}

          <div className={`search  mr-[60px] mt-2 md:mt-0 flex items-center space-x-2`}>
            <div className={`w-[${isMobile ? 200 : 400}px] py-2  md:py-2 rounded-full relative flex`}>
              <input
                type="text"
                placeholder="Recherche rapide ..."
                value={query}
                className="h-[40px] pl-4 flex-grow text-slate-600 bg-slate-100 px-2 border-slate-800 border-[2px] rounded-full"
                onChange={(e) => setQuery(e.target.value)}
                spellCheck="false"
              />
              {query && (
                <div
                  className={`absolute top-1/2 right-[60px]  transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer`}
                  onClick={handleClear}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              )}
              <div
                className={`absolute cursor-pointer top-1/2 right-[-1px] bg-slate-600 h-[40px] w-[${isMobile ? 40 : 50}px] items-center justify-center p-[10px] transform -translate-y-1/2 text-gray-100 `}
                onClick={handleSearch}
                style={{ borderRadius: isMobile ? "50px" : "0 50px 50px 0" }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div className="justify-center absolute pt-[16px] mt-[100px] ml-[16px] gap-4 my-4 overflow-hidden scrollbar-none">
                {searchResultsFound ? (
                  query[0] ? (
                    filteredRecherche.map((el) => (
                      <div key={el._id} className="mb-0">
                        <div
                          onClick={() => handleSearchResultClick(el)}
                          className={`cursor-pointer flex gap-3 text-left text-[#0A0A0A] font-sans pl-3 pr-5 bg-slate-100 w-[${ isMobile ? 250 : ""}px] hover:bg-slate-200 p-2`}
                        >
                          <div> <ScheduleIcon /></div>
                          <div>{el.name}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="nv flex items-center font-sans gap-4 md:gap-7">
            <nav className="gap-4 md:gap-6 text-black 800px:text-[#fff] hidden md:flex">
              <Link to={""}>Accueil</Link>
              <Link to={"about"}>À_propos_de_nous</Link>
              <Link to={"menu/64e93cb66ded3eeb9f93e6f0"}>Menu</Link>
              <Link to={"contact"}>Contact</Link>
            </nav>
            <div className=" text-2xl pb-[10px] relative">
              <Link to={"cart"}
               onClick={scrollToTop}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                   style={{marginLeft :`${isMobile ? 250 : " "}px`}} 
                />
                <div className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cartItemNumber}
                </div>
              </Link>
            </div>

            <div
              className="text-slate-600"
              onClick={handleShowMenu}
              onMouseEnter={handleShowMenu}
              onMouseLeave={handleShowMenu}
            >
              <div className={`text-3xl  cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md`}>
                {userData.image ? (
                  <img src={userData.image} className={`w-[35px] h-[40px]  rounded-full`} />
                ) : (
                  <HiOutlineUserCircle size={30} color="rgb(255 255 255 / 83%)" />
                )}
              </div>
              {showMenu && (
                <div className="absolute right-2 bg-slate-500 text-white rounded  py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                  {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                    <Link to={"admin"} className="whitespace-nowrap cursor-pointer px-2">Admin</Link>
                  )}
                  {userData.image ? (
                    <p className="cursor-pointer text-white px-2 " onClick={handleLogout}>
                      Se déconnecter <span className="text-green-00">({userData.firstName + " " + userData.lastName})</span>
                    </p>
                  ) : (
                    <Link to={"login"} className="whitespace-nowrap  cursor-pointer px-2">Se connecter</Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
