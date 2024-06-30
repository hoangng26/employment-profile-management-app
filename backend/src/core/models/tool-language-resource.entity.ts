import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { PositionResource } from './position-resource.entity';

@Table({
  paranoid: true,
})
export class ToolLanguageResource extends Model<ToolLanguageResource> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => PositionResource)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  positionResourceId: number;

  @BelongsTo(() => PositionResource)
  positionResources: PositionResource;
}
