import EmployeeCardComponent from '@/components/EmployeeCardComponent';
import { TEST_EVENT, useAppDispatch } from '@/core/redux/action';
import { Button, Form, Input, Typography } from 'antd';
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
      <div className="grid grid-cols-8">
        <Form className="col-span-3">
          <Form.Item label="Search Name">
            <Input.Search placeholder="Enter employee name..." allowClear enterButton="Search" />
          </Form.Item>
        </Form>
        <span className="col-span-4" />
        <Link to="/create">
          <Button type="primary" className="bg-green-600 hover:bg-green-500 w-full">
            Add Employee
          </Button>
        </Link>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array.from(Array(20).keys()).map((item) => (
          <li key={`porforlio-${item}`}>
            <EmployeeCardComponent />
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePageComponent;
