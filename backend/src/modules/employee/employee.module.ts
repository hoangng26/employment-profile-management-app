import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { employeeProviders } from './employee.providers';
import { EmployeeService } from './employee.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, ...employeeProviders],
})
export class EmployeeModule {}
