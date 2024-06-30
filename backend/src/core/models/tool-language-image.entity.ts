import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { PositionResource } from './position-resource.entity';
import { ToolLanguage } from './tool-language.entity';

@Table({
  paranoid: true,
})
export class ToolLanguageImage extends Model<ToolLanguageImage> {
  @ForeignKey(() => ToolLanguage)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  toolLanguageId: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  cdnUrl: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  displayOrder: number;

  @BelongsTo(() => ToolLanguage)
  toolLanguage: PositionResource;
}
