import { Divider, Form } from 'antd';
import React from 'react';
import FormWrapperComponent from './FormWrapperComponent';

export type FormDividerProps = {
  style?: React.CSSProperties;
};

const FormDividerComponent: React.FC<FormDividerProps> = ({ style }) => {
  return (
    <FormWrapperComponent>
      <Form.Item
        wrapperCol={{
          md: {
            offset: 4,
          },
          lg: {
            offset: 4,
          },
        }}
        className="col-span-7"
      >
        <Divider className="border-t-neutral-300 border-t-2 col-span-7 m-0" style={style} />
      </Form.Item>
    </FormWrapperComponent>
  );
};

export default FormDividerComponent;
