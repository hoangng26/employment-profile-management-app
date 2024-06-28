import Position from '@/core/models/Position';
import { Button, Form, Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';

interface ToolLanguageProps {
  fieldId: number;
  selectedPosition?: Position;
}

const ToolLanguageSectionComponent: React.FC<ToolLanguageProps> = ({ fieldId, selectedPosition }) => {
  return (
    <>
      {selectedPosition && (
        <Form.Item name="toolLanguages">
          <Form.List name={[fieldId, 'toolLanguages']}>
            {(toolLangFields, toolLangAction) => (
              <>
                {toolLangFields.map(({ key, name, ...restFields }) => (
                  <div key={key}>
                    <Form.Item label="Tool/Language" required labelCol={{ span: 2 }} labelAlign="left">
                      <div className="grid grid-cols-8 gap-2">
                        <Form.Item
                          {...restFields}
                          name={[name, 'name']}
                          rules={[{ required: true, message: 'Missing tool language' }]}
                          className="mb-0 col-span-7"
                        >
                          <Select
                            showSearch
                            placeholder="Select a position"
                            allowClear
                            filterOption={(input, option) =>
                              (String(option?.label) ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={selectedPosition.toolLanguages
                              .map(
                                (item): DefaultOptionType => ({
                                  value: item.name,
                                  label: item.name,
                                }),
                              )
                              .concat({
                                value: '',
                                label: 'Select a position',
                                disabled: true,
                                className: 'hidden',
                              })}
                          />
                        </Form.Item>
                        {toolLangFields.length > 1 && (
                          <Button onClick={() => toolLangAction.remove(name)} className="text-wrap text-sm">
                            Delete Tool/Language
                          </Button>
                        )}
                      </div>
                    </Form.Item>
                  </div>
                ))}

                <Form.Item
                  wrapperCol={{
                    offset: 2,
                    span: 16,
                  }}
                >
                  <Button type="primary" onClick={() => toolLangAction.add()}>
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
