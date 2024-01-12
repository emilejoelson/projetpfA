import React, { useState } from "react";
import loginSignupImage from "./../../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../../redux/userSlice";
import { isLoggedIn } from "./Auth";
import Footer from "../../components/Footer";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()  

  const userData= useSelector(state => state)
  //console.log(userData.user)

  const dispatch= useDispatch();

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
  }
  //console.log(process.env.REACT_APP_SERVER_DOMIN)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {email,password} = data
    if(email && password ){
    //  console.log(data)
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })

      const dataRes = await fetchData.json()
     // console.log(dataRes);
      
      toast(dataRes.message);
      
      if(dataRes.alert){
        setTimeout(() => {
          dispatch(loginRedux(dataRes) )
          navigate("/")
        }, 1000);
      }
      console.log(userData)
      // Update the isLoggedIn state in local storage
      localStorage.setItem("isLoggedIn", "true");
    }
    else{
        alert("Veuillez saisir les champs !")
    }
  }
  const isMobile = window.innerWidth < 768;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {
        isMobile?
        (
          <div className="mt-[9em]">
               <div className="w-full max-w-sm bg-slate-100  flex  flex-col p-4">
                  {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
                  <div className="w-20 overflow-hidden  rounded-full drop-shadow-md shadow-md m-auto">
                    <img src={loginSignupImage} className="w-full" />
                  </div>

                  <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-[#C49A45]">Email</label>
                    <input
                      type={"email"}
                      id="email"
                      name="email"
                      className="mt-1 mb-2 w-full text-[#0A0A0A] bg-white px-2 py-1 rounded focus-within:outline-blue-300"
                      value={data.email}
                      spellCheck="false"
                      onChange={handleOnChange}

                    />

                    <label htmlFor="password" className="text-[#C49A45]">Mot de passe</label>
                    <div className="flex px-2 py-1 text-[#0A0A0A] bg-white rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className=" w-full  bg-white border-none outline-none "
                        value={data.password}
                        spellCheck="false"
                        onChange={handleOnChange}
                      />
                      <span
                        className="flex text-xl cursor-pointer"
                        onClick={handleShowPassword}
                      >
                        {showPassword ? <BiShow /> : <BiHide />}
                      </span>
                    </div>

                    <button className="w-full max-w-[150px] m-auto  bg-[#C49A45] hover:bg-[#cfa756d8] cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
                      Se connecter
                    </button>
                  </form>
                  <p className="text-left text-[#0A0A0A] text-sm mt-2">
                    Vous n'avez pas de compte ?{" "}
                    <Link to={"/singup"} onClick={scrollToTop} className="text-red-500 underline">
                      Inscrivez-vous 
                    </Link>
                  </p>
                </div>
                <Footer/>
          </div>
        )
         :
         (
          <div className="p-3 md:p-4 bg-white">
            <div className="w-full max-w-sm bg-slate-100 rounded my-[10%] ml-[35%] flex  flex-col p-4">
              {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
              <div className="w-20 overflow-hidden  rounded-full drop-shadow-md shadow-md m-auto">
                <img src={loginSignupImage} className="w-full" />
              </div>

              <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="email" className="text-[#C49A45]">Email</label>
                <input
                  type={"email"}
                  id="email"
                  name="email"
                  className="mt-1 mb-2 w-full text-[#0A0A0A] bg-white px-2 py-1 rounded focus-within:outline-blue-300"
                  value={data.email}
                  spellCheck="false"
                  onChange={handleOnChange}

                />

                <label htmlFor="password" className="text-[#C49A45]">Mot de passe</label>
                <div className="flex px-2 py-1 text-[#0A0A0A] bg-white rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className=" w-full  bg-white border-none outline-none "
                    value={data.password}
                    spellCheck="false"
                    onChange={handleOnChange}
                  />
                  <span
                    className="flex text-xl cursor-pointer"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>

                <button className="w-full max-w-[150px] m-auto  bg-[#C49A45] hover:bg-[#cfa756d8] cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
                  Se connecter
                </button>
              </form>
              <p className="text-left text-[#0A0A0A] text-sm mt-2">
                Vous n'avez pas de compte ?{" "}
                <Link to={"/singup"} className="text-red-500 underline">
                  Inscrivez-vous 
                </Link>
              </p>
            </div>
          </div>
         )
      }
    </div>
    
  )
}

export default Login