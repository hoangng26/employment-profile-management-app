import { Module } from '@nestjs/common';
import { PositionModule } from '../position/position.module';
import { EmployeeController } from './employee.controller';
import { employeeProviders } from './employee.providers';
import { EmployeeService } from './employee.service';

@Module({
  imports: [PositionModule],
  controllers: [EmployeeController],
  providers: [EmployeeService, ...employeeProviders],
})
export class EmployeeModule {}
