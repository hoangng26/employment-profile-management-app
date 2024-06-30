import { Provider } from '@nestjs/common';
import { EMPLOYEE_REPOSITORY } from 'src/core/constants';
import { Employee } from 'src/core/models/employee.entity';

export const employeeProviders: Provider[] = [
  {
    provide: EMPLOYEE_REPOSITORY,
    useValue: Employee,
  },
];
