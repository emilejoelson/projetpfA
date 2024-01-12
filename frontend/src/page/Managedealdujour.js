import React from 'react';
import Newproduct from './product/Newproduct';
import { Box, Button, colors, useTheme } from '@mui/material';
import { tokens } from '../theme';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Headers  from '../components/Headers';
import Newdealdujour from './product/Newdealdujour';
import Disdealdujour from './product/Disdealdujour';

function Manageproduct() {
   ///  Theme 
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
         <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers 
          
        title="GESTION DE DEAL DU JOUR" subtitle="- - - - - - - - - - - - - - " />

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
                    maxWidth: '400px',
                  }}
                >
                  <Newdealdujour/>
                </Box>
                <Box
                    gridColumn="span 2"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: '100%',
                  }}
                >
                  
                  <Box  sx={{ width: '100%',
                  }}>
                      <Disdealdujour/>
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

export default Manageproduct;
