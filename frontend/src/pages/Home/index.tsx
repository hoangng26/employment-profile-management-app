import { TEST_EVENT, useAppDispatch } from '@/core/redux/action';
import { Button } from 'antd';
import React, { useEffect } from 'react';

const HomePageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(TEST_EVENT());
  }, [dispatch]);

  return (
    <div>
      <Button>HomePageComponent</Button>
    </div>
  );
};

export default HomePageComponent;
