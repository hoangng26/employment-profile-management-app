import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
}
