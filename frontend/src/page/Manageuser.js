import React from 'react';
import Dispuser from './user/Dispuser';
import { Box, Button, colors, useTheme } from '@mui/material';
import Headers  from '../components/Headers';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from '../theme';
function Manageuser() {
    ///  Theme 
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
         <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers
          
        title="GESTION DES UTILISATEURS " subtitle="- - - - - - - - - - - - - - " />

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
                  }}
                >
                  
                  <Box  sx={{ width: '100%',
                  }}>
                      <Dispuser/>
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

export default Manageuser;
