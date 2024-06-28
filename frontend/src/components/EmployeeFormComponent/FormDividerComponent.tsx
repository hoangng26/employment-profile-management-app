import { Divider, Form } from 'antd';
import React from 'react';
import FormWrapperComponent from './FormWrapperComponent';

export type FormDividerProps = {
  style?: React.CSSProperties;
};

const FormDividerComponent: React.FC<FormDividerProps> = ({ style }) => {
  return (
    <Form.Item
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
        <Divider className="border-t-neutral-300 border-t-2 col-span-7 m-0" style={style} />
      </FormWrapperComponent>
    </Form.Item>
  );
};

export default FormDividerComponent;
