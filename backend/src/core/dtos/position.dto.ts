import { ToolLanguageDto, UpdateToolLanguageDto } from './tool-language.dto';

export class PositionDto {
  readonly positionResourceId: number;
  readonly displayOrder: number;
  readonly toolLanguages: ToolLanguageDto[];
  readonly employeeId: number;
}

export class UpdatePositionDto extends PositionDto {
  readonly id: number;
  toolLanguages: UpdateToolLanguageDto[];
}
