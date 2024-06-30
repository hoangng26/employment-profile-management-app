import { Employee } from '@/core/models/Employee';
import { Form, FormProps, Input, Typography } from 'antd';
import React from 'react';

interface EmployeeFormProps {
  type: 'Create' | 'Edit';
  employee?: Employee;
}

interface EmployeeField {
  name: string;
  positions: {
    id?: number;
  }[];
}

const TestForm: React.FC<EmployeeFormProps> = ({ type }) => {
  const [form] = Form.useForm<EmployeeField>();
  const positionsValue = Form.useWatch('positions', form);

  const formSubmitHandler: FormProps<EmployeeField>['onFinish'] = (values) => {
    console.log(values);
  };

  return (
    <>
      <Typography.Title level={2}>{`${type} employee profile`}</Typography.Title>
      <Form
        form={form}
        name="employee-form"
        initialValues={
          {
            name: 'Hoang',
            positions: [
              {
                id: undefined,
              },
            ],
          } as EmployeeField
        }
        onFinish={formSubmitHandler}
      >
        <Form.Item<EmployeeField>
          label="Name"
          name="name"
          labelCol={{
            md: { span: 5 },
            lg: { span: 4 },
          }}
          labelAlign="left"
          rules={[
            {
              required: true,
              message: 'Please input your name',
            },
          ]}
        >
          {/* <FormWrapperComponent className="mb-2"> */}
          <Input className="col-span-7" />
          {/* </FormWrapperComponent> */}
        </Form.Item>
      </Form>
    </>
  );
};

export default TestForm;
