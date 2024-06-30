import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { EMPLOYEE_REPOSITORY, excludeCRUDDateAttribute } from 'src/core/constants';
import { employeeIncludeAttributes } from 'src/core/constants/queryAttributes';
import { CreateEmployeeDto, UpdateEmployeeDto } from 'src/core/dtos/employee.dto';
import { Employee } from 'src/core/models/employee.entity';
import { PositionService } from '../position/position.service';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: typeof Employee,
    private readonly positionService: PositionService,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const { positions, ...employeeDto } = createEmployeeDto;

    const employee = await this.employeeRepository.create<Employee>(employeeDto, {
      returning: true,
    });

    await Promise.all(
      positions.map((item) =>
        this.positionService.create({
          ...item,
          employeeId: employee.id,
        }),
      ),
    );

    return employee;
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

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const { positions, ...employeeDto } = updateEmployeeDto;

    await Promise.all(positions.map((item) => this.positionService.update(item.id, item)));

    return await this.employeeRepository.update<Employee>(employeeDto, {
      where: {
        id,
      },
      returning: true,
    })[0];
  }

  async remove(id: number): Promise<number> {
    await this.positionService.removeWithEmployeeId(id);

    return this.employeeRepository.destroy({
      where: {
        id,
      },
    });
  }
}
