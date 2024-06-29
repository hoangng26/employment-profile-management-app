import EmployeeCardComponent from '@/components/EmployeeCardComponent';
import { Employee } from '@/core/models/Employee';
import { useAppState } from '@/core/redux/action';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Skeleton, Typography } from 'antd';
import { SearchProps } from 'antd/es/input';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';

const HomePageComponent: React.FC = () => {
  const { employees } = useAppState();
  const [displayedEmployees, setDisplayedEmployees] = useState<Employee[]>([]);

  const searchInputHandler: SearchProps['onSearch'] = (value, _event, info) => {
    if (!info) {
      return;
    }

    if (info.source === 'clear') {
      initialDisplayEmployee();
      return;
    } else if (value === '' && displayedEmployees.length === employees.length) {
      return;
    }
    filterDisplayedEmployees(value);
  };

  const filterDisplayedEmployees = (value: string) => {
    const filterEmployees = employees.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setDisplayedEmployees(filterEmployees);
  };

  const loadMoreEmployeeHandler = async () => {
    if (displayedEmployees.length < employees.length) {
      await setDisplayedEmployees((prevState) =>
        prevState.concat(employees.slice(prevState.length, prevState.length + 4)),
      );
    }
  };

  const initialDisplayEmployee = () => {
    setDisplayedEmployees(employees.slice(0, 12));
  };

  useEffect(() => {
    initialDisplayEmployee();
  }, [employees]);

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
                <span className="hidden md:block">Search</span>
              </Button>
            }
            onSearch={searchInputHandler}
          />
          <Input.Search
            className="md:hidden"
            placeholder="Typing..."
            allowClear
            enterButton={
              <Button type="primary">
                <SearchOutlined className="md:hidden" />
              </Button>
            }
            onSearch={searchInputHandler}
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

      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreEmployeeHandler}
        hasMore={displayedEmployees.length < employees.length}
        loader={<Skeleton key="loading-key" />}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-16 lg:gap-4 xl:gap-16 my-16">
          {displayedEmployees.map((item) => (
            <EmployeeCardComponent key={`portfolio-${item.id}`} employee={item} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default HomePageComponent;
