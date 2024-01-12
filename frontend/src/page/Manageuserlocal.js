import React, { useEffect } from 'react';
import { Box, Button, colors, useTheme } from '@mui/material';
import { tokens } from '../theme';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Headers  from '../components/Headers';
import Newuserlocal from './user/Newuserlocal';
import Disuserlocal from './user/Disuserlocal';
import { useDispatch, useSelector } from 'react-redux';
import userSlice, { fetchCountPriceClientlocal, fetchUserlocals, fetchclientlocalTotal } from '../redux/userSlice';
import StatBox from '../components/StatBox';
import TrafficIcon from "@mui/icons-material/Traffic";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
function Manageuserlocal() {
  ///  Theme 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const userlocalData = useSelector((state) => state.user.userlocalList);
  const countuserlocalData = useSelector((state) => state.user.userlocalTotal);
  const countpriceuserlocalData = useSelector((state) => state.user.totalPrice);
  console.log("User Local : ",userlocalData)
  console.log("Client local total",countuserlocalData)
  console.log("Client Price local total",countpriceuserlocalData)

  useEffect(() => {
    dispatch(fetchclientlocalTotal());
    dispatch(fetchUserlocals());
    dispatch(fetchCountPriceClientlocal())
  }, [dispatch]);

 return (
   <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
       <Headers 
         
       title="GESTION DE CLIENT LOCAL" subtitle="- - - - - - - - - - - - - - " />
        <Box display="flex" justifyContent="space-between" alignItems="center" gap="25px" marginBottom="20px">
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"

            sx={{
               height:"100px"
            }}
          >
            <StatBox
              title= {countpriceuserlocalData+" dh"} 
              subtitle="Revenu local "
              progress="1"
              increase="+100%"
              icon={
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              height:"100px"
           }}
          >
            <StatBox
              title={countuserlocalData}
              subtitle="Clients local"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Box>
       <Box>
         <Button
           sx={{
             backgroundColor: colors.blueAccent[700],
             color: colors.grey[100],
             fontSize: "14px",
             fontWeight: "bold",
             padding: "10px 20px",
           }}
         >
           <DownloadOutlinedIcon sx={{ mr: "10px" }} />
           
         </Button>
       </Box>
       </Box>

        <Box 
             
              sx={{
                 height: '100%'
              }}
        >
               <Box
               display="flex"
               gridTemplateColumns="repeat(2, 1fr)"
               gridAutoRows="140px"
               gap="20px"
               >
               <Box
                   gridColumn="span 2"
                   backgroundColor={colors.primary[400]}
                   display="flex"
                   alignItems="center"
                   justifyContent="center"
                   sx={{ width: '100%',
                   position: 'relative', zIndex: 30,
                   overflowY: 'auto', 
                   maxHeight: '600px',
                   maxWidth: '700px',
                 }}
               >
                 <Newuserlocal/>
               </Box>
               <Box
                   gridColumn="span 2"
                   backgroundColor={colors.primary[400]}
                   display="flex"
                   alignItems="center"
                   justifyContent="center"
                   sx={{ width: '70%',
                 }}
               >
                 
                 <Box  sx={{ width: '100%',
                 }}>
                    <Disuserlocal/>
                 </Box>
               </Box>

           </Box>
        </Box>
       
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Headers title="- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - "
            subtitle=" &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& " />
        </Box>
   </Box>
 );
}

export default Manageuserlocal;
