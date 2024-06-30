import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Employee } from './employee.entity';
import { PositionResource } from './position-resource.entity';
import { ToolLanguageResource } from './tool-language-resource.entity';

@Table({
  paranoid: true,
})
export class Position extends Model<Position> {
  @ForeignKey(() => Employee)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  employeeId: number;

  @ForeignKey(() => PositionResource)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  positionResourceId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  displayOrder: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @HasMany(() => ToolLanguageResource, 'positionId')
  toolLanguages: ToolLanguageResource[];
}
