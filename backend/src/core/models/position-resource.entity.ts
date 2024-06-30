import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  paranoid: true,
})
export class PositionResource extends Model<PositionResource> {
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;
}
