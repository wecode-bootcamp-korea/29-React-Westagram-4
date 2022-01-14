import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainSumin from './pages/Sumin/Main/Main';
import LoginSumin from './pages/Sumin/Login/Login';
import MainHwajong from './pages/Hwajong/Main/Main';
import MainJieun from './pages/Jieun/Main/Main';
import LoginJieun from './pages/Jieun/Login/Login';
import MainPkw from './pages/Pkw/Main/Main';
import LoginPkw from './pages/Pkw/Login/Login';
import LoginHwajong from './pages/Hwajong/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/Main" element={<MainSumin />} />
        <Route path="/Login" element={<LoginSumin />} /> */}

        <Route path="/Hwajong" element={<LoginHwajong />} />
        {/* <Route path="/Hwajong" element={<MainHwajong />} />

        <Route path="/Jieun" element={<LoginJieun />} />
        <Route path="/Jieun" element={<MainJieun />} />

        <Route path="/Pkw" element={<LoginPkw />} />
        <Route path="/Pkw" element={<MainPkw />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
