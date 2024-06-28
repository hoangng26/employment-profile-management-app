import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayoutComponent: React.FC = () => {
  return (
    <main className="lg:w-[960px] xl:w-[1180px] 2xl:w-[1440px] lg:mx-auto mt-12 mx-4">
      <Outlet />
    </main>
  );
};

export default MainLayoutComponent;
