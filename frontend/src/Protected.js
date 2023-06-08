import {  useEffect } from "react";
import {  useNavigate } from 'react-router-dom';


function Protected(props) {
    const Cmp = props.Cmp

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  
  return (
    <>
        <Cmp />
    </>
  );

}
export default Protected;