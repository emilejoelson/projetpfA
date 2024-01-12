import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Headers from "../../components/Headers";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTotal, fetchTotalPerDayThisWeek, fetchTotalPerMonthThisYear, fetchTotalThisMonth, fetchTotalThisWeek, fetchTotalThisYear, fetchTotalToDay } from "../../redux/moneySlide";
import { fetchContacts, fetchcontactTotal } from "../../redux/contactSlice";
import { fetchCountPriceClientlocal, fetchCountRetrait, fetchclientTotal } from "../../redux/userSlice";
import LineCharta from "../../components/LineCharta";
import { Link } from 'react-router-dom';
import StatBoxRetrait from "../../components/StatBoxRetrait";
import toast from "react-hot-toast";



const Dashboarda = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
 // const totalPrice = useSelector((state) => state.money.totalPrice);
  const totalPriceToDay = useSelector((state) => state.money.totalPriceToDay);
  const totalPriceThisWeek = useSelector((state) => state.money.totalPriceThisWeek);
  const totalPriceThisMonth = useSelector((state) => state.money.totalPriceThisMonth);
  const totalQuantity = useSelector((state) => state.money.totalQuantity);
  const totalContact = useSelector((state) => state.contact.contactTotal);
  const totalClient = useSelector((state) => state.user.clientTotal);
  const totalPriceThisYear = useSelector((state) => state.money.totalPriceThisYear);
  const countpriceuserlocalData = useSelector((state) => state.user.totalPrice);

  //Revenu Total 
  const revenuTotal = countpriceuserlocalData + totalPriceThisYear;

  // Retrait 
  const retraitTotal = useSelector((state) =>state.user.retraitTotal);
  console.log("Retrait total : ",retraitTotal);
 
  //Revenu net 
 const revenuNet = Math.max(revenuTotal - retraitTotal, 0);
  
  //Calcul this year
 const totalPrice = totalPriceThisYear  ;
  // Le jour dans une semaine
  const Monday = useSelector((state) => state.money.Monday);
  const Tuesday = useSelector((state) => state.money.Tuesday);
  const Wednesday = useSelector((state) => state.money.Wednesday);
  const Thursday = useSelector((state) => state.money.Thursday);
  const Friday = useSelector((state) => state.money.Friday);
  const Saturday = useSelector((state) => state.money.Saturday);
  const Sunday = useSelector((state) => state.money.Sunday);

  // Le mois dans une année
  const January = useSelector((state) => state.money.January);
  const February = useSelector((state) => state.money.February);
  const March = useSelector((state) => state.money.March);
  const April = useSelector((state) => state.money.April);
  const May = useSelector((state) => state.money.May);
  const June = useSelector((state) => state.money.June);
  const July = useSelector((state) => state.money.July);
  const August = useSelector((state) => state.money.August);
  const September = useSelector((state) => state.money.September);
  const October = useSelector((state) => state.money.October);
  const November = useSelector((state) => state.money.November);
  const December = useSelector((state) => state.money.December);

  
  // Get the maximum value
  const maxValueA = Math.max(
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  );

  const maxValueB = Math.max(
    January,
      February,
      March,
      April,
      May,
      June,
      July,
      August,
      September,
      October,
      November,
      December
  );

  // Get the minimum value
  const minValueA= Math.min(
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  );

  const minValueB = Math.min(
    January,
      February,
      March,
      April,
      May,
      June,
      July,
      August,
      September,
      October,
      November,
      December
  );

  //Calcul de la moyenne
  const averageA = Math.floor((Monday + Tuesday + Wednesday + Thursday + Friday + Saturday + Sunday) / 7);
  const averageB = Math.floor((January + February + March + April + May + June + July + August + September + October + November + December)/12);

  console.log("Total Money : " + totalPrice)
  console.log("Total Quantity : " + totalQuantity)
  console.log("Total Contact : " + totalContact)
  console.log("Total Client : " + totalClient)
  console.log("Total Money Today : " + totalPriceToDay)
  console.log("Total Money ThisWeek : " + totalPriceThisWeek)
  console.log("Total Money ThisMonth : " + totalPriceThisMonth)
  console.log("Total Money ThisYear : " + totalPriceThisYear)

  console.log("Total Money This Monday  : " + Monday)
  console.log("Total Money This Tuesday  : " + Tuesday)
  console.log("Total Money This Wednesday  : " + Wednesday)
  console.log("Total Money This Thursday  : " + Thursday)
  console.log("Total Money This Friday  : " + Friday)
  console.log("Total Money This Suturday  : " + Saturday)
  console.log("Total Money This Sunday  : " + Sunday)
   
  console.log("- -----------------------------------------------");
  console.log("Valeur Maximun du revenu journalier dans une semaine  : "+maxValueA);
  console.log("Valeur Minimun du revenu journalier dans une semaine  : "+minValueA);
  console.log("Valeur de la moyen du revenu journalier dans une semaine : "+averageA);
 
   
     
   console.log("---------------------------- : ");
    console.log("January : "+January);
    console.log("February : "+February);
    console.log("March : "+March);
    console.log("April : "+April);
    console.log("May : "+May);
    console.log("June : "+June);
    console.log("July : "+July);
    console.log("August : "+August);
    console.log("September : "+September);
    console.log("October : "+October);
    console.log("November : "+November);
    console.log("December : "+December);

  useEffect(() => {
    dispatch(fetchTotal());
    dispatch(fetchTotalToDay());
    dispatch(fetchTotalThisWeek());
    dispatch(fetchTotalPerDayThisWeek());
    dispatch(fetchTotalPerMonthThisYear());
    dispatch(fetchTotalThisMonth());
    dispatch(fetchTotalThisYear());
    dispatch(fetchcontactTotal());
    dispatch(fetchclientTotal());
    dispatch(fetchCountPriceClientlocal());
    dispatch(fetchCountRetrait())
  }, [dispatch]);


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="TABLEAU DE BORD " subtitle="- - - - - - - - - - - - - - - - - - - -" />
        
        <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx = {{
                height:"100px",
                marginBottom:"50px",
                borderRadius: "20px"
              }}
            >
              <StatBoxRetrait
                subtitle="RETRAIT NORMAL "
              />
            </Box>
            
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx = {{
                height:"100px",
                marginBottom:"50px",
                borderRadius: "20px"
              }}
            >
              <StatBox
                title= {revenuNet+ " dh"} 
                subtitle="SOLDE "
                progress="1"
                increase="+100%"
                icon={
                  <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
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

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        {/* Use the Link component to navigate to the desired URL */}
        <Link to="/admin/managewhatsapp">
            <StatBox
              title={totalContact}
              subtitle="Contact récus"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Link>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title= {countpriceuserlocalData+ " dh"} 
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
        >
          <StatBox
            title={totalClient}
            subtitle="Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
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
        >
          <StatBox
            title= {revenuTotal+ " dh"} 
            subtitle="Revenu Total"
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
        >
          <StatBox
            title= {totalPriceThisYear + " dh"}
            subtitle="Revenu Annuel"
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
        >
          <StatBox
            title= {totalPriceThisMonth + " dh"}
            subtitle="Revenu Mensuel"
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
        >
          <StatBox
            title= { totalPriceThisWeek +" dh"}
            subtitle="Revenu Hebdomadaire"
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
        >
          <StatBox
            title= {totalPriceToDay+ " dh"}
            subtitle="Revenu Journalier"
            progress="1"
            increase="+100%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}

        <Box
          gridColumn="span 5"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          
        >  <br/>
          <Headers title="REVENU JOURNALIER HEBDOMADAIRE " subtitle="- - - - - - - - - - - - - - - - - - - -" />
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenu Maximum
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                 {maxValueA + " dh "}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenu Minimum
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                 {minValueA + " dh "}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Valeur Moyenne 
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                 {averageA + " dh "}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} /> 
          </Box>
        </Box>
        <Box
          gridColumn="span 7"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          
        >  <br/>
          <Headers title="REVENU MENSUEL ANNUEL " subtitle="- - - - - - - - - - - - - - - - - - - -" />
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenu Maximum
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                 {maxValueB + " dh "}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenu Minimum
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                 {minValueB + " dh "}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Valeur Moyenne 
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                 {averageB + " dh "}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineCharta isDashboard={true} /> 
          </Box>
        </Box>
        
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
             <Headers title="- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - "
             subtitle=" &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& " />
         </Box>
    </Box>
  );
};

export default Dashboarda;
