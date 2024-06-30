import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateEmployeeDto } from 'src/core/dtos/employee.dto';
import { Employee } from 'src/core/models/employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: Employee) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  async findAll() {
    return await this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
