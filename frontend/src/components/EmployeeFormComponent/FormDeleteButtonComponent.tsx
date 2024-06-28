import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { PropsWithChildren } from 'react';

interface FormDeleteButtonProps {
  onClick?: () => void;
}

const FormDeleteButtonComponent: React.FC<PropsWithChildren<FormDeleteButtonProps>> = ({ children, onClick }) => {
  return (
    <Button
      className="bg-neutral-600 hover:bg-neutral-500 hover:border-neutral-600 text-white text-sm text-wrap"
      onClick={onClick}
    >
      <span className="hidden xl:block">{children}</span>
      <DeleteOutlined className="xl:hidden" />
    </Button>
  );
};

export default FormDeleteButtonComponent;
