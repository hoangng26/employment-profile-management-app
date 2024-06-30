import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Position } from './position.entity';
import { ToolLanguageResource } from './tool-language-resource.entity';

@Table({
  paranoid: true,
})
export class ToolLanguage extends Model<ToolLanguage> {
  @ForeignKey(() => ToolLanguageResource)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  toolLanguageResourceId: number;

  @ForeignKey(() => Position)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  positionId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  displayOrder: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  from: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  to: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @BelongsTo(() => Position)
  positionResource: Position;
}
