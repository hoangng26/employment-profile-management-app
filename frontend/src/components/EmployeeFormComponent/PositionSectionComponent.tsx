import Position from '@/core/models/Position';
import { Form, FormListFieldData, FormListOperation, Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';
import FormDeleteButtonComponent from './FormDeleteButtonComponent';
import FormWrapperComponent from './FormWrapperComponent';

interface PositionSectionProps {
  data: FormListFieldData;
  action: FormListOperation;
  showRemoveButton?: boolean;
  options: Position[];
}

const PositionSectionComponent: React.FC<PositionSectionProps> = ({ data, action, showRemoveButton, options }) => {
  return (
    <Form.Item
      label="Position"
      required
      labelCol={{
        md: { span: 4 },
        lg: { span: 3 },
      }}
      labelAlign="left"
    >
      <FormWrapperComponent className="gap-2">
        <Form.Item
          name={[data.name, 'name']}
          rules={[{ required: true, message: 'Please add position' }]}
          className="mb-0 col-span-7"
        >
          <Select
            placeholder="Select a position"
            allowClear
            options={options.map(
              (item): DefaultOptionType => ({
                value: item.name,
                label: item.name,
              }),
            )}
          />
        </Form.Item>
        {showRemoveButton && (
          <FormDeleteButtonComponent onClick={() => action.remove(data.name)}>
            Delete Position
          </FormDeleteButtonComponent>
        )}
      </FormWrapperComponent>
    </Form.Item>
  );
};

export default PositionSectionComponent;
