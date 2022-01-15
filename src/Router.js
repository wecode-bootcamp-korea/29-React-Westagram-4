import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';

import MainSumin from './pages/Sumin/Main/Main';
import LoginSumin from './pages/Sumin/Login/Login';
import MainJieun from './pages/Jieun/Main/Main';
import LoginJieun from './pages/Jieun/Login/Login';
import MainPkw from './pages/Pkw/Main/Main';
import LoginPkw from './pages/Pkw/Login/Login';
import LoginHwajong from './pages/Hwajong/Login/Login';
import MainHwajong from './pages/Hwajong/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <Route path="/sumin" element={<LoginSumin />} />
        <Route path="/sumin-main" element={<MainSumin />} /> */}
      <Routes>
        <Route path="/hwajong" element={<LoginHwajong />} />
        {/* <Route path="/hwajong-main" element={<MainHwajong />} /> */}

        {/* <Route path="/jieun" element={<LoginJieun />} />
        <Route path="/jieun-main" element={<MainJieun />} /> */}

        {/* <Route path="/pkw" element={<LoginPkw />} />
        <Route path="/pkw-main" element={<MainPkw />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
