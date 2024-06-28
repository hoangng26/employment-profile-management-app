import { positionData } from '@/core/constants/Position';
import Position from '@/core/models/Position';
import { Button, Form, Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React, { useState } from 'react';
import ToolLanguageSectionComponent from './ToolLanguageSectionComponent';

interface PositionSectionProps {}

const PositionSectionComponent: React.FC<PositionSectionProps> = () => {
  const [selectedPosition, setSelectedPosition] = useState<Position>();

  const positionChangeHandler = (value: string) => {
    const findPosition = positionData.find((item) => item.name === value);
    setSelectedPosition(findPosition);
  };

  return (
    <Form.List name="positions">
      {(positionsFields, positionAction) => (
        <>
          {positionsFields.map(({ key, name, ...restFields }) => (
            <div key={key}>
              <Form.Item label="Position" required labelCol={{ span: 2 }} labelAlign="left">
                <div className="grid grid-cols-8 gap-2">
                  <Form.Item
                    {...restFields}
                    name={[name, 'name']}
                    rules={[{ required: true, message: 'Missing position' }]}
                    className="mb-0 col-span-7"
                  >
                    <Select
                      placeholder="Select a position"
                      allowClear
                      showSearch
                      filterOption={(input, option) =>
                        (String(option?.label) ?? '').toLowerCase().includes(input.toLowerCase())
                      }
                      onChange={positionChangeHandler}
                      options={positionData
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
                  {positionsFields.length > 1 && (
                    <Button onClick={() => positionAction.remove(name)}>Remove position</Button>
                  )}
                </div>
              </Form.Item>

              <ToolLanguageSectionComponent fieldId={name} selectedPosition={selectedPosition} />
            </div>
          ))}

          <Form.Item
            wrapperCol={{
              offset: 2,
              span: 16,
            }}
          >
            <Button type="primary" onClick={() => positionAction.add()}>
              Add position
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default PositionSectionComponent;
