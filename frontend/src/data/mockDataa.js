import { useDispatch, useSelector } from "react-redux";
import { tokens } from "../theme";
import { useEffect } from "react";
import {  fetchTotalPerMonthThisYear } from "../redux/moneySlide";

const MockLineDataMonth = () => {
    const dispatch = useDispatch();
   
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
  
  
    useEffect(() => {
      dispatch(fetchTotalPerMonthThisYear());
    }, [dispatch]);
  
    const dataa = [
      {
        id: "fitifash",
        color: tokens("dark").greenAccent[500],
        data: [
          {
            x: "Jan",
            y: January,
          },
          {
            x: "Fev",
            y: February,
          },
          {
            x: "Mars",
            y: March,
          },
          {
            x: "Avril",
            y: April,
          },
          {
            x: "Mai",
            y: May,
          },
          {
            x: "Juin",
            y: June,
          },
          {
            x: "Jul",
            y: July,
          },
          {
            x: "Aout",
            y: August,
          },
          {
            x: "Sept",
            y: September,
          },
          {
            x: "Oct",
            y: October,
          },
          {
            x: "Nov",
            y: November,
          },
          {
            x: "Dec",
            y: December,
          },
        ],
      },
    ];
  
    return dataa;
  };

  export default MockLineDataMonth;