import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    totalQuantity: 0,
    totalPriceToDay: 0,
    totalPriceThisWeek :0,
    totalPriceThisMonth:0,
    totalPriceThisYear:0,

    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,

    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,

    isLoading: false,
    error: null,
  }; 
  
const moneySlide = createSlice({
  name: 'money',
  initialState,
  reducers: {
    updateTotalRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateTotalSuccess: (state, action) => {
      state.totalPrice = action.payload.totalPrice;
      state.totalQuantity = action.payload.totalQuantity;
      state.isLoading = false;
      state.error = null;
    },
    updateTotalToDaySuccess: (state, action) => {
      state.totalPriceToDay = action.payload.totalPriceToDay;
    },
    updateTotalThisWeekSuccess: (state, action) => {
      state.totalPriceThisWeek = action.payload.totalPriceThisWeek;
    },
    updateTotalPerDayThisWeekSuccess: (state, action) => {
      state.Monday = action.payload.Monday;
      state.Tuesday = action.payload.Tuesday;
      state.Wednesday = action.payload.Wednesday;
      state.Thursday = action.payload.Thursday;
      state.Friday = action.payload.Friday;
      state.Saturday = action.payload.Saturday;
      state.Sunday = action.payload.Sunday;
    },
    
    updateTotalPerMonthThisYearSuccess: (state, action) => {
      state.January = action.payload.January;
      state.February = action.payload.February;
      state.March = action.payload.March;
      state.April = action.payload.April;
      state.May = action.payload.May;
      state.June = action.payload.June;
      state.July = action.payload.July;
      state.August = action.payload.August;
      state.September = action.payload.September;
      state.October = action.payload.October;
      state.November = action.payload.November;
      state.December = action.payload.December;

    },
    updateTotalThisMonthSuccess: (state, action) => {
      state.totalPriceThisMonth = action.payload.totalPriceThisMonth;
    },
    updateTotalThisYearSuccess: (state, action) => {
      state.totalPriceThisYear = action.payload.totalPriceThisYear;
    },
    updateTotalFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  updateTotalRequest,
  updateTotalSuccess,
  updateTotalToDaySuccess,
  updateTotalThisWeekSuccess,
  updateTotalPerDayThisWeekSuccess,
  updateTotalPerMonthThisYearSuccess,
  updateTotalThisMonthSuccess,
  updateTotalThisYearSuccess,
  updateTotalFailure,
} = moneySlide.actions;

export const fetchTotal = () => async (dispatch) => {
  dispatch(updateTotalRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/updateTotal`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch total');
    }

    const data = await response.json();
    dispatch(updateTotalSuccess(data));
  } catch (error) {
    dispatch(updateTotalFailure({ error: error.message }));
  }
};

export const fetchTotalToDay = () => async (dispatch) => {
  dispatch(updateTotalRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getsumofpricetoday`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch total');
    }

    const data = await response.json();
    dispatch(updateTotalToDaySuccess(data));
  } catch (error) {
    dispatch(updateTotalFailure({ error: error.message }));
  }
};

export const fetchTotalThisWeek = () => async (dispatch) => {
  dispatch(updateTotalRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getsumofpricethisweek`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch total');
    }

    const data = await response.json();
    dispatch(updateTotalThisWeekSuccess(data));
  } catch (error) {
    dispatch(updateTotalFailure({ error: error.message }));
  }
};

export const fetchTotalPerDayThisWeek = () => async (dispatch) => {
  dispatch(updateTotalRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getsumofpricesperdaythisweek`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch total');
    }

    const data = await response.json();
    dispatch(updateTotalPerDayThisWeekSuccess(data));
  } catch (error) {
    dispatch(updateTotalFailure({ error: error.message }));
  }
};

export const fetchTotalPerMonthThisYear = () => async (dispatch) => {
  dispatch(updateTotalRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getsumofpricespermonththisyear`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch total');
    }

    const data = await response.json();
    dispatch(updateTotalPerMonthThisYearSuccess(data));
  } catch (error) {
    dispatch(updateTotalFailure({ error: error.message }));
  }
};
export const fetchTotalThisMonth = () => async (dispatch) => {
  dispatch(updateTotalRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getsumofpricethismonth`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch total');
    }

    const data = await response.json();
    dispatch(updateTotalThisMonthSuccess(data));
  } catch (error) {
    dispatch(updateTotalFailure({ error: error.message }));
  }
};

export const fetchTotalThisYear = () => async (dispatch) => {
  dispatch(updateTotalRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/getsumofpricethisyear`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch total');
    }

    const data = await response.json();
    dispatch(updateTotalThisYearSuccess(data));
  } catch (error) {
    dispatch(updateTotalFailure({ error: error.message }));
  }
};

export default moneySlide.reducer;
