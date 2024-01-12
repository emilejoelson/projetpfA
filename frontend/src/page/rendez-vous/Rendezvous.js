import React from 'react';
import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Rendezvous() {


    // Rendez-vous vers whatsapp
    const handleRendezWhatsapp = () => {
        const phoneNumber = "+212640623201"; // Replace this with the desired WhatsApp number
        const isMobileDevice = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
      
        if (isMobileDevice) {
          // On mobile devices, open the user's default phone app with the WhatsApp number
          const telLink = `tel:${phoneNumber}`;
          window.location.href = telLink;
        } else {
          // On non-mobile devices (PC), open WhatsApp Web with the WhatsApp number
          const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
          window.open(whatsappURL, "_blank");
        }
      };
        //Rendez-vous instagram
        const openInstagram = () => {
          const instagramPageUrl = 'https://www.instagram.com/fiti_fash/';
          window.location.href = instagramPageUrl;
        };
      //Rendez-vous sur facebook
      const openFacebookPage = () => {
        // Replace 'your_facebook_page_url' with the actual URL of the Facebook page
        const facebookPageUrl = 'https://www.facebook.com/Fitifash212';
        window.location.href = facebookPageUrl;
    };
    
  return (
    <div className="  bg-white  ">
        <div className="pt-[20em] pb-[20em] ">
                <Button
                    variant="contained"
                    style={{ width: '100px', height: '100px',
                             marginRight: '20px',
                              backgroundColor:"#0074D9"
                            }}
                    onClick={openFacebookPage}
                    
                >
                    <FacebookIcon
                        style ={{
                            fontSize : "70px"
                        }}
                    />
                </Button>
            <Button
                variant="contained"
                color="primary"
                style={{ width: '100px', height: '100px', marginRight: '20px',backgroundColor :"#ff00ff"}}
                onClick={openInstagram}
            >
                <InstagramIcon
                   style ={{
                    fontSize : "70px"
                  }}
                />
            </Button>
            <Button
                variant="contained"
                color="primary"
                style={{ width: '100px', height: '100px',backgroundColor:"#00B872" }}
                onClick={handleRendezWhatsapp}
            >
                <WhatsAppIcon
                     style ={{
                        fontSize : "70px"
                      }}
                />
            </Button>
         </div>
    </div>
  );
}

export default Rendezvous;
