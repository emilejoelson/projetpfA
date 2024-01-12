import React, { useEffect } from 'react';
import { Box, Button, useTheme, Grid, useMediaQuery } from '@mui/material';
import Headers from '../components/Headers';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { tokens } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { isMobile } from 'react-device-detect';
import { fetchDevis } from '../redux/deviSlide';
import Whatsappdevis from './devis/Whatsappdevis';

SwiperCore.use([Pagination, Navigation]);

function Managedevis() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const devisData = useSelector((state) => state.devis.devisList);
  
  useEffect(() => {
    dispatch(fetchDevis());
  }, [dispatch]);

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md')); // Use the breakpoint for large screens

  const handleWhatsappClick = (telephone) => {
    if (isMobile) {
      // Open WhatsApp on iPhone
      const url = `https://wa.me/${telephone}`;
      window.open(url, '_blank');
    } else {
      // Open WhatsApp Web on PC
      const url = `https://web.whatsapp.com/send?phone=${telephone}`;
      window.open(url, '_blank');
    }
  };

  return (
    <Box m="20px" sx={{ height: "100%",width :"96%"}}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="GESTION DE DEVIS SUR WHATSAPP" subtitle="- - - - - - - - - - - - - - " />
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
            Download
          </Button>
        </Box>
      </Box>

      <Grid container justifyContent="center" sx={{ width :"100%"}}>
        <Swiper
          spaceBetween={10}
          slidesPerView={isMobile ? 1 : isLargeScreen ? 4 : 2} // Show 1 slide on mobile, 4 slides on large screens, and 2 slides on medium screens
          pagination={{ clickable: true }}
          navigation
          style={{ width: "100%", height: "380px" }}
        >
          {devisData.map((devis) => (
            <SwiperSlide key={devis._id}>
              <Box
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%" // Set the width to fill the swiper container
                height="365px"
                className="rounded"
                onClick={() => handleWhatsappClick(devis.telephone)} // Add the click handler here
                sx={{ cursor: 'pointer' }}
              >
                <Whatsappdevis
                  fullname={devis.fullname}
                  email={devis.email}
                  telephone={devis.telephone}
                  ville={devis.ville}
                  service={devis.service}
                  message={devis.message}
                  icon={
                    <PersonAddIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "36px" }}
                    />
                  }
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Box display="flex" justifyContent="space-between" alignItems="center"
          sx={{
            borderBottom: `1px solid ${colors.grey[600]}`,
            marginBottom: "10px", // Add margin to the bottom of the horizontal line if needed
            paddingBottom: "10px" // Add padding to the bottom of the Box if needed
          }}
      >
        <Headers
          title="- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
          subtitle=" &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"
        />
      </Box>
    </Box>
  );
}

export default Managedevis;
