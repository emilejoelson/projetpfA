import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import loginSignupImage from "./../../assest/login-animation.gif";
import { ImagetoBase64 } from "../../utility/ImagetoBase64";
import { toast } from "react-hot-toast";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Footer from "../../components/Footer";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [messageConfirmPassword, setMessageConfirmPassword] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: ""
  });

  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  /// Validation de l'email
  const handleChangeEmail = (e) => {
    const inputValue = e.target.value;
    setData(prevData => ({
      ...prevData,
      email: inputValue
    }));

    const emailRegex = /^[a-zA-Z0-9._]+@(gmail\.com|edu\.uiz\.ac\.ma)$/;
    const isValid = emailRegex.test(inputValue);

    if (inputValue === "") {
      setMessageEmail("Remplir le champ vide");
    } else if (isValid) {
      setMessageEmail("L'email est validé");
    } else {
      setMessageEmail("L'email n'est pas validé");
    }
  };

  // Validation de mot de passe
  const handleChangePassword = (e) => {
    const inputValue = e.target.value;
    setData(prevData => ({
      ...prevData,
      password: inputValue
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, email, password, confirmPassword } = data;

    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        });

        const dataRes = await fetchData.json();
        toast(dataRes.message);
        setData(() => {
          return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            image: ""
          };
        });
      } else {
        alert("Mot de passe et confirmation non identique");
      }
    } else {
      alert("Remplir le champ vide");
    }
  };

  const handleUploadProfileImage = async (e) => {
    const imageData = await ImagetoBase64(e.target.files[0]);

    setData(prevData => ({
      ...prevData,
      image: imageData
    }));
  };
  const isMobile = window.innerWidth < 768;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
    {
      isMobile ?
      (
        <div className="mt-[9em] ">
           <div className="w-full max-w-sm bg-slate-100  flex  flex-col p-4 ">
              <div className="w-20 h-20 overflow-hidden rounded-full   m-auto relative ">
                <img src={data.image ? data.image : loginSignupImage} className="w-full h-full" />

                <label htmlFor="profileImage">
                  <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                    <DriveFolderUploadIcon />
                  </div>
                  <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage} />
                </label>
              </div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="firstName" className="text-[#C49A45]">Nom</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 mb-2 w-full text-[#0A0A0A] bg-white px-2 py-1 rounded focus-within:outline-blue-300"
                  value={data.firstName}
                  onChange={handleOnChange}
                />

                <label htmlFor="lastName" className="text-[#C49A45]">Prénom</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 mb-2 w-full text-[#0A0A0A] bg-white px-2 py-1 rounded focus-within:outline-blue-300"
                  value={data.lastName}
                  onChange={handleOnChange}
                />

                <label htmlFor="email" className="text-[#C49A45]">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 mb-2 w-full text-[#0A0A0A] bg-white px-2 py-1 rounded focus-within:outline-blue-300"
                  value={data.email}
                  onChange={handleChangeEmail}
                />
                <div className="text-red-500 italic">{messageEmail}</div>

                <label htmlFor="password" className="text-[#C49A45]">Mot de passe</label>
                <div className="flex px-2 py-1 text-[#0A0A0A] bg-white rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-full  bg-white border-none outline-none"
                    value={data.password}
                    onChange={handleChangePassword}
                  />
                  <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>
                    {showPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>
                <div className="text-red-500 italic">{messagePassword}</div>
                <label htmlFor="confirmPassword" className="text-[#C49A45]">Confirmation de mot de passe</label>
                <div className="flex px-2 py-1 text-[#0A0A0A] bg-whiterounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full  bg-white border-none outline-none"
                    value={data.confirmPassword}
                    onChange={handleOnChange}
                  />
                  <span className="flex text-xl cursor-pointer" onClick={handleShowConfirmPassword}>
                    {showConfirmPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>

                <button className="w-full max-w-[150px] m-auto  bg-[#C49A45] hover:bg-[#cfa756d8] cursor-pointer text- text-xl font-medium text-center py-1 rounded-full mt-4">
                  S'inscrire
                </button>
              </form>
              <p className="text-left text-sm mt-2 text-[#0A0A0A]">
                Vous avez déjà un compte ?
                <Link to={"/login"} onClick={scrollToTop} className="text-red-500  underline">
                  Connectez-vous
                </Link>
              </p>
            </div>
            <Footer/>
        </div>
      )
       :
       (
      <div className='p-3 bg-white md:p-4'>
      <div className="w-full max-w-sm bg-slate-100 rounded my-[8%] ml-[35%] flex  flex-col p-4 ">
        <div className="w-20 h-20 overflow-hidden rounded-full   m-auto relative ">
          <img src={data.image ? data.image : loginSignupImage} className="w-full h-full" />

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <DriveFolderUploadIcon />
            </div>
            <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage} />
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="text-[#C49A45]">Nom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full text-[#0A0A0A] bg-white px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName" className="text-[#C49A45]">Prénom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full text-[#0A0A0A] bg-white px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email" className="text-[#C49A45]">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full text-[#0A0A0A] bg-white px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleChangeEmail}
          />
          <div className="text-red-500 italic">{messageEmail}</div>

          <label htmlFor="password" className="text-[#C49A45]">Mot de passe</label>
          <div className="flex px-2 py-1 text-[#0A0A0A] bg-white rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full  bg-white border-none outline-none"
              value={data.password}
              onChange={handleChangePassword}
            />
            <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <div className="text-red-500 italic">{messagePassword}</div>
          <label htmlFor="confirmPassword" className="text-[#C49A45]">Confirmation de mot de passe</label>
          <div className="flex px-2 py-1 text-[#0A0A0A] bg-whiterounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full  bg-white border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span className="flex text-xl cursor-pointer" onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto  bg-[#C49A45] hover:bg-[#cfa756d8] cursor-pointer text- text-xl font-medium text-center py-1 rounded-full mt-4">
            S'inscrire
          </button>
        </form>
        <p className="text-left text-sm mt-2 text-[#0A0A0A]">
          Vous avez déjà un compte ?
          <Link to={"/login"} className="text-red-500  underline">
            Connectez-vous
          </Link>
        </p>
      </div>
      </div>
       )
    }
      
    </div>
  );
};

export default Signup;
