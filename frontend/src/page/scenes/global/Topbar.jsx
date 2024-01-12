import React, { useEffect, useContext, useState } from 'react';
import { Box, IconButton, useTheme, List, ListItem } from '@mui/material';
import { ColorModeContext, tokens } from '../../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { fetchNotications } from '../../../redux/notificationSlide';
import { formatDistanceToNow } from 'date-fns';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';

import { fr } from 'date-fns/locale'; 
import { isMobile } from 'react-device-detect';

const Topbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [, setNotifications] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const notificationList = useSelector((state) => state.notification.notificationList);
  const [clickedNotifications, setClickedNotifications] = useState([]);

  useEffect(() => {
    dispatch(fetchNotications());
  }, [dispatch]);

  useEffect(() => {
    const newSocket = io('http://localhost:4000', {
      transports: ['websocket'],
    });

    newSocket.on('notification', (notification) => {
      setNotifications((prevNotifications) => [notification, ...prevNotifications]);
    });

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);


  const sortedNotifications = [...notificationList].sort((a, b) => b.createdAt - a.createdAt);

  const handleWhatsappClick = (telephone) => {
    if (isMobile) {
      const url = `https://wa.me/${telephone}`;
      window.open(url, '_blank');
    } else {
      const url = `https://web.whatsapp.com/send?phone=${telephone}`;
      window.open(url, '_blank');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        sx={{ overflowY: 'auto' }}
      >
      </Box>

      <Box display="flex" gap={3}>
        <IconButton onClick={() => setDropDown(!dropDown)}>
          <NotificationsOutlinedIcon style={{ fontSize: "25px" }} onClick={() => setDropDown(!dropDown)} />
          {sortedNotifications.length > 0 && (
            <div className="absolute right-1 top-1 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
              {sortedNotifications.length - clickedNotifications.length}
            </div>
          )}
        </IconButton>
        {sortedNotifications.length > 0 && (
          <div>
            {dropDown ? (
              <Box
                backgroundColor={colors.primary[400]}
                sx={{
                  position: 'absolute',
                  width: "25em",
                  right: '0',
                  top: '60px',
                  zIndex: 1,
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '5px',
                  minWidth: '200px',
                  maxHeight: '500px',
                  overflowY: 'auto',
                }}
              >
                <List>
                  {sortedNotifications.map((notification) => (
                    <ListItem
                    key={notification._id}
                    onClick={() => {
                      setClickedNotifications((prevClicked) => {
                        if (prevClicked.includes(notification._id)) {
                          return prevClicked.filter((clickedIndex) => clickedIndex !== notification._id);
                        } else {
                          return [...prevClicked, notification._id];
                        }
                      });
                      handleWhatsappClick(notification.telephone);
                    }}
                     sx={{
                      cursor: 'pointer',
                      backgroundColor: clickedNotifications.includes(notification._id) ? colors.primary[300] : colors.primary[400],
                    }}
                  >
                    <div className="flex gap-5">
                      <div className="rounded-full ">
                        <img
                          src={notification.userimage}
                          alt="User"
                          width="200px"
                          height="100px"
                          style={{
                            marginRight: '8px',
                            width: "300px",
                            height: "80px",
                            borderRadius: "100%",
                          }}
                        />
                      </div>
                      <div>
                        <scan className="font-bold">{`${notification.username} `}</scan>
                        <scan>
                          vient d'acheter {` `}
                          {`${Array.isArray(notification.productName) ? notification.productName.join(', ') : notification.productName} avec de prix unitaire  ${notification.priceUnit.join(', ')} de quantité  ${notification.quantity.join(', ')} dont le total est  ${notification.totalUnit.join(', ')} .Donc , la somme , ${notification.price} dh`}
                        </scan>
                        <br />
                        <div className="text-gray-400 font-sans" style={{ fontSize: "15px" }}>
                          {`${formatDistanceToNow(new Date(notification.paymentDate), { addSuffix: true, locale: fr })}`}
                        </div>
                      </div>
                    </div>
                  </ListItem>
                  
                  ))}
                </List>
              </Box>
            ) : null}
          </div>
        )}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
