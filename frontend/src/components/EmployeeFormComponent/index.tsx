import { positionData } from '@/core/constants/Position';
import Position from '@/core/models/Position';
import { Button, Form, FormProps, Input, Typography } from 'antd';
import React, { useEffect, useRef } from 'react';
import FormDividerComponent from './FormDividerComponent';
import PositionSectionComponent from './PositionSectionComponent';
import ToolLanguageSectionComponent from './ToolLanguageSectionComponent';

interface EmployeeFormProps {
  title: string;
}

export interface EmployeeField {
  name: string;
  positions: Position[];
}

const EmployeeFormComponent: React.FC<EmployeeFormProps> = ({ title }) => {
  const [form] = Form.useForm<EmployeeField>();
  const addPositionBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (addPositionBtnRef.current) {
      addPositionBtnRef.current!.click();
    }
  }, []);

  const formSubmitHandler: FormProps<EmployeeField>['onFinish'] = (values) => {
    console.log(values);
  };

  return (
    <>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Form
        form={form}
        name="employee-form"
        initialValues={
          {
            name: '',
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
              message: 'Please input your name',
            },
          ]}
        >
          <div className="grid grid-cols-8 mb-2">
            <Input className="col-span-7" />
          </div>
        </Form.Item>

        <>
          <Form.List name="positions">
            {(positionsFields, positionAction) => (
              <>
                {positionsFields.map((item) => (
                  <div key={item.key}>
                    {Boolean(item.name) && <FormDividerComponent />}
                    <PositionSectionComponent
                      data={item}
                      options={positionData}
                      action={positionAction}
                      showRemoveButton={positionsFields.length > 1}
                    />

                    <ToolLanguageSectionComponent positionId={item.name} formInstance={form} />
                  </div>
                ))}

                <Form.Item
                  wrapperCol={{
                    offset: 2,
                  }}
                >
                  <div className="grid grid-cols-8 gap-2">
                    <Button ref={addPositionBtnRef} type="primary" onClick={() => positionAction.add()}>
                      Add position
                    </Button>
                  </div>
                </Form.Item>
              </>
            )}
          </Form.List>
        </>

        <Form.Item
          wrapperCol={{
            offset: 2,
          }}
        >
          <div className="grid grid-cols-8 gap-2">
            <Button type="primary" danger>
              Delete
            </Button>
            <span className="col-span-5"></span>
            <Button type="text">Cancel</Button>
            <Button type="primary" htmlType="submit" className="bg-green-600 hover:bg-green-500">
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default EmployeeFormComponent;
