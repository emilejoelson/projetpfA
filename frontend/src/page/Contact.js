import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { tokens } from '../theme';
import {AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Footer from '../components/Footer';
import { BsCloudUpload } from 'react-icons/bs';

const Contact= () =>{

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div >
      <div className=" absolute z-30 w-[40%] rounded bg-slate-900  ml-[50%] mt-[10%] h-[90%]">
                  
             <form className='m-auto w-full max-w-md rounded shadow flex flex-col p-3 text-yellow-500 bg-slate-900' >
                        
                        <Typography 
                        variant="h1"
                        sx={{ color: colors.greenAccent[500] }}
                        >
                              Envoyer nous votre message
                        </Typography>
                  <input type={"text"}  id="name" name="name" placeholder="Nom et prénom ..." className='rounded mt-5 h-10 pl-5 w-full text-slate-300 bg-slate-500 p-1 my-1'/>
                  <input type={"text"}  id="name" name="name" placeholder="Email ..." className='rounded mt-5 h-10 pl-5 text-slate-300 bg-slate-500 p-1 my-1'   />
                  <input type={"text"} placeholder="Telephone ..." className=' rounded h-10 pl-5 mt-5 text-slate-300 bg-slate-500 p-1 my-1' name='price' />
                  <input type={"text"} placeholder="Sujet ..." className=' rounded h-10 mt-5 pl-5 text-slate-300 bg-slate-500 p-1 my-1' name='price' />
                  <textarea rows={6} placeholder="Message ..."  className='rounded  pl-5 mt-5 bg-slate-500 text-slate-300 p-1 my-1 resize-none'id="image" name='description' ></textarea>

                  <button className='rounded mt-5 bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Envoyer</button>
            </form>
      </div>
       

        <div className="  p-2 md:p-4 " 
        style={{
          backgroundImage: 'url(https://image.shutterstock.com/image-photo/ecommerce-add-cart-online-shopping-260nw-1139994800.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '200px'
        }}
       
        >
           <div className='md:flex'>
              <div className='md:w-1/2'>
                <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
                </div>
                      <div >
                          <h2 className='text-4xl md:text-7xl font-bold py-3'> 

                            <Box m="20px">
                                <Typography variant="h1" sx={{ 
                                  color: colors.greenAccent[500],
                                  fontWeight: 'bold',

                                  }}>
                                        Contactez nous 
                                  </Typography> 
                          </Box>
                        
                          
                          </h2>
                      </div>
                      
             </div>
             
          </div>
        </div>
            
            
       <div className="  w-full h-[550px] bg-gradient-to-r from-gray-900 to-gray-600  ">
            <div className="ml-[10%] py-[5%] gap-10">
                  <div className="flex gap-10">
                        <div>
                                    <AiOutlinePhone
                                          size={30}
                                          color="rgb(255 255 255 / 83%)"
                                    />
                         </div>
                         <div className="text-2xl">
                               (+212) 622 45 53 22
                        </div>
                  </div>
                  <div className="flex gap-10 py-20">
                              <div>
                                    <AiOutlineMail
                                                size={30}
                                                color="rgb(255 255 255 / 83%)"
                                    />
                              </div>
                              <div className="text-2xl">
                                    info@p2m.ma
                              </div> <br/>
                  </div>
                        <div className="flex gap-10">
                              <div>
                                    <GoLocation
                                    size={32}
                                    color="rgb(255 255 255 / 83%)"
                                    />
                              </div>
                              <div className="text-2xl pr-[70%] pl-2 ">
                              Technopark Souss Massa, 2ᵉ étage, bureau TA 213,
                                    Agadir
                              </div>
                        </div>
                        </div>
       </div>
      
            

        <div className="  bg-slate-400 w-full h-[400px] "
            style={{
                  backgroundImage: 'url(https://image.shutterstock.com/image-photo/add-cart-internet-web-store-260nw-1312249301.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height:'200px'
                 
            }}
        >
            <div className="ml-[10%] py-[5%] gap-10"
           
            >
                  Technopark  d'Agadir 
            </div>
            </div>
            
            <div>
            </div>
            <div>
                  <Footer/>
            </div>
  </div>
  );
}

export default Contact;
