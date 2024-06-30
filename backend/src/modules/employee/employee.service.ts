import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { EMPLOYEE_REPOSITORY, excludeCRUDDateAttribute } from 'src/core/constants';
import { employeeIncludeAttributes } from 'src/core/constants/queryAttributes';
import { EmployeeDto, UpdateEmployeeDto } from 'src/core/dtos/employee.dto';
import { Employee } from 'src/core/models/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: typeof Employee,
  ) {}

  async create(userDto: EmployeeDto): Promise<Employee> {
    return await this.employeeRepository.create<Employee>(userDto, {
      returning: true,
    });
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.findAll<Employee>({
      attributes: {
        exclude: excludeCRUDDateAttribute,
      },
      include: employeeIncludeAttributes,
    });
  }

  async findOne(id: number): Promise<Employee> {
    return await this.employeeRepository.findOne<Employee>({
      where: {
        id,
      },
      attributes: {
        exclude: excludeCRUDDateAttribute,
      },
      include: employeeIncludeAttributes,
    });
  }

  async findMany(query: string): Promise<Employee[]> {
    return await this.employeeRepository.findAll({
      where: {
        name: {
          [Op.substring]: query,
        },
      },
      attributes: {
        exclude: excludeCRUDDateAttribute,
      },
      include: employeeIncludeAttributes,
    });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    updateEmployeeDto;
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
