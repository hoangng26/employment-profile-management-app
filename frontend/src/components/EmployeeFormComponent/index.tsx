import { positionData } from '@/core/constants/Position';
import Position from '@/core/models/Position';
import { Button, Form, FormProps, Input, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import FormDividerComponent from './FormDividerComponent';
import FormWrapperComponent from './FormWrapperComponent';
import PositionSectionComponent from './PositionSectionComponent';
import ToolLanguageSectionComponent from './ToolLanguageSectionComponent';

interface EmployeeFormProps {
  type: 'Create' | 'Edit';
}

export interface EmployeeField {
  name: string;
  positions: Position[];
}

const EmployeeFormComponent: React.FC<EmployeeFormProps> = ({ type }) => {
  const [form] = Form.useForm<EmployeeField>();
  const positionsValue = Form.useWatch('positions', form);
  const addPositionBtnRef = useRef<HTMLButtonElement>(null);
  const [displayedPosition, setDisplayedPosition] = useState(positionData);

  const formSubmitHandler: FormProps<EmployeeField>['onFinish'] = (values) => {
    console.log(values);
  };

  useEffect(() => {
    if (addPositionBtnRef.current) {
      addPositionBtnRef.current!.click();
    }
  }, []);

  useEffect(() => {
    if (!positionsValue || !positionsValue[0]) {
      return;
    }
    const isInSelectedPositions = (name: string) => positionsValue.find((item) => item && item.name === name);

    const filteredDisplayedPosition = positionData.filter((item) => !isInSelectedPositions(item.name));
    setDisplayedPosition(filteredDisplayedPosition);
  }, [positionsValue]);

  return (
    <>
      <Typography.Title level={2}>{`${type} employee profile`}</Typography.Title>
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
          labelCol={{
            md: { span: 4 },
            lg: { span: 3 },
          }}
          labelAlign="left"
          rules={[
            {
              required: true,
              message: 'Please input your name',
            },
          ]}
        >
          <FormWrapperComponent className="mb-2">
            <Input className="col-span-7" />
          </FormWrapperComponent>
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
                      options={displayedPosition}
                      action={positionAction}
                      showRemoveButton={positionsFields.length > 1}
                    />

                    <ToolLanguageSectionComponent positionName={item.name} formInstance={form} />
                  </div>
                ))}

                <Form.Item
                  wrapperCol={{
                    md: {
                      offset: 4,
                    },
                    lg: {
                      offset: 3,
                    },
                  }}
                >
                  <FormWrapperComponent>
                    <Button
                      ref={addPositionBtnRef}
                      className="text-wrap text-sm md:text-base col-span-3 md:col-span-2"
                      type="primary"
                      onClick={() => positionAction.add()}
                    >
                      Add position
                    </Button>
                  </FormWrapperComponent>
                </Form.Item>
              </>
            )}
          </Form.List>
        </>

        <Form.Item
          wrapperCol={{
            md: {
              offset: 4,
            },
            lg: {
              offset: 3,
            },
          }}
        >
          <FormWrapperComponent className="gap-2 mt-32">
            {type === 'Create' && <span className="col-span-6"></span>}
            {type !== 'Create' && (
              <>
                <Button type="primary" className="col-span-3 md:col-span-2 text-sm md:text-base" danger>
                  Delete
                </Button>
                <span className="col-span-1 md:col-span-2"></span>
                <Button type="text" className="col-span-2 text-sm md:text-base">
                  Cancel
                </Button>
              </>
            )}
            <Button
              type="primary"
              htmlType="submit"
              className="bg-green-600 hover:bg-green-500 col-span-2 text-sm md:text-base"
            >
              Save
            </Button>
          </FormWrapperComponent>
        </Form.Item>
      </Form>
    </>
  );
};

export default EmployeeFormComponent;
