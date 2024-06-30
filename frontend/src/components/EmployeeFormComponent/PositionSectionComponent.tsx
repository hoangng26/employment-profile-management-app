import PositionResource from '@/core/models/PositionResource';
import { Form, FormListFieldData, FormListOperation, Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';
import FormDeleteButtonComponent from './FormDeleteButtonComponent';
import FormWrapperComponent from './FormWrapperComponent';

interface PositionSectionProps {
  data: FormListFieldData;
  action: FormListOperation;
  showRemoveButton?: boolean;
  options: PositionResource[];
}

const PositionSectionComponent: React.FC<PositionSectionProps> = ({ data, action, showRemoveButton, options }) => {
  return (
    <FormWrapperComponent className="gap-2">
      <Form.Item
        label="Position"
        required
        labelCol={{
          md: { span: 5 },
          lg: { span: 4 },
        }}
        labelAlign="left"
        className="mb-0 col-span-7"
      >
        <Form.Item name={[data.name, 'id']} rules={[{ required: true, message: 'Please add position' }]}>
          <Select
            placeholder="Select a position"
            allowClear
            options={options.map(
              (item): DefaultOptionType => ({
                value: item.id,
                label: item.name,
              }),
            )}
          />
        </Form.Item>
      </Form.Item>
      {showRemoveButton && (
        <FormDeleteButtonComponent onClick={() => action.remove(data.name)}>Delete Position</FormDeleteButtonComponent>
      )}
    </FormWrapperComponent>
  );
};

export default PositionSectionComponent;
