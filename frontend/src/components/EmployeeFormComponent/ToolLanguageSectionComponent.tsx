import ToolLanguageResource from '@/core/models/ToolLanguageResource';
import { useAppState } from '@/core/redux/action';
import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, FormInstance, Input, Select, Space, theme, Upload } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { EmployeeFormField } from '.';
import FormDeleteButtonComponent from './FormDeleteButtonComponent';
import FormDividerComponent from './FormDividerComponent';
import FormWrapperComponent from './FormWrapperComponent';

interface ToolLanguageProps {
  positionName: number;
  formInstance: FormInstance<EmployeeFormField>;
}

const ToolLanguageSectionComponent: React.FC<ToolLanguageProps> = ({ positionName, formInstance }) => {
  const { positionResource } = useAppState();
  const positions = Form.useWatch('positions', formInstance);
  const [options, setOptions] = useState<ToolLanguageResource[]>([]);
  const addBtnRef = useRef<HTMLButtonElement>(null);

  const isDisplay = useMemo(
    () => Boolean(positions && positions[positionName] && positions[positionName].id),
    [positionName, positions],
  );

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  useEffect(() => {
    if (isDisplay && positionResource.length) {
      const findOption = positionResource.find((item) => item.id === positions[positionName].id);
      setOptions(findOption!.toolLanguageResources);
    }
  }, [isDisplay, positionName, positions, positionResource]);

  return (
    <>
      {isDisplay && (
        <Form.Item name="toolLanguages">
          <Form.List name={[positionName, 'toolLanguages']}>
            {(toolLangFields, toolLangAction) => (
              <>
                {toolLangFields.map(({ key, name, ...restFields }) => (
                  <div key={key}>
                    {Boolean(name) && <FormDividerComponent style={{ borderTopStyle: 'dotted', marginBottom: 0 }} />}

                    <FormWrapperComponent className="gap-2">
                      <Form.Item
                        label="Tool/Language"
                        required
                        labelCol={{
                          md: { span: 5 },
                          lg: { span: 4 },
                        }}
                        labelAlign="left"
                        className="col-span-7"
                      >
                        <div className="col-span-7 grid grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-2">
                          <Form.Item
                            {...restFields}
                            name={[name, 'id']}
                            rules={[{ required: true, message: 'Please add tool/language' }]}
                            className="mb-0 col-span-6 md:col-span-2 lg:col-span-3"
                          >
                            <Select
                              allowClear
                              placeholder="Select a tool/language"
                              options={options.map(
                                (item): DefaultOptionType => ({
                                  value: item.id,
                                  label: item.name,
                                }),
                              )}
                            />
                          </Form.Item>

                          <Space align="start" className="col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-1">
                            <Form.Item
                              name={[name, 'from']}
                              dependencies={[['positions', positionName, 'toolLanguages', name, 'to']]}
                              rules={[
                                { required: true, message: 'Please input start time' },
                                ({ getFieldValue }) => ({
                                  validator(_rule, value) {
                                    const toDateValue = getFieldValue([
                                      'positions',
                                      positionName,
                                      'toolLanguages',
                                      name,
                                      'to',
                                    ]);
                                    if (!value || !toDateValue || value.isBefore(toDateValue)) {
                                      return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('Start date must be before end date'));
                                  },
                                }),
                              ]}
                              className="mb-0"
                            >
                              <DatePicker picker="month" placeholder="From" needConfirm />
                            </Form.Item>

                            <Form.Item
                              name={[name, 'to']}
                              dependencies={[['positions', positionName, 'toolLanguages', name, 'from']]}
                              rules={[
                                { required: true, message: 'Please input end time' },
                                ({ getFieldValue }) => ({
                                  validator(_rule, value) {
                                    const fromDateValue = getFieldValue([
                                      'positions',
                                      positionName,
                                      'toolLanguages',
                                      name,
                                      'from',
                                    ]);
                                    if (!value || !fromDateValue || fromDateValue.isBefore(value)) {
                                      return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('End date must be behind start date'));
                                  },
                                }),
                              ]}
                              className="mb-0"
                            >
                              <DatePicker picker="month" placeholder="To" needConfirm />
                            </Form.Item>
                          </Space>
                        </div>
                      </Form.Item>
                      {toolLangFields.length > 1 && (
                        <FormDeleteButtonComponent onClick={() => toolLangAction.remove(name)}>
                          Delete Tool/Language
                        </FormDeleteButtonComponent>
                      )}
                    </FormWrapperComponent>

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
                        name={[name, 'description']}
                        className="col-span-7"
                      >
                        <Input.TextArea
                          className="col-span-7"
                          placeholder="Please input this position description"
                          autoSize={{ minRows: 6 }}
                        />
                      </Form.Item>
                    </FormWrapperComponent>

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
                        // name={[name, 'images']}
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                      >
                        <Upload listType="picture-card">
                          <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                          </button>
                        </Upload>
                      </Form.Item>
                    </FormWrapperComponent>
                  </div>
                ))}

                <FormWrapperComponent>
                  <Form.Item
                    className="mb-0 col-span-7"
                    wrapperCol={{
                      md: {
                        offset: 5,
                      },
                      lg: {
                        offset: 4,
                      },
                    }}
                  >
                    <Button
                      ref={addBtnRef}
                      style={{
                        color: theme.getDesignToken().colorPrimary,
                        borderColor: theme.getDesignToken().colorPrimary,
                      }}
                      className="hover:text-blue-400 hover:border-blue-400 text-sm md:text-base col-span-3 md:col-span-2"
                      onClick={() => toolLangAction.add()}
                    >
                      Add Tool/Language
                    </Button>
                  </Form.Item>
                </FormWrapperComponent>
              </>
            )}
          </Form.List>
        </Form.Item>
      )}
    </>
  );
};

export default ToolLanguageSectionComponent;
