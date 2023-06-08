import logo from "./logo.svg";
import './App.css';
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
 import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import Admin from "./page/Admin";

//////////////////////

function App() {
   const dispatch = useDispatch()
    const productData = useSelector((state)=>state.product)
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getproduct`)
      const resData = await res.json()
     // console.log(resData)
      dispatch(setDataProduct(resData))
    })()
  },[])
  //console.log(productData)
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  ///////////////////////////////////////////
  return (
    
    < >
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <Toaster />
      <CssBaseline />
      <div className="App">
        <Header />
        <main className="pt-16  min-h-[calc(100vh)]">
          <Outlet
           />
        </main>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  );
}

export default App;
