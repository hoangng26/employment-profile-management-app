import Position from '@/core/models/Position';
import { Button, Form, FormListFieldData, FormListOperation, Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';

interface PositionSectionProps {
  data: FormListFieldData;
  action: FormListOperation;
  showRemoveButton?: boolean;
  options: Position[];
}

const PositionSectionComponent: React.FC<PositionSectionProps> = ({ data, action, showRemoveButton, options }) => {
  return (
    <Form.Item label="Position" required labelCol={{ span: 2 }} labelAlign="left">
      <div className="grid grid-cols-8 gap-2">
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
          <Button
            className="bg-neutral-600 hover:bg-neutral-500 hover:border-neutral-600 text-white"
            onClick={() => action.remove(data.name)}
          >
            Remove position
          </Button>
        )}
      </div>
    </Form.Item>
  );
};

export default PositionSectionComponent;
