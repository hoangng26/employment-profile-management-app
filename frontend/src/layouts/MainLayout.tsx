import { FETCH_EMPLOYEES, FETCH_POSITION_RESOURCE, useAppDispatch } from '@/core/redux/action';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayoutComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FETCH_POSITION_RESOURCE());
    dispatch(FETCH_EMPLOYEES());
  }, []);

  return (
    <main className="lg:w-[960px] xl:w-[1180px] 2xl:w-[1440px] lg:mx-auto mt-12 mx-4">
      <Outlet />
    </main>
  );
};

export default MainLayoutComponent;
