import EmployeeFormComponent from '@/components/EmployeeFormComponent';
import { employeeService } from '@/core/services/EmployeeService';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EmployeeEditPageComponent: React.FC = () => {
  const data: any = useLoaderData();

  return (
    <>
      <EmployeeFormComponent type="Edit" employee={data} />
    </>
  );
};

export default EmployeeEditPageComponent;

export async function EmployeeEditPageLoader({ params }: any) {
  return (await employeeService.getEmployee(params.id)).data;
}
