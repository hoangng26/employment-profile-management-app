import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayoutComponent: React.FC = () => {
  return (
    <main className="2xl:w-[1440px] lg:mx-auto">
      <Outlet />
    </main>
  );
};

export default MainLayoutComponent;
