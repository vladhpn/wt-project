import { Outlet } from 'react-router';

import { Header } from '../../components/Header/Header';
import { NavBar } from '../../components/NavBar/NavBar';

const Main = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <NavBar />
        <div className="p-5 w-full h-screen bg-cl-main-bg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
