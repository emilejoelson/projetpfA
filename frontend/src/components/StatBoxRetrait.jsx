import { Box, Button,TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchTotalThisYear } from "../redux/moneySlide";
import { fetchCountPriceClientlocal, fetchCountRetrait } from "../redux/userSlice";

const StatBoxRetrait = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 const dispatch = useDispatch();
  const totalPriceThisYear = useSelector((state) => state.money.totalPriceThisYear);
  const countpriceuserlocalData = useSelector((state) => state.user.totalPrice);

  //Revenu Total 
  const revenuTotal = countpriceuserlocalData + totalPriceThisYear;

  // Retrait 
  const retraitTotal = useSelector((state) =>state.user.retraitTotal);
  console.log("Retrait total : ",retraitTotal);
 
  //Revenu net 
  const revenuNet = revenuTotal - retraitTotal;
 
  useEffect(() => {
    dispatch(fetchTotalThisYear());
    dispatch(fetchCountPriceClientlocal());
    dispatch(fetchCountRetrait())
  }, [dispatch]);

  const [data, setData] = useState({
    retrait: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { retrait } = data;
  
    if (revenuNet < 0) {
      // Display a toast if revenuNet is negative
      toast.error("Votre solde est négatif");
    } else if (retrait) {
      try {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/addretrait`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        });
  
        const fetchRes = await fetchData.json();
  
        if (fetchRes.success) {
          // Display a toast for successful request
          toast(fetchRes.message);
  
          // Reset the input value
          setData({ retrait: "" });
        } else {
          toast.error(fetchRes.message);
        }
      } catch (error) {
        console.error('Error while fetching data:', error);
        toast.error('An error occurred');
      }
    } else {
      toast("Enter the required fields");
    }
  };
  
  
  
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
            <Box display="flex" gap="10px">
                <TextField
                label="Retrait"
                variant="outlined"
                margin="normal"
                name="retrait"
                value={data.retrait}
                onChange={handleOnChange}
                sx={{
                    '& input': {
                      textAlign: 'center',
                      fontSize: '20px',
                      fontWeight:'bold'
                    },
                    width: '200px'
                  }}
                />

                <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: colors.greenAccent[600], color: 'white',height:"60px",margin: '16px'}}>
                Valider
                </Button>
                </Box>
        </form>
      </Box>
    </Box>
  );
};

export default StatBoxRetrait;
