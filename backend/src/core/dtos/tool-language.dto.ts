export class ToolLanguageDto {
  readonly positionId: number;
  readonly toolLanguageResourceId: number;
  readonly displayOrder: number;
  readonly from: string;
  readonly to: string;
  readonly description: string;
}

export class UpdateToolLanguageDto extends ToolLanguageDto {
  readonly id: number;
}
