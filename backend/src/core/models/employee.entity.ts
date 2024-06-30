import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Position } from './position.entity';

@Table({
  paranoid: true,
})
export class Employee extends Model<Employee> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  avatarUrl: string;

  @HasMany(() => Position, 'employeeId')
  positions?: Position[];
}
