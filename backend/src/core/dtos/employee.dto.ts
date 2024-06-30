export class EmployeeDto {
  readonly name: string;
  readonly avatarUrl: string;
}

export class UpdateEmployeeDto extends EmployeeDto {
  readonly id: number;
}
