import React, { useState } from 'react';
import { ColorModeContext, useMode } from '../theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Sidebar from './scenes/global/Sidebar';
import { Routes,Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import './../index.css';
import Manageproduct from './Manageproduct';
import Manageuser from './Manageuser';
import Dashboarda from './dashboard';
import Managechat from './Managechat';
import Managewhatsapp from './Managewhatsapp';
import Managedealdujour from './Managedealdujour';
import Manageuserlocal from './Manageuserlocal';
import Managedevis from './Managedevis';

function Admin() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
                <div className="app flex mt-0 ">
                    <div><Sidebar isSidebar={isSidebar}/></div>
                    <main className="content">
                        <div className="bg-slate-600"><Topbar setIsSidebar ={setIsSidebar}/>
                        </div>
                          <Routes>
                                <Route path="manageproduct" element={<Manageproduct />} />
                                <Route path="manageuser" element={<Manageuser />} />
                                <Route path="managechat" element={<Managechat />} />
                                <Route path="managewhatsapp" element={<Managewhatsapp />} />
                                <Route path="managedealdujour" element={<Managedealdujour />} />
                                <Route path="manageuserlocal" element={<Manageuserlocal />} />
                                <Route path="managedevis" element={<Managedevis />} />
                                <Route path="/" element={<Dashboarda />} />
                          </Routes>
                    </main>
                </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
 
  );
}

export default Admin;
