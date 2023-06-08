import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../components/cartProduct';
import emptyCartImage from "../assest/empty.gif";
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';
import { Link, Typography } from '@mui/material';
import Footer from "../components/Footer";
import { DataArrayTwoTone } from '@mui/icons-material';
import {loadStripe} from "@stripe/stripe-js";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Cart = () => 
{
    const productCartItem= useSelector((state) =>state.product.cartItem)
    console.log(productCartItem)

    const user = useSelector(state =>state.user )
    console.log(user);
    const navigate = useNavigate();

     ///  Theme 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

   // alert("Hi Joelson")
   const totalPrice = productCartItem.reduce((acc,curr) =>acc + parseInt(curr.total),0)
   const totalQty = productCartItem.reduce((acc,curr) => acc + parseInt(curr.qty),0)

   const handlePayement = async() =>{
    //console.log("Joelson Paiement ");
    if(user.email){
        const stripePromise = await loadStripe(process.env.REACT_APP_PUBLIC_KEY);
        const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/checkoutpayement`,{
            method: "POST",
            headers  : {
                "content-type" : "application/json"
            },
            body  : JSON.stringify(productCartItem)
        })

        if(res.statusCode === 500) return;
        const data= await res.json();
        console.log(data);

        toast("Rediriger vers le paiement ! ");
        stripePromise.redirectToCheckout({sessionId : data})
    }
    else{
        toast("Vous devez vous connecter !! ");
        setTimeout(() => {
            navigate("/login")
        },1000)
    }
}

const onfacture = async () => {
    // Payment logic

    // After successful payment, navigate to the Invoice page and pass the cart data
    navigate('/facture', { state: { cartData: productCartItem } });
  };
   return (

    <>
    <div className="p-2 md:p-4">
             <Typography  variant="h2" 

                       color = {colors.grey[100]}
                       fontWeight=  "bold"
                       sx={{ m: "28px 0px 29px 0" }}
                      >
                        Votre Article de Panier
                        
                </Typography>
    <div className="bg-slate-800 p-2 flex  gap-4 w-[53%] h-[24%] ml-[23%] rounded border border-slate-300">
         <div className="font-bold ml-2">
             Produit
         </div>
         <div className="font-bold ml-2">
             Designation
         </div>
         <div className="font-bold ml-6">
             Catégory
         </div>
         <div className="font-bold ml-[6%]">
                Prix
         </div>
         <div className="font-bold ml-[7%]">
               Quantité
         </div>
         <div className="font-bold ml-[5%] text-red-400">
                Suprimer
         </div>
         <div className="font-bold ml-[6%]">
                Total
         </div>
    </div>
        {productCartItem[0] ? (
        <div className="my-4  ">
            {/* display cart items */}
            <div className="my-4 flex ml-[1%] mr-[10%]">
                
                <div className='w-full h-full '>
                
                    {productCartItem.map(el => {
                        return(
                            <CartProduct
                              key={el._id }
                              id={el._id}
                              name={el.name}
                              image= {el.image}
                              category={el.category}
                              qty ={el.qty}
                              total={el.total}
                              price={el.price}
                            />
                        )
                    })}
                    
                    
                        
                    <div className=" ml-[25%]  w-[70%]   mt-[5%]">
                            <div className="w-[40%]">
                                <Typography 
                                        variant='h2'
                                    
                                        width='1'
                                        height='40px'
                                        fontWeight='bold'
                                        color ={colors.greenAccent[500]}
                                        sx={{ p: "15px 0px 45px 0" }}
        
                                >TOTAL   : <span className="text-amber-400 ml-2">{totalPrice}{" "}</span><span className="text-red-500">dh</span>
                                    
                                </Typography>
                            </div>
                            <div className=" ml-[-60%]  mt-5">
                                    <button className="font-bold bg-[#af3f3b] w-[20%] text-slate-200 px-4 py-2 rounded"
                                            sx={{
                                            color: colors.grey[100],
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            padding: "10px 20px",
                                            }}

                                            onClick={handlePayement}
                                        >
                                            Paiement 
                                    </button>
                            </div>
                        
                          
                    </div>

                
              

            </div>
            </div>
            
                        <div className="py-4">
                                <button  onClick={onfacture} className="  bg-sky-900 py-1 mt-2 rounded hover:bg-green-400 min-w-[100px]">
                                
                                
                                    Facture
                                     
                                </button>
                        </div>
        </div>
        
        
        )
                : 
            (
                <>
                <div className="flex w-full justify-center items-center flex-col">
                  <img src={emptyCartImage} className="w-full max-w-sm"/>
                  <p className="text-slate-500 text-3xl font-bold mt-4">Article Vide</p>
                </div>
              </>
        ) }
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
}

export default Cart
