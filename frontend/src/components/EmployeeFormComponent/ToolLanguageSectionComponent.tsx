import { positionData } from '@/core/constants/Position';
import ToolLanguage from '@/core/models/ToolLanguage';
import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, FormInstance, Input, Select, Space, theme, Upload } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { EmployeeField } from '.';
import FormDeleteButtonComponent from './FormDeleteButtonComponent';
import FormDividerComponent from './FormDividerComponent';
import FormWrapperComponent from './FormWrapperComponent';

interface ToolLanguageProps {
  positionId: number;
  formInstance: FormInstance<EmployeeField>;
}

const ToolLanguageSectionComponent: React.FC<ToolLanguageProps> = ({ positionId, formInstance }) => {
  const positions = Form.useWatch('positions', formInstance);
  const isDisplay = useMemo(
    () => Boolean(positions && positions[positionId] && positions[positionId].name),
    [positionId, positions],
  );
  const [options, setOptions] = useState<ToolLanguage[]>([]);
  const addBtnRef = useRef<HTMLButtonElement>(null);

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  useEffect(() => {
    if (isDisplay) {
      const findOption = positionData.find((item) => item.name === positions[positionId].name);
      setOptions(findOption!.toolLanguages);
    }
  }, [isDisplay, positionId, positions]);

  useEffect(() => {
    addBtnRef.current?.click();
  }, [isDisplay]);

  return (
    <>
      {isDisplay && (
        <Form.Item name="toolLanguages">
          <Form.List name={[positionId, 'toolLanguages']}>
            {(toolLangFields, toolLangAction) => (
              <>
                {toolLangFields.map(({ key, name, ...restFields }) => (
                  <div key={key}>
                    {Boolean(name) && <FormDividerComponent style={{ borderTopStyle: 'dotted', marginBottom: 0 }} />}

                    <Form.Item
                      label="Tool/Language"
                      required
                      labelCol={{
                        md: { span: 4 },
                        lg: { span: 3 },
                      }}
                      labelAlign="left"
                    >
                      <FormWrapperComponent className="gap-2">
                        <div className="col-span-7 grid grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-2">
                          <Form.Item
                            {...restFields}
                            name={[name, 'name']}
                            rules={[{ required: true, message: 'Please add tool/language' }]}
                            className="mb-0 col-span-6 md:col-span-2 lg:col-span-3"
                          >
                            <Select
                              allowClear
                              placeholder="Select a tool/language"
                              options={options.map(
                                (item): DefaultOptionType => ({
                                  value: item.name,
                                  label: item.name,
                                }),
                              )}
                            />
                          </Form.Item>

                          <Space align="start" className="col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-1">
                            <Form.Item
                              name={[name, 'from']}
                              rules={[{ required: true, message: 'Please input start time' }]}
                              className="mb-0"
                            >
                              <DatePicker picker="month" placeholder="From" />
                            </Form.Item>

                            <Form.Item
                              name={[name, 'to']}
                              rules={[{ required: true, message: 'Please input end time' }]}
                              className="mb-0"
                            >
                              <DatePicker picker="month" placeholder="To" />
                            </Form.Item>
                          </Space>
                        </div>

                        {toolLangFields.length > 1 && (
                          <FormDeleteButtonComponent onClick={() => toolLangAction.remove(name)}>
                            Delete Tool/Language
                          </FormDeleteButtonComponent>
                        )}
                      </FormWrapperComponent>
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        md: {
                          offset: 4,
                        },
                        lg: {
                          offset: 3,
                        },
                      }}
                      name={[name, 'description']}
                    >
                      <FormWrapperComponent>
                        <Input.TextArea
                          className="col-span-7"
                          placeholder="Please input this position description"
                          autoSize={{ minRows: 6 }}
                        />
                      </FormWrapperComponent>
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        md: {
                          offset: 4,
                        },
                        lg: {
                          offset: 3,
                        },
                      }}
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
                  </div>
                ))}

                <Form.Item
                  className="mb-0"
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
                  </FormWrapperComponent>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>
      )}
    </>
  );
};

export default ToolLanguageSectionComponent;
