import { positionData } from '@/core/constants/Position';
import ToolLanguage from '@/core/models/ToolLanguage';
import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, FormInstance, Input, Select, Space, theme, Upload } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { EmployeeField } from '.';
import FormDividerComponent from './FormDividerComponent';

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

                    <Form.Item label="Tool/Language" required labelCol={{ span: 2 }} labelAlign="left">
                      <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-7 grid grid-cols-4 gap-2">
                          <Form.Item
                            {...restFields}
                            name={[name, 'name']}
                            rules={[{ required: true, message: 'Please add tool/language' }]}
                            className="mb-0 col-span-3"
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

                          <Space>
                            <Form.Item
                              name={[name, 'from']}
                              rules={[{ required: true, message: 'Please input start time' }]}
                              className="mb-0"
                            >
                              <DatePicker />
                            </Form.Item>

                            <Form.Item
                              name={[name, 'to']}
                              rules={[{ required: true, message: 'Please input end time' }]}
                              className="mb-0"
                            >
                              <DatePicker />
                            </Form.Item>
                          </Space>
                        </div>

                        {toolLangFields.length > 1 && (
                          <Button
                            onClick={() => toolLangAction.remove(name)}
                            className="text-wrap text-sm bg-neutral-600 hover:border-neutral-600 hover:bg-neutral-500 text-white"
                          >
                            Delete Tool/Language
                          </Button>
                        )}
                      </div>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 2 }} name={[name, 'description']}>
                      <div className="grid grid-cols-8">
                        <Input.TextArea
                          className="col-span-7"
                          placeholder="Please input this position description"
                          autoSize={{ minRows: 6 }}
                        />
                      </div>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 2 }} valuePropName="fileList" getValueFromEvent={normFile}>
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
                    offset: 2,
                    span: 16,
                  }}
                >
                  <Button
                    ref={addBtnRef}
                    style={{
                      color: theme.getDesignToken().colorPrimary,
                      borderColor: theme.getDesignToken().colorPrimary,
                    }}
                    className="hover:text-blue-400 hover:border-blue-400"
                    onClick={() => toolLangAction.add()}
                  >
                    Add Tool/Language
                  </Button>
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
