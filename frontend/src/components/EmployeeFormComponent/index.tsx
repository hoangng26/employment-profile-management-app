import Position from '@/core/models/Position';
import { Button, Form, FormProps, Input, Typography } from 'antd';
import React from 'react';
import PositionSectionComponent from './PositionSectionComponent';

interface EmployeeFormProps {
  title: string;
}

interface EmployeeField {
  name: string;
  positions: Position[];
}

const EmployeeFormComponent: React.FC<EmployeeFormProps> = ({ title }) => {
  const formSubmitHandler: FormProps<EmployeeField>['onFinish'] = (values) => {
    console.log(values);
  };

  return (
    <>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Form
        name="employee-form"
        initialValues={
          {
            name: '',
            positions: [
              {
                name: '',
                toolLanguages: [
                  {
                    name: '',
                  },
                ],
              },
            ],
          } as EmployeeField
        }
        onFinish={formSubmitHandler}
        autoComplete="off"
      >
        <Form.Item<EmployeeField>
          label="Name"
          name="name"
          labelCol={{ span: 2 }}
          labelAlign="left"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <div className="grid grid-cols-8">
            <Input className="col-span-7" />
          </div>
        </Form.Item>

        <PositionSectionComponent />

        <Form.Item
          wrapperCol={{
            offset: 2,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className="bg-green-600 hover:bg-green-500">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EmployeeFormComponent;
