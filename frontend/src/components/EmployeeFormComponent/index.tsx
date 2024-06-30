import { Employee } from '@/core/models/Employee';
import PositionResource from '@/core/models/PositionResource';
import { FETCH_EMPLOYEES, FETCH_POSITION_RESOURCE, useAppDispatch, useAppState } from '@/core/redux/action';
import { employeeService } from '@/core/services/EmployeeService';
import { positionService } from '@/core/services/PositionService';
import { toolLanguageService } from '@/core/services/ToolLanguageService';
import { EF } from '@/core/utils/EmployeeForm';
import { Button, Form, FormProps, Input, Typography } from 'antd';
import { Dayjs } from 'dayjs';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormDividerComponent from './FormDividerComponent';
import FormWrapperComponent from './FormWrapperComponent';
import PositionSectionComponent from './PositionSectionComponent';
import ToolLanguageSectionComponent from './ToolLanguageSectionComponent';

interface EmployeeFormProps {
  type: 'Create' | 'Edit';
  employee?: Employee;
}

export interface EmployeeFormField {
  id?: number;
  name: string;
  positions: {
    id?: number;
    toolLanguages: {
      id?: number;
      from: Dayjs;
      to: Dayjs;
      description: string;
    }[];
  }[];
}

const EmployeeFormComponent: React.FC<EmployeeFormProps> = ({ type, employee }) => {
  const { positionResource } = useAppState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [form] = Form.useForm<EmployeeFormField>();
  const positionsValue = Form.useWatch('positions', form);
  const addPositionBtnRef = useRef<HTMLButtonElement>(null);
  const [displayedPosition, setDisplayedPosition] = useState<PositionResource[]>([]);
  const [isChange, setIsChange] = useState(false);

  const valueForm = useMemo(() => {
    if (employee) {
      return EF.parseEmployeeToFormData(employee);
    } else {
      return {
        name: '',
        positions: [
          {
            id: undefined,
            toolLanguages: [
              {
                id: undefined,
              },
            ],
          },
        ],
      };
    }
  }, []);

  const formSubmitHandler: FormProps<EmployeeFormField>['onFinish'] = async (values) => {
    if (type === 'Create') {
      const parseEmployee = EF.parseFormDataToCreateEmployee(values);
      await employeeService.createEmployee(parseEmployee);
    } else {
      const parseEmployee = EF.parseFormDataToUpdateEmployee(values, employee!);

      employee!.positions.forEach((item, index) => {
        const check = parseEmployee.positions.find((pE) => pE.id === item.id);
        if (!check) {
          positionService.deletePosition(item.id!);
          return;
        }

        item.toolLanguages.forEach((tl) => {
          const tlCheck = parseEmployee.positions[index].toolLanguages.find((pTL) => pTL.id === tl.id);
          if (!tlCheck) {
            toolLanguageService.deleteToolLanguage(tl.id!);
            return;
          }
        });
      });
      await employeeService.updateEmployee(parseEmployee);
    }
    dispatch(FETCH_EMPLOYEES());
    navigate('/');
  };

  const deleteBtnHandler = async () => {
    await employeeService.deleteEmployee(employee!.id!);
    dispatch(FETCH_EMPLOYEES());
    navigate('/');
  };

  useEffect(() => {
    if (!positionResource.length) {
      dispatch(FETCH_POSITION_RESOURCE());
    }
    setDisplayedPosition(positionResource);
  }, [positionResource]);

  useEffect(() => {
    if (!positionsValue || !positionsValue[0]) {
      return;
    }
    const isInSelectedPositions = (id: number) => positionsValue.find((item) => item && item.id === id);

    const filteredDisplayedPosition = positionResource.filter((item) => !isInSelectedPositions(item.id));
    setDisplayedPosition(filteredDisplayedPosition);
  }, [positionsValue]);

  return (
    <>
      <Typography.Title level={2}>{`${type} employee profile`}</Typography.Title>
      <Form
        form={form}
        name="employee-form"
        initialValues={valueForm}
        onFieldsChange={() => setIsChange(true)}
        onFinish={formSubmitHandler}
      >
        <FormWrapperComponent className="mb-2">
          <Form.Item<EmployeeFormField>
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
            className="col-span-7"
          >
            <Input />
          </Form.Item>
        </FormWrapperComponent>

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

                <FormWrapperComponent>
                  <Form.Item
                    wrapperCol={{
                      md: {
                        offset: 5,
                      },
                      lg: {
                        offset: 4,
                      },
                    }}
                    className="col-span-7"
                  >
                    <FormWrapperComponent>
                      <Button
                        ref={addPositionBtnRef}
                        className="text-wrap text-sm md:text-base col-span-3 md:col-span-2"
                        type="primary"
                        onClick={() => {
                          positionAction.add();
                        }}
                      >
                        Add position
                      </Button>
                    </FormWrapperComponent>
                  </Form.Item>
                </FormWrapperComponent>
              </>
            )}
          </Form.List>
        </>

        <FormWrapperComponent>
          <Form.Item
            wrapperCol={{
              md: {
                offset: 5,
              },
              lg: {
                offset: 4,
              },
            }}
            className="col-span-7"
          >
            <FormWrapperComponent className="gap-2 mt-32">
              {type === 'Create' && <span className="col-span-4"></span>}
              {type !== 'Create' && (
                <>
                  <Button
                    type="primary"
                    className="col-span-3 md:col-span-2 text-sm md:text-base"
                    danger
                    onClick={deleteBtnHandler}
                  >
                    Delete
                  </Button>
                  <span className="col-span-1 md:col-span-2"></span>
                </>
              )}
              <Button type="text" className="col-span-2 text-sm md:text-base" onClick={() => navigate('/')}>
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                disabled={type === 'Edit' && !isChange}
                className="bg-green-600 hover:bg-green-500 col-span-2 text-sm md:text-base disabled:bg-green-100 disabled:text-green-600"
              >
                Save
              </Button>
            </FormWrapperComponent>
          </Form.Item>
        </FormWrapperComponent>
      </Form>
    </>
  );
};

export default EmployeeFormComponent;
