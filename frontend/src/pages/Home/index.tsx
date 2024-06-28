import EmployeeCardComponent from '@/components/EmployeeCardComponent';
import { TEST_EVENT, useAppDispatch } from '@/core/redux/action';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Typography } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(TEST_EVENT());
  }, [dispatch]);

  return (
    <>
      <Typography.Title level={2}>List employee</Typography.Title>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-0">
        <div className="col-span-3 md:col-span-4">
          <Input.Search
            className="hidden md:block"
            addonBefore="Search Name"
            placeholder="Typing..."
            allowClear
            enterButton={
              <Button type="primary">
                <SearchOutlined className="md:hidden" />
                <span className="hidden md:block">Search</span>
              </Button>
            }
          />
          <Input.Search
            className="md:hidden"
            placeholder="Typing..."
            allowClear
            enterButton={
              <Button type="primary">
                <SearchOutlined className="md:hidden" />
                <span className="hidden md:block">Search</span>
              </Button>
            }
          />
        </div>
        <span className="hidden md:block lg:col-span-3" />
        <Link to="/create">
          <Button type="primary" className="bg-green-600 hover:bg-green-500 w-full">
            <PlusOutlined className="md:hidden" />
            <span className="hidden md:block">Add Employee</span>
          </Button>
        </Link>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-16 lg:gap-4 xl:gap-16 my-16">
        {Array.from(Array(23).keys()).map((item) => (
          <li key={`porforlio-${item}`}>
            <EmployeeCardComponent />
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePageComponent;
