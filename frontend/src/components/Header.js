import React, { useState } from "react";
import logo from "../assest/logo.png";
import {Link} from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import {BsCartFill} from "react-icons/bs";

import {HiOutlineUserCircle} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import CardFeature from "./CardFeature";
import { Typography } from "@mui/material";
const  Header= () => {
    const [showMenu, setShowMenu] = useState(false);
    const userData= useSelector(state => state.user);
  //console.log(userData.email)

// To fetcth Data from redux
const productData = useSelector((state) => state.product.productList);
//console.log(productData)
 /////////Query
  const [query,setQuery] = useState("");
 // console.log(query) 
 // console.log(productData)
 //console.log(productData.filter((product) => product.name.toLowerCase().includes("riz")))
  /////////////////////////////////////////////
  const keys = ["name","category","price","description"];
 const recherche = productData.filter((product) => keys.some(key => product[key].toLowerCase().includes(query)));
 //console.log(recherche)

  const [active, setActive] = useState(false);
    const dispatch = useDispatch()


    ///////////////////////////////////////////////////////
    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) {
          setActive(true);
        } else {
          setActive(false);
        }
      });
    const handleShowMenu = () => {
        setShowMenu((preve) => !preve);
      };

      const handleLogout = () =>{
        dispatch(logoutRedux())
        toast("Déconnexion avec succès")
      }
     // console.log(process.env.REACT_APP_ADMIN_EMAIL)

     const cartItemNumber= useSelector((state) =>state.product.cartItem)

     const loadingArrayFeature = new Array(10).fill(null);
  return (
    <header className='  z-50 fixed shadow-md w-full h-16 px-2 md:px-4 bg-[#3321c8] h-[73px]' 
    >
        {/**Desktop */}
        <div className='flex items-center h-full justify-between '>
           <div className="relative">
                <Link to ={""} >
                        <img
                        src="https://p2m.ma/wp-content/uploads/2021/03/cropped-logo-1.png" width={80}
                        alt=""
                        className=" ml-[16%] h-full"
                    />
                    
                </Link>
            </div>
            <div className="ml-[0.5%] leading-5">
                 <sup>
                 <sup>
                 <sup>
                 <sup><Typography variant="h4">
                      <span>P</span><span className="text-5">ontentiel </span>
                      <span>M</span><span>aroc</span>
                 </Typography></sup>
                 </sup>
                 </sup>
                 </sup>
                 
            </div>
           
            <div className="w-[30%] ml-[12%] mr-[10%] py-5 rounded-full" >
                <input
                    type="text"
                    placeholder="Chercher le produit ..."
                    className="h-[40px] w-full text-slate-300 bg-slate-500 px-2 border-[#3957db] border-[2px] rounded-full"
                    onChange={(e) =>setQuery(e.target.value)}
                />
                <AiOutlineSearch
                size={25}
                className="absolute right-[36%] top-[31%] cursor-pointer"
                />
                
          </div>
            <div className='flex items-center gap-4 md:gap-7 ' >
                <nav className="gap-4 md:gap-6 text-black 800px:text-[#fff]  hidden md:flex">
                    <Link to={""}>Accueil</Link>
                    <Link to={"menu/64493872e1d1a84d2c6b323f"}>Menu</Link>
                    <Link to={"contact"}>Contact</Link>
                </nav>
                <div className="text-2xl text-slate-600 relative">
                   <Link to ={"cart"}> 
                   <AiOutlineShoppingCart
                        size={30}
                        color="rgb(255 255 255 / 83%)"
                   />
                    <div className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                        {cartItemNumber.length}
                    </div>
                    </Link>
                 </div>

                <div className=" text-slate-600"onMouseEnter ={handleShowMenu}>
                    <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md" >
                    {userData.image ? (
                    <img src={userData.image} className="w-[35px] h-[40px] rounded-full"/>
                        ) : (
                            <HiOutlineUserCircle size={30} color="rgb(255 255 255 / 83%)" />
                        )}
                    </div>
                    {showMenu && (
                        <div className='absolute right-2 bg-slate-500 text-white rounded  py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center'>
                            {
                                userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={"admin"}className='whitespace-nowrap cursor-pointer px-2'>Admin</Link>
                            }
                            
                            
                           {
                            userData.image ? (<p className="cursor-pointer text-white px-2 "onClick={handleLogout} >
                                Se déconnecter <span className="text-green-00">({userData.firstName+ " "+ userData.lastName} )</span>
                                </p> 
                            ): (
                                    < Link to={"login"} className='whitespace-nowrap  cursor-pointer px-2'>Se connecter</Link>
                            )
                           }
                            <nav className="text-base md:text-lg flex flex-col md:hidden">
                                <Link to={""} className="px-2 py-1">
                                    Accueil
                                </Link>
                                <Link
                                    to={"menu/6442d476cba400072acc8c31"}
                                    className="px-2 py-1"
                                >
                                    Menu
                                </Link>
                                <Link to={"about"} className=" px-2 py-1">
                                     À propos de nous
                                </Link>
                                <Link to={"contact"} className=" px-2 py-1">
                                    Contact
                                </Link>
                            </nav>

                        </div>
                    )}
                   
                </div>

            </div>
        </div>
            

        {/**Mobile */}
        <div className="flex flex-wrap justify-center gap-4 my-4  overflow-hidden scrollbar-none">
                    {query[0]
                    ? (recherche.map((el) => {
                        return (
                            <CardFeature
                            key={el._id}
                            id={el._id}
                            image={el.image}
                            name={el.name}
                            category={el.category}
                            price={el.price}
                            /> 
                        ) 
                        }))   
                    :  ("")
                    }
         </div>
    </header>
    
  );
}

export default Header;
