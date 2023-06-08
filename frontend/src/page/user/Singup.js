import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import loginSignupImage from "./../../assest/login-animation.gif";
import { ImagetoBase64 } from "../../utility/ImagetoBase64";
import { toast } from "react-hot-toast";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

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

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[(!|,|?|.|;)@#$%^&*()]).{8,}$/;
    const isValid = passwordRegex.test(inputValue);

    if (inputValue === "") {
      setMessagePassword("Remplir le champ vide");
    } else if (isValid) {
      setMessagePassword("Votre mot de passe est validé");
    } else {
      setMessagePassword("Votre mot de passe n'est pas validé. Le mot de passe doit contenir au moins 8 caractères, dont au moins un chiffre, une minuscule, une majuscule et un caractère spécial.");
    }
  };

  // Validation de confirmation de mot de passe
  const handleChangeConfirmPassword = (e) => {
    const inputValue = e.target.value;
    setData(prevData => ({
      ...prevData,
      confirmPassword: inputValue
    }));

    if (inputValue === data.password) {
      setMessageConfirmPassword("Les mots de passe correspondent");
    } else {
      setMessageConfirmPassword("Les mots de passe ne correspondent pas");
    }
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

  return (
    <div className='p-3 md:p-4'>
      <div className="w-full max-w-sm bg-slate-900 rounded my-[8%] ml-[35%] flex  flex-col p-4 ">
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
          <label htmlFor="firstName">Nom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Prénom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full text-slate-300 bg-slate-500 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleChangeEmail}
          />
          <div className="text-red-500 italic">{messageEmail}</div>

          <label htmlFor="password">Mot de passe</label>
          <div className="flex px-2 py-1 text-slate-300 bg-slate-500 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-500 border-none outline-none"
              value={data.password}
              onChange={handleChangePassword}
            />
            <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <div className="text-red-500 italic">{messagePassword}</div>
          <label htmlFor="confirmPassword">Confirmation de mot de passe</label>
          <div className="flex px-2 py-1 text-slate-300 bg-slate-500 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-500 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span className="flex text-xl cursor-pointer" onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            S'inscrire
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Vous avez déjà un compte ?
          <Link to={"/login"} className="text-red-500 underline">
            Connectez-vous
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
