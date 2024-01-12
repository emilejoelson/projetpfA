import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import { Grid } from '@mui/material';

const Whatsappdevis = ({ fullname, email, telephone, ville,service, message, icon, loading }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const circleStyle = {
    width: '175px',
    height: '175px',
    borderRadius: '50%',
    backgroundColor: colors.primary[700],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box>
      {fullname ? (
        <Box width="100%" m="0 30px">
          <Box display="flex" justifyContent="space-between">
            <Box sx={{ ...circleStyle, '@media (max-width: 600px)': { width: '150px', height: '150px' } }}>
              <Typography variant="h2" fontWeight="bold" sx={{ color: colors.grey[100], textAlign: 'center' }}>
                {icon}
              </Typography>
              <Typography variant="h6" fontWeight="bold" sx={{ color: colors.grey[100], textAlign: 'center' }}>
                {fullname}
              </Typography>
              <Typography variant="h6" fontWeight="bold" sx={{ color: colors.grey[100], textAlign: 'center' }}>
                {email}
              </Typography>
              <Typography variant="h6" fontWeight="bold" sx={{ color: colors.grey[100], textAlign: 'center' }}>
                {ville}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between" mt="2px">
            <Typography variant="h6" sx={{ color: colors.greenAccent[500], textAlign: 'center', margin: '0 auto' }}>
              {telephone}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mt="2px">
            <Typography
              variant="h6"
              fontStyle="italic"
              sx={{
                color: colors.greenAccent[500],
                textAlign: 'center',
                margin: '0 auto',
                '@media (max-width: 600px)': { fontSize: '14px' },
              }}
            >
              <Typography variant="h4" sx={{ color: 'white' }}>Service</Typography>
              <Box>{service}</Box>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mt="2px">
            <Typography
              variant="h6"
              fontStyle="italic"
              sx={{
                color: colors.greenAccent[600],
                textAlign: 'center',
                margin: '0 auto',
                '@media (max-width: 600px)': { fontSize: '14px' },
              }}
            >
              <Typography variant="h4" sx={{ color: 'white' }}>Message</Typography>
              <Box className="bg-slate-900 w-[220px] h-[70px] rounded" sx={{ overflow: 'auto', border: '1px solid white' }}>
                <Grid container sx={{ height: '100%', wordWrap: 'break-word', overflowWrap: 'break-word', maxHeight: '70px' }}>
                  <Grid item xs={12}>
                    {message}
                  </Grid>
                </Grid>
              </Box>
            </Typography>
          </Box>
        </Box>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </Box>
  );
};

export default Whatsappdevis;
