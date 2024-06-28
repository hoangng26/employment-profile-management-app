import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

const FormWrapperComponent: React.FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return <div className={`grid grid-cols-8${className ? ` ${className}` : ''}`}>{children}</div>;
};

export default FormWrapperComponent;
