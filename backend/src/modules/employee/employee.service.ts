import { Injectable } from '@nestjs/common';
import { Employee } from 'src/core/models/employee.entity';

@Injectable()
export class EmployeeService {
  create(createEmployeeDto: Employee) {
    return 'This action adds a new employee';
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: Employee) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
