// auth.js



export const login = (loginData) => {

    localStorage.setItem('userDat', JSON.stringify(loginData));
  };
  
  export const logout = () => {
    localStorage.removeItem('loginInfo');
  };
  
  export const isLoggedIn = () => {
    const loginInfo = localStorage.getItem('userDat');
    return loginInfo !== null;
  };
  