import { Divider, Form } from 'antd';
import React from 'react';

export type FormDividerProps = {
  style?: React.CSSProperties;
};

const FormDividerComponent: React.FC<FormDividerProps> = ({ style }) => {
  return (
    <Form.Item wrapperCol={{ offset: 2 }}>
      <div className="grid grid-cols-8">
        <Divider className="border-t-neutral-300 border-t-2 col-span-7 m-0" style={style} />
      </div>
    </Form.Item>
  );
};

export default FormDividerComponent;
