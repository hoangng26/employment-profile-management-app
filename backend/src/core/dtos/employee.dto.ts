import { PositionDto, UpdatePositionDto } from './position.dto';

export class EmployeeDto {
  readonly name: string;
  readonly avatarUrl?: string;
}

export class CreateEmployeeDto extends EmployeeDto {
  readonly positions: PositionDto[];
}

export class UpdateEmployeeDto extends CreateEmployeeDto {
  readonly id: number;
  positions: UpdatePositionDto[];
}
