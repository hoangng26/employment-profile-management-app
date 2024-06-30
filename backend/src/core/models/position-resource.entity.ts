import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ToolLanguageResource } from './tool-language-resource.entity';

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

  @HasMany(() => ToolLanguageResource, 'positionResourceId')
  toolLanguageResources: ToolLanguageResource[];
}
